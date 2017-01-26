var userName = prompt('What\'s your name?');
alert('Hello, ' + userName + '. Thanks for coming to my site!');

var answerOne = prompt('Was I born in Newfoundland?').toUpperCase();
var myAnswerOne = 'YES';

if (answerOne === myAnswerOne) {
  alert('Very well done!')
} else {
  alert('Wrong! On to the next question!')
}
