// Quiz flow:
//   round 1 (all cards) -> score -> round 2 (missed cards, shuffled) ->
//   both scores -> review (every card, click to reveal the answer)

const PER_PAGE = 4;
const SHUFFLE_CHOICES_ON_RETRY = true;

const LETTERS = ["A", "B", "C", "D", "E"];
const answerIndex = (card) => LETTERS.indexOf(card.answer);

const appEl = document.getElementById("app");
const phaseEl = document.getElementById("phase-label");

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
  state = { phase: "quiz", round, items, page: 0, showWarning: false };
  render();
}

function begin() {
  const items = DECK.cards.map((card, i) => makeItem(card, i, false));
  state = { round1: null, round2: null };
  startRound(1, items);
}

// ---------- rendering ----------

function render() {
  window.scrollTo(0, 0);
  if (state.phase === "quiz") return renderQuiz();
  if (state.phase === "results") return renderResults();
  if (state.phase === "review") return renderReview();
}

function pageSlice(items, page) {
  return items.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);
}

function pageCount(items) {
  return Math.ceil(items.length / PER_PAGE);
}

function renderQuiz() {
  const { items, page, round } = state;
  const total = pageCount(items);
  const lastPage = page === total - 1;
  const visible = pageSlice(items, page);

  phaseEl.textContent =
    round === 1
      ? `Round 1 — ${items.length} questions`
      : `Round 2 — ${items.length} to try again`;

  appEl.innerHTML = "";

  visible.forEach((item, i) => {
    const number = page * PER_PAGE + i + 1;
    appEl.appendChild(questionCard(item, number, items.length));
  });

  const nav = document.createElement("div");
  nav.className = "nav";

  const back = button("Back", "btn", () => {
    state.page--;
    state.showWarning = false;
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
        state.showWarning = false;
        render();
      });

  nav.append(back, info, next);
  appEl.appendChild(nav);

  if (state.showWarning) {
    const w = document.createElement("p");
    w.className = "warn";
    w.textContent = "Answer every question before submitting.";
    appEl.appendChild(w);
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

  item.order.forEach((originalIndex, position) => {
    const btn = document.createElement("button");
    btn.className = "choice" + (item.selected === position ? " selected" : "");
    btn.innerHTML =
      `<span class="choice-letter">${LETTERS[position]}</span>` +
      `<span></span>`;
    btn.lastElementChild.textContent = item.card.choices[originalIndex];
    // Repaint only this card's buttons — a full render() would scroll the
    // page back to the top mid-question.
    btn.addEventListener("click", () => {
      item.selected = position;
      [...choices.children].forEach((el, i) => {
        el.classList.toggle("selected", i === position);
      });
    });
    choices.appendChild(btn);
  });

  card.append(num, q, choices);
  return card;
}

function submitRound() {
  if (state.items.some((it) => it.selected === null)) {
    state.showWarning = true;
    return render();
  }

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
  phaseEl.textContent = "";
  appEl.innerHTML = "";

  const box = document.createElement("div");
  box.className = "results";

  // After round 1, with anything still missed, offer the second attempt.
  if (!r2 && r1.missed.length > 0) {
    box.innerHTML = `
      <div class="score-label">Round 1</div>
      <div class="score">${r1.correct} / ${r1.total}</div>
      <p>${r1.missed.length} to try again. You'll see the answers after this round.</p>`;
    box.appendChild(
      button("Try those again", "btn primary", () => {
        const retry = shuffled(
          r1.missed.map((it) =>
            makeItem(it.card, it.deckIndex, SHUFFLE_CHOICES_ON_RETRY)
          )
        );
        const saved = { round1: r1, round2: null };
        startRound(2, retry);
        Object.assign(state, saved);
        render();
      })
    );
  } else if (!r2) {
    box.innerHTML = `
      <div class="score-label">Round 1</div>
      <div class="score">${r1.correct} / ${r1.total}</div>
      <p>Perfect — nothing to retry.</p>`;
    box.appendChild(button("Review all questions", "btn primary", toReview));
  } else {
    box.innerHTML = `
      <div class="score-row">
        <div class="score-item">
          <div class="score-label">Round 1</div>
          <div class="score">${r1.correct} / ${r1.total}</div>
        </div>
        <div class="score-item">
          <div class="score-label">Round 2</div>
          <div class="score">${r2.correct} / ${r2.total}</div>
        </div>
      </div>
      <p>That's both attempts — here are all the answers.</p>`;
    box.appendChild(button("Review all questions", "btn primary", toReview));
  }

  appEl.appendChild(box);
}

function toReview() {
  const missedIndexes = new Set(state.round1.missed.map((it) => it.deckIndex));
  state.phase = "review";
  state.page = 0;
  state.missedIndexes = missedIndexes;
  render();
}

function renderReview() {
  const cards = DECK.cards;
  const total = Math.ceil(cards.length / PER_PAGE);
  const start = state.page * PER_PAGE;
  const visible = cards.slice(start, start + PER_PAGE);

  phaseEl.textContent = "Review — click a question to see the answer";
  appEl.innerHTML = "";

  visible.forEach((card, i) => {
    appEl.appendChild(reviewCard(card, start + i));
  });

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
    num.textContent = `Question ${deckIndex + 1}`;
    if (state.missedIndexes && state.missedIndexes.has(deckIndex)) {
      const tag = document.createElement("span");
      tag.className = "tag missed";
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
      row.className =
        "choice" + (open && i === answerIndex(card) ? " is-answer" : "");
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
