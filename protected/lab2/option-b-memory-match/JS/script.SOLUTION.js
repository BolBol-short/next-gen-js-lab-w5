/* ================================================================
   JavaScript — Week 5 — Lab 2 (Option B) · Memory Match · SOLUTION
================================================================= */
"use strict";

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const CARD_ICONS = {
    1: '<svg viewBox="0 0 24 24"><path d="M12 2.5 14.7 9l7 .6-5.3 4.6 1.6 6.8L12 17.5l-6 3.5 1.6-6.8L2.3 9.6l7-.6Z" fill="#F59E0B"/></svg>',
    2: '<svg viewBox="0 0 24 24"><path d="M12 20.5 3.9 13a5 5 0 0 1 7.1-7l1 1 1-1a5 5 0 0 1 7.1 7Z" fill="#EF4444"/></svg>',
    3: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" fill="#2F6FED"/></svg>',
    4: '<svg viewBox="0 0 24 24"><path d="M12 3 21 20H3Z" fill="#10B981"/></svg>',
    5: '<svg viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3" fill="#8B5CF6"/></svg>',
    6: '<svg viewBox="0 0 24 24"><path d="M12 2.5 20.5 12 12 21.5 3.5 12Z" fill="#06B6D4"/></svg>',
};

let cardValues = shuffle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]);

const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const movesEl = document.getElementById("moves");
const restartBtn = document.getElementById("restart-btn");

let flippedCards = [];
let moves = 0;
let matchedPairs = 0;

function resetGame() {
    cardValues = shuffle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]);
    boardEl.innerHTML = "";
    cardValues.forEach(function (value) {
        const card = document.createElement("div");
        card.className = "card";
        card.dataset.value = value;
        boardEl.append(card);
    });
    flippedCards = [];
    moves = 0;
    matchedPairs = 0;
    movesEl.textContent = "Moves: 0";
    statusEl.textContent = "Find all the pairs!";
}
restartBtn.addEventListener("click", resetGame);

/* ---- YOUR CODE (answer) — Part A ------------------------------------ */
cardValues.forEach(function (value) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.value = value;
    boardEl.append(card);
});

/* ---- YOUR CODE (answer) — Part B ------------------------------------ */
boardEl.addEventListener("click", function (event) {
    if (!event.target.classList.contains("card")) {
        return;
    }
    if (event.target.classList.contains("matched")) {
        return;
    }

    if (flippedCards.length === 2) {
        flippedCards.forEach(function (card) {
            card.classList.remove("flipped");
            card.innerHTML = "";
        });
        flippedCards = [];
    }

    if (event.target.classList.contains("flipped")) {
        return;
    }

    event.target.classList.add("flipped");
    event.target.innerHTML = CARD_ICONS[event.target.dataset.value];
    flippedCards.push(event.target);

    if (flippedCards.length === 2) {
        moves++;
        movesEl.textContent = "Moves: " + moves;

        if (flippedCards[0].dataset.value === flippedCards[1].dataset.value) {
            flippedCards.forEach(function (card) {
                card.classList.add("matched");
            });
            flippedCards = [];
            matchedPairs++;

            if (matchedPairs === 6) {
                statusEl.textContent = "You matched all pairs in " + moves + " moves!";
            }
        }
    }
});
