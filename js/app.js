//Define Objects
var listOfQuestions = [{
    question: 'question1',
    options: ['Correct Answer', 'option2', 'option3', 'option4'],
    correctAnswer: 0
}, {
    question: 'question2',
    options: ['question 2 option1', 'Correct Answer', 'option3', 'option4'],
    correctAnswer: 1
}, {
    question: 'question3',
    options: ['question 3 option1', 'option2', 'Correct Answer', 'option4'],
    correctAnswer: 2
}, {
    question: 'question4',
    options: ['question 4 option1', 'option2', 'option3', 'Correct Answer'],
    correctAnswer: 3
}, {
    question: 'question5',
    options: ['Correct Answer', 'option2', 'option3', 'option4'],
    correctAnswer: 0
}];

//Define global variables

var currentQuestion = 0;

var userScore = 0;




//Define global functions
var displayNewQuestion = function () {
    $('#question').text(listOfQuestions[currentQuestion].question);

};

var displayNewAnswerChoices = function () {
    for (var i = 0; i < 4; i++) {

        $('#choice' + (i + 1)).text(listOfQuestions[currentQuestion].options[i]);

    }
};

var resetRadioButtons = function () {
    $('input[name="userGuess"]').prop('checked', false);
};

var changeUserScoreTally = function () {
    $('#userScoreTally').text(userScore);
};

var newGame = function () {
    currentQuestion = 0;
    userScore = 0;
    resetRadioButtons();
    changeUserScoreTally();
    $('#submitButton').show();
    $('#newGameButton').hide();
    displayNewQuestion();
    displayNewAnswerChoices();
};

newGame();

$('#submitButton').click(function (event) {
    event.preventDefault();

    //captures user selection
    var currentUserAnswer = $("input[name=userGuess]:checked").val();

    // gets current correct answer
    var currentCorrectAnswer = listOfQuestions[currentQuestion].correctAnswer;

    if (currentUserAnswer == currentCorrectAnswer) {
        userScore++;
    }

    changeUserScoreTally();

    currentQuestion++;

    if (currentQuestion > 4) {

        $('#submitButton').hide();
        $('#newGameButton').show();
    } else {

        //replace question with new
        displayNewQuestion();

        //replace list of answer choices
        displayNewAnswerChoices();

    }

    resetRadioButtons();
});

$('#newGameButton').click(function (event) {
    event.preventDefault();
    newGame();
});

$('p > input').change(function () {

    $('#submitButton').prop('disabled', false).removeClass('disabled');
});

