

let x = "";
let y = "";
let operator = "";
let results = "";
let gotResults = false; //mitigates errors

const p = document.querySelector("#results-display");
p.textContent = "0.00";
const h1 = document.querySelector("h1");
h1.textContent = "";

function evaluate(x,operator,y) {
  switch(operator) {
    case "+":
    return x + y;

    case "-":
    return x - y;

    case "x":
    return x * y;

    case "÷":
    return x / y;

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

//gives number buttons 0-9 functionality
const numbers = document.querySelectorAll(".number");
numbers.forEach((numberButton) => {
  numberButton.addEventListener("click", (e) => {
    if (gotResults == false) {h1.textContent += e.target.textContent;
    } else {
      gotResults = false;
      clear();
      h1.textContent = e.target.textContent;
    }
  });
})

//gives operator buttons -+/* functionality
const operators = document.querySelectorAll(".operator");
operators.forEach((operatorButton) => {
  operatorButton.addEventListener("click", (e) => {
    gotResults = false;
    switch(true){

      //populates x and operator and transfers info from h1 to p
      case (p.textContent == "0.00" && h1.textContent != "" && h1.textContent !== "-"):
      x = h1.textContent;
      operator = e.target.textContent;
      p.textContent = h1.textContent += e.target.textContent;;
      h1.textContent = "";
      break;

      //puts a negative symbol into h1, making x negative
      case (p.textContent == "0.00" && e.target.textContent == "-" && h1.textContent == ""):
      h1.textContent = "-";
      break;

      //makes y negative
      case ( x != "" && operator != "-" && e.target.textContent == "-" && h1.textContent == ""):
      h1.textContent = "-";
      break;

      //makes a new operation using the number given from a previous operation
      case (h1.textContent != "" && p.textContent != "" && h1.textContent != "-" && gotResults):
      x = h1.textContent;
      operator = e.target.textContent;
      p.textContent = h1.textContent += e.target.textContent;;
      h1.textContent = "";
      break;

      //changes operator in p
      case (operator != e.target.textContent && h1.textContent != "-" && p.textContent != "0.00" && h1.textContent == ""):
      operator = e.target.textContent;
      p.textContent = p.textContent.slice(0,-1) + operator;
      break;

      //makes operator buttons perform evaluate() if pressed while x exists
      case (x != "" && operator != "" && h1.textContent != "" && !p.textContent.includes("=") && h1.textContent != "-"):
      y = h1.textContent;
      h1.textContent = "";
      p.textContent = results;
      p.textContent = evaluate(Number(x),operator,Number(y)) + e.target.textContent;
      x = evaluate(Number(x),operator,Number(y));
      operator = e.target.textContent;
      break;

      //fixes error when trying to add operations after hitting equals
      case p.textContent.includes("="):
      x = h1.textContent;
      operator = e.target.textContent;
      p.textContent = x + operator;
      h1.textContent = "";
      break;

      }
    });
  });


const equal = document.querySelector("#button-equal");
equal.addEventListener("click", (e) => {
  if (p.textContent != "0.00" && h1.textContent != "" && !p.textContent.includes("=")){
    gotResults = true;
    y = h1.textContent;
    results = h1.textContent += e.target.textContent;;
    p.textContent += results;
    h1.textContent = evaluate(Number(x),operator,Number(y));
    results  = evaluate(Number(x),operator,Number(y));
  } else if (p.textContent.includes("=")){
    //ignores equal button if equal symbol is in p
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
