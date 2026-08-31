/* ================================================================
   JavaScript — Week 5 — Lab 1 · Exercise 5 · SOLUTION
================================================================= */

document.getElementById("ex5-outer").addEventListener("click", function () {
    document.getElementById("ex5-outer-log").textContent = "outer triggered";
});

document.getElementById("ex5-inner").addEventListener("click", function (event) {
    document.getElementById("ex5-inner-log").textContent = "inner triggered";
    event.stopPropagation();
});

document.getElementById("ex5-inner").click();

console.log("ex5OuterLog:", document.getElementById("ex5-outer-log").textContent);
console.log("ex5InnerLog:", document.getElementById("ex5-inner-log").textContent);
