/* ================================================================
   JavaScript — Week 5 — Lab 2 (Option A) · Rock Paper Scissors
   ----------------------------------------------------------------
   Click a button to play a round against the computer. This is a
   real click-driven game — no prompt loop this time, event
   delegation drives everything.

   Run: open index.html with Live Server, then press F12 for the
   console (score/result also show right on the page).
   ================================================================ */
"use strict";

/* ---- PROVIDED — do not edit -------------------------------------- */
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
/* ---- END PROVIDED ------------------------------------------------- */


/* =================================================================
   YOUR CODE — Part A: decideWinner(playerChoice, computerChoice)

   Return "player", "computer", or "tie".
   Rules: rock beats scissors, scissors beats paper, paper beats rock.
   ================================================================= */
function decideWinner(playerChoice, computerChoice) {

}


/* =================================================================
   YOUR CODE — Part B: ONE click listener on #choices (delegation)

   - Only react if event.target has class "choice-btn"
     (event.target.classList.contains("choice-btn")) — ignore clicks
     that land on the container itself.
   - playerChoice = event.target.dataset.choice
   - computerChoice = getComputerChoice()
   - outcome = decideWinner(playerChoice, computerChoice)
   - if outcome === "player": score.player++, message = "You win!"
     if outcome === "computer": score.computer++, message = "Computer wins!"
     if outcome === "tie": score.ties++, message = "It's a tie!"
   - resultEl.textContent = "You chose " + playerChoice + ", computer chose "
       + computerChoice + ". " + message
   - call updateScoreDisplay()
   ================================================================= */

