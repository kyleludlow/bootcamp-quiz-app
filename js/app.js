// Question List
var question1 = {
	question: 'question1',
	options: ['option1', 'option2', 'option3', 'option4'], 
	correctAnswer: 0
}



var question2 = {
	question: 'question2',
	options: ['question 2 option1', 'option2', 'option3', 'option4'],
	correctAnswer: 0
}




var question3 = {
	question: 'question3',
	options: ['question 3 option1', 'option2', 'option3', 'option4'],
	correctAnswer: 0
}




var question4 = {
	question: 'question4',
	options: ['option1', 'option2', 'option3', 'option4'], 
	correctAnswer: 0
}




var question5 = {
	question: 'question5',
	options: ['option1', 'option2', 'option3', 'option4'], 
	correctAnswer: 0
}

var listOfQuestions = [question1, question2, question3, question4, question5];

var currentQuestion = 0;

var userScore = 0;

$('p > input').change(function() {

	$('#submitButton').prop('disabled', false).removeClass('disabled');
});

// Submit Button //

$('#submitButton').click(function(event) {
	event.preventDefault();

	//remove old question and answers


	//go to next question


	//replace question

	$('#question').text(listOfQuestions[currentQuestion].question);


	
	//captures user selection
	var currentUserAnswer = $("input[name=userGuess]:checked").val();

	//replace list of answers

	for(var i = 0; i < 4; i++ ) {

		$('#choice' + (i + 1) ).text(listOfQuestions[currentQuestion].options[i]);

	}

	//resets radio button

	$('input[name="userGuess"]').prop('checked', false);


	// gets correct answers

	var currentCorrectAnswer = listOfQuestions[currentQuestion].correctAnswer;

	if (currentUserAnswer === currentCorrectAnswer) {
		userScore++
		console.log(userScore++);
	}

	$('.userScoreTally').text(userScore);


	//increment currentQuestion

	currentQuestion++;








});