'use strict';

// console.log('Hey world hey');

// let userName = prompt('What is your name?');

// alert(`Welcome to my site ${userName}! Pop quiz time! Please answer the following questions with a yes/no or y/n`);

// let questionOneGuess = prompt('Do I live in Miami, FL?').toLowerCase();

// if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
//   alert('Great work!');
// } else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
//   alert('No bueno amigo...you got it wrong');
// }

// let questionTwoGuess = prompt('Was I in the military?').toLowerCase();

// if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
//   alert('Awesomesauce!');
// } else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
//   alert('*cue fail music');
// }

// let questionThreeGuess = prompt('Do I have a tech background?').toLowerCase();

// if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
//   alert('Correctomundo!');
// } else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
//   alert('So close!');
// }

// let questionFourGuess = prompt('Do I joke in the class Zoom chats?').toLowerCase();

// if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
//   alert('For sure! Keeps things light!');
// } else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
//   alert('Maybe you should read the chats more often, lol!');
// }

// let questionFiveGuess = prompt('Is Audrey my favorite Code Fellows instructor?').toLowerCase();

// if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
//   alert('You know it!');
// } else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
//   alert('Do not you put that evil on me Ricky Bobby!');
// }

// alert(`Pop quiz over ${userName}. Next, let's play a guessing game!`);

// TODO:add sixth question that takes in a numeric input by prompting 

// TODO: the user to guess a number

// TODO: Indicate thru an alert if the guess is too high or too low

// TODO: it should give the user exactly four opportunities to get the correct answer

// TODO: after all attempts have been exhausted tell the user the correct answer

let myNum = 25;

for (let i = 0; i < 4; i++) {
  let questionSixGuess = prompt('Guess a number from 1-100');

  if (questionSixGuess > myNum) {
    alert('Just a bit over the mark!');
  }

  if (questionSixGuess < myNum) {
    alert('Too low!');
  }

  if (Number(questionSixGuess) === myNum) {
    alert('You\'re right on the mark!');
    break;
  }

  if (i === 3){
    alert('You are done! The answer was 25');
  }
}




