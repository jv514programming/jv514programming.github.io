let theContent = document.querySelector('.theContent').children;
let state = document.querySelectorAll('.state');
let currentTested = document.querySelector('.current-tested');
let currentHospitalized = document.querySelector('.current-hospitalized');
let currentDead = document.querySelector('.current-dead');
let submit = document.querySelector('.submit');
let stateSelection = document.querySelector('.state-selection');
let currentState = document.querySelector('.current-state');
let formControl = document.querySelector('.form-control');
let stateInfo = document.querySelector('.state-info');
let warning = document.querySelector('.alert');
let lastUpload = document.querySelector('.last-upload');
let totalTested = document.querySelector('.total-tested');
let recovered = document.querySelector('.recovered');
let activeState;
let started = false;
//states variable in states.js

formControl.style.color = 'lightgray';

// creating the state selector
for(i=0; i < states.length; i++){    
    let node = document.createElement('option');
    node.innerHTML = states[i].abb;
    stateSelection.appendChild(node);
}

stateSelection.addEventListener('change', function(){
    if(stateSelection.value == "select a state"){
        formControl.style.color = 'lightgray';
        formControl.style.fontWeight = 'normal';
        
    }else{
        formControl.style.color = 'black';
        formControl.style.fontWeight = 'bold';
    }
});

// main submit button
$("button").on('click',function(e){
    e.preventDefault();
    if(stateSelection.value == "select a state"){
        warningSelect(1);
    }else{
        $(warning).fadeOut(1);
        let lookup = stateSelection.value.toLowerCase();
        getCov(lookup);
    }
})

// in case something goes wrong
function warningSelect(n){
    fading();
    started = false;
    if(n == 1){
        warning.innerHTML = '*Please select a state';
        $(warning).fadeIn(250);
        console.error('Select a state');
    }
    if(n == 2){
        warning.innerHTML = '..Trouble retrieving data';
        $(warning).fadeIn(250);
    }
}

// use full state name
function searchStates(){
    for(i = 0; i < states.length; i++){
        if (states[i].abb == stateSelection.value){
            activeState = states[i].name;
        }
    }
}

// animation
function fading(n){
    if(n == 'in'){
        $(theContent).fadeIn(250);
        $(stateInfo).fadeIn(250);
        $(recovered).fadeIn(250);
    }else{
        $(theContent).fadeOut(250);
        $(stateInfo).fadeOut(250);
        $(recovered).fadeOut(250);
    }
}

function displayContent(){
    if (started == false){
        setTimeout(() => {
            fading('in');
        }, 250);
        started = true;
    } else{
        fading('in');
    }
    setTimeout(() => {
        currentState.innerHTML = activeState;
        state.forEach(e => {
            e.innerHTML = activeState;
        })
    }, 250);
}

//checks to make sure all fecthed data is avaialble
function parseData(data){
    setTimeout(() => {
        if(data.positive == null){
            data.positive = 'unknown';
        }
        if(data.hospitalizedCurrently == null){
            data.hospitalizedCurrently = 'unknown';
        }
        if(data.death == null){
            data.death = 'unknown';
        }
        if (data.recovered == null){
            recovered.innerHTML = `It is unknown at this time how many people have recovered in this state.`;
        }else{
            recovered.innerHTML = `Fortunatly, at least <span class="text-warning">${data.recovered}</span> have fully recovered from the virus in this state.`;
        }
        lastUpload.innerHTML = `Data from this state last uploaded <span class="text-warning">${data.lastUpdateEt}</span>`;
        totalTested.innerHTML = `<span class="text-warning">${data.totalTestResults}</span> have been tested in ${activeState}`;
        currentTested.innerHTML = data.positive;
        currentHospitalized.innerHTML = data.hospitalizedCurrently;
        currentDead.innerHTML = data.death;
    }, 250);
}

function getCov(lookup){
    fetch(`https://covidtracking.com/api/v1/states/${lookup}/current.json`)
    .then(function(res){
        if(res.ok){
            return res.json();
        }
    })
    .then(function(data){
        fading();
        searchStates();
        parseData(data);
        displayContent();
        console.log(data);
    })
    .catch(function(err){
        warningSelect(2);
        console.error(err);
    })
}
