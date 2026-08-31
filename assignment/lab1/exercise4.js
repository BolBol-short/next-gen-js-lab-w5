/* ================================================================
   JavaScript — Week 5 — Lab 1 · Exercise 4 (event delegation)
   [BARE-SPEC]
   ----------------------------------------------------------------
   TASK
     1. Select #ex4-list (the <ul>, the PARENT). Add ONE "click"
        listener to it — do NOT add a listener to each <li>.
     2. Inside the handler, check whether the click landed on an
        <li>: `event.target.tagName === "LI"`.
     3. If it did, set #ex4-result's textContent to:
          "Selected: " + event.target.dataset.fruit
        (each <li> has a data-fruit="..." attribute — dataset.fruit
        reads it back for you, no getAttribute needed).
     4. If the click landed on the <ul> itself (not a specific
        <li>), do nothing.

   EXPECTED OUTPUT
     ex4Result: Selected: banana

   RUN: open index.html with Live Server, press F12 for the console.
   ================================================================ */

// Write your code below.


/* ---- PROVIDED: clicks the 2nd <li> (Banana) so the result prints
   automatically — do not edit ---------------------------------------- */
document.querySelectorAll("#ex4-list li")[1].click();

console.log("ex4Result:", document.getElementById("ex4-result").textContent);
