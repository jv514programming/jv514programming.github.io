let questionList = [
    {
        question : "Which of the following was a character in a novel written by Mark Twain?",
        answer : "Tom Sawyer",
        wrong1 : "Tom Hanks",
        wrong2 : "Thomas the Tank Engine",
        wrong3 : "Tom Delonge"
    },
    {
        question : "Who was the first man to walk on the moon?",
        answer : "Neil Armstrong",
        wrong1 : "Arnold Schwarzenegger",
        wrong2 : "George Washington",
        wrong3 : "Mark Wahlberg"
    },
    {
        question : 'Who was known as "The most electrifying man in sports entertainment"?',
        answer : "Dwayne Johnson",
        wrong1 : "Michael Phelps",
        wrong2 : "Micheal Jordan",
        wrong3 : "Lebron James"
    },
    {
        question : "Who composed Moonlight Sonata?",
        answer : "Ludwig van Beethoven",
        wrong1 : "Billie Eilish",
        wrong2 : "George Michael",
        wrong3 : "Wolfgang Amadeus Mozart"
    },
    {
        question : "In Norse mythology, Thor, the god of thunder's father is..",
        answer : "Odin",
        wrong1 : "Zeus",
        wrong2 : "Yahweh",
        wrong3 : "Loki"
    },
    {
        question : "Which of the following is NOT a pokemon",
        answer : "Beelzebub",
        wrong1 : "Pikachu",
        wrong2 : "Butterfree",
        wrong3 : "Zebstrika"
    }
];

// Fisher-Yates algorithm for shuffling
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

function updateScore(){
    score += 100;
    document.getElementById('score-current').innerHTML = score;
}

function nextQuestion(){
    if(qNumber < totalQuestions){
    displayQuestion(qNumber);
    qNumber++;
    } else {
        document.getElementById('game-over').style.display = 'flex';
        finalScore = 'Score: ' + score;
        document.getElementById('final-score').innerHTML =  finalScore;
        setTimeout(() => {
            document.getElementById('try-again').innerHTML = 'Click to try again';
            document.getElementById('game-over').onclick = function(){newGame();}
        }, 1500);
    }
    document.getElementById('question-number').innerHTML = qNumber;
}

let finalScore;
let score = 0;
let qNumber = 1;
let totalQuestions = questionList.length;
newGame();

function newGame(){
    score = 0;
    qNumber = 1;
    finalScore = '';
    document.getElementById('game-over').style.display = 'none';
    document.getElementById('try-again').innerHTML = '';
    document.getElementById('game-over').onclick = '';
    shuffle(questionList);
    document.getElementById('score-current').innerHTML = score;
    document.getElementById('question-number').innerHTML = qNumber;
    displayQuestion(0);
}


function displayQuestion(qId){
    document.getElementById('question').innerHTML = questionList[qId].question;
    let w = questionList[qId].answer
    let x = questionList[qId].wrong1
    let y = questionList[qId].wrong2
    let z = questionList[qId].wrong3
    let answerArray = [w,x,y,z];
    shuffle(answerArray);
    document.getElementById('answer-1').innerHTML = answerArray[0];
    document.getElementById('answer-2').innerHTML = answerArray[1];
    document.getElementById('answer-3').innerHTML = answerArray[2];
    document.getElementById('answer-4').innerHTML = answerArray[3];
    if(answerArray[0] == w){
        document.getElementById('a1').onclick = function(){
            document.getElementById('a1').style.backgroundColor = "chartreuse";
            document.getElementById('a1').onclick = '';
            setTimeout(() => {
                document.getElementById('a1').style.backgroundColor = "skyblue";
                updateScore();
                nextQuestion();
            }, 300);
        }
    } else { 
        document.getElementById('a1').onclick = function(){
            document.getElementById('a1').style.backgroundColor = "red";
            document.getElementById('a1').onclick = '';
            setTimeout(() => {
                document.getElementById('a1').style.backgroundColor = "skyblue";
                nextQuestion();
            }, 300);
        }
    }
    if(answerArray[1] == w){
        document.getElementById('a2').onclick = function(){
            document.getElementById('a2').style.backgroundColor = "chartreuse";
            document.getElementById('a2').onclick = '';
            setTimeout(() => {
                document.getElementById('a2').style.backgroundColor = "skyblue";
                updateScore();
                nextQuestion();
            }, 300);
        }
    } else { 
        document.getElementById('a2').onclick = function(){
            document.getElementById('a2').style.backgroundColor = "red";
            document.getElementById('a2').onclick = '';
            setTimeout(() => {
                document.getElementById('a2').style.backgroundColor = "skyblue";
                nextQuestion();
            }, 300);
        }
    }
    if(answerArray[2] == w){
        document.getElementById('a3').onclick = function(){
            document.getElementById('a3').style.backgroundColor = "chartreuse";
            document.getElementById('a3').onclick = '';
            setTimeout(() => {
                document.getElementById('a3').style.backgroundColor = "skyblue";
                updateScore();
                nextQuestion();
            }, 300);
        }
    } else { 
        document.getElementById('a3').onclick = function(){
            document.getElementById('a3').style.backgroundColor = "red";
            document.getElementById('a3').onclick = '';
            setTimeout(() => {
                document.getElementById('a3').style.backgroundColor = "skyblue";
                nextQuestion();
            }, 300);
        }
    }
    if(answerArray[3] == w){
        document.getElementById('a4').onclick = function(){
            document.getElementById('a4').style.backgroundColor = "chartreuse";
            document.getElementById('a4').onclick = '';
            setTimeout(() => {
                document.getElementById('a4').style.backgroundColor = "skyblue";
                document.getElementById('a4').onclick = '';
                updateScore();
                nextQuestion();
            }, 300);
        }
    } else {
        document.getElementById('a4').onclick = function(){
            document.getElementById('a4').style.backgroundColor = "red";
            document.getElementById('a4').onclick = '';
            setTimeout(() => {
                document.getElementById('a4').style.backgroundColor = "skyblue";
                document.getElementById('a4').onclick = '';
                nextQuestion();
            }, 300);
        }
    }
}
