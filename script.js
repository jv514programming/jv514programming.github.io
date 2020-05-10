
function test(){ 
document.getElementById('ugotthat').play();
document.getElementById('doyougotthat').innerHTML = 'I guess you do..';
setTimeout(function(){
    document.getElementById('richardobackground1').style.backgroundColor = 'blueviolet'
    },5000);
setTimeout(function(){
    document.getElementById('richardobackground2').style.backgroundImage = "url('lights.jpg')"
    },10000);
    setTimeout(function(){setInterval(() => {
        colorCycle()
    }, 500);}, 15000);

    setTimeout(() => {
        youGotThat();
    }, 20000);

setTimeout(function(){
    richardoFadeFunc();
    document.getElementById('richardobackground4').style.border = "2px solid white"
    },26000);
setTimeout(function(){
    document.getElementById('richardobackground3').style.backgroundImage = "url('richardo.gif')"
    }, 33100);
}

let cycle = 1;

function colorCycle(){
   let color = '';
    if (cycle == 1){
        color = "blueviolet";
        cycle += 1;
        return document.getElementById('richardobackground1').style.backgroundColor = color;
    }
   else  if (cycle == 2){
        color = "green";
        cycle += 1;
        return document.getElementById('richardobackground1').style.backgroundColor = color;
    }
    else {
        color = "crimson";
        cycle = 1;
        return document.getElementById('richardobackground1').style.backgroundColor = color;
    }
}


function youGotThat(){
    setTimeout(() => {
    document.getElementById('line1').innerHTML = 'YOU';
    document.getElementById('line2').style.fontStyle = "normal";
    document.getElementById('line1').style.color = "white";
    document.getElementById('line1').style.fontSize = "80px";
    document.getElementById('line1').style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
    }, 1500);

    setTimeout(() => {
        document.getElementById('line2').innerHTML = 'GOT';
        document.getElementById('line2').style.color = "white";
        document.getElementById('line2').style.fontStyle = "normal";
        document.getElementById('line2').style.fontSize = "80px";
        document.getElementById('line2').style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
        }, 3000);

        setTimeout(() => {
            document.getElementById('line3').innerHTML = 'THAT';
            document.getElementById('line3').style.color = "white";
            document.getElementById('line3').style.fontSize = "80px";
            document.getElementById('line3').style.fontStyle = "normal";
            document.getElementById('line3').style.textShadow = "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000";
            }, 4500);
}

let fadeCount = 0;

function richardoFadeFunc(){
       setInterval(() => {
        let faceOpacity = '0.' + fadeCount;
        if(fadeCount < 10){
            fadeCount += 1;
           return document.getElementById('richardoFaceFade').style.opacity = faceOpacity;
        } else {
            return document.getElementById('richardoFaceFade').style.opacity = '1.0';
        }
    }, 100);
}

