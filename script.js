function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

function operate(operator,a,b){
    return operator(a,b);
}

const calcContainer = document.querySelector(".calculator-container");
const digitsContainer = document.createElement("div");
calcContainer.appendChild(digitsContainer);

createDigitBtns();
const dotBtn = document.createElement("button");
dotBtn.textContent = ".";
digitsContainer.appendChild(dotBtn);



function createDigitBtns(){
for(i=0; i<10; i++){
        const digit = document.createElement("button");
        digit.classList.add("digit"+i);
        digit.textContent = i;
        digitsContainer.appendChild(digit);
        // digit.addEventListener("",);
    };
};
