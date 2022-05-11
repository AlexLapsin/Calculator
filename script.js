function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){(b == 0)? undefined: a/b}
function modulo(a,b){return a%b;}

function operate(operator,a,b){
    return operator(a,b);
}

let tempArr = [];
let firstNumb = undefined;
let secondNumb = 0;
let result;
let currentOperator;

const calcMiddle = document.querySelector(".middle");
const operatorsRight = document.querySelector(".operators-right");
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");


function displayVal(value){
    display.textContent = value;
}

buttons.forEach(button => {
    button.addEventListener("click", function(){
        const currentValue = this.value;

        switch(currentValue){
            case "+":
                compute(add);
                break;
            case "-":
                compute(subtract);
                break;
            case "*":
                compute(multiply);
                break;
            case "/":
                compute(divide);
                break;
            case "%":
                compute(modulo);
                break;
            case "=":
                compute(currentOperator);
                break;
            case "clear":
                clearDisplay();
                break;
            case ".":
                break;
            default:
                tempArr.push(currentValue);
                displayVal(tempArr.join(""));
        }
    });
});


function compute(operator){
    if(firstNumb == undefined){
        firstNumb = parseInt(tempArr.join(""));
        result = firstNumb;
    }
    else{
        firstNumb = result;
        secondNumb = parseInt(tempArr.join(""));
        result = operate(operator, firstNumb, secondNumb);      
    }
    currentOperator = operator;
    tempArr = [];
    (result === undefined)? displayVal("Can't divide by 0"): displayVal(result); 
};


function clearDisplay(){
    firstNumb = undefined;
    secondNumb = 0;
    displayValue = "";
    display.textContent = "0";
}
