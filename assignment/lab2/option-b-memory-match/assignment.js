/* ================================================================
   JavaScript — Week 5 — Lab 2 (Option B) · Memory Match
   ----------------------------------------------------------------
   6 pairs (12 cards) shuffled into a grid. Click two cards to flip
   them; if the icons match, they stay revealed. No timers here —
   if two flipped cards DON'T match, they stay showing until your
   NEXT click, which flips them back before doing anything else.
   That keeps this project to only what you've learned so far
   (events + DOM + arrays/objects), no setTimeout needed.

   Run: open index.html with Live Server, then press F12 for the
   console.
   ================================================================ */
"use strict";

/* ---- PROVIDED — do not edit -------------------------------------- */
function shuffle(array) {
    // Fisher-Yates shuffle
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

/* Each card VALUE (1-6) maps to a small SVG icon string — the game
   logic only ever compares dataset.value, exactly like plain
   numbers would; this just decides what gets drawn on the card. */
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

/* "New game" button: reshuffles and rebuilds the board itself
   (independently of your Part A code below) so it works no matter
   what your board-building loop looks like. */
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
/* ---- END PROVIDED ------------------------------------------------- */


/* =================================================================
   YOUR CODE — Part A: build the board (review of Week 4)

   Loop over `cardValues`. For each value:
     - create a <div class="card"> element
     - set its data-value attribute to that value (element.dataset.value = value,
       or setAttribute("data-value", value))
     - append it to boardEl
   Leave its innerHTML EMPTY for now — cards start face-down.
   ================================================================= */



/* =================================================================
   YOUR CODE — Part B: ONE click listener on boardEl (delegation)

   Inside the handler:
     1. If event.target doesn't have class "card", return (ignore).
     2. If event.target has class "matched", return (already solved).
     3. If flippedCards.length === 2 already (an unresolved MISMATCHED
        pair is sitting there from last click): flip both of those
        back down first — remove class "flipped", clear their
        innerHTML — then empty the flippedCards array.
     4. If the clicked card is already flipped (classList contains
        "flipped"), return (ignore double-click on the same card).
     5. Flip the clicked card face-up: add class "flipped", set its
        innerHTML to CARD_ICONS[dataset.value] (the PROVIDED lookup
        table above), push it onto flippedCards.
     6. If flippedCards now has 2 cards:
          - moves++ and update movesEl's textContent to "Moves: " + moves
          - if flippedCards[0].dataset.value === flippedCards[1].dataset.value:
              add class "matched" to both, empty flippedCards,
              matchedPairs++
              if matchedPairs === 6: set statusEl's textContent to
                "You matched all pairs in " + moves + " moves!"
          - (if they don't match, just leave them in flippedCards —
            step 3 will clean them up on the next click)
   ================================================================= */

