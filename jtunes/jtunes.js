let songs = document.querySelectorAll('.song-item');
let songsC = document.querySelectorAll('.song-container');
let currentSong = document.querySelector('.selected-song-img');
let activeSong = document.querySelector('.active-music');
let playB = document.querySelector('.play');
let stopB = document.querySelector('.stop');
let pauseB = document.querySelector('.pause');
let rewindB = document.querySelector('.rewind');
let controls = document.querySelectorAll('.controls');
let volumeSlider = document.querySelector('.volume-slider');




activeSong.volume = .3;

for(i = 0; i < songsC.length; i++){
    songsC[i].order = i;
}

// shuffling section start

function shuffleMusic(){
    let musicOrder = [];
    for(i=0;i<songsC.length;i++){
       musicOrder.push(i);
   }
   shuffle(musicOrder);
   console.log(musicOrder);
   for(e=0;e<songsC.length;e++){
        songsC[e].style.order = musicOrder[e];
   }
}

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

// shuffling section end

activeSong.addEventListener('ended', function(){
    console.log('over');
});

volumeSlider.oninput = function(){
    setVolume(this.value);
}

function setVolume(e){
    activeSong.volume = e / 100;
}

controls.forEach(function(e){
    e.addEventListener('mousedown', function(){
        e.style.boxShadow = '0px 0px 15px 1px rgb(65, 65, 65)';
    });
    e.addEventListener('mouseup', function(){
        e.style.boxShadow = '0px 0px 15px 1px rgb(173, 173, 173)';
    });
    e.addEventListener('mouseenter', function(){
        e.style.boxShadow = '0px 0px 15px 1px rgb(173, 173, 173)';
    });
    e.addEventListener('mouseleave', function(){
        e.style.boxShadow = 'none';
    });
});

playB.addEventListener('click', function(){
    playButton();
});
function playButton(){
    activeSong.play();
}

stopB.addEventListener('click', function(){
    stopButton();
});
function stopButton(){
    activeSong.pause();
    activeSong.currentTime = 0;
}

pauseB.addEventListener('click', function(){
    pauseButton();
});
function pauseButton(){
    activeSong.pause();
}

rewindB.addEventListener('click', function(){
    rewindButton();
});
function rewindButton(){
    activeSong.currentTime = 0;
}


songs.forEach(e => {
    e.addEventListener('click', function(){
        currentSong.src = e.src;
        loadSong(e);
    })
});

function loadSong(e){
    let ne = e.nextElementSibling;
    activeSong.src = ne.src;
    playButton(); 
}




