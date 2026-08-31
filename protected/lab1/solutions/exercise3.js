/* ================================================================
   JavaScript — Week 5 — Lab 1 · Exercise 3 · SOLUTION
================================================================= */

document.getElementById("ex3-box").addEventListener("click", function (event) {
    document.getElementById("ex3-type").textContent =
        "Event type: " + event.type + ", target id: " + event.target.id;
});

document.getElementById("ex3-box").click();

console.log("ex3Type:", document.getElementById("ex3-type").textContent);
