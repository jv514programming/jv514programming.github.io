
let timer = 29;
let timestart;
let aimScore = -1;

document.getElementById('clickStart').onclick = function(){beginAim()};
document.getElementById('target').onclick = function(){setPos()};

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
    return  yPos + "px";
}
function positionX(){ 
    let xPos =  Math.floor(Math.random() * 1570) + 40;
    return xPos + "px";
}


function gameOver(){

     document.getElementById('target').style.display = "none";
}