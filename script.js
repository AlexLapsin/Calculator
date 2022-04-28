function add(a,b){return a+b;}
function subtract(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}

function operate(operator,a,b){
    return operator(a,b);
}

const calcMiddle = document.querySelector(".middle");
const operatorsRight = document.querySelector(".operators-right");
const digitsContainer = document.createElement("div");
digitsContainer.classList.add("digits-container");
calcMiddle.insertBefore(digitsContainer,operatorsRight);

createDigitBtns();


function createDigitBtns(){
for(i=1; i<=11; i++){
        const digit = document.createElement("button");
        if(i==10){
            digit.classList.add("digit-0")
            digit.textContent = "0";
        }
        else if(i==11){
            digit.classList.add("digit-dot");
            digit.textContent = ".";
        }else{
            digit.classList.add("digit-"+i);
            digit.textContent = i;
        }    

        digitsContainer.appendChild(digit);
        // digit.addEventListener("",);
    };
};
