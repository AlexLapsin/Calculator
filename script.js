function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

function operate(operator,a,b){
    return operator(a,b);
}

let displayValue = "";
let tempArr = [];
let firstVal = 0;

const calcMiddle = document.querySelector(".middle");
const operatorsRight = document.querySelector(".operators-right");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");


// function showVal(value){
//     displayValue += value
//     display.textContent = displayValue;
// }

buttons.forEach(button => {
    button.addEventListener("click", function(){

        const val = this.value;
        let currentVal = 0;
        let sum = 0;

        if(val == "+"){
            //update the first value by doing the operation
            currentVal = parseInt(tempArr.join(""));

            sum = operate(add, firstVal, currentVal);
            showVal(sum);
            displayValue = sum;
            firstVal = sum;

            tempArr = [];
            
            
        }
        else{
            tempArr.push(val);
            showVal(val);
        }
    });
});

function clearDisplay(){
    displayValue = "";
    display.textContent = "";
}
