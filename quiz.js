//Question bank
var questionBank = [
    {
        question: 'What is the sum of 130+125+191?',
        option: ['335', '456', '446', '426'],
        answer: '446'
    },
    {
        question: 'If we minus 712 from 1500, how much do we get?',
        option: ['788', '778', '768', '758'],
        answer: '788'
    },
    {
        question: '50 times of 8 is equal to:',
        option: ['80', '400', '800', '4000'],
        answer: '400'
    },
    {
        question: '110 divided by 10 is:',
        option: ['11', '10', '5', 'None of these'],
        answer: '11'
    },
    {
        question: '20+(90÷2) is equal to:',
        option: ['50', '55', '65', '60'],
        answer: '65'
    }
]

var question = document.getElementById('question');
var lifeLine = document.getElementById('life');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;
var life = 2

//function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    lifeLine.innerHTML = 'Life - ' + life;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    console.log(e)
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score++;
        document.getElementById(e.id).style.background = 'limegreen';
    }
    else {
        life--;
        document.getElementById(e.id).style.background = 'tomato';

    }
    setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1 && life != 0) {
        i += 1;
        displayQuestion();
    }
    else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//click events to next button
// next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {
    location.reload();
}

//function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();