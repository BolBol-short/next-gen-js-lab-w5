/* ================================================================
   JavaScript — Week 5 — Lab 1 · Exercise 1 · SOLUTION
================================================================= */

function handleInlineClick() {
    document.getElementById("inline-result").textContent = "Inline handler fired!";
}

const btnProperty = document.getElementById("btn-property");

btnProperty.onclick = function () {
    document.getElementById("property-result").textContent = "first handler ran";
};

btnProperty.onclick = function () {
    document.getElementById("property-result").textContent = "second handler ran";
};

if (typeof handleInlineClick === "function") {
    document.getElementById("btn-inline").click();
}
document.getElementById("btn-property").click();

console.log("inlineResult:", document.getElementById("inline-result").textContent);
console.log("propertyResult:", document.getElementById("property-result").textContent);
