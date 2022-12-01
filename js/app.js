'use strict';

console.log('Hey world hey');

let score = 0;

let userName = prompt('What is your name?');

alert(`Welcome to my site ${userName}! Pop quiz time! Please answer the following questions with a yes/no or y/n`);

let questionOneGuess = prompt('Do I live in Miami, FL?').toLowerCase();

if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
  alert('Great work!'); score++;
} else if (questionOneGuess === 'no' || questionOneGuess === 'n') {
  alert('No bueno amigo...you got it wrong');
}

let questionTwoGuess = prompt('Was I in the military?').toLowerCase();

if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
  alert('Awesomesauce!'); score++;
} else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  alert('*cue fail music');
}

let questionThreeGuess = prompt('Do I have a tech background?').toLowerCase();

if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  alert('Correctomundo!'); score++;
} else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
  alert('So close!');
}

let questionFourGuess = prompt('Do I joke in the class Zoom chats?').toLowerCase();

if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
  alert('For sure! Keeps things light!'); score++;
} else if (questionFourGuess === 'no' || questionFourGuess === 'n') {
  alert('Maybe you should read the chats more often, lol!');
}

let questionFiveGuess = prompt('Is Audrey my favorite Code Fellows instructor?').toLowerCase();

if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  alert('You know it!'); score++;
} else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  alert('Do not you put that evil on me Ricky Bobby!');
}

alert(`Pop quiz over ${userName}. Next, let's play a guessing game!`);

function questionSix() {
  let myNum = 25;

  for (let i = 0; i < 4; i++) {
    let questionSixGuess = prompt('Guess a number from 1-100');

    if (questionSixGuess > myNum) {
      alert('Just a bit over!');
    }

    if (questionSixGuess < myNum) {
      alert('Too low \'Lil Jon!');
    }

    if (questionSixGuess === myNum) {
      alert('You\'re right on the mark!');
      score++;
      break;
    }

    if (i === 3) {
      alert('Dunzo! The answer was 25');
    }
  }
}
questionSix();

function questionSeven() {

  let placesAnswer = ['Austalia', 'Hawaii', 'Martinique'];

  let guesses = 6;

  for (let i = 0; i < guesses; i++) {
    let questionSevenGuess = prompt('Let\'s play another game.  Of the places I\'ve listed which do you think were my favorites?').toLowerCase();
    for (let b = 0; b < placesAnswer.length; b++) {
      if (questionSevenGuess === placesAnswer[b]) {
        alert('Great work!...you\'re spot on!');
        score++;
        i = 6;
      }
    }
  }
  alert(`Here's the correct answers...${placesAnswer}`);
}
questionSeven();

alert(`The final score was...${score}`);
