
let timer = 29;
let timestart;
let aimScore = -1;

document.getElementById('clickStart').onclick = function(){beginAim()};
document.getElementById('target').onclick = function(){setPos()};
document.getElementById('target').onmouseover = function(){grow()};
document.getElementById('target').onmouseout = function(){shrink()};

function beginTime(){
    timeStart = setInterval(() => {
    if(timer >= 6){
    document.getElementById('timer').innerHTML = timer ;
    timer--;
    } else if (timer > 0 && timer <= 5){
    document.getElementById('timer').innerHTML = timer ;
    document.getElementById('timer').style.color = 'gold';
    timer--;
    }
    else {
    document.getElementById('timer').innerHTML = '0';
    document.getElementById('timer').style.color = 'red';
    clearInterval(timeStart);
    document.getElementById('target').style.display = "none";
        setTimeout(() => {
            document.getElementById('clickStart').style.display = "block";
        }, 3000);
    }
},1000);
}


function beginAim(){
    timer = 29;
    aimScore = -1;
    document.getElementById('timer').innerHTML = '30';
    document.getElementById('timer').style.color = 'white';
    document.getElementById('clickStart').style.display = "none";
    document.getElementById('target').style.display = "block";
    setPos();
    beginTime();
}

let tempX;
let tempY;

function setPos(){
    let x = positionX();
    let y = positionY();
    document.getElementById('target').style.top = y ;
    document.getElementById('target').style.left = x ;
    aimScore ++;
    document.getElementById('score').innerHTML = aimScore;
}
function positionY(){
    let yPos =  Math.floor(Math.random() * 400);
    tempY = yPos;
    return  yPos + "px";
}
function positionX(){ 
    let xPos =  Math.floor(Math.random() * 1570) + 40;
    tempX = xPos;
    return xPos + "px";
}

function grow(){
    let yy = (tempY - 5) + "px";
    let xx = (tempX - 5) + "px";
    document.getElementById('target').style.top = yy;
    document.getElementById('target').style.left = xx;
}
function shrink(){
    let yy = tempY + "px";
    let xx = tempX + "px";
    document.getElementById('target').style.top = yy;
    document.getElementById('target').style.left = xx;
}