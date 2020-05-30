let songs = document.querySelectorAll('.song-item');
let currentSong = document.querySelector('.selected-song-img');
let activeSong = document.querySelector('.active-music');
let playB = document.querySelector('.play');
let stopB = document.querySelector('.stop');
let pauseB = document.querySelector('.pause');
let rewindB = document.querySelector('.rewind');
let controls = document.querySelectorAll('.controls');


controls.forEach(function(e){
    e.addEventListener('mousedown', function(){
        console.log('test');
        e.style.boxShadow = '0px 0px 15px 1px rgb(65, 65, 65)';
    });
    e.addEventListener('mouseup', function(){
        console.log('test');
        e.style.boxShadow = '0px 0px 15px 1px rgb(173, 173, 173)';
    });
    e.addEventListener('mouseenter', function(){
        console.log('test');
        e.style.boxShadow = '0px 0px 15px 1px rgb(173, 173, 173)';
    });
    e.addEventListener('mouseleave', function(){
        console.log('test');
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
    console.log(ne);
    activeSong.src = ne.src;
    playButton(); 
}




