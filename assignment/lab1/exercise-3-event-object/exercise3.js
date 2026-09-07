/* ================================================================
   JavaScript — Week 5 — Lab 1 · Exercise 3 (the event object)
   [BARE-SPEC]
   ----------------------------------------------------------------
   Every handler function receives an `event` object as its first
   argument, describing what just happened.

   TASK
     1. Select #ex3-box. Add a "click" listener whose handler takes
        one parameter, `event`.
     2. Inside the handler, set #ex3-type's textContent to:
          "Event type: " + event.type + ", target id: " + event.target.id

   EXPECTED OUTPUT
     ex3Type: Event type: click, target id: ex3-box

   RUN: open index.html with Live Server, press F12 for the console.
   ================================================================ */

// Write your code below.


/* ---- PROVIDED: fires the click so the result is printed automatically
   — do not edit ------------------------------------------------------ */
document.getElementById("ex3-box").click();

console.log("ex3Type:", document.getElementById("ex3-type").textContent);
