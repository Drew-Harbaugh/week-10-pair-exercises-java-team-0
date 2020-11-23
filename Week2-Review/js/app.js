//@ts-nocheck

const NUMBER_OF_PROBLEMS = 10;
let correctAnswers = 0;
let randomOne = getRandomNumber(10);
let randomTwo = getRandomNumber(10);
let correctAnswer = randomOne * randomTwo;
let questionNumber = 1;


document.addEventListener('DOMContentLoaded', e => {
    startQuiz();
    displayAnswers();
    const answerList = document.querySelectorAll('li');
    for (let answer of answerList) {
        answer.addEventListener('click', submitAnswer);
    }
    document.getElementById('btnStartOver').addEventListener('click', startOver);
});


function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function shuffleArray(arr) {
    return arr.sort(function (a, b) {
        return Math.random() - 0.5
    }
    )
};


let array = [correctAnswer, getRandomNumber(100), getRandomNumber(100), getRandomNumber(100)];
let choices = shuffleArray(array);



function startQuiz() {
    const expression = document.querySelector('#problem div');
    expression.innerText = randomOne + ' * ' + randomTwo;

    const tracker = document.querySelector('#problem p');
    tracker.innerText = 'Problem: ' + questionNumber + '/' + NUMBER_OF_PROBLEMS + ' | Score: ' + correctAnswers;

}




function displayAnswers() {
    document.getElementById('answers').style.display = '';
    let display = document.getElementById('answers');
    const ul = document.querySelector('ul');
    let array = [correctAnswer, getRandomNumber(100), getRandomNumber(100), getRandomNumber(100)];
    let choices = shuffleArray(array);
    array.forEach(choices => {
        const listItem = document.querySelector('li');
        listItem.innerText = choices;
        ul.appendChild(listItem);
    });
}

function nextQuestion() {
    const expression = document.querySelector('#problem div');
    randomOne = getRandomNumber(10);
    randomTwo = getRandomNumber(10);
    correctAnswer = randomOne * randomTwo;
    expression.innerText = randomOne + ' * ' + randomTwo;
    const tracker = document.querySelector('#problem p');
    tracker.innerText = 'Problem: ' + questionNumber + '/' + NUMBER_OF_PROBLEMS + ' | Score: ' + correctAnswers;


}


function submitAnswer(event) {
    questionNumber++;
    console.log(event.target.innerText);
    let selectedAnswer = event.target.innerText;
    
    if (selectedAnswer === String(correctAnswer)) {
        console.log('correct');
        correctAnswers++;
    }
    
    if (questionNumber === NUMBER_OF_PROBLEMS + 1) {
        endScreen();

    } else {
        nextQuestion();
        displayAnswers();
    }
    

}

function endScreen() {
    document.getElementById('answers').style.display = 'none';
    
    const hide = document.querySelector('.show-hide');
    hide.innerText = '';


    const expression = document.querySelector('#problem div');
    expression.innerText = '';

    // const tracker = document.querySelector('ul');
    // tracker.innerText = '';

    // document.getElementsByClassName('show-hide')[0].style.visibilty = 'hidden';
}

function startOver(event) {
    correctAnswers = 0;
    questionNumber = 1;
    startQuiz();
    nextQuestion();
    displayAnswers();

}






