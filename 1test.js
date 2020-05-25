class blocks{
    constructor(thing){
        this.thing = thing;
    }

}



let item1 = document.querySelector('.item-1');
let win = document.querySelector('.win');
let items = document.getElementsByClassName('item');

item1.addEventListener('click', function(){
    win.style.display = "block";
    setTimeout(() => {
        win.style.display = "none";
    }, 6000);

});

let testArray = Array.from(items);

function addId(){

}
let h = 0;
let j = 0;

for(i = 0; i < testArray.length; i++){
    if (h == 0){
        testArray[i].thing = h;
        h++
    } else if( j != h ) {
        testArray[i].thing = j;
        j++;
    }else if( j == h){
        testArray[i].thing = h;
        h++
    }
}




console.log(testArray[0].thing);
console.log(testArray[1].thing);
console.log(testArray[2].thing);
console.log(testArray[3].thing);
console.log(testArray[4].thing);
console.log(testArray[5].thing);
