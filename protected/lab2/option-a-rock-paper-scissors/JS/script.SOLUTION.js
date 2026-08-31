/* ================================================================
   JavaScript — Week 5 — Lab 2 (Option A) · Rock Paper Scissors
   SOLUTION
================================================================= */
"use strict";

const score = { player: 0, computer: 0, ties: 0 };
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function updateScoreDisplay() {
    scoreEl.textContent =
        "You: " + score.player + " | Computer: " + score.computer + " | Ties: " + score.ties;
}

function decideWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "tie";
    }
    const playerWinsAgainst = { rock: "scissors", paper: "rock", scissors: "paper" };
    if (playerWinsAgainst[playerChoice] === computerChoice) {
        return "player";
    }
    return "computer";
}

document.getElementById("choices").addEventListener("click", function (event) {
    if (!event.target.classList.contains("choice-btn")) {
        return;
    }

    const playerChoice = event.target.dataset.choice;
    const computerChoice = getComputerChoice();
    const outcome = decideWinner(playerChoice, computerChoice);

    let message;
    if (outcome === "player") {
        score.player++;
        message = "You win!";
    } else if (outcome === "computer") {
        score.computer++;
        message = "Computer wins!";
    } else {
        score.ties++;
        message = "It's a tie!";
    }

    resultEl.textContent =
        "You chose " + playerChoice + ", computer chose " + computerChoice + ". " + message;
    updateScoreDisplay();
});
