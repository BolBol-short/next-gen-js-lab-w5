/* ================================================================
   JavaScript — Week 5 — Lab 1 · Exercise 5 (stopPropagation)
   [BARE-SPEC]
   ----------------------------------------------------------------
   #ex5-inner (a button) is nested INSIDE #ex5-outer (a div). A
   click on the button normally bubbles up and would trigger a
   listener on the outer div too — unless it's stopped.

   TASK
     1. Select #ex5-outer. Add a "click" listener that sets
        #ex5-outer-log's textContent to "outer triggered".
     2. Select #ex5-inner. Add a "click" listener that:
          a. sets #ex5-inner-log's textContent to "inner triggered"
          b. calls event.stopPropagation() so the click does NOT
             bubble up to #ex5-outer's listener

   EXPECTED OUTPUT
     ex5OuterLog: outer not triggered
     ex5InnerLog: inner triggered

     (outer stays UNCHANGED — that's how you know stopPropagation
     worked. If you forgot it, outerLog would say "outer triggered".)

   RUN: open index.html with Live Server, press F12 for the console.
   ================================================================ */

// Write your code below.


/* ---- PROVIDED: clicks the inner button so results print automatically
   — do not edit ------------------------------------------------------- */
document.getElementById("ex5-inner").click();

console.log("ex5OuterLog:", document.getElementById("ex5-outer-log").textContent);
console.log("ex5InnerLog:", document.getElementById("ex5-inner-log").textContent);
