// Flow:
//   login -> greeting -> menu -> first pass (all cards) -> score ->
//   second pass (missed cards, shuffled) -> both scores ->
//   review (every card, click to reveal the answer)
//
// Unanswered questions are graded as wrong.
// Progress is saved to localStorage so a refresh picks up where it left off.

const PER_PAGE = 4;
const SHUFFLE_CHOICES_ON_RETRY = true;
const MENU_SLOTS = 25; // 5x5 board
const STORAGE_KEY = "flashcards-progress";
const SECONDS_PER_QUESTION = 90; // sets the recommended time for a set
const WARN_AT = 0.75; // amber once this fraction of the recommendation is used

// Not real security: this file is public, so anyone who views the page
// source can read it. It only keeps casual visitors out.
const PASSWORD = "ilovepaula";

const LETTERS = ["A", "B", "C", "D", "E"];
const answerIndex = (card) => LETTERS.indexOf(card.answer);

const appEl = document.getElementById("app");
const phaseEl = document.getElementById("phase-label");
const titleEl = document.getElementById("deck-title");
const topbarEl = document.querySelector(".topbar");
const progressEl = document.getElementById("progress-fill");
const homeBtn = document.getElementById("home-btn");
const timerEl = document.getElementById("timer");

let state;
let tickHandle = null;

// ---------- timer ----------
//
// Counts up while a pass is in progress and pauses everywhere else, so time
// spent on the results screen or in review is not charged to the attempt.
// Time while the tab is closed is not counted either: `save` banks the elapsed
// total, and a restored attempt resumes from that banked figure.

function elapsedMs() {
  const t = state && state.timer;
  if (!t) return 0;
  return t.banked + (t.running ? Date.now() - t.since : 0);
}

function setTimerRunning(on) {
  const t = state && state.timer;
  if (!t) return;
  if (on && !t.running) {
    t.since = Date.now();
    t.running = true;
  } else if (!on && t.running) {
    t.banked += Date.now() - t.since;
    t.running = false;
  }
}

function formatClock(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}

function recommendedMs(exam) {
  return exam.cards.length * SECONDS_PER_QUESTION * 1000;
}

function paintTimer() {
  const t = state && state.timer;
  const show = t && (state.phase === "quiz" || state.phase === "results");
  timerEl.hidden = !show;
  if (!show) return;

  const used = elapsedMs();
  timerEl.innerHTML = `<span></span><span class="timer-limit"></span>`;
  timerEl.firstElementChild.textContent = formatClock(used);
  timerEl.lastElementChild.textContent = ` / ${formatClock(t.limit)}`;

  const ratio = t.limit > 0 ? used / t.limit : 0;
  timerEl.classList.toggle("warn", ratio >= WARN_AT && ratio < 1);
  timerEl.classList.toggle("over", ratio >= 1);
}

let ticksSinceSave = 0;

function syncTicking() {
  const shouldTick = state && state.phase === "quiz";
  if (shouldTick && !tickHandle) {
    tickHandle = setInterval(() => {
      paintTimer();
      // Bank the elapsed total periodically so closing the tab mid-page
      // loses at most a few seconds of credit.
      if (++ticksSinceSave >= 5) {
        ticksSinceSave = 0;
        save();
      }
    }, 1000);
  } else if (!shouldTick && tickHandle) {
    clearInterval(tickHandle);
    tickHandle = null;
  }
}

function shuffled(arr) {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

// An "item" is one card as presented in a pass: which card, what order its
// choices appear in, and what the user picked. `order` maps the displayed
// position to the index of the choice in the card's original array.
function makeItem(card, deckIndex, shuffleChoices) {
  const positions = card.choices.map((_, i) => i);
  return {
    card,
    deckIndex,
    order: shuffleChoices ? shuffled(positions) : positions,
    selected: null, // displayed position the user picked
  };
}

function isCorrect(item) {
  return item.selected !== null && item.order[item.selected] === answerIndex(item.card);
}

function pageCount(n) {
  return Math.ceil(n / PER_PAGE);
}

function setProgress(fraction) {
  progressEl.style.width = `${Math.round(fraction * 100)}%`;
}

// ---------- saved progress ----------

// Changing any question invalidates saved progress, so answers can never be
// restored against a deck they no longer line up with.
const DECK_VERSION = (() => {
  const src = EXAMS.map(
    (e) => e.name + e.cards.length + e.cards.map((c) => c.question).join("")
  ).join("");
  let h = 0;
  for (let i = 0; i < src.length; i++) h = (h * 31 + src.charCodeAt(i)) | 0;
  return h;
})();

const packItem = (it) => ({ d: it.deckIndex, o: it.order, s: it.selected });

const unpackItem = (exam, p) => ({
  card: exam.cards[p.d],
  deckIndex: p.d,
  order: p.o,
  selected: p.s,
});

function save() {
  if (!state) return;
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        v: DECK_VERSION,
        phase: state.phase,
        greeted: !!state.greeted,
        examIndex: state.exam ? EXAMS.indexOf(state.exam) : null,
        pass: state.pass ?? null,
        page: state.page ?? null,
        items: state.items ? state.items.map(packItem) : null,
        first: state.first
          ? {
              correct: state.first.correct,
              total: state.first.total,
              missed: state.first.missed.map(packItem),
            }
          : null,
        second: state.second ?? null,
        missedIndexes: state.missedIndexes ? [...state.missedIndexes] : null,
        // Bank the running total so a closed tab does not accrue time.
        timer: state.timer
          ? { banked: elapsedMs(), running: state.timer.running, limit: state.timer.limit }
          : null,
      })
    );
  } catch (e) {
    // Storage can be unavailable (private mode, full quota) — progress just
    // won't persist in that case.
  }
}

function restore() {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch (e) {
    return null;
  }
  if (!saved || saved.v !== DECK_VERSION) return null;
  if (saved.phase === "login") return null;

  const exam = saved.examIndex == null ? null : EXAMS[saved.examIndex];
  if (saved.phase !== "menu" && !exam) return null;

  return {
    phase: saved.phase,
    greeted: true,
    exam,
    pass: saved.pass,
    page: saved.page,
    items: saved.items ? saved.items.map((p) => unpackItem(exam, p)) : null,
    first: saved.first
      ? {
          correct: saved.first.correct,
          total: saved.first.total,
          missed: saved.first.missed.map((p) => unpackItem(exam, p)),
        }
      : null,
    second: saved.second,
    missedIndexes: saved.missedIndexes ? new Set(saved.missedIndexes) : null,
    // Resume paused; render restarts the clock if a pass is on screen.
    timer: saved.timer
      ? { banked: saved.timer.banked, running: false, since: 0, limit: saved.timer.limit }
      : null,
  };
}

function clearSaved() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    /* nothing to clear */
  }
}

// ---------- top-level navigation ----------

function showLogin() {
  state = { phase: "login", greeted: false };
  render();
}

function showMenu() {
  state = { phase: "menu", greeted: true };
  render();
}

function showIntro(exam) {
  state = { phase: "intro", greeted: true, exam };
  render();
}

function startExam(exam) {
  state = {
    phase: "quiz",
    greeted: true,
    exam,
    pass: 1,
    first: null,
    second: null,
    items: exam.cards.map((card, i) => makeItem(card, i, false)),
    page: 0,
    timer: { banked: 0, running: false, since: 0, limit: recommendedMs(exam) },
  };
  render();
}

function startSecondPass() {
  state = {
    ...state,
    phase: "quiz",
    pass: 2,
    page: 0,
    items: shuffled(
      state.first.missed.map((it) =>
        makeItem(it.card, it.deckIndex, SHUFFLE_CHOICES_ON_RETRY)
      )
    ),
  };
  render();
}

function render() {
  window.scrollTo(0, 0);
  const chromeless = state.phase === "login" || state.phase === "menu";
  topbarEl.hidden = chromeless;

  // The clock advances only while a pass is on screen.
  setTimerRunning(state.phase === "quiz");

  if (state.phase === "login") renderLogin();
  else if (state.phase === "menu") renderMenu();
  else if (state.phase === "intro") renderIntro();
  else if (state.phase === "quiz") renderQuiz();
  else if (state.phase === "results") renderResults();
  else if (state.phase === "review") renderReview();

  paintTimer();
  syncTicking();
  save();
}

// ---------- login ----------

function renderLogin() {
  appEl.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.className = "login";

  if (state.greeted) {
    const greeting = document.createElement("h2");
    greeting.className = "login-greeting";
    greeting.textContent = "hi";

    const go = document.createElement("button");
    go.type = "button";
    go.className = "btn primary login-submit";
    go.textContent = "Continue";
    go.addEventListener("click", showMenu);

    wrap.append(greeting, go);
    appEl.appendChild(wrap);
    go.focus();
    return;
  }

  // A single-input form submits on Enter in every browser; the keydown
  // handler is a backstop in case implicit submission is suppressed.
  const form = document.createElement("form");

  const input = document.createElement("input");
  input.type = "password";
  input.className = "login-input";
  input.setAttribute("aria-label", "Password");
  input.autocomplete = "off";

  const error = document.createElement("p");
  error.className = "login-error";

  const attempt = () => {
    if (input.value === PASSWORD) {
      state.greeted = true;
      render();
    } else {
      error.textContent = "Not quite — try again.";
      input.value = "";
      input.focus();
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    attempt();
  });
  input.addEventListener("keydown", (e) => {
    if (e.key !== "Enter") return;
    e.preventDefault();
    attempt();
  });

  form.appendChild(input);
  wrap.append(form, error);
  appEl.appendChild(wrap);
  input.focus();
}

// ---------- pre-quiz briefing ----------

function renderIntro() {
  const exam = state.exam;
  titleEl.textContent = exam.name;
  phaseEl.textContent = "Before you start";
  setProgress(0);
  appEl.innerHTML = "";

  const box = document.createElement("div");
  box.className = "intro";
  box.innerHTML = `
    <h2></h2>
    <p class="intro-sub"></p>
    <div class="intro-clock">
      <span class="intro-clock-time"></span>
      <span class="intro-clock-note"></span>
    </div>
    <ul>
      <li>A clock starts when you begin and runs in the corner of the screen.</li>
      <li>Next to it is the recommended time for the whole set.</li>
      <li>It turns <span class="swatch warn"></span> amber once you have used
          three quarters of that time, and
          <span class="swatch over"></span> red once you go past it.</li>
      <li><strong>Nothing stops when time runs out.</strong> The clock keeps
          counting and you can keep working — it is a pacing guide, not a limit.</li>
      <li>The clock pauses while you are reading your score or the answers.</li>
    </ul>`;

  box.querySelector("h2").textContent = exam.name;
  box.querySelector(".intro-sub").textContent =
    `${exam.cards.length} questions · ${SECONDS_PER_QUESTION} seconds per question`;
  box.querySelector(".intro-clock-time").textContent = formatClock(recommendedMs(exam));
  box.querySelector(".intro-clock-note").textContent = "recommended for the full set";

  const actions = document.createElement("div");
  actions.className = "intro-actions";
  actions.appendChild(button("Start", "btn primary", () => startExam(exam)));
  box.appendChild(actions);

  appEl.appendChild(box);
}

// ---------- menu ----------

function renderMenu() {
  appEl.innerHTML = "";

  const board = document.createElement("div");
  board.className = "board";

  EXAMS.forEach((exam) => {
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "tile";

    const name = document.createElement("span");
    name.className = "tile-name";
    name.textContent = exam.name;

    const count = document.createElement("span");
    count.className = "tile-count";
    count.textContent = `${exam.cards.length} questions`;

    tile.append(name, count);
    tile.addEventListener("click", () => showIntro(exam));
    board.appendChild(tile);
  });

  for (let i = EXAMS.length; i < MENU_SLOTS; i++) {
    const empty = document.createElement("div");
    empty.className = "tile tile-empty";
    empty.setAttribute("aria-hidden", "true");
    board.appendChild(empty);
  }

  appEl.appendChild(board);
}

// ---------- quiz ----------

function renderQuiz() {
  const { items, page, pass, exam } = state;
  const total = pageCount(items.length);
  const lastPage = page === total - 1;
  const visible = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  titleEl.textContent = exam.name;
  phaseEl.textContent =
    pass === 1
      ? `First pass · ${items.length} questions`
      : `Second pass · ${items.length} to try again`;
  setProgress((page + 1) / total);

  appEl.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "grid";
  visible.forEach((item, i) => {
    grid.appendChild(questionCard(item, page * PER_PAGE + i + 1, items.length));
  });
  appEl.appendChild(grid);

  // Blanks across the whole pass, shown only on the final page and kept
  // up to date as answers are picked or cleared.
  const note = document.createElement("p");
  note.className = "unanswered";
  note.id = "unanswered-note";
  appEl.appendChild(note);

  const nav = document.createElement("div");
  nav.className = "nav";

  const back = button("Back", "btn", () => {
    state.page--;
    render();
  });
  back.disabled = page === 0;

  const info = document.createElement("span");
  info.className = "nav-info";
  info.textContent = `Page ${page + 1} of ${total}`;

  const next = lastPage
    ? button("Submit answers", "btn primary", submitPass)
    : button("Next", "btn primary", () => {
        state.page++;
        render();
      });

  nav.append(back, info, next);
  appEl.appendChild(nav);

  updateUnansweredNote();
}

function updateUnansweredNote() {
  const note = document.getElementById("unanswered-note");
  if (!note) return;
  const onLastPage = state.page === pageCount(state.items.length) - 1;
  const blanks = state.items.filter((it) => it.selected === null).length;
  note.textContent = onLastPage && blanks > 0 ? `${blanks} unanswered` : "";
}

function questionCard(item, number, total) {
  const card = document.createElement("section");
  card.className = "card";

  const num = document.createElement("div");
  num.className = "card-num";
  num.textContent = `Question ${number} of ${total}`;

  const q = document.createElement("p");
  q.className = "question";
  q.textContent = item.card.question;

  const choices = document.createElement("div");
  choices.className = "choices";
  choices.setAttribute("role", "radiogroup");
  choices.setAttribute("aria-label", `Question ${number}`);

  item.order.forEach((originalIndex, position) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice" + (item.selected === position ? " selected" : "");
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", String(item.selected === position));
    btn.innerHTML = `<span class="choice-letter">${LETTERS[position]}</span><span></span>`;
    btn.lastElementChild.textContent = item.card.choices[originalIndex];
    // Clicking the current answer clears it. Repaint only this card's
    // buttons — a full render() would scroll the page back to the top.
    btn.addEventListener("click", () => {
      item.selected = item.selected === position ? null : position;
      [...choices.children].forEach((el, i) => {
        const on = i === item.selected;
        el.classList.toggle("selected", on);
        el.setAttribute("aria-checked", String(on));
      });
      updateUnansweredNote();
      save();
    });
    choices.appendChild(btn);
  });

  card.append(num, q, choices);
  return card;
}

function submitPass() {
  const correct = state.items.filter(isCorrect).length;
  const missed = state.items.filter((it) => !isCorrect(it));

  if (state.pass === 1) {
    state.first = { correct, total: state.items.length, missed };
  } else {
    state.second = { correct, total: state.items.length };
  }

  state.phase = "results";
  render();
}

// ---------- results ----------

function renderResults() {
  const first = state.first;
  const second = state.second;
  titleEl.textContent = state.exam.name;
  phaseEl.textContent = "Results";
  setProgress(1);
  appEl.innerHTML = "";

  const box = document.createElement("div");
  box.className = "results";
  const actions = document.createElement("div");
  actions.className = "results-actions";

  // After the first pass, with anything still missed, offer the second.
  if (!second && first.missed.length > 0) {
    box.innerHTML = `
      <p class="results-title">First pass complete</p>
      <div class="score-label">Score</div>
      <div class="score">${first.correct} / ${first.total}</div>
      <p>${first.missed.length} to try again. Answers are shown after this pass.</p>`;
    actions.append(
      button("Try those again", "btn primary", startSecondPass),
      button("Skip to answers", "btn link", toReview)
    );
  } else if (!second) {
    box.innerHTML = `
      <p class="results-title">First pass complete</p>
      <div class="score-label">Score</div>
      <div class="score">${first.correct} / ${first.total}</div>
      <p>Perfect score — nothing to retry.</p>`;
    actions.append(button("Review all questions", "btn primary", toReview));
  } else {
    box.innerHTML = `
      <p class="results-title">Both passes complete</p>
      <div class="score-row">
        <div class="score-item">
          <div class="score-label">First pass</div>
          <div class="score">${first.correct} / ${first.total}</div>
        </div>
        <div class="score-item">
          <div class="score-label">Second pass</div>
          <div class="score">${second.correct} / ${second.total}</div>
        </div>
      </div>`;
    actions.append(button("Review all questions", "btn primary", toReview));
  }

  box.appendChild(actions);
  appEl.appendChild(box);
}

// ---------- review ----------

function toReview() {
  state.missedIndexes = new Set(state.first.missed.map((it) => it.deckIndex));
  state.phase = "review";
  state.page = 0;
  render();
}

function renderReview() {
  const cards = state.exam.cards;
  const total = pageCount(cards.length);
  const start = state.page * PER_PAGE;
  const visible = cards.slice(start, start + PER_PAGE);

  titleEl.textContent = state.exam.name;
  phaseEl.textContent = "Review · click a question to reveal the answer";
  setProgress((state.page + 1) / total);
  appEl.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "grid";
  visible.forEach((card, i) => grid.appendChild(reviewCard(card, start + i)));
  appEl.appendChild(grid);

  const nav = document.createElement("div");
  nav.className = "nav";

  const back = button("Back", "btn", () => {
    state.page--;
    render();
  });
  back.disabled = state.page === 0;

  const info = document.createElement("span");
  info.className = "nav-info";
  info.textContent = `Page ${state.page + 1} of ${total}`;

  const next =
    state.page === total - 1
      ? button("Back to menu", "btn primary", showMenu)
      : button("Next", "btn primary", () => {
          state.page++;
          render();
        });

  nav.append(back, info, next);
  appEl.appendChild(nav);
}

function reviewCard(card, deckIndex) {
  const el = document.createElement("section");
  el.className = "card review-card";
  let open = false;

  const draw = () => {
    el.innerHTML = "";

    const num = document.createElement("div");
    num.className = "card-num";
    const label = document.createElement("span");
    label.textContent = `Question ${deckIndex + 1}`;
    num.appendChild(label);
    if (state.missedIndexes && state.missedIndexes.has(deckIndex)) {
      const tag = document.createElement("span");
      tag.className = "tag";
      tag.textContent = "missed";
      num.appendChild(tag);
    }

    const q = document.createElement("p");
    q.className = "question";
    q.textContent = card.question;

    const choices = document.createElement("div");
    choices.className = "choices";
    card.choices.forEach((text, i) => {
      const row = document.createElement("div");
      row.className = "choice" + (open && i === answerIndex(card) ? " is-answer" : "");
      row.innerHTML = `<span class="choice-letter">${LETTERS[i]}</span><span></span>`;
      row.lastElementChild.textContent = text;
      choices.appendChild(row);
    });

    el.append(num, q, choices);

    if (open) {
      const panel = document.createElement("div");
      panel.className = "answer-panel";
      const line = document.createElement("p");
      line.className = "answer-line";
      line.textContent = `Answer: ${card.answer}`;
      const why = document.createElement("p");
      why.className = "explanation";
      why.textContent = card.explanation || "";
      panel.append(line, why);

      // Optional per-card note on how heavily the released exams cover this
      // topic. Written as parts separated by "|"; each becomes its own line.
      if (card.coverage) {
        const cov = document.createElement("div");
        cov.className = "coverage";
        const label = document.createElement("p");
        label.className = "coverage-label";
        label.textContent = "Coverage";
        cov.appendChild(label);
        card.coverage
          .split("|")
          .map((part) => part.trim())
          .filter(Boolean)
          .forEach((part) => {
            const row = document.createElement("p");
            row.className = "coverage-line";
            row.textContent = part;
            cov.appendChild(row);
          });
        panel.appendChild(cov);
      }

      el.appendChild(panel);
    } else {
      const hint = document.createElement("p");
      hint.className = "hint";
      hint.textContent = "Click to reveal the answer";
      el.appendChild(hint);
    }
  };

  el.addEventListener("click", () => {
    open = !open;
    draw();
  });

  draw();
  return el;
}

function button(label, className, onClick) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = className;
  b.textContent = label;
  b.addEventListener("click", onClick);
  return b;
}

homeBtn.addEventListener("click", showMenu);

const resumed = restore();
if (resumed) {
  state = resumed;
  render();
} else {
  clearSaved();
  showLogin();
}
