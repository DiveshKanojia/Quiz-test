//Question Bank
var questionBank = [
    {
        level: [
            {
                question: 'What is the sum of 130+125+191?',
                option: ['335', '456', '446', '426'],
                answer: 2
            },
            {
                question: 'If we minus 712 from 1500, how much do we get?',
                option: ['788', '778', '768', '758'],
                answer: 0
            },
            {
                question: '50 times of 8 is equal to:',
                option: ['80', '400', '800', '4000'],
                answer: 1
            },
            {
                question: '110 divided by 10 is:',
                option: ['11', '10', '5', 'None of these'],
                answer: 0
            },
            {
                question: '20+(90÷2) is equal to:',
                option: ['50', '55', '65', '60'],
                answer: 2
            }
        ],
    },
    {
        level: [
            {
                question: 'Which type of JavaScript language is ___',
                option: ['Object-Oriented', 'Object-Based', 'Assembly-language', 'High-level'],
                answer: 1
            },
            {
                question: 'Which one of the following also known as Conditional Expression:',
                option: ['Alternative to if-else', 'Switch statement', 'If-then-else statement', 'immediate if'],
                answer: 3
            },
            {
                question: 'The "function" and " var" are known as:',
                option: ['Keywords', 'Data types', 'Declaration statements', 'Prototypes'],
                answer: 2
            },
            {
                question: 'When interpreter encounters an empty statements, what it will do:',
                option: ['Shows a warning', 'Prompts to complete the statement', 'Throws an error', 'Ignores the statements'],
                answer: 3
            },
            {
                question: 'Which of the following variables takes precedence over the others if the names are the same?',
                option: ['Global variable', 'The local element', 'The two of the above', 'None of the above'],
                answer: 1
            }
        ]
    },
    {
        level: [
            {
                question: 'Which of the following type of a variable is volatile?',
                option: ['Mutable variable', 'Dynamic variable', 'Volatile variable', 'Immutable variable'],
                answer: 0
            },
            {
                question: 'Which of the following option is used as hexadecimal literal beginning?',
                option: ['00', '0x', '0X', 'Both 0x and 0X'],
                answer: 3
            },
            {
                question: 'In the JavaScript, which one of the following is not considered as an error:',
                option: ['Syntax error', 'Missing of semicolons', 'Division by zero', 'Missing of Bracket'],
                answer: 2
            },
            {
                question: 'Which of the following number object function returns the value of the number?',
                option: ['toString()', 'valueOf()', 'toLocaleString()', 'toPrecision()'],
                answer: 1
            },
            {
                question: 'Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?',
                option: ['slice()', 'split()', 'substr()', 'search()'],
                answer: 2
            }
        ]
    },
    {
        level: [
            {
                question: 'In JavaScript, what will be used for calling the function definition expression:',
                option: ['Function prototype', 'Function literal', 'Function calling', 'Function declaration'],
                answer: 1
            },
            {
                question: 'Which of the following one is the property of the primary expression:',
                option: ['Contains only keywords', 'basic expressions containing all necessary functions', 'contains variable references alone', 'stand-alone expressions'],
                answer: 0
            },
            {
                question: 'Which one of the following is used for the calling a function or a method in the JavaScript:',
                option: ['Property Access Expression', 'Functional expression', 'Invocation expression', 'Primary expression'],
                answer: 2
            },
            {
                question: 'The "new Point(3,2)", is a kind of _______ expression',
                option: ['Object Creation Expression', 'Primary Expression', 'Invocation Expression', 'Constructor Calling Expression'],
                answer: 0
            },
            {
                question: 'Which one of the following operator is used to check weather a specific property exists or not:',
                option: ['Exists', 'exist', 'within', 'in'],
                answer: 3
            }
        ]
    },
    {
        level: [
            {
                question: 'Which one of the following is not considered as "statement" in the JavaScript?',
                option: ['use strict', 'debugger', 'if', 'with'],
                answer: 0
            },
            {
                question: 'A set of unordered properties that, has a name and value is called______',
                option: ['String', 'Array', 'Serialized Object', 'Object'],
                answer: 3
            },
            {
                question: 'A collection of elements of the same data type which may either in order or not, is called _____.',
                option: ['String', 'Array', 'Serialized Object', 'Object'],
                answer: 1
            },
            {
                question: 'Every object contains three object attributes that are _______.',
                option: ['Prototype, class, object\'s extensible flag', 'Prototype, class, objects\' parameters', 'Class, parameters, object\'s extensible flag', 'Native object, Classes and Interfaces and Object\'s extensible flag'],
                answer: 0
            },
            {
                question: 'The linkage of a set of prototype objects is known as______',
                option: ['prototype stack', 'prototype', 'prototype class', 'prototype chain'],
                answer: 3
            }
        ]
    },
]


var question = document.getElementById('question'),
    lifeLine = document.getElementById('life'),
    quizContainer = document.getElementById('quiz-container'),
    scorecard = document.getElementById('scorecard'),
    option0 = document.getElementById('0'),
    option1 = document.getElementById('1'),
    option2 = document.getElementById('2'),
    option3 = document.getElementById('3'),
    lifeLineBox = document.querySelector('.flex-box'),
    optionList = document.querySelector('.option-group'),
    next = document.querySelector('.next'),
    points = document.getElementById('score'),
    span = document.querySelectorAll('span'),
    i = 0,
    totalPrice = 1000,
    life = 2,
    disabledFiftyFifty = false,
    priceList = document.querySelector('#price');

var correctAnswer;


//Generate a random variable
var randomNumber = Math.floor(Math.random() * questionBank[1].level.length);

//Function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].level[randomNumber].question;
    lifeLine.innerHTML = 'Life : ' + life;
    option0.innerHTML = questionBank[i].level[randomNumber].option[0];
    option1.innerHTML = questionBank[i].level[randomNumber].option[1];
    option2.innerHTML = questionBank[i].level[randomNumber].option[2];
    option3.innerHTML = questionBank[i].level[randomNumber].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
    correctAnswer = questionBank[i].level[randomNumber].answer;
}



//Function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].level[randomNumber].option[correctAnswer]) {
        if (i > 0) {
            totalPrice = totalPrice * 10;
        }
        document.getElementById(e.id).style.background = 'limegreen';
        setTimeout(nextQuestion, 300);
    }
    else {
        if (i === 0) {
            totalPrice = 0;
        }
        document.getElementById(e.id).style.background = 'tomato';
        setTimeout(displayScore, 300)
    }
}

//Function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1 && life >= 0) {
        i += 1;
        displayQuestion();
        price()
    }
}

//Back to Quiz button event
function backToQuiz() {
    location.reload();
}

//Function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].level[randomNumber].option[correctAnswer];
        answers.appendChild(list);
    }
}

//For Fifty Fifty life line.
function fiftyFifty() {
    document.getElementById('fifty-fifty').setAttribute('disabled', 'disabled');
    document.getElementById('fifty-fifty').classList.add("opacity")
    life--;
    lifeLine.innerHTML = 'Life : ' + life;
    var indexToRemove = [];
    while (indexToRemove.length < 2) {
        var indexConstant = Math.floor(Math.random() * 4);
        if ((indexToRemove.length === 1 && indexToRemove[0] != indexConstant) || indexToRemove.length === 0) {
            getTwoElement(indexConstant, indexToRemove);
        }
    }

    for (index of indexToRemove) {
        document.getElementById(index).style.background = 'tomato';
    }
}

//To get 2 wrong ans to remove.
function getTwoElement(indexConstant, indexToRemove) {
    if (indexConstant !== correctAnswer) {
        indexToRemove.push(indexConstant);
        if (indexToRemove.length >= 2) {
            return;
        }
    }
}

//Function to flip the question.
function flip() {
    document.getElementById('flip').setAttribute('disabled', 'disabled');
    document.getElementById('flip').classList.add("opacity")
    life--;
    lifeLine.innerHTML = 'Life : ' + life;
    randomNumber = Math.floor(Math.random() * questionBank[1].level.length);
    displayQuestion();
}

//Function for showing price
function price() {
    document.getElementById('price-' + (i - 1)).style.background = 'limegreen';
}

//Function to display score.
function displayScore() {
    points.innerHTML = "Rs. " + totalPrice;
    quizContainer.style.display = 'none';
    scoreboard.style.display = 'block';
    lifeLineBox.style.display = 'none';
}

displayQuestion();