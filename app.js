var userName = prompt('What\'s your name?');
alert('Hello, ' + userName + '. Thanks for coming to my site!');

var answerOne = prompt('Was I born in Newfoundland?').toUpperCase();
answerOne = answerOne.charAt(0);
var myAnswerOne = 'Y';

if (answerOne === myAnswerOne); {
  alert('Very well done!')
}
else {
  alert('Wrong! On to the next question!');
}

var answerTwo = prompt('Did I go to university on Newfoundland?').toUpperCase();
answerTwo = answerTwo.charAt(0);
var myAnswerTwo = 'N';

if (answerTwo === myAnswerTwo) {
  alert('Very well done!');
}
else {
  alert('Wrong! On to the next question!');
}

var answerThree = prompt('Do I speak French?').toUpperCase();
answerThree = answerThree.charAt(0);
var myAnswerThree = 'Y';

if (answerThree === myAnswerThree) {
  alert('Very well done!');
}
else {
  alert('Wrong! On to the next question!');
}

var answerFour = prompt('Have I lived in the Yukon Territory?').toUpperCase();
answerFour = answerFour.charAt(0);
var myAnswerFour = 'Y';

if (answerFour === myAnswerFour) {
  alert('Very well done!');
}
else {
  alert('Wrong! On to the next question!');
}
