function testEvent(){

  var myAnswerOne = 'Y';
  var myAnswerTwo = 'N';
  var myAnswerThree = 'Y';
  var myAnswerFour = 'Y';
  var answersSixOptions = ['GUINNESS', 'NOEL', 'MINOU'];
  var myNumber = 7;
  var counterSeven = 0;
  var tallyScore = 0;
  var percentage = 0;
//
  function questionOne() {

  var userName = prompt('What\'s your name?');
  alert('Hello, ' + userName + '. Thanks for coming to my site!');
  }
  questionOne();
//
  function questionTwo() {
    var answerOne = prompt('Was I born in Newfoundland?');
    answerOne = answerOne.charAt(0);
    answerOne = answerOne.toUpperCase();


    if (answerOne === myAnswerOne) {
      alert('Very well done!');
      tallyScore = tallyScore + 1;
      console.log('Answer given was ' + answerOne);
    } else {
      alert('Wrong! Next question!');
    };

    console.log("Question one complete!");
  }
  questionTwo();
//
  function questionThree() {
    var answerTwo = prompt('Did I go to university in Newfoundland?');
    answerTwo = answerTwo.charAt(0);
    answerTwo = answerTwo.toUpperCase();


    if (answerTwo === myAnswerTwo) {
      alert('Very well done!');
      tallyScore = tallyScore + 1;
    } else {
      alert('Wrong! On to the next question!');
    };

    console.log("Question two complete!");
  }
  questionThree();
//
  function questionFour() {
    var answerThree = prompt('Do I speak French?');
    answerThree = answerThree.charAt(0);
    answerThree = answerThree.toUpperCase();


    if (answerThree === myAnswerThree) {
      alert('Very well done!');
      tallyScore = tallyScore + 1;
    } else {
      alert('Wrong! On to the next question!');
    };

    console.log("Question three complete");
  }
  questionFour();
//
  function questionFive() {
    var answerFour = prompt('Have I lived in the Yukon Territory?');
    answerFour = answerFour.charAt(0);
    answerFour = answerFour.toUpperCase();


    if (answerFour === myAnswerFour) {
      alert('Very well done!');
      tallyScore = tallyScore + 1;
    } else {
      alert('Wrong! On to the next question!');
    };

    console.log("Question five complete");
  }
  questionFive();
  //
    function questionSix() {
      var userResponsePet = prompt('What is one of my pet\'s name?');
      userResponsePet = userResponsePet.toUpperCase();

      if(answersSixOptions.indexOf(userResponsePet) !== -1){
        alert('Awesome job!!');
        tallyScore = tallyScore + 1;
      } else {
        alert('You\'re wrong!');
      };

      console.log("Question five complete")
    }
  questionSix();
  //
    function questionSeven() {
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
        alert('Awesome you got them both right!');
        tallyScore = tallyScore + 1;
      } else if ((userLanguageResponse1 === 'ENGLISH') && (userlanguagResponse2 === 'FRENCH')) {
        alert('Awesome you got them both right!');
        tallyScore = tallyScore + 1;
      } else {
        alert('On to the next question!');
      };

      console.log("Question six complete");
    }
  questionSeven();
  //
    function questionEight() {
      var userNumber = parseInt(prompt('I am thinking of a number between 1 and 10, what is it?? (You have 4 guesses)'));

      while (counterSeven < 4){
        counterSeven = counterSeven + 1;
        if(userNumber === myNumber){
          alert('Great job ' + userName +', you guessed my number!');
          tallyScore = tallyScore + 1;

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
        else{
          alert("Please enter a number.");
          userNumber = parseInt(prompt('What number am I thinking of?'));
        }
      };
    }
  questionEight();
  //
    function questionNine() {
      for(var i = 0; i < 6; i++){
        var myPlacesAnswers = ['ENGLAND', 'FRANCE', 'CANADA', 'USA', 'UNITED STATES OF AMERICA', 'US', 'UNITED STATES'];
        var userPlacesAnswers = prompt('Last one! Can you guess what countries I\'ve lived in?');
        userPlacesAnswers = userPlacesAnswers.toUpperCase();

        if(myPlacesAnswers.indexOf(userPlacesAnswers) !== -1){
          alert('Great job! your answer was correct!');
          tallyScore = tallyScore + 1;

          break;
        }else{
          alert('Please Try again');
        }
      };
    }
  questionNine();
  //
    function tallyScore() {
      percentage = tallyScore / 8 * 100;

      if (tallyScore === 8) {
        alert('You got ' + tallyScore + ' out of 8 questions. That\'s a percentage of ' + percentage
        + '%. Amazing job, ' + userName +', you got them all right!');
      }else if (tallyScore < 5) {
        alert('You got ' + tallyScore + ' out of 8 questions. That\'s a percentage of ' + percentage
        + '%. Better luck next time, ' + userName +'!');
      }else if (tallyScore >= 5) {
        alert('You got ' + tallyScore + ' out of 8 questions. That\'s a percentage of ' + percentage
        + '%. Pretty good job, ' + userName +'!');
      }
    }
    tallyScore();
};
