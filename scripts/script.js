
//let h1 = document.querySelector("h1");

function add(x,y) {
  return x + y;
}

function subtract(x,y) {
  return x - y;
}

function multiply(x,y) {
  return x * y;
}

function divide(x,y) {
  return x / y;
}


function operate(x,operator,y) {
  if (operator === "add") {
    return add(x,y);
  }

}

console.log(operate(2, add, 5));
