function testEvent(){

  var myAnswerOne = 'Y';
  var myAnswerTwo = 'N';
  var myAnswerThree = 'Y';
  var myAnswerFour = 'Y';
  var answersSixOptions = ['GUINNESS', 'NOEL', 'MINOU'];
  var myNumber = 7;
  var counterSeven = 0;

  var userName = prompt('What\'s your name?');
  alert('Hello, ' + userName + '. Thanks for coming to my site!');

  var answerOne = prompt('Was I born in Newfoundland?');
  answerOne = answerOne.charAt(0);
  answerOne = answerOne.toUpperCase();


  if (answerOne === myAnswerOne) {
    alert('Very well done!');
    console.log('Answer given was ' + answerOne);
  } else {
    alert('Wrong! Next question!');
  };

  console.log("Question one complete!");

  var answerTwo = prompt('Did I go to university in Newfoundland?');
  answerTwo = answerTwo.charAt(0);
  answerTwo = answerTwo.toUpperCase();


  if (answerTwo === myAnswerTwo) {
    alert('Very well done!');
  } else {
    alert('Wrong! On to the next question!');
  };

  console.log("Question two complete!");

  var answerThree = prompt('Do I speak French?');
  answerThree = answerThree.charAt(0);
  answerThree = answerThree.toUpperCase();


  if (answerThree === myAnswerThree) {
    alert('Very well done!');
  } else {
    alert('Wrong! On to the next question!');
  };

  console.log("Question three complete");

  var answerFour = prompt('Have I lived in the Yukon Territory?');
  answerFour = answerFour.charAt(0);
  answerFour = answerFour.toUpperCase();


  if (answerFour === myAnswerFour) {
    alert('Very well done!');
  } else {
    alert('Wrong! On to the next question!');
  };

  console.log("Question five complete");

  var userResponsePet = prompt('What is one of my pet\'s name?');
  userResponsePet = userResponsePet.toUpperCase();

  if(answersSixOptions.indexOf(userResponsePet) !== -1){
    alert('Awesome job!!');
  } else {
    alert('You\'re wrong!');
  };

  console.log("Question five complete")

  alert("Time for a two part answer question! You have to get both answers to be right! What two languages do I speak?");

  var userLanguageResponse1 = prompt('Enter answer one here.');
  userLanguageResponse1 = userLanguageResponse1.toUpperCase();

  var userlanguagResponse2 = prompt('Enter answer two here.');
  userlanguagResponse2 = userlanguagResponse2.toUpperCase();

  if (userLanguageResponse1 === 'FRENCH'){
    alert('Very well done, you got the first one right!');
  } else if (userLanguageResponse1 === 'ENGLISH') {
    alert('Very well done, you got the first one right!');
  } else{
    alert('Wrong! Let\'s check your other answer!');
  };

  if (userlanguagResponse2 === 'FRENCH'){
    alert('Very well done, you got the second one right!');
  } else if (userlanguagResponse2 === 'ENGLISH') {
    alert('Very well done, you got the second one right!');
  } else{
    alert('Wrong!');
  };

  if ((userLanguageResponse1 === 'FRENCH') && (userlanguagResponse2 === 'ENGLISH')) {
    alert('Awesome you got them both right! Thank you for taking my quiz!');
  } else if ((userLanguageResponse1 === 'ENGLISH') && (userlanguagResponse2 === 'FRENCH')) {
    alert('Awesome you got them both right!');
  } else {
    alert('On to the next question!');
  };

  console.log("Question six complete");

  var userNumber = parseInt(prompt('I am thinking of a number between 1 and 10, what is it?? (You have 4 guesses)'));

  fix quotations
  while (counterSeven < 4){
    counterSeven = counterSeven + 1;
    if(userNumber === myNumber){
      alert('Great job ' + userName +', You guessed my number!');
      break;
    }
    if(counterSeven === 4){
      alert(userName + ', You used all your guesses, NO SOUP FOR YOU!')
    }
    else if(userNumber > myNumber){
      alert('That number is to high!');
      userNumber = parseInt(prompt('What number am I thinking of?'));
    }
    else if(userNumber < myNumber){
      alert('That number is too low!');
      userNumber = parseInt(prompt('What number am I thinking of?'));
    }
  };

    for(var i = 0; i < 6; i++){
      var myPlacesAnswers = ['ENGLAND', 'FRANCE', 'CANADA', 'USA', 'UNITED STATES OF AMERICA', 'US', 'UNITED STATES'];
      var userPlacesAnswers = prompt('Last one! Can you guess what countries i\'ve lived in?');
      userPlacesAnswers = userPlacesAnswers.toUpperCase();

      if(myPlacesAnswers.indexOf(userPlacesAnswers) !== -1){
        alert('Great job! your answer was correct!');
        break;
      }else{
        alert('Please Try again');
      }
    };
  // As a developer, I want to keep a tally of the total number of correct answers
  // given by the user, and at the end of the game, tell the user how well they did
  // with a personalized custom message that includes the number of correct answers
  // and also addresses the user by name, e.g. "You got 4 out of 7 questions correct,
  // Bobbi! Better luck next time."

}
