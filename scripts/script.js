

let h1 = document.querySelector("h1");
h1.textContent = "";

let results = "";

let gotResults = false;

let x = "0";
let y = "0";
let operator = "";


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


function evaluate(x,operator,y) {
  switch(operator) {
    case "+":
    return add(x,y);

    case "-":
    return subtract(x,y);

    case "x":
    return multiply(x,y);

    case "÷":
    return divide(x,y);

  }
}

function clear() {
  h1.textContent = "";
  x = "";
  y = "";
  operator = "";
  results = "";
  p.textContent = "0.00";
}


let buttons = document.querySelectorAll("button");

const numbers = document.querySelectorAll(".number");
numbers.forEach(function(numberButton){
  numberButton.addEventListener("click", (e) => {
    if (gotResults == false) {h1.textContent += e.target.textContent;
    } else {
      gotResults = false;
      clear();
      h1.textContent = e.target.textContent;
    }
  });
})

const operators = document.querySelectorAll(".operator");
operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    gotResults = false;
    if ((p.textContent == "0.00") && (h1.textContent != "") && (h1.textContent !== "-")){
    x = h1.textContent;
    operator = e.target.textContent;
    p.textContent = h1.textContent += e.target.textContent;;
    h1.textContent = "";
  }else if(p.textContent == "0.00" && e.target.textContent == "-"){
    h1.textContent = "-";
  }else if((h1.textContent == "-") && (e.target.textContent == "-")){
    x = h1.textContent;
    operator = e.target.textContent;
    p.textContent += h1.textContent += e.target.textContent;;
    h1.textContent = "";
  }else if((h1.textContent != "") && (p.textContent != "") && (h1.textContent != "-")){
    x = h1.textContent;
    operator = e.target.textContent;
    p.textContent = h1.textContent += e.target.textContent;;
    h1.textContent = "";
  } else if ((operator != e.target.textContent) && (h1.textContent != "-") && (p.textContent != "0.00")) {
    operator = e.target.textContent;
    p.textContent = p.textContent.slice(0,-1) + operator;
    }
  });
});


const equal = document.querySelector("#button-equal");
const p = document.querySelector("#results-display");
equal.addEventListener("click", (e) => {
if (p.textContent != "0.00" && h1.textContent != "" && !p.textContent.includes("=")){
  gotResults = true;
y = h1.textContent;
results = h1.textContent += e.target.textContent;;
p.textContent += results;
h1.textContent = "";
  h1.textContent = evaluate(Number(x),operator,Number(y));
  results  = evaluate(Number(x),operator,Number(y));
} else if (p.textContent.includes("=")){

  }
});


const backspace = document.querySelector("#button-backspace");
backspace.addEventListener("click", (e) => {
  if (gotResults == false) {h1.textContent = h1.textContent.slice(0,-1)
  } else {
    gotResults = false;
    clear();
    h1.textContent = ""
  };
});



const clearButton = document.querySelector("#button-clear");
clearButton.addEventListener("click", (e) => {
clear()
});

const decimal = document.querySelector("#button-decimal");
decimal.addEventListener("click", (e) => {
  if (gotResults == false) {
  if(!h1.textContent.includes(".")){
    h1.textContent += e.target.textContent;
    }
  } else {
    gotResults = false;
    clear();
    h1.textContent = e.target.textContent;
  }
});
