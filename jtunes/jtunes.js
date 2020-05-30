let songs = document.querySelectorAll('.song-item');
let currentSong = document.querySelector('.selected-song-img');
let activeSong = document.querySelector('.active-music');
let playB = document.querySelector('.play');
let stopB = document.querySelector('.stop');
let pauseB = document.querySelector('.pause');
let rewindB = document.querySelector('.rewind');




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
    console.log(ne);
    activeSong.src = ne.src; 
}




