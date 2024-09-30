"use strict";

function calculate(operation) {
  const input1 = Number(document.querySelector(".input_one").value);
  const input2 = Number(document.querySelector(".input_two").value);
  const result = operation(input1, input2);
  document.querySelector(".result").innerText = result;
  document.querySelector(".input_one").value = "";
  document.querySelector(".input_two").value = "";
}

document.querySelector(".add").addEventListener("click", function () {
  calculate((a, b) => a + b);
});

document.querySelector(".sub").addEventListener("click", function () {
  calculate((a, b) => a - b);
});

document.querySelector(".mult").addEventListener("click", function () {
  calculate((a, b) => a * b);
});

document.querySelector(".div").addEventListener("click", function () {
  calculate((a, b) => (a / b).toFixed(2));
});