const minNum = 98;
const maxNum = 100;
const anwser = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;

let guess;
let running = true;
44
while(running) {

  guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
  guess = Number(guess)

  if(isNaN(guess)) {
    window.alert("Please enter a valid number")
  }else if (guess < minNum || guess > maxNum) {
    window.alert(`Please enter a number between ${minNum} - ${maxNum}`)
  }else {
    attempts++;
    if (guess < anwser) {
      window.alert("Too low!");
      } else if (guess > anwser) {
        window.alert("Too high!");
        } else {1
          window.alert(`You found the number in ${attempts} attempts`);
          running = false;
          }
    }
}

console.log(anwser);