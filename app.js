function testEvent(){
  var userName = prompt('What\'s your name?');
  alert('Hello, ' + userName + '. Thanks for coming to my site!');

  var answerOne = prompt('Was I born in Newfoundland?');
  answerOne = answerOne.charAt(0);
  answerOne = answerOne.toUpperCase();
  var myAnswerOne = 'Y';

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
  var myAnswerTwo = 'N';

  if (answerTwo === myAnswerTwo) {
    alert('Very well done!');
  } else {
    alert('Wrong! On to the next question!');
  };

  console.log("Question two complete!");

  var answerThree = prompt('Do I speak French?');
  answerThree = answerThree.charAt(0);
  answerThree = answerThree.toUpperCase();
  var myAnswerThree = 'Y';

  if (answerThree === myAnswerThree) {
    alert('Very well done!');
  } else {
    alert('Wrong! On to the next question!');
  };

  console.log("Question three complete");

  var answerFour = prompt('Have I lived in the Yukon Territory?');
  answerFour = answerFour.charAt(0);
  answerFour = answerFour.toUpperCase();
  var myAnswerFour = 'Y';

  if (answerFour === myAnswerFour) {
    alert('Very well done!');
  } else {
    alert('Wrong! On to the next question!');
  };

  console.log("Question five complete");

  var answersSixOptions = ['GUINNESS', 'NOEL', 'MINOU'];
  var answerSix = prompt('What is one of my pet\'s name?');
  answerSix = answerSix.toUpperCase();

  if(answersSixOptions.indexOf(answerSix) > -1){
    alert('Awesome job!!');
  } else {
    alert('You\'re wrong!');
  };

  console.log("Question five complete")

  alert("Time for a two part answer question! You have to get both answers to be right! What two languages do I speak?");

  var twoPart1 = prompt('Enter answer one here.');
  twoPart1 = twoPart1.toUpperCase();

  var twoPart2 = prompt('Enter answer two here.');
  twoPart2 = twoPart2.toUpperCase();

  if (twoPart1 === 'FRENCH'){
    alert('Very well done, you got the first one right!');
  } else if (twoPart1 === 'ENGLISH') {
    alert('Very well done, you got the first one right!');
  } else{
    alert('Wrong! Let\'s check your other answer!');
  };

  if (twoPart2 === 'FRENCH'){
    alert('Very well done, you got the second one right!');
  } else if (twoPart2 === 'ENGLISH') {
    alert('Very well done, you got the second one right!');
  } else{
    alert('Wrong!');
  };

  if ((twoPart1 === 'FRENCH') && (twoPart2 === 'ENGLISH')) {
    alert('Awesome you got them both right! Thank you for taking my quiz!');
  } else if ((twoPart1 === 'ENGLISH') && (twoPart2 === 'FRENCH')) {
    alert('Awesome you got them both right! Thank you for taking my quiz!');
  } else {
    alert('Thank you for taking my quiz!');
  };

  console.log("Question six complete");


}
