function ScoreScreen(){
    reactionClickTime = Date.now()
    scoreTime = reactionClickTime - startTime;
    document.getElementById('game-1').style.backgroundColor = 'blue';
    document.getElementById('g1h1').innerHTML = 'Score';
    document.getElementById('g1h3').innerHTML =  scoreTime +'ms<br>';
        if(scoreTime < 200){
          document.getElementById('g1h3').innerHTML +="Hi Ben!";
        }
        if(scoreTime < 300 && scoreTime >= 200){
            document.getElementById('g1h3').innerHTML +="Not bad!";
        }else{ 
            document.getElementById('g1h3').innerHTML +="Getting too old for this aren't you?";
        }

    game1 = document.getElementById('game-1').onclick= function(){startGame();}
}

function notTooFast(){
    if(tooFastCheck === false){
    document.getElementById('game-1').style.backgroundColor = 'green';
    document.getElementById('g1h1').innerHTML = 'Finish!';
    document.getElementById('g1h3').innerHTML = '';
    startTime=Date.now();
    game1 = document.getElementById('game-1').onclick= function(){ScoreScreen();}
    }
}

function change1() {   
    let tooFastCheck = false;
    let time=(Math.random()*2000) + 4000;
    document.getElementById('game-1').style.backgroundColor = 'pink';
    document.getElementById('g1h1').innerHTML = 'Start';
    document.getElementById('g1h3').innerHTML = 'Click when you see green';
    game1 = document.getElementById('game-1').onclick= function(){tooFast();}   
    setTimeout(function(){
       notTooFast()
    },time);
}

function tooFast(){
    tooFastCheck = true;
    document.getElementById('game-1').style.backgroundColor = 'red';
    document.getElementById('g1h1').innerHTML = 'Finished Too Early';
    document.getElementById('g1h3').innerHTML = "(That's what she said)<br>Click to start over";
    game1 = document.getElementById('game-1').onclick= function(){startGame();}
}

function startGame(){
    tooFastCheck = false;
    document.getElementById('game-1').style.backgroundColor = 'blue';
    document.getElementById('g1h1').innerHTML = 'Reaction Test';
    document.getElementById('g1h3').innerHTML = 'Click anywhere to start';
    game1 = document.getElementById('game-1').onclick= function(){change1();}
}

let startTime;
let scoreTime;
let reactionClickTime;
let tooFastCheck = false;

let game1 = document.getElementById('game-1').onclick= function(){
  change1()
};