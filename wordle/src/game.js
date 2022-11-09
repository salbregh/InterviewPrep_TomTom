import { words } from "./words";

let answer = words[Math.floor(Math.random() * words.length)]

export const validateGuess = (guess) => {
  console.clear();
  
  // make the guess lower case, so it wont go bad on capitals
  guess = guess.toLowerCase();

  console.log(`the guess: ${guess}`);
  console.log(`the answer: ${answer}`);

  // if the answer is correct, we go to the next word.
  if (guess === answer) {
    console.log('CONGRATS! This is the correct word!');
    alert(`WHOOOOOO CORRECT WORD!`);
    answer = words[Math.floor(Math.random() * words.length)];
    console.clear();
    console.log('A new word is provided :)');
    return ;
  }
  if (guess.length > 5) {
    console.log('Too many letters.');
    return ;
  }
  if (guess.length < 5) {
    console.log("Not enough letters.");
    return ;
  }
  // check for invalid characters
  if (!/^[a-z]+$/.test(guess)) {
    console.log("Use only alphabetical characters.");
    return ;
  }
  if (!words.includes(guess)) {
    console.log("The word is not in the list.");
    return ;
  }

  let message = '';
  for (let i = 0; i < 5; i++) {
    let pos = answer.indexOf(guess[i]);
    if (pos === -1) {
      message = ': This letter is not in the word.';
    } else {
      if (pos === i) {
        message = ': Correct!';
      } else {
        message = ': Correct letter, but in the wrong position.';
      }
    }
    console.log(`[${guess[i]}] ${message}`);
  }
};

// https://dev.to/stefirosca/7-tips-tricks-to-make-your-console-log-output-stand-out-389g