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

const cardValues = shuffle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]);

const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const movesEl = document.getElementById("moves");

let flippedCards = [];
let moves = 0;
let matchedPairs = 0;

cardValues.forEach(function (value) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.value = value;
    boardEl.append(card);
});

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
            card.textContent = "";
        });
        flippedCards = [];
    }

    if (event.target.classList.contains("flipped")) {
        return;
    }

    event.target.classList.add("flipped");
    event.target.textContent = event.target.dataset.value;
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
