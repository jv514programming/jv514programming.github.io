let overlay = document.getElementById('overlay');
let title = document.getElementById('game-title');
let flipCounter = document.getElementById('flips');
let firstCardArray = Array.from(document.getElementsByClassName('card'));
let overlay1 = document.getElementById('overlay-1');
let overlay2 = document.getElementById('overlay-2');
let busy;
let currentPair;
let lastCard;
let flipCount;
let winPoint;

overlay.onclick = function(){
    overlay.style.display = 'none';
    startNewGame();
}

function startNewGame(){
    busy = null;
    currentPair = null;
    lastCard = null;
    flipCount = 10;
    winPoint = 0;
    flipCounter.innerHTML = flipCount;

    firstCardArray.forEach((card) =>{
        card.classList.remove('visible');
        card.classList.add('fade-in');
        card.classList.remove('fade-out');
        card.style.visibility = 'visible';
    });

    let cardOrder = []
    for(i = 0; i < 16; i++){
        cardOrder.push(i);
    }
    shuffle(cardOrder);

    // fisher-yates shuffle
    function shuffle(arr){
        let newPos;
        let temp;
        for(i = arr.length - 1; i > 0; i--){
            newPos = Math.floor(Math.random() * (i + 1));
            temp = arr[i];
            arr[i] = arr[newPos];
            arr[newPos] = temp;
        }    
    }
    
    let h = 0;
    let j = 0;
    for(i = 0; i < firstCardArray.length; i++){
        if (h == 0){
            firstCardArray[i].pair = h;
            h++
        } else if( j != h ) {
            firstCardArray[i].pair = j;
            j++;
        }else if( j == h){
            firstCardArray[i].pair = h;
            h++
        }
    }
    
    for(i = 0; i < firstCardArray.length; i++){
        firstCardArray[i].style.order = cardOrder[i];
    }
}

firstCardArray.forEach((card)=>{
    card.addEventListener('click',()=>{
        flipCard(card);
    });
});

function flipCard(c){
    if(busy != true){
        c.classList.add('visible');
        if(currentPair == null){
            currentPair = c.pair;
            lastCard = c;
            busy = false;
        }else{
            if(c.pair == currentPair){
                lastCard.classList.add('fade-out');
                c.classList.add('fade-out');
                currentPair = null;
                lastCard = null;
                winPoint++;
                if(winPoint == 8){
                    busy = true;
                   victory();
                }
            } else{
                busy = true;
                flipCountdown();
                setTimeout(() => {
                    c.classList.remove('visible');
                    lastCard.classList.remove('visible');
                    currentPair = null;
                    lastCard = null;
                    busy = false;
                }, 1000);
            }
        }
        
    }
}

function flipCountdown(){
    if(flipCount > 1){
    flipCount--;
    flipCounter.innerHTML = flipCount;
    } else{
        busy = true;
        gameOver();
    }
}

function victory(){
   setTimeout(() => {
    overlay.style.display = 'flex';
    overlay1.innerHTML = "Matched All!";
    overlay2.innerHTML = 'click to try again';
   }, 1000); 
}

function gameOver(){
    setTimeout(() => {
        overlay.style.display = 'flex';
        overlay1.innerHTML = "Out of attempts!";
        overlay2.innerHTML = 'click to try again';
    }, 1000);
}