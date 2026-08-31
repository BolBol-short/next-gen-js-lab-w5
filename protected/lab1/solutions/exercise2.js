/* ================================================================
   JavaScript — Week 5 — Lab 1 · Exercise 2 · SOLUTION
================================================================= */

const btnMulti = document.getElementById("btn-multi");
const multiLogEl = document.getElementById("multi-log");

btnMulti.addEventListener("click", function () {
    multiLogEl.textContent += "A";
});
btnMulti.addEventListener("click", function () {
    multiLogEl.textContent += "B";
});

const btnRemove = document.getElementById("btn-remove");

function handleRemoveClick() {
    document.getElementById("remove-log").textContent = "clicked";
}

btnRemove.addEventListener("click", handleRemoveClick);
btnRemove.removeEventListener("click", handleRemoveClick);

document.getElementById("btn-multi").click();
document.getElementById("btn-remove").click();

console.log("multiLog:", document.getElementById("multi-log").textContent);
console.log("removeLog:", document.getElementById("remove-log").textContent);
