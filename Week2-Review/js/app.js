const NUMBER_OF_PROBLEMS = 10;
let correctAnswers = 0;
let randomOne = getRandomNumber(10);
let randomTwo = getRandomNumber(10);
let correctAnswer = randomOne * randomTwo;


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
    const expression = document.getElementById('problem');
    expression.innerText = randomOne + ' * ' + randomTwo;
}


function displayAnswers() {
    let display = document.getElementById('answers');
    const ul = document.querySelector('ul');
    let array = [correctAnswer, getRandomNumber(100), getRandomNumber(100), getRandomNumber(100)];
    let choices = shuffleArray(array);
    

    array.forEach(choices => {
        const li = document.querySelector('li');
        li.innerText = choices;
        ul.appendChild(li);
    });
}

function nextQuestion() {
    const expression = document.getElementById('problem');
    randomOne = getRandomNumber(10);
    randomTwo = getRandomNumber(10);
    correctAnswer = randomOne * randomTwo;
    expression.innerText = randomOne + ' * ' + randomTwo;

}


function submitAnswer(event) {
    console.log(event.target.innerText);
    let selectedAnswer = event.target.innerText;
    if (selectedAnswer === String(correctAnswer)) {
        console.log('correct');
        correctAnswers++;
    }
    nextQuestion();
    displayAnswers();

}


function startOver() {
}


function displayScore() {
}






