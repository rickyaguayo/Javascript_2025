'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hiScore = 0;

const displayMesssage = message => {
  document.querySelector('.message').textContent = message;
};

const updateScore = newScore => {
  document.querySelector('.score').textContent = newScore;
};

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  // no input
  if (!guess) {
    displayMesssage('⛔️ No number!');

    // guess is right (player wins)
  } else if (guess === secretNumber) {
    displayMesssage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    score--;
    updateScore(score);
    document.querySelector('.check').setAttribute('disabled', '');
    // document.querySelector('.check').style.backgroundColor = '#ccc';
    document.querySelector('.check').style.opacity = 0;

    if (score > hiScore) {
      hiScore = score;
      document.querySelector('.highscore').textContent = hiScore;
    }

    // guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMesssage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      updateScore(score);
    } else {
      displayMesssage('💥 You lost the game');
      updateScore(0);
    }
  }

  // guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('.number').textContent = '?';
  updateScore(score);
  document.querySelector('.guess').value = '';
  displayMesssage('Start guessing...');
});
