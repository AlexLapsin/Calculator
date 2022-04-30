function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

function operate(operator,a,b){
    return operator(a,b);
}

let displayValue = 0;

const calcMiddle = document.querySelector(".middle");
const operatorsRight = document.querySelector(".operators-right");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");


function displayBtn(btn){
     display.textContent = btn.value;
     displayValue = btn.value;
}

buttons.forEach(button => {
    button.addEventListener("click", function(){displayBtn(this)});
});

