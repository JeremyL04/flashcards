// Flow:
//   login -> greeting -> menu -> first pass (all cards) -> score ->
//   second pass (missed cards, shuffled) -> both scores ->
//   review (every card, click to reveal the answer)
//
// Unanswered questions are graded as wrong.
// Progress is saved to localStorage so a refresh picks up where it left off.

const PER_PAGE = 4;
const SHUFFLE_CHOICES_ON_RETRY = true;
// The home page is split into these sections, in this order — one per
// subject, so an exam's "category" field decides which shelf it lands in.
// A slug with no exams simply doesn't render a shelf (see renderMenu), so
// adding a new subject here ahead of any exam using it is harmless.
const CATEGORIES = [
  { key: "practice", label: "Practice tests" },
  { key: "cm", label: "Classical Mechanics" },
  { key: "em", label: "Electromagnetism" },
  { key: "circuits", label: "Circuits" },
  { key: "optics", label: "Optics & Waves" },
  { key: "sr", label: "Special Relativity" },
  { key: "statmech", label: "Statistical Mechanics & Thermodynamics" },
  { key: "condensed", label: "Condensed Matter" },
  { key: "lab", label: "Lab Methods" },
];
const STORAGE_KEY = "flashcards-progress";
// Separate from STORAGE_KEY on purpose: colors are keyed by exam name, not
// by the whole-deck hash, so adding or editing other exams never touches
// them. Renaming an exam orphans its saved color, which is an accepted
// trade-off here.
const COLOR_KEY = "flashcards-colors";
// Same trade-off as COLOR_KEY: keyed by exam name, lives only in this
// browser, and a rename orphans past attempts. Capped per exam so it can't
// grow without bound.
const HISTORY_KEY = "flashcards-history";
const HISTORY_LIMIT_PER_EXAM = 20;
const PALETTE = ["red", "orange", "amber", "green", "teal", "blue", "purple", "pink"];
const SECONDS_PER_QUESTION = 90; // sets the recommended time for a set
const WARN_AT = 0.75; // amber once this fraction of the recommendation is used

// One-at-a-time mode: every question gets its own budget, chosen on the
// intro screen, then moves on once time is up.
const TIMED_SECONDS_PRESETS = [60, 90, 120, 150, 180];
const TIMED_SECONDS_DEFAULT = 120;

// Not real security: this file is public, so anyone who views the page
// source can read it. It only keeps casual visitors out.
const PASSWORD = "paulatakesmybreathaway";

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
// Sticky for the session (not saved) so picking 90s once keeps it selected
// for the next exam too, without carrying it across a reload.
let selectedTimedSeconds = TIMED_SECONDS_DEFAULT;

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

  // In one-at-a-time mode the clock on screen is the current question's
  // budget (whatever was chosen on the intro screen); the whole-set total
  // still accrues and appears with the score.
  const perQuestion = state.mode === "timed" && state.phase === "quiz";
  const used = perQuestion ? Date.now() - state.qSince : elapsedMs();
  const limit = perQuestion ? state.timedSeconds * 1000 : t.limit;

  timerEl.innerHTML = `<span></span><span class="timer-limit"></span>`;
  timerEl.firstElementChild.textContent = formatClock(used);
  timerEl.lastElementChild.textContent = ` / ${formatClock(limit)}`;

  const warn = limit > 0 && used / limit >= WARN_AT;
  timerEl.classList.toggle("warn", warn && used < limit);
  timerEl.classList.toggle("over", limit > 0 && used >= limit);
}

let ticksSinceSave = 0;

function syncTicking() {
  const shouldTick = state && state.phase === "quiz";
  if (shouldTick && !tickHandle) {
    tickHandle = setInterval(() => {
      if (advanceIfQuestionExpired()) return;
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

// A timed question moves on by itself once its budget runs out; whatever is
// selected at that moment stands.
function advanceIfQuestionExpired() {
  if (!state || state.mode !== "timed" || state.phase !== "quiz") return false;
  if (Date.now() - state.qSince < state.timedSeconds * 1000) return false;
  goToPage(state.page + 1);
  return true;
}

// Moving past the last page ends the pass.
function goToPage(page) {
  if (page > pageCount(state.items.length) - 1) {
    submitPass();
    return;
  }
  state.page = page;
  state.qSince = Date.now();
  render();
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

// One question to a page in timed mode, four otherwise. Review always
// uses PER_PAGE directly, so answers are shown four up in either mode.
function perPage() {
  return state && state.mode === "timed" ? 1 : PER_PAGE;
}

function pageCount(n) {
  return Math.ceil(n / perPage());
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
        second: state.second
          ? {
              correct: state.second.correct,
              total: state.second.total,
              missed: state.second.missed.map(packItem),
            }
          : null,
        missedIndexes: state.missedIndexes ? [...state.missedIndexes] : null,
        mode: state.mode ?? null,
        timedSeconds: state.timedSeconds ?? null,
        reportRecorded: !!state.reportRecorded,
        historyIndex: state.historyIndex ?? null,
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
    second: saved.second
      ? {
          correct: saved.second.correct,
          total: saved.second.total,
          // Older saved progress may predate this field.
          missed: (saved.second.missed || []).map((p) => unpackItem(exam, p)),
        }
      : null,
    missedIndexes: saved.missedIndexes ? new Set(saved.missedIndexes) : null,
    mode: saved.mode ?? null,
    timedSeconds: saved.timedSeconds ?? null,
    reportRecorded: !!saved.reportRecorded,
    historyIndex: saved.historyIndex ?? null,
    // A restored question gets its full budget back rather than resuming
    // mid-countdown, so a refresh can never skip a question instantly.
    qSince: Date.now(),
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

// ---------- tile colors ----------

function loadColors() {
  try {
    return JSON.parse(localStorage.getItem(COLOR_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

function setExamColor(examName, color) {
  const colors = loadColors();
  if (color) colors[examName] = color;
  else delete colors[examName];
  try {
    localStorage.setItem(COLOR_KEY, JSON.stringify(colors));
  } catch (e) {
    /* private mode or full quota — the pick just will not persist */
  }
}

function closeColorPopover() {
  document.querySelector(".color-popover")?.remove();
}

function openColorPopover(anchorBtn, exam) {
  closeColorPopover();
  const current = loadColors()[exam.name] || null;

  const pop = document.createElement("div");
  pop.className = "color-popover";

  const makeSwatch = (color) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "swatch-btn" + (color === current ? " selected" : "");
    b.dataset.swatch = color || "none";
    b.setAttribute("aria-label", color ? `Set color to ${color}` : "Remove color");
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      setExamColor(exam.name, color);
      closeColorPopover();
      renderMenu();
    });
    return b;
  };

  pop.appendChild(makeSwatch(null));
  PALETTE.forEach((c) => pop.appendChild(makeSwatch(c)));
  anchorBtn.parentElement.appendChild(pop);

  // Dismiss on an outside click, but not on the click that just opened it.
  setTimeout(() => {
    document.addEventListener("click", closeColorPopover, { once: true });
  }, 0);
}

// ---------- attempt history ----------

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

// Most recent last, so callers reverse for a newest-first list.
function examHistory(examName) {
  return loadHistory()[examName] || [];
}

// `wrong` is a list of 1-based question numbers, and `total` is the card
// count at the time of the attempt — both frozen so an attempt still reads
// correctly even if the exam is edited later.
function recordHistory(examName, correct, total, wrong) {
  const all = loadHistory();
  const list = all[examName] || [];
  list.push({ date: new Date().toISOString(), correct, total, wrong });
  all[examName] = list.slice(-HISTORY_LIMIT_PER_EXAM);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(all));
  } catch (e) {
    /* private mode or full quota — this attempt just won't be remembered */
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

function showHistory(exam) {
  state = { phase: "history", greeted: true, exam, historyIndex: null };
  render();
}

function startExam(exam, mode, timedSeconds) {
  state = {
    phase: "quiz",
    greeted: true,
    exam,
    mode,
    timedSeconds: mode === "timed" ? timedSeconds : null,
    pass: 1,
    first: null,
    second: null,
    items: exam.cards.map((card, i) => makeItem(card, i, false)),
    page: 0,
    qSince: Date.now(),
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
    qSince: Date.now(),
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
  // An enlarged figure belongs to the card that is going away — in a timed run
  // the clock can advance the question out from under it.
  closeLightbox();
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
  else if (state.phase === "report") renderReportCard();
  else if (state.phase === "history") renderHistory();

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
    <p class="intro-lead">Choose how you want to take it.</p>
    <div class="modes">
      <div class="mode">
        <h3>Regular</h3>
        <ul>
          <li>Four questions to a page, and you can move back and forth.</li>
          <li>One clock for the whole set, counting up beside the recommendation.</li>
          <li>It turns <span class="swatch warn"></span> amber at three quarters
              and <span class="swatch over"></span> red once you pass it, but
              never stops you.</li>
        </ul>
      </div>
      <div class="mode">
        <h3>One at a time</h3>
        <ul>
          <li>A single question on screen with its own budget — pick how
              long below.</li>
          <li>The clock turns <span class="swatch warn"></span> amber at
              three quarters of that time, and then the question moves on
              by itself.</li>
          <li>Whatever is selected when it moves on is your answer, and you
              cannot go back to it.</li>
        </ul>
        <div class="timed-picker">
          <span class="timed-picker-label">Seconds per question</span>
          <div class="timed-picker-options"></div>
        </div>
      </div>
    </div>
    <p class="intro-foot">Either way, the second pass works the same as the
      first, and the answers are shown four to a page at the end.</p>`;

  box.querySelector("h2").textContent = exam.name;
  box.querySelector(".intro-sub").textContent =
    `${exam.cards.length} questions · ${SECONDS_PER_QUESTION} seconds per question`;
  box.querySelector(".intro-clock-time").textContent = formatClock(recommendedMs(exam));
  box.querySelector(".intro-clock-note").textContent = "recommended for the full set";

  const pickerOptions = box.querySelector(".timed-picker-options");
  TIMED_SECONDS_PRESETS.forEach((secs) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "timed-picker-btn" + (secs === selectedTimedSeconds ? " selected" : "");
    b.textContent = `${secs}s`;
    b.addEventListener("click", () => {
      selectedTimedSeconds = secs;
      [...pickerOptions.children].forEach((el) => el.classList.toggle("selected", el === b));
    });
    pickerOptions.appendChild(b);
  });

  const actions = document.createElement("div");
  actions.className = "intro-actions";
  actions.append(
    button("Start regular", "btn primary", () => startExam(exam, "regular")),
    button("Start one at a time", "btn", () => startExam(exam, "timed", selectedTimedSeconds))
  );
  box.appendChild(actions);

  const pastCount = examHistory(exam.name).length;
  if (pastCount > 0) {
    const histWrap = document.createElement("div");
    histWrap.className = "intro-history-link";
    histWrap.appendChild(
      button(`View past attempts (${pastCount})`, "btn link", () => showHistory(exam))
    );
    box.appendChild(histWrap);
  }

  appEl.appendChild(box);
}

// ---------- menu ----------

// "2026-08-09" -> "Aug 9, 2026". Parsed by hand rather than with Date so
// the result does not shift with the reader's time zone.
const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function formatAdded(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${MONTH_NAMES[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
}

// A history entry's date is a full timestamp (same day re-attempts are
// common), so this formats in the viewer's local time rather than parsing
// by hand like formatAdded does for the date-only "added" field.
function formatHistoryDate(iso) {
  const d = new Date(iso);
  const hour12 = d.getHours() % 12 || 12;
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = d.getHours() < 12 ? "AM" : "PM";
  return `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()} · ${hour12}:${minutes} ${ampm}`;
}

function renderMenu() {
  appEl.innerHTML = "";

  const colors = loadColors();

  const examTile = (exam) => {
    const wrap = document.createElement("div");
    wrap.className = "tile-wrap";

    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "tile";
    const color = colors[exam.name];
    if (color) tile.dataset.color = color;

    const name = document.createElement("span");
    name.className = "tile-name";
    name.textContent = exam.name;

    const count = document.createElement("span");
    count.className = "tile-count";
    count.textContent = `${exam.cards.length} questions`;

    tile.append(name, count);

    if (exam.added) {
      const added = document.createElement("span");
      added.className = "tile-added";
      added.textContent = `Added ${formatAdded(exam.added)}`;
      tile.appendChild(added);
    }

    tile.addEventListener("click", () => showIntro(exam));

    const colorBtn = document.createElement("button");
    colorBtn.type = "button";
    colorBtn.className = "color-btn";
    colorBtn.setAttribute("aria-label", `Choose a color for ${exam.name}`);
    colorBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openColorPopover(colorBtn, exam);
    });

    wrap.append(tile, colorBtn);
    return wrap;
  };

  CATEGORIES.forEach(({ key, label }) => {
    const exams = EXAMS.filter((e) => e.category === key);
    if (!exams.length) return;

    const section = document.createElement("section");
    section.className = "shelf";

    const heading = document.createElement("h2");
    heading.className = "shelf-title";
    heading.textContent = label;

    const count = document.createElement("span");
    count.className = "shelf-count";
    count.textContent = `${exams.length} ${exams.length === 1 ? "set" : "sets"}`;
    heading.appendChild(count);

    const board = document.createElement("div");
    board.className = "board";
    exams.forEach((exam) => board.appendChild(examTile(exam)));

    section.append(heading, board);
    appEl.appendChild(section);
  });

  // Anything without a recognised category would otherwise vanish silently.
  const known = new Set(CATEGORIES.map((c) => c.key));
  const orphans = EXAMS.filter((e) => !known.has(e.category));
  if (orphans.length) {
    const section = document.createElement("section");
    section.className = "shelf";
    const heading = document.createElement("h2");
    heading.className = "shelf-title";
    heading.textContent = "Other";
    const board = document.createElement("div");
    board.className = "board";
    orphans.forEach((exam) => board.appendChild(examTile(exam)));
    section.append(heading, board);
    appEl.appendChild(section);
  }
}

// ---------- quiz ----------

function renderQuiz() {
  const { items, page, pass, exam } = state;
  const total = pageCount(items.length);
  const lastPage = page === total - 1;
  const per = perPage();
  const visible = items.slice(page * per, page * per + per);

  titleEl.textContent = exam.name;
  phaseEl.textContent =
    pass === 1
      ? `First pass · ${items.length} questions`
      : `Second pass · ${items.length} to try again`;
  setProgress((page + 1) / total);

  appEl.innerHTML = "";

  const grid = document.createElement("div");
  // A lone question would otherwise sit in the left column of a two-up grid.
  grid.className = per === 1 ? "grid grid-single" : "grid";
  visible.forEach((item, i) => {
    grid.appendChild(questionCard(item, page * per + i + 1, items.length));
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

  const timed = state.mode === "timed";

  const back = button("Back", "btn", () => goToPage(state.page - 1));
  // Going back would hand a question a second budget, so timed runs only
  // move forward.
  back.disabled = page === 0 || timed;

  const info = document.createElement("span");
  info.className = "nav-info";
  info.textContent = timed
    ? `Question ${page + 1} of ${items.length}`
    : `Page ${page + 1} of ${total}`;

  const next = lastPage
    ? button("Submit answers", "btn primary", submitPass)
    : button(timed ? "Next question" : "Next", "btn primary", () =>
        goToPage(state.page + 1)
      );

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

// ---------- figures ----------

// A card may carry an "image": a diagram the prompt refers to, shown in the
// quiz and again in the review. The art is black-on-white line work and is
// blended into the card rather than sitting on a plate of its own — styles.css
// also inverts it in dark mode, which only works because it carries no colour.
// Clicking enlarges it, since four-to-a-page leaves a circuit fairly small.
function questionFigure(card, number) {
  if (!card.image) return null;

  const fig = document.createElement("figure");
  fig.className = "figure";

  const img = document.createElement("img");
  img.src = card.image;
  img.alt = `Figure for question ${number}`;
  // Loaded eagerly on purpose: they are small and same-origin, and arriving
  // late would shove the choices down under a reader already pointing at them.
  img.decoding = "async";
  img.addEventListener("click", (e) => {
    // A review card toggles its answer when clicked; enlarging must not.
    e.stopPropagation();
    openLightbox(card.image, img.alt);
  });

  fig.appendChild(img);
  return fig;
}

let lightboxEl = null;

function openLightbox(src, alt) {
  closeLightbox();

  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.setAttribute("aria-label", alt);

  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  const hint = document.createElement("p");
  hint.className = "lightbox-hint";
  hint.textContent = "Click anywhere to close";

  box.append(img, hint);
  box.addEventListener("click", closeLightbox);

  document.body.appendChild(box);
  document.body.classList.add("no-scroll");
  lightboxEl = box;
}

function closeLightbox() {
  if (!lightboxEl) return;
  lightboxEl.remove();
  lightboxEl = null;
  document.body.classList.remove("no-scroll");
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

function questionCard(item, number, total) {
  const card = document.createElement("section");
  card.className = "card";

  const num = document.createElement("div");
  num.className = "card-num";
  num.textContent = `Question ${number} of ${total}`;

  const q = document.createElement("p");
  q.className = "question";
  q.textContent = item.card.question;

  const figure = questionFigure(item.card, number);

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

  card.append(num, q);
  if (figure) card.appendChild(figure);
  card.appendChild(choices);
  return card;
}

function submitPass() {
  const correct = state.items.filter(isCorrect).length;
  const missed = state.items.filter((it) => !isCorrect(it));

  if (state.pass === 1) {
    state.first = { correct, total: state.items.length, missed };
  } else {
    state.second = { correct, total: state.items.length, missed };
  }

  state.phase = "results";
  render();
}

// A question retried on the second pass is judged by that retry, not the
// first attempt — a correction on the retry counts as mastered.
function finalMissedIndexes() {
  if (!state.first) return new Set();
  const missed = state.second ? state.second.missed : state.first.missed;
  return new Set(missed.map((it) => it.deckIndex));
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
  const total = Math.ceil(cards.length / PER_PAGE);
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
      ? button("View report card", "btn primary", () => {
          // Guarded so paging Back to review and forward again doesn't log
          // the same attempt twice — the flag is saved, so it survives a
          // refresh too.
          if (!state.reportRecorded) {
            const wrong = finalMissedIndexes();
            const exam = state.exam;
            recordHistory(
              exam.name,
              exam.cards.length - wrong.size,
              exam.cards.length,
              [...wrong].map((i) => i + 1).sort((a, b) => a - b)
            );
            state.reportRecorded = true;
          }
          state.phase = "report";
          render();
        })
      : button("Next", "btn primary", () => {
          state.page++;
          render();
        });

  nav.append(back, info, next);
  appEl.appendChild(nav);
}

// ---------- report card ----------
//
// A compact right/wrong grid meant to be screenshotted, not read on screen —
// so it shows the FINAL result per question (after any retry), one glance,
// no scrolling to page through review cards again. Also used, unchanged, to
// redraw a past attempt from history.

// `wrongZeroBased` is a Set of zero-based question indexes.
function buildReportGrid(cardCount, wrongZeroBased) {
  const grid = document.createElement("div");
  grid.className = "report-grid";
  for (let i = 0; i < cardCount; i++) {
    const isWrong = wrongZeroBased.has(i);
    const cell = document.createElement("div");
    cell.className = "report-cell" + (isWrong ? " wrong" : " right");
    const num = document.createElement("span");
    num.className = "report-num";
    num.textContent = i + 1;
    const mark = document.createElement("span");
    mark.className = "report-mark";
    mark.textContent = isWrong ? "✗" : "✓";
    cell.append(num, mark);
    grid.appendChild(cell);
  }
  return grid;
}

function renderReportCard() {
  const exam = state.exam;
  const wrong = finalMissedIndexes();
  const correctCount = exam.cards.length - wrong.size;
  // The current attempt was just recorded, so >1 means there's a prior one
  // worth comparing against.
  const pastCount = examHistory(exam.name).length;

  titleEl.textContent = exam.name;
  phaseEl.textContent = "Report card";
  setProgress(1);
  appEl.innerHTML = "";

  const box = document.createElement("div");
  box.className = "report-card";

  const header = document.createElement("div");
  header.className = "report-header";
  const title = document.createElement("p");
  title.className = "report-title";
  title.textContent = exam.name;
  const score = document.createElement("p");
  score.className = "report-score";
  score.textContent = `${correctCount} / ${exam.cards.length} correct`;
  header.append(title, score);

  const grid = buildReportGrid(exam.cards.length, wrong);

  const actions = document.createElement("div");
  actions.className = "results-actions";
  actions.append(
    button("Back to menu", "btn primary", showMenu),
    button("Back to review", "btn link", () => {
      state.phase = "review";
      state.page = 0;
      render();
    })
  );
  if (pastCount > 1) {
    actions.appendChild(
      button(`View past attempts (${pastCount})`, "btn link", () => showHistory(exam))
    );
  }

  box.append(header, grid, actions);
  appEl.appendChild(box);
}

// ---------- history ----------

function renderHistory() {
  const exam = state.exam;
  const entries = examHistory(exam.name).slice().reverse(); // newest first

  titleEl.textContent = exam.name;
  phaseEl.textContent = state.historyIndex == null ? "Past attempts" : "Past attempt";
  setProgress(1);
  appEl.innerHTML = "";

  const box = document.createElement("div");
  box.className = "report-card";

  const header = document.createElement("div");
  header.className = "report-header";
  const title = document.createElement("p");
  title.className = "report-title";
  title.textContent = exam.name;
  header.appendChild(title);

  if (state.historyIndex == null) {
    const sub = document.createElement("p");
    sub.className = "report-score";
    sub.textContent =
      entries.length === 1 ? "1 past attempt" : `${entries.length} past attempts`;
    header.appendChild(sub);

    const list = document.createElement("div");
    list.className = "history-list";
    entries.forEach((entry, i) => {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "history-row";
      const date = document.createElement("span");
      date.className = "history-date";
      date.textContent = formatHistoryDate(entry.date);
      const score = document.createElement("span");
      score.className = "history-score";
      score.textContent = `${entry.correct} / ${entry.total}`;
      row.append(date, score);
      row.addEventListener("click", () => {
        state.historyIndex = i;
        render();
      });
      list.appendChild(row);
    });

    const actions = document.createElement("div");
    actions.className = "results-actions";
    actions.appendChild(button("Back", "btn primary", () => showIntro(exam)));

    box.append(header, list, actions);
  } else {
    const entry = entries[state.historyIndex];
    const sub = document.createElement("p");
    sub.className = "report-score";
    sub.textContent = `${formatHistoryDate(entry.date)} · ${entry.correct} / ${entry.total} correct`;
    header.appendChild(sub);

    const grid = buildReportGrid(entry.total, new Set(entry.wrong.map((n) => n - 1)));

    const actions = document.createElement("div");
    actions.className = "results-actions";
    actions.appendChild(
      button("Back to list", "btn primary", () => {
        state.historyIndex = null;
        render();
      })
    );

    box.append(header, grid, actions);
  }

  appEl.appendChild(box);
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

    const figure = questionFigure(card, deckIndex + 1);

    const choices = document.createElement("div");
    choices.className = "choices";
    card.choices.forEach((text, i) => {
      const row = document.createElement("div");
      row.className = "choice" + (open && i === answerIndex(card) ? " is-answer" : "");
      row.innerHTML = `<span class="choice-letter">${LETTERS[i]}</span><span></span>`;
      row.lastElementChild.textContent = text;
      choices.appendChild(row);
    });

    el.append(num, q);
    if (figure) el.appendChild(figure);
    el.appendChild(choices);

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
