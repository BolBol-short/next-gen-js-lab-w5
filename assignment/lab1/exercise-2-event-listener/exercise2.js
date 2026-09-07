/* ================================================================
   JavaScript — Week 5 — Lab 1 · Exercise 2 (event listener)
   [BARE-SPEC]
   ----------------------------------------------------------------
   TASK
     1. Select #btn-multi. Call addEventListener("click", ...) on it
        TWICE, with two DIFFERENT handler functions:
          - the first appends "A" to #multi-log's textContent
          - the second appends "B" to #multi-log's textContent
        (Unlike .onclick, addEventListener does NOT overwrite —
        both handlers should run, in the order you added them.)
     2. Select #btn-remove. Define a named function
        `handleRemoveClick` that sets #remove-log's textContent to
        "clicked". Use addEventListener to attach it, then
        IMMEDIATELY use removeEventListener to remove that exact
        same handler again before any click happens.
        (Since it's removed before the click below fires, the click
        should have no effect — #remove-log stays "not clicked".)

   EXPECTED OUTPUT
     multiLog: AB
     removeLog: not clicked

   RUN: open index.html with Live Server, press F12 for the console.
   ================================================================ */

// Write your code below.


/* ---- PROVIDED: fires the clicks so results are printed automatically
   — do not edit ------------------------------------------------------ */
document.getElementById("btn-multi").click();
document.getElementById("btn-remove").click();

console.log("multiLog:", document.getElementById("multi-log").textContent);
console.log("removeLog:", document.getElementById("remove-log").textContent);
