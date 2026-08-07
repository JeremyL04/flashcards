// Flow:
//   login -> menu -> first pass (all cards) -> score ->
//   second pass (missed cards, shuffled) -> both scores ->
//   review (every card, click to reveal the answer)
//
// Unanswered questions are graded as wrong.

const PER_PAGE = 4;
const SHUFFLE_CHOICES_ON_RETRY = true;
const MENU_SLOTS = 25; // 5x5 board

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

let state;

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

// ---------- top-level navigation ----------

function showLogin() {
  state = { phase: "login" };
  render();
}

function showMenu() {
  state = { phase: "menu" };
  render();
}

function startExam(exam) {
  state = {
    phase: "quiz",
    exam,
    pass: 1,
    first: null,
    second: null,
    items: exam.cards.map((card, i) => makeItem(card, i, false)),
    page: 0,
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
  topbarEl.hidden = state.phase === "login";
  if (state.phase === "login") return renderLogin();
  if (state.phase === "menu") return renderMenu();
  if (state.phase === "quiz") return renderQuiz();
  if (state.phase === "results") return renderResults();
  if (state.phase === "review") return renderReview();
}

// ---------- login ----------

function renderLogin() {
  appEl.innerHTML = "";

  const wrap = document.createElement("div");
  wrap.className = "login";

  const greeting = document.createElement("h2");
  greeting.className = "login-greeting";
  greeting.textContent = "hi";

  const form = document.createElement("form");
  form.className = "login-form";

  const input = document.createElement("input");
  input.type = "password";
  input.className = "login-input";
  input.placeholder = "Password";
  input.setAttribute("aria-label", "Password");
  input.autocomplete = "off";

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "btn primary login-submit";
  submit.textContent = "Continue";

  const error = document.createElement("p");
  error.className = "login-error";

  const attempt = () => {
    if (input.value === PASSWORD) {
      showMenu();
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
  // Enter alone doesn't reliably trigger implicit submission everywhere.
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      attempt();
    }
  });

  form.append(input, submit, error);
  wrap.append(greeting, form);
  appEl.appendChild(wrap);
  input.focus();
}

// ---------- menu ----------

function renderMenu() {
  titleEl.textContent = "Flashcards";
  phaseEl.textContent = "Choose a practice exam";
  setProgress(0);
  appEl.innerHTML = "";

  const board = document.createElement("div");
  board.className = "board";

  EXAMS.forEach((exam) => {
    const tile = document.createElement("button");
    tile.className = "tile";

    const name = document.createElement("span");
    name.className = "tile-name";
    name.textContent = exam.name;

    const count = document.createElement("span");
    count.className = "tile-count";
    count.textContent = `${exam.cards.length} questions`;

    tile.append(name, count);
    tile.addEventListener("click", () => startExam(exam));
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

showLogin();
