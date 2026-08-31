/* ================================================================
   JavaScript — Week 5 — Lab 2 (Option B) · Memory Match
   ----------------------------------------------------------------
   6 pairs (12 cards) shuffled into a grid. Click two cards to flip
   them; if the values match, they stay revealed. No timers here —
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

const cardValues = shuffle([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]);

const boardEl = document.getElementById("board");
const statusEl = document.getElementById("status");
const movesEl = document.getElementById("moves");

let flippedCards = [];
let moves = 0;
let matchedPairs = 0;
/* ---- END PROVIDED ------------------------------------------------- */


/* =================================================================
   YOUR CODE — Part A: build the board (review of Week 4)

   Loop over `cardValues`. For each value:
     - create a <div class="card"> element
     - set its data-value attribute to that value (element.dataset.value = value,
       or setAttribute("data-value", value))
     - append it to boardEl
   Leave its textContent EMPTY for now — cards start face-down.
   ================================================================= */



/* =================================================================
   YOUR CODE — Part B: ONE click listener on boardEl (delegation)

   Inside the handler:
     1. If event.target doesn't have class "card", return (ignore).
     2. If event.target has class "matched", return (already solved).
     3. If flippedCards.length === 2 already (an unresolved MISMATCHED
        pair is sitting there from last click): flip both of those
        back down first — remove class "flipped", clear their
        textContent — then empty the flippedCards array.
     4. If the clicked card is already flipped (classList contains
        "flipped"), return (ignore double-click on the same card).
     5. Flip the clicked card face-up: add class "flipped", set its
        textContent to its own dataset.value, push it onto
        flippedCards.
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

