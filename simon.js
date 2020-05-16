let cB = document.getElementById('center-board');
let cT = document.getElementById('center-text');
let cC = document.getElementById('center-cover');
let fC = document.getElementById('full-cover');
let cO = document.getElementById('center-off');

let rP = document.getElementById('red-panel');
let yP = document.getElementById('yellow-panel');
let bP = document.getElementById('blue-panel');
let gP = document.getElementById('green-panel');

let ff7 = document.getElementById('ff7');
let win = document.getElementById('win');
let lose = document.getElementById('lose');

let redInPlay = false;
let yellowInPlay = false;
let greenInPlay = false;
let blueInPlay = false;
let playedPanels = [];
let score = 0;
let round = 0;
let playing = false;
let currentPanel = '';
playButtonOn();

// buttons

function playButtonOn(){
    cO.style.display = "block";
    cT.innerHTML = "Play";
    cC.onmouseenter = function(){
        cB.style.border = "2px solid white";
        cB.style.cursor = "pointer";
        cT.style.cursor = "pointer";
    }
    cC.onmouseleave = function(){
        cB.style.border = "none";
        cB.style.borderRight = "2px solid rgb(19, 18, 18)";
        cB.style.borderBottom = "2px solid rgb(19, 18, 18)";
        cB.style.cursor = "default";
        cT.style.cursor = "default";
    }
    cO.style.display = "none";
    cC.onclick = function(){
        score = 0;
        round = 0;
        playedPanels = [];
        playing = true;
        playButtonOff();
        ff7.play();
        ff7.loop = true;
        playAnimation();
        cB.style.backgroundColor = "white";
        cT.style.color = "gray";
        setTimeout(() => {
            cB.style.backgroundColor = "black";
            cT.style.color = "white";
            cT.innerHTML = "3";
            setTimeout(() => {
                cT.innerHTML = "2";
                setTimeout(() => {
                    cT.innerHTML = "1";
                    setTimeout(() => {
                        cT.innerHTML = "GO!";
                        setTimeout(() => {
                            cT.innerHTML = "";
                            setTimeout(() => {
                                selectPanel();
                                guyAnimation();
                            }, 500);
                        }, 1000);
                    }, 1200);
                }, 1000);
            }, 1000);
        }, 200);
    }
}


function playButtonOff(){
    cC.onmouseenter = function(){
        cB.style.border = "none";
        cB.style.borderRight = "2px solid rgb(19, 18, 18)";
        cB.style.borderBottom = "2px solid rgb(19, 18, 18)";
        cB.style.cursor = "default";
        cT.style.cursor = "default";
    }
    cC.onmouseleave = function(){
        cB.style.border = "none";
        cB.style.borderRight = "2px solid rgb(19, 18, 18)";
        cB.style.borderBottom = "2px solid rgb(19, 18, 18)";
        cB.style.cursor = "default";
        cT.style.cursor = "default";
    }
    cC.onclick = '';
    cO.style.display = "block";
}

function restart(){
    cO.style.display = "block";
    cC.onmouseenter = function(){
        cB.style.border = "2px solid white";
        cB.style.cursor = "pointer";
        cT.style.cursor = "pointer";
    }
    cC.onmouseleave = function(){
        cB.style.border = "none";
        cB.style.borderRight = "2px solid rgb(19, 18, 18)";
        cB.style.borderBottom = "2px solid rgb(19, 18, 18)";
        cB.style.cursor = "default";
        cT.style.cursor = "default";
    }
    cT.innerHTML = "Again?"
    cO.style.display = "none";
    cC.onclick = function(){
        lose.pause();
        lose.currentTime = 0;
        win.pause();
        win.currentTime = 0;
        playButtonOn();
    }
}

function redClickable(){
    rP.style.cursor = "pointer";
    rP.onclick = function(){
        panelsUnclickable();
        rP.style.backgroundColor = "red";
        rP.style.height = "290px";
        rP.style.width = "290px";
        setTimeout(() => {
            rP.style.height = "300px";
            rP.style.width = "300px"; 
            }, 20);
        setTimeout(() => {
            rP.style.backgroundColor = "rgb(138, 1, 1)"; 
            }, 500);
        if(redInPlay == true){
            score++;
            round++;
            nextRound();
        } else {
            setTimeout(() => {
               gameOver();
           }, 510);
        }
    }
    fC.style.display = "none";
}

function yellowClickable(){
    yP.style.cursor = "pointer";
    yP.onclick = function(){
        panelsUnclickable();
        yP.style.backgroundColor = "yellow";
        yP.style.height = "290px";
        yP.style.width = "290px";
        setTimeout(() => {
            yP.style.height = "300px";
            yP.style.width = "300px"; 
            }, 20);
        setTimeout(() => {
            yP.style.backgroundColor = "rgb(145, 145, 2)"; 
            }, 500);
        if(yellowInPlay == true){
            score++;
            round++;
            nextRound();
        } else {
           setTimeout(() => {
               gameOver();
           }, 510);
        }
    }
    fC.style.display = "none";
}

function greenClickable(){
    gP.style.cursor = "pointer";
    gP.onclick = function(){
        panelsUnclickable();
        gP.style.backgroundColor = "green";
        gP.style.height = "290px";
        gP.style.width = "290px";
        setTimeout(() => {
            gP.style.height = "300px";
            gP.style.width = "300px"; 
            }, 20);
        setTimeout(() => {
            gP.style.backgroundColor = "rgb(1, 66, 1)"; 
            }, 500);
        if(greenInPlay == true){
            score++;
            round++;
            nextRound();
        } else {
           setTimeout(() => {
               gameOver();
           }, 510);
        }
    }
    fC.style.display = "none";
}

function blueClickable(){
    bP.style.cursor = "pointer";
    bP.onclick = function(){
        panelsUnclickable();
        bP.style.backgroundColor = "blue";
        bP.style.height = "290px";
        bP.style.width = "290px";
        setTimeout(() => {
            bP.style.height = "300px";
            bP.style.width = "300px"; 
            }, 20);
        setTimeout(() => {
            bP.style.backgroundColor = "rgb(0, 0, 134)"; 
            }, 500);
        if(blueInPlay == true){
            score++;
            round++;
            nextRound();
        } else {
           setTimeout(() => {
               gameOver();
           }, 510);
        }
    }
    fC.style.display = "none";
}

function random1to4(){
    let num = Math.floor(Math.random() * 4) + 1;
    return num;
}

function panelsUnclickable(){
    fC.style.display = "block";
}

function panelsClickable(){
    redClickable();
    yellowClickable();
    greenClickable();
    blueClickable();
}

function selectPanel(){
        panelsUnclickable();
        let x = random1to4();
        if (x == 1){
            playedPanels.push('red');
            rP.style.backgroundColor = "red";
            setTimeout(() => {
                rP.style.backgroundColor = "rgb(138, 1, 1)";
            }, 750);
        } else if (x == 2){
            playedPanels.push('yellow');
            yP.style.backgroundColor = "yellow";
            setTimeout(() => {
                yP.style.backgroundColor = "rgb(145, 145, 2)";
            }, 750);
        } else if (x == 3){
            playedPanels.push('green');
            gP.style.backgroundColor = "green";
            setTimeout(() => {
                gP.style.backgroundColor = "rgb(1, 66, 1)";
            }, 750);
        } else if (x == 4){
            playedPanels.push('blue');
            bP.style.backgroundColor = "blue";
            setTimeout(() => {
                bP.style.backgroundColor = "rgb(0, 0, 134)";
            }, 750);
        } else {}
        setTimeout(() => {
            nextRound();
        }, 770);
} 


function playPanels(){
        let i = 0;
        fC.style.display = "block";
        let p = setInterval(() => {
            if(playedPanels[i] == 'red'){
                rP.style.backgroundColor = "red";
                setTimeout(() => {
                    rP.style.backgroundColor = "rgb(138, 1, 1)";
                    i++;
                }, 900);
            } else if(playedPanels[i] == 'yellow'){
                yP.style.backgroundColor = "yellow";
                setTimeout(() => {
                    yP.style.backgroundColor = "rgb(145, 145, 2)";
                    i++;
                }, 900);
            } else if(playedPanels[i] == 'green'){
                gP.style.backgroundColor = "green";
                setTimeout(() => {
                    gP.style.backgroundColor = "rgb(1, 66, 1)";
                    i++;
                }, 900);
            }
            else if(playedPanels[i] == 'blue'){
                bP.style.backgroundColor = "blue";
                setTimeout(() => {
                    bP.style.backgroundColor = "rgb(0, 0, 134)";
                    i++;
                }, 900);
            } else {
                fC.style.display = "none";
                clearInterval(p);
                selectPanel();
            }
        }, 1200);
}

function nextRound(){
    if (round < 8){
        if(score < playedPanels.length){
            redInPlay = false;
            yellowInPlay = false;
            greenInPlay = false;
            blueInPlay = false;
            let x = playedPanels[score];
                if(x == 'red'){
                    redInPlay = true;
                }else if(x == 'yellow'){
                    yellowInPlay = true;
                }else if(x == 'green'){
                    greenInPlay = true;
                }else if(x == 'blue'){
                    blueInPlay = true;
                }
            panelsClickable();
        } else {
            round = 0;
            score = 0;
            playPanels();
        }
    } else {
        victory();
    }
}

function gameOver(){
    panelsUnclickable();
    fC.style.display = "block";
    redInPlay = false;
    yellowInPlay = false;
    greenInPlay = false;
    blueInPlay = false;
    ff7.pause();
    ff7.currentTime = 0;
    lose.play();
    playing = false;
    setTimeout(() => {
        cT.innerHTML = "LOSER";
    }, 600);
    setTimeout(() => {
        cT.innerHTML = "(x_x)";
    }, 2500);
    setTimeout(() => {
        playing = true;
        restart();
    }, 8000);
}

function victory(){
    panelsUnclickable();
    redInPlay = false;
    yellowInPlay = false;
    greenInPlay = false;
    blueInPlay = false;
    ff7.pause();
    ff7.currentTime = 0;
    win.play();
    playing = false;
    setTimeout(() => {
        cT.innerHTML = "WINNER";
    }, 600);
    setTimeout(() => {
        victoryDance();
    }, 2000);
    setTimeout(() => {
        playing = true;
        restart();
    }, 10000);
}

// animations  ¯\_(ツ)_/¯ 

function victoryDance(){
    let a = 0;
    let flex= setInterval(() => {
        if (a == 0 && playing == false){
            cT.innerHTML = "__(ツ)__";
            a = 1;
        } else if (a == 1 && playing == false){
            cT.innerHTML = "\\_(ツ)_/";
            a = 2;
        } else if (a == 2 && playing == false){
            cT.innerHTML = "|_(ツ)_|";
             a = 3;
        } else if (a == 3 && playing == false){
            cT.innerHTML = "\\_(ツ)_/";
            a = 0;
        }else {
            cT.innerHTML = "Again?";
            clearInterval(flex);
        }
    }, 300);
}

function guyAnimation(){
    let a = 0;
    let dancingGuy = setInterval(() => {
        if (a == 0 && playing == true){
            cT.innerHTML = "\\_('- ')¯\\";
            a = 1;
        } else if (a == 1 && playing == true){
            cT.innerHTML = "/¯(' -')_/";
            a = 0;
        }else {
            cT.innerHTML = "";
            clearInterval(dancingGuy);
        }
    }, 500);
}

function playAnimation(){
    let x = 0;
    let y = 0;
    let animation = setInterval(() => {
        if(y < 20){
            if(x == 0){
                rP.style.backgroundColor = "red";
                setTimeout(() => {
                rP.style.backgroundColor = "rgb(138, 1, 1)";
                x++;
                y++;
                }, 120);
            }
            if(x == 1){
                yP.style.backgroundColor = "yellow";
                setTimeout(() => {
                    yP.style.backgroundColor = "rgb(145, 145, 2)";
                    x++;
                    y++;
                    }, 120);
            }
            if(x == 2){
                gP.style.backgroundColor = "green";
                setTimeout(() => {
                    gP.style.backgroundColor = "rgb(1, 66, 1)";
                    x++;
                    y++;
                    }, 120);
            }
            if(x == 3){
                bP.style.backgroundColor = "blue";
                setTimeout(() => {
                    bP.style.backgroundColor = "rgb(0, 0, 134)";
                    x = 0;
                    y++;
                    }, 120);
            }
        } else {
            setTimeout(() => {
                rP.style.backgroundColor = "red";
                yP.style.backgroundColor = "yellow";
                gP.style.backgroundColor = "green";
                bP.style.backgroundColor = "blue";
            }, 250);
            setTimeout(() => {
                rP.style.backgroundColor = "rgb(138, 1, 1)";
                yP.style.backgroundColor = "rgb(145, 145, 2)";
                gP.style.backgroundColor = "rgb(1, 66, 1)";
                bP.style.backgroundColor = "rgb(0, 0, 134)";
            }, 1000);
            clearInterval(animation);
        }
    }, 150);
}