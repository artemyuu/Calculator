let displayResult = document.querySelector("#displayResult");
let resultAction = document.querySelector("#result");
resultAction.addEventListener('click', doResult)
let clear = document.querySelector("#clear");
clear.addEventListener('click', clearDisplay);
let dot = document.querySelector("#dot");
dot.addEventListener('click', dotOn);
let changeSign = document.querySelector("#changeSign");
changeSign.addEventListener('click', changeSgn);
let sqrt = document.querySelector("#sqrt");
sqrt.addEventListener('click', doSqrt);
let powMinusOne = document.querySelector("#powMinusOne");
powMinusOne.addEventListener('click', doPowMinusOne);

let firstNum = null;
let secondNum = null;
let result = null;
let doted = false;
let changedSign = false;
let currentAction;

let nums = [];
for(let i = 0; i < 10; i++){
    nums[i] = document.querySelector(`#n${i}`);
    nums[i].addEventListener('click', pressNumber)
}

let actions = document.querySelectorAll(".action");
for(let i = 0; i < actions.length; i++){
    actions[i].addEventListener('click', pressAction)
}

function pressNumber(){
    if(result != null && doted == false && changedSign == true){
        displayResult.textContent = "";
        result = null;
        doted = false;
        changedSign = false;
    }
    if(displayResult.textContent.length < 9){
        displayResult.textContent += this.textContent;
    }
    
}

function pressAction(){
    currentAction = this.textContent;
    if(firstNum == null){
        firstNum = +displayResult.textContent;
    }
    doted = false;
    displayResult.textContent = "";
}

function clearDisplay(){
    displayResult.textContent = "";
    doted = false;
    changedSign = false;
}

function dotOn(){
    if(result != null && doted == false){
        displayResult.textContent = "";
        displayResult.textContent += "0.";
        doted = true;
    }

    if(result == null && doted == false){
        displayResult.textContent += "0.";
        doted = true; 
    }

    if(doted == false){
        displayResult.textContent += ".";
        doted = true;  
    }
        
    
}

function doPowMinusOne(){
    let nowDisp = +displayResult.textContent;
    if(nowDisp == 0 || isNaN(result)){
        result = "Ошибка";
        displayResult.textContent = result;
    }
    else {
        result = (1 / nowDisp);
        displayResult.textContent = result;
    }
    changedSign = true;
}

function doSqrt(){
    let nowDisp = +displayResult.textContent;
    if(nowDisp > 0){
        result = Math.sqrt(nowDisp);
        displayResult.textContent = result;
    }
    else {
        result = "Ошибка";
        displayResult.textContent = result;
    }
    changedSign = true;
}

function changeSgn(){
    if(result != null && doted == false && changedSign == true){
        displayResult.textContent = "";
        result = null;
        doted = false;
        changedSign = false;
    }

    if(changedSign == false){
        displayResult.textContent = "-" + displayResult.textContent;
        changedSign = true;
    }
    else {
        displayResult.textContent = displayResult.textContent.slice(1,displayResult.length);
        changedSign = false;
    }

}

function doResult(){
    if(currentAction != null){
        secondNum = +displayResult.textContent;
        switch(currentAction){
            case '+':
                result = (firstNum + secondNum);
                firstNum = null;
                secondNum = null;
            break;
            case '-':
                result = (firstNum - secondNum);
                firstNum = null;
                secondNum = null;
            break;
            case '*':
                result = (firstNum * secondNum);
                firstNum = null;
                secondNum = null;
            break;
            case '/':
                if(secondNum == 0){
                    result = "Ошибка";
                }
                else{
                    result = (firstNum / secondNum);
                    firstNum = null;
                    secondNum = null;
                }
            break;
        }
            changedSign = true;
            doted = false;
            displayResult.textContent = result;
        }
}
