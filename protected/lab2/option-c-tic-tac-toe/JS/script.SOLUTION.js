/* ================================================================
   JavaScript — Week 5 — Lab 2 (Option C) · Tic-Tac-Toe · SOLUTION
================================================================= */
"use strict";

const WINNING_LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
];

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

function checkWinner(board) {
    for (let i = 0; i < WINNING_LINES.length; i++) {
        const [a, b, c] = WINNING_LINES[i];
        if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    if (board.every(function (cell) { return cell !== ""; })) {
        return "tie";
    }
    return null;
}

function computerMove(board) {
    return board.findIndex(function (cell) { return cell === ""; });
}

function playMove(index, player) {
    boardState[index] = player;
    cells[index].textContent = player;

    const winner = checkWinner(boardState);
    if (winner) {
        gameOver = true;
        statusEl.textContent = winner === "tie" ? "It's a tie!" : "Player " + winner + " wins!";
        return true;
    }
    return false;
}

function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusEl.textContent = "Player " + currentPlayer + "'s turn";
}

document.getElementById("board").addEventListener("click", function (event) {
    if (gameOver) {
        return;
    }
    if (!event.target.classList.contains("cell")) {
        return;
    }

    const index = Number(event.target.dataset.index);
    if (boardState[index] !== "") {
        return;
    }

    const ended = playMove(index, currentPlayer);
    if (ended) {
        return;
    }

    switchPlayer();

    if (vsComputer && currentPlayer === "O" && !gameOver) {
        const compIndex = computerMove(boardState);
        const compEnded = playMove(compIndex, currentPlayer);
        if (!compEnded) {
            switchPlayer();
        }
    }
});
