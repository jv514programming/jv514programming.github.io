let timer2 = 29;
let timestart2;
let score2 = 0;
let move = true;
let tM = $('#track-me');
var scoreUp;

trackingBegin();

function mouseOn(){
document.getElementById('track-me').onmouseover = function(){
    this.style.backgroundColor = "chartreuse";
    scoreUp = setInterval(increaseScore, 20);
}
document.getElementById('track-me').onmouseout = function(){
    this.style.backgroundColor = "green";
    clearInterval(scoreUp);
}
}

function mouseOff(){
    document.getElementById('track-me').onmouseover= function(){
        this.style.backgroundColor = "green";
        clearInterval(scoreUp);
    }
    document.getElementById('track-me').onmouseout = function(){
        this.style.backgroundColor = "green";
        clearInterval(scoreUp);
    }
}

function trackingBegin(){
document.getElementById('start-tracking-box').onclick = function(){
    this.style.display = "none";
    document.getElementById('track-me').style.display = "block";
    setTimeout(() => {
        timer2 = 29;
        document.getElementById('timer2').innerHTML = timer2 ;
        score2 = 0;
        document.getElementById('score2').innerHTML = score2;
        move = true;
        timeStart2 = 0;
        mouseOn();
        beginTime2();
        aPoint();
    }, 10);
}
}

function whichPoint(){
    let x = Math.floor(Math.random() * 3) + 1;
    return x;
}

function increaseScore(){
    score2++;
    document.getElementById('score2').innerHTML = score2;
}

function beginTime2(){
    timeStart2 = setInterval(() => {
    if(timer2 >= 6){
    document.getElementById('timer2').innerHTML = timer2 ;
    timer2--;
    } else if (timer2 > 0 && timer2 <= 5){
    document.getElementById('timer2').innerHTML = timer2 ;
    document.getElementById('timer2').style.color = 'gold';
    timer2--;
    }
    else {
    document.getElementById('timer2').innerHTML = '0';
    document.getElementById('timer2').style.color = 'red';
    move = false;
    mouseOff();
    clearInterval(timeStart2);
        setTimeout(() => {
            document.getElementById('track-me').style.display = "none";
            document.getElementById('track-me').style.top = "0px";
            document.getElementById('track-me').style.left = "0px";
            document.getElementById('start-tracking-box').style.display = "flex";
            document.getElementById('finish-score2').innerHTML = "Score: " + score2;
            document.getElementById('timer2').style.color = 'white';
        }, 4010);
    }
},1000);
}




// movement

function aPoint(){
    let z = whichPoint();
    if (z == 1 && move == true){
        tM.animate({left: "+=780px"},{duration: 3500});
        setTimeout(() => {
            bPoint();
        }, 3510);
    } else if (z == 2 && move == true){
        tM.animate({top: "+=400px"},{duration: 3000});
        setTimeout(() => {
            dPoint();
        }, 3010);
    } else  if (z == 3 && move == true){
        tM.animate({top: "+=400px", left: "+=780px"},{duration: 4000});
        setTimeout(() => {
            cPoint();
        }, 4010);
    }
}

function bPoint(){
    let z = whichPoint();
    if (z == 1 && move == true){
        tM.animate({left: "-=780px"},{duration: 3500});
        setTimeout(() => {
            aPoint();
        }, 3510);
    } else if (z == 2 && move == true){
        tM.animate({top: "+=400px"},{duration: 3000});
        setTimeout(() => {
            cPoint();
        }, 3010);
    } else if (z == 3 && move == true){
        tM.animate({top: "+=400px", left: "-=780px"},{duration: 4000});
        setTimeout(() => {
            dPoint();
        }, 4010);
    }
}

function cPoint(){
    let z = whichPoint();
    if (z == 1 && move == true){
        tM.animate({left: "-=780px"},{duration: 3500});
        setTimeout(() => {
            dPoint();
        }, 3510);
    } else if (z == 2 && move == true){
        tM.animate({top: "-=400px"},{duration: 3000});
        setTimeout(() => {
            bPoint();
        }, 3010);
    } else if (z == 3 && move == true) {
        tM.animate({top: "-=400px", left: "-=780px"},{duration: 4000});
        setTimeout(() => {
            aPoint();
        }, 4010);
    }
}

function dPoint(){
    let z = whichPoint();
    if (z == 1 && move == true){
        tM.animate({left: "+=780px"},{duration: 3500});
        setTimeout(() => {
            cPoint();
        }, 3510);
    } else if (z == 2 && move == true){
        tM.animate({top: "-=400px"},{duration: 3000});
        setTimeout(() => {
            aPoint();
        }, 3010);
    } else if (z == 3 && move == true){
        tM.animate({top: "-=400px", left: "+=780px"},{duration: 4000});
        setTimeout(() => {
            bPoint();
        }, 4010);
    }
}