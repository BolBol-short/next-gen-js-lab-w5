/* ================================================================
   JavaScript — Week 5 — Lab 2 (Option C) · Tic-Tac-Toe
   ----------------------------------------------------------------
   1-Player (vs a simple computer) or 2-Player — pick one with the
   mode buttons. ONE delegated click listener on #board runs the
   whole game — no per-cell listeners.

   The computer (1P mode) is intentionally simple: it just plays
   the first empty cell. No delay/animation — its move happens
   immediately, right inside the same click handler.

   Run: open index.html with Live Server, then press F12 for the
   console.
   ================================================================ */
"use strict";

/* ---- PROVIDED — do not edit -------------------------------------- */
const WINNING_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],   // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],   // columns
    [0, 4, 8], [2, 4, 6],              // diagonals
];

/* Maps each mark ("X" or "O") to a small SVG icon string — the game
   logic still only ever compares the plain "X"/"O" strings, exactly
   like before; this just decides what gets drawn in the cell. */
const MARK_ICONS = {
    X: '<svg viewBox="0 0 24 24"><line x1="4.5" y1="4.5" x2="19.5" y2="19.5" stroke="#2F6FED" stroke-width="3" stroke-linecap="round"/><line x1="19.5" y1="4.5" x2="4.5" y2="19.5" stroke="#2F6FED" stroke-width="3" stroke-linecap="round"/></svg>',
    O: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7.7" stroke="#F59E0B" stroke-width="3"/></svg>',
};

const cells = document.querySelectorAll(".cell");
const statusEl = document.getElementById("status");
const boardState = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";
let gameOver = false;
let vsComputer = false;

document.getElementById("mode-1p").addEventListener("click", function () {
    startGame(true);
});
document.getElementById("mode-2p").addEventListener("click", function () {
    startGame(false);
});

function startGame(isVsComputer) {
    vsComputer = isVsComputer;
    document.getElementById("mode-select").classList.add("hidden");
    document.getElementById("game-area").classList.remove("hidden");
    statusEl.textContent = "Player X's turn";
}

/* "Play Again" button: resets the board and sends you back to the
   1P/2P mode picker. Works no matter what your Part A-E code does,
   since it only touches PROVIDED state (boardState, cells, etc). */
document.getElementById("restart-btn").addEventListener("click", function () {
    for (let i = 0; i < boardState.length; i++) {
        boardState[i] = "";
    }
    cells.forEach(function (cell) {
        cell.innerHTML = "";
    });
    currentPlayer = "X";
    gameOver = false;
    document.getElementById("game-area").classList.add("hidden");
    document.getElementById("mode-select").classList.remove("hidden");
});
/* ---- END PROVIDED ------------------------------------------------- */


/* =================================================================
   YOUR CODE — Part A: checkWinner(board)

   Loop over WINNING_LINES. For each [a, b, c]:
     if board[a] is not empty AND board[a] === board[b] AND
     board[a] === board[c], return board[a] (the winning mark).
   If no line wins AND every cell in `board` is non-empty, return
   "tie". Otherwise return null (game continues).
   ================================================================= */
function checkWinner(board) {

}


/* =================================================================
   YOUR CODE — Part B: computerMove(board)

   Return the index of the FIRST empty ("") cell in `board`.
   Hint: board.findIndex(...)
   ================================================================= */
function computerMove(board) {

}


/* =================================================================
   YOUR CODE — Part C: playMove(index, player)

   - Set boardState[index] = player.
   - Set cells[index]'s innerHTML = MARK_ICONS[player] (the PROVIDED
     lookup table above — draws the X/O icon instead of plain text).
   - winner = checkWinner(boardState)
   - if winner: gameOver = true; statusEl.textContent =
       winner === "tie" ? "It's a tie!" : "Player " + winner + " wins!"
       return true (the game ended)
   - otherwise return false (game continues)
   ================================================================= */
function playMove(index, player) {

}


/* =================================================================
   YOUR CODE — Part D: switchPlayer()

   Flip currentPlayer between "X" and "O", and update statusEl's
   textContent to "Player " + currentPlayer + "'s turn".
   ================================================================= */
function switchPlayer() {

}


/* =================================================================
   YOUR CODE — Part E: ONE click listener on #board (delegation)

   handler(event):
     1. If gameOver, return.
     2. If event.target doesn't have class "cell", return.
     3. index = Number(event.target.dataset.index)
     4. If boardState[index] is already taken (not ""), return.
     5. ended = playMove(index, currentPlayer)
        if ended, return.
     6. switchPlayer()
     7. If vsComputer AND currentPlayer === "O" AND not gameOver:
          compIndex = computerMove(boardState)
          compEnded = playMove(compIndex, currentPlayer)
          if not compEnded: switchPlayer()   (back to "X")

   Attach it: document.getElementById("board").addEventListener("click", ...)
   ================================================================= */

