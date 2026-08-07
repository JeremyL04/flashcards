// Quiz flow:
//   round 1 (all cards) -> score -> round 2 (missed cards, shuffled) ->
//   both scores -> review (every card, click to reveal the answer)
//
// Unanswered questions are simply graded as wrong.

const PER_PAGE = 4;
const SHUFFLE_CHOICES_ON_RETRY = true;

const LETTERS = ["A", "B", "C", "D", "E"];
const answerIndex = (card) => LETTERS.indexOf(card.answer);

const appEl = document.getElementById("app");
const phaseEl = document.getElementById("phase-label");
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

// An "item" is one card as presented in a round: which card, what order its
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

function startRound(round, items) {
  state = { ...state, phase: "quiz", round, items, page: 0 };
  render();
}

function begin() {
  state = { round1: null, round2: null };
  startRound(1, DECK.cards.map((card, i) => makeItem(card, i, false)));
}

// ---------- rendering ----------

function render() {
  window.scrollTo(0, 0);
  if (state.phase === "quiz") return renderQuiz();
  if (state.phase === "results") return renderResults();
  if (state.phase === "review") return renderReview();
}

function pageCount(n) {
  return Math.ceil(n / PER_PAGE);
}

function setProgress(fraction) {
  progressEl.style.width = `${Math.round(fraction * 100)}%`;
}

function renderQuiz() {
  const { items, page, round } = state;
  const total = pageCount(items.length);
  const lastPage = page === total - 1;
  const visible = items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  phaseEl.textContent =
    round === 1
      ? `Round 1 · ${items.length} questions`
      : `Round 2 · ${items.length} to try again`;
  setProgress((page + 1) / total);

  appEl.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "grid";
  visible.forEach((item, i) => {
    grid.appendChild(questionCard(item, page * PER_PAGE + i + 1, items.length));
  });
  appEl.appendChild(grid);

  // Count of blanks across the whole round, live-updated as answers are picked.
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
    ? button("Submit answers", "btn primary", submitRound)
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
  const blanks = state.items.filter((it) => it.selected === null).length;
  const onLastPage = state.page === pageCount(state.items.length) - 1;

  if (blanks === 0) {
    note.textContent = "";
  } else if (onLastPage) {
    note.textContent = `${blanks} unanswered — these will be marked wrong.`;
  } else {
    note.textContent = `${blanks} unanswered`;
  }
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
    btn.className = "choice" + (item.selected === position ? " selected" : "");
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", String(item.selected === position));
    btn.innerHTML = `<span class="choice-letter">${LETTERS[position]}</span><span></span>`;
    btn.lastElementChild.textContent = item.card.choices[originalIndex];
    // Repaint only this card's buttons — a full render() would scroll the
    // page back to the top mid-question.
    btn.addEventListener("click", () => {
      item.selected = position;
      [...choices.children].forEach((el, i) => {
        el.classList.toggle("selected", i === position);
        el.setAttribute("aria-checked", String(i === position));
      });
      updateUnansweredNote();
    });
    choices.appendChild(btn);
  });

  card.append(num, q, choices);
  return card;
}

function submitRound() {
  const correct = state.items.filter(isCorrect).length;
  const missed = state.items.filter((it) => !isCorrect(it));

  if (state.round === 1) {
    state.round1 = { correct, total: state.items.length, missed };
  } else {
    state.round2 = { correct, total: state.items.length };
  }

  state.phase = "results";
  render();
}

function renderResults() {
  const r1 = state.round1;
  const r2 = state.round2;
  phaseEl.textContent = "Results";
  setProgress(1);
  appEl.innerHTML = "";

  const box = document.createElement("div");
  box.className = "results";
  const actions = document.createElement("div");
  actions.className = "results-actions";

  // After round 1, with anything still missed, offer the second attempt.
  if (!r2 && r1.missed.length > 0) {
    box.innerHTML = `
      <p class="results-title">Round 1 complete</p>
      <div class="score-label">Score</div>
      <div class="score">${r1.correct} / ${r1.total}</div>
      <p>${r1.missed.length} to try again. Answers are shown after this round.</p>`;
    actions.append(
      button("Try those again", "btn primary", () => {
        startRound(
          2,
          shuffled(
            r1.missed.map((it) =>
              makeItem(it.card, it.deckIndex, SHUFFLE_CHOICES_ON_RETRY)
            )
          )
        );
      }),
      button("Skip to answers", "btn link", toReview)
    );
  } else if (!r2) {
    box.innerHTML = `
      <p class="results-title">Round 1 complete</p>
      <div class="score-label">Score</div>
      <div class="score">${r1.correct} / ${r1.total}</div>
      <p>Perfect score — nothing to retry.</p>`;
    actions.append(button("Review all questions", "btn primary", toReview));
  } else {
    box.innerHTML = `
      <p class="results-title">Both attempts complete</p>
      <div class="score-row">
        <div class="score-item">
          <div class="score-label">Round 1</div>
          <div class="score">${r1.correct} / ${r1.total}</div>
        </div>
        <div class="score-item">
          <div class="score-label">Round 2</div>
          <div class="score">${r2.correct} / ${r2.total}</div>
        </div>
      </div>`;
    actions.append(button("Review all questions", "btn primary", toReview));
  }

  box.appendChild(actions);
  appEl.appendChild(box);
}

function toReview() {
  state.missedIndexes = new Set(state.round1.missed.map((it) => it.deckIndex));
  state.phase = "review";
  state.page = 0;
  render();
}

function renderReview() {
  const cards = DECK.cards;
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

  const next = button("Next", "btn primary", () => {
    state.page++;
    render();
  });
  next.disabled = state.page === total - 1;

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
  b.className = className;
  b.textContent = label;
  b.addEventListener("click", onClick);
  return b;
}

document.getElementById("deck-title").textContent = DECK.title || "Flashcards";
begin();
