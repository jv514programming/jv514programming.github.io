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
let brosnanMode = false;
// brosnan stuff
let bb = document.querySelector('.brosnan-button');
let bo = document.querySelector('.brosnan-movie-overlay');
let music = document.querySelector('.music');
// brosnan stuff

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
    if(brosnanMode == true){
        setTimeout(() => {
        music.play();
        music.volume = 0.4;
        }, 1000);
    }

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
        firstCardArray[i].indentify = i;
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
            if(c.pair == currentPair && c.indentify != lastCard.indentify){
                lastCard.classList.add('fade-out');
                c.classList.add('fade-out');
                currentPair = null;
                lastCard = null;
                winPoint++;
                if(winPoint == 8){
                    busy = true;
                   victory();
                }
            } else if (c.pair != currentPair ){
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
    if(brosnanMode == false){
        startBrosnan();
        overlay.style.display = 'flex';
        overlay1.innerHTML = "Matched All!";
        overlay2.innerHTML = 'Get ready for Brosnan';
        setTimeout(() => {
            overlay.classList.add('fade-out');
        }, 1500);
        setTimeout(() => {
            overlay.style.display = 'none';
            overlay.classList.remove('fade-out');
        }, 3500);
    }else {
        setTimeout(() => {
            music.pause();
            music.currentTime = 0;
            overlay.style.display = 'flex';
            overlay1.innerHTML = "Matched All!";
            overlay2.innerHTML = 'click to try again';
        }, 1000);
    } 
}

function gameOver(){
    setTimeout(() => {
        music.pause();
        music.currentTime = 0;
        overlay.style.display = 'flex';
        overlay1.innerHTML = "Out of attempts!";
        overlay2.innerHTML = 'click to try again';
    }, 1000);
}

// -----Brosnan-mode-----

bb.onclick = function(){
   startBrosnan();
}

function startBrosnan(){
    bb.classList.add('fade-out');
    setTimeout(() => {
        bb.classList.remove('fade-out');
        bb.innerHTML = "ACTIVATED";
        bb.style.color = "white";
        bb.style.padding = "2px";
        bb.classList.add('fade-in');
    }, 2000);
    setTimeout(() => {
        bb.classList.add('brosnan-button-engaged');
    }, 3500);
    setTimeout(() => {
        bo.style.display = 'flex';
        bo.classList.add("fade-in");
        document.querySelector('video').play();
    }, 4000);
    setTimeout(() => {
        brosnanTransform();
    }, 7000);
    setTimeout(() => {
        bo.classList.remove("fade-in");
        bo.classList.add("fade-out");
    }, 20000);
    setTimeout(() => {
        document.querySelector('video').pause();
        bo.style.display = 'none';
    }, 22000);
}

function brosnanTransform(){
    let avenger = document.querySelectorAll('img[src="movies/avengers.jpg"]')
    let darkknight = document.querySelectorAll('img[src="movies/darkknight.jpg"]')
    let lotr = document.querySelectorAll('img[src="movies/lotr.jpg"]')
    let potter = document.querySelectorAll('img[src="movies/potter.jpg"]')
    let starwars = document.querySelectorAll('img[src="movies/starwars.jpg"]')
    let godfather = document.querySelectorAll('img[src="movies/godfather.jpg"]')
    let matrix = document.querySelectorAll('img[src="movies/matrix.jpg"]')
    let jaws = document.querySelectorAll('img[src="movies/jaws.jpg"]') 
    let card007 = document.querySelectorAll('img[src="movies/movielogo.png"]');
    let cardFront = document.querySelectorAll('.card-front');
    card007.forEach(element => {
        element.setAttribute('src', 'movies/007.jpg');
    });
    cardFront.forEach(e => {
        e.style.background = 'radial-gradient(black 70%, gray 99%)';
    });
    document.querySelector('body').style.background = 'radial-gradient(rgb(107, 1, 1),black)';
    document.querySelector('.game-title').innerHTML = "Brosnan Match";
    //
    avenger.forEach(e => {
        e.src = "movies/brosnan/goldeneye.jpg";
    });
    darkknight.forEach(e => {
        e.src = "movies/brosnan/novemberman.jpg";
    });
    lotr.forEach(e => {
        e.src = "movies/brosnan/anotherday.jpg";
    });
    potter.forEach(e => {
        e.src = "movies/brosnan/neverdies.jpg";
    });
    starwars.forEach(e => {
        e.src = "movies/brosnan/notenough.jpg";
    });
    godfather.forEach(e => {
        e.src = "movies/brosnan/ghostwriter.jpg";
    });
    matrix.forEach(e => {
        e.src = "movies/brosnan/lovepunch.jpg";
    });
    jaws.forEach(e => {
        e.src = "movies/brosnan/thomascrown.jpg";
    });
    brosnanMode = true;
    setTimeout(() => {
        startNewGame();
    }, 13000);
}