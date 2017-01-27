function testEvent(){
  var userName = prompt('What\'s your name?');
  alert('Hello, ' + userName + '. Thanks for coming to my site!');

  var answerOne = prompt('Was I born in Newfoundland?');
  answerOne = answerOne.charAt(0);
  answerOne = answerOne.toUpperCase();
  var myAnswerOne = 'Y';

  if (answerOne === myAnswerOne) {
    alert('Very well done!')
  } else { //<=tSomething is happening here
  };

  var answerTwo = prompt('Did I go to university on Newfoundland?');
  answerTwo = answerTwo.charAt(0);
  answerTwo = answerTwo.toUpperCase();
  var myAnswerTwo = 'N';

  if (answerTwo === myAnswerTwo) {
    alert('Very well done!');
  } else {
    alert('Wrong! On to the next question!');
  };

  var answerThree = prompt('Do I speak French?');
  answerThree = answerThree.charAt(0);
  answerThree = answerThree.toUpperCase();
  var myAnswerThree = 'Y';

  if (answerThree === myAnswerThree) {
    alert('Very well done!');
  } else {
    alert('Wrong! On to the next question!');
  };

  var answerFour = prompt('Have I lived in the Yukon Territory?');
  answerFour = answerFour.charAt(0);
  answerFour = answerFour.toUpperCase();
  var myAnswerFour = 'Y';

  if (answerFour === myAnswerFour) {
    alert('Very well done!');
  } else {
    alert('Wrong! On to the next question!');
  };

  alert("Time for a two answer question! You have to get both answers be to right! What two languages do I speak?");
  var twoPart1 = prompt('Enter answer one here');
  var twoPart2 = prompt('Enter answer two here');
  twoPart1 = twoPart1.toUpperCase();
  twoPart2 = twoPart2.toUpperCase();

  if (twoPart1 === "FRENCH"||"ENGLISH") && (twoPart2 === "FRENCH" || "ENGLISH"); {
    alert('Very well done!');
  } else {
    alert('Wrong! On to the next question!');
  };
}
