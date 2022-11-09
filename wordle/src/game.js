import { words } from "./words";

const answer = words[Math.floor(Math.random() * words.length)]
// const answer = "range";

export const validateGuess = (guess) => {
  console.clear();
  console.log(`the guess: ${guess}`);
  console.log(`the answer: ${answer}`);

  if (guess === answer) {
    console.log('CONGRATS! This is the correct word!!!');
    alert(`WHOOOOOO CORRECT WORD!`);
  }
};



// https://dev.to/stefirosca/7-tips-tricks-to-make-your-console-log-output-stand-out-389g