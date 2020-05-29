let buttons = document.querySelectorAll('.button');
let screenHistory = document.querySelector('.screen-top');
let screen = document.querySelector('.screen-bot');
let operatorScreen = document.querySelector('.screen-operator');

let mainNum = '';
let pendingNum = '';
let calcStarted = false;
let pendingOperator = '';
let currentOperator = '';
let toExecute = false;
let canBackspace = false;
let dividedByZero = false;

buttons.forEach(e => {
    e.addEventListener('click', function(){
        let bP = e.innerHTML;
        executeButton(bP);
    })
});

function executeButton(e){
   if(e >= 0){
       outputNum(e);
   }else if(e == '+' || e == '-' || e == '*' || e == '÷'){
       operator(e);
    } else if(e == 'C'){
        clear();
    } else if(e == '⌫'){
        backspace();
    }else if(e == '.'){
        decimal();
    }else if (e == '='){
        equals();
    }
}

function outputNum(e){
    if(dividedByZero == false){
        canBackspace = true;
        if(calcStarted == false){
            if(mainNum.length < 9){
                if(mainNum === '0' && e === '0'){
                }else{
                    if (mainNum === '0'){
                        mainNum = e;
                    } else{
                        mainNum += e;
                    }
                        screen.innerHTML = mainNum;
                        currentOperator = pendingOperator;
                        toExecute = true;  
                }
            }
        } else {
            if(pendingNum.length < 9){
                if(pendingNum === '0' && e === '0'){
                }else{
                    if (pendingNum === '0'){
                        pendingNum = e;
                    } else{
                        pendingNum += e;
                    }
                        screen.innerHTML = pendingNum;
                        currentOperator = pendingOperator;
                        toExecute = true;      
                } 
            }
        }
    }
}

function operator(e){
    if(dividedByZero == false){
        canBackspace = false;
        if(calcStarted == false){
            screenHistory.innerHTML = mainNum;
        }
        if(mainNum == ''){
        }else{
            calcStarted = true;
            pendingOperator = e;
            operatorScreen.innerHTML = e;
            if(toExecute == true){
                executing();
                toExecute = false;
            }
        }
    }
}

function executing(){
    if(pendingNum == ''){
        pendingNum = '0';
    }
    let m = parseFloat(mainNum);
    let p = parseFloat(pendingNum);
    if(currentOperator == '+'){
        mainNum = m + p;
    }
    if(currentOperator == '-'){
        mainNum = m - p;
    }
    if(currentOperator == '*'){
        mainNum = m * p;
    }
    if(currentOperator == '÷'){
        if(p == '0'){
            dividedByZero = true;
        }else{
            mainNum = m / p;
        }
    }
    if(dividedByZero == false){
        mainNum = Math.round(mainNum * 10000) /10000;
        mainNum = mainNum.toString();
        screenHistory.innerHTML = mainNum;
        pendingNum = '';
        canBackspace = false;
    } else{
       canBackspace = false;
       screenHistory.innerHTML = '';
       operatorScreen.innerHTML = '';
       screen.innerHTML = "BAD!"
    }
}

function clear(){
    screen.innerHTML = '';
    screenHistory.innerHTML = '';
    operatorScreen.innerHTML = '';
    mainNum = '';
    pendingNum = '';
    calcStarted = false;
    pendingOperator = '';
    currentOperator = '';
    toExecute = false;
    dividedByZero = false;
}

function backspace(){
    if(canBackspace == true){
        if (calcStarted == false){
            mainNum = mainNum.toString();
            mainNum = mainNum.slice(0,  -1);
            screen.innerHTML = mainNum;
        } else {
            pendingNum = pendingNum.toString();
            pendingNum = pendingNum.slice(0,  -1);
            screen.innerHTML = pendingNum;
        }
    }
}

function decimal(){
    if(dividedByZero == false){
        canBackspace = true;
        if(calcStarted == false){
            let a = Array.from(mainNum);
            if (a.includes('.')){
            }else if(mainNum == ''){
                mainNum += '0.';
                screen.innerHTML = mainNum;
            }else{
                mainNum += '.';
                screen.innerHTML = mainNum;
            }
        } else{
            let b = Array.from(pendingNum);
            if(b.includes('.')){
            }else if(pendingNum == ''){
                pendingNum += '0.';
                screen.innerHTML = pendingNum;
            }else{
                pendingNum += '.';
                screen.innerHTML = pendingNum;
            }
        }
    }
}

function equals(){
  executing();
  toExecute = false;
  if(dividedByZero == false){
    screen.innerHTML = mainNum;
  }
}