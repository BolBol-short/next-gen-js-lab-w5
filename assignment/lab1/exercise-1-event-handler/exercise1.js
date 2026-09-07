/* ================================================================
   JavaScript — Week 5 — Lab 1 · Exercise 1 (event handler)
   [BARE-SPEC]
   ----------------------------------------------------------------
   #btn-inline already has an HTML-attribute handler in index.html:
   onclick="handleInlineClick()" — that's a Function Declaration you
   must define, in the global scope, right here in this file.

   TASK
     1. Define a global function `handleInlineClick()` that sets
        #inline-result's textContent to "Inline handler fired!".
     2. Select #btn-property. Assign its `.onclick` property to a
        FIRST function that sets #property-result's textContent to
        "first handler ran".
     3. Immediately assign #btn-property's `.onclick` AGAIN, to a
        SECOND function that sets #property-result's textContent to
        "second handler ran".
        (This overwrites the first — assigning .onclick twice keeps
        only the last one. That's the whole point of this exercise.)

   EXPECTED OUTPUT (in the browser console, F12)
     inlineResult: Inline handler fired!
     propertyResult: second handler ran

   RUN: open index.html with Live Server, press F12 for the console.
   ================================================================ */

// Write your code below.


/* ---- PROVIDED: fires the clicks so results are printed automatically
   — do not edit. The typeof check just avoids a scary "not defined"
   console error before you've written Part 1 yet. ------------------- */
if (typeof handleInlineClick === "function") {
    document.getElementById("btn-inline").click();
}
document.getElementById("btn-property").click();

console.log("inlineResult:", document.getElementById("inline-result").textContent);
console.log("propertyResult:", document.getElementById("property-result").textContent);
