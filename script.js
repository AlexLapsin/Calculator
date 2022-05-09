function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

function operate(operator,a,b){
    return operator(a,b);
}

let tempArr = [];
let firstVal = 0;

const calcMiddle = document.querySelector(".middle");
const operatorsRight = document.querySelector(".operators-right");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");


function displayVal(value){
    display.textContent = value;
}

buttons.forEach(button => {
    button.addEventListener("click", function(){

        const val = this.value;
        let currentVal = parseInt(tempArr.join(""));
        let sum = 0;

        if(val == "+"){
            sum = operate(add, firstVal, currentVal);
            firstVal = sum;
            tempArr = [];
            displayVal(sum);
            
        }
        else{
            tempArr.push(val);
            displayVal(tempArr.join(""));
        }
    });
});

function clearDisplay(){
    displayValue = "";
    display.textContent = "";
}
