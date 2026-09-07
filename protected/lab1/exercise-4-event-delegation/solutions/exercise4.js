/* ================================================================
   JavaScript — Week 5 — Lab 1 · Exercise 4 · SOLUTION
================================================================= */

document.getElementById("ex4-list").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        document.getElementById("ex4-result").textContent =
            "Selected: " + event.target.dataset.fruit;
    }
});

document.querySelectorAll("#ex4-list li")[1].click();

console.log("ex4Result:", document.getElementById("ex4-result").textContent);
