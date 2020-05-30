let shakeButton = document.querySelector('.shake-button');
let etch = document.querySelector('.etch-div');
let etchBoard = document.querySelector('.board-container');
let shakeBusy = false;

createGrid();
let items = document.querySelectorAll('.item');

items.forEach(e => {
    e.addEventListener('mouseover', function(e){
        if(e.buttons == 1){
            this.classList.add('drawn');
        }
    
    })
    e.addEventListener('mousedown', function(e){
        if(e.buttons == 1){
            this.classList.add('drawn');
        }
    })
});

shakeButton.onclick = function(){
    if(shakeBusy == false){
        shakeBusy = true;
        shakeButton.classList.add('button-move');
        setTimeout(() => {
            shakeButton.classList.remove('button-move');
        }, 500);
        etch.classList.add('shake');
        let drawn = document.querySelectorAll('.drawn');
        drawn.forEach(e =>{
            e.classList.add('fade-out');
            e.classList.remove('drawn');
            setTimeout(() => {
                e.classList.remove('fade-out');
            }, 1000);
        })
        setTimeout(() => {
            etch.classList.remove('shake');
            shakeBusy = false;
        }, 1000);
    }
}







function createGrid() {
    let i = 0
    while(i < 4800){
    let t = document.createElement('div')
    t.classList.add('item');
    etchBoard.appendChild(t);
    i++;
    }
}

