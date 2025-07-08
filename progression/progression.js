// let calculation = '';

// function updateCalculation(value) {
//   calculation += value;
//   console.log(calculation)
//   document.querySelector('.screen').innerHTML = calculation;
// }

// let score = JSON.parse(localStorage.getItem('score')) || {
//   wins: 0,
//   losses: 0,
//   ties: 0
// }

// function resetScore() {
//   score.wins = 0;
//   score.losses = 0;
//   score.ties = 0;
//   localStorage.removeItem('score');
//   document.querySelector('.winsd').innerHTML = `Wins: ${score.wins}`;
//   document.querySelector('.lossesd').innerHTML = `Losses: ${score.losses}`;
//   document.querySelector('.tiesd').innerHTML = `Ties: ${score.ties}`;
//   document.querySelector('.overalltxt').innerHTML = `--`
// }

// function playGame(playerMove) {
//   const computerMove = pickComputerMove();

//   let result = '';

//   if (playerMove === 'scissors') {
//     if (computerMove === 'rock') {
//       result = 'You lose.';
//     } else if (computerMove === 'paper') {
//       result = 'You win.';
//     } else if (computerMove === 'scissors') {
//       result = 'Tie.';
//     }

//   } else if (playerMove === 'paper') {
//     if (computerMove === 'rock') {
//       result = 'You win.';
//     } else if (computerMove === 'paper') {
//       result = 'Tie.';
//     } else if (computerMove === 'scissors') {
//       result = 'You lose.';
//     }

//   } else if (playerMove === 'rock') {
//     if (computerMove === 'rock') {
//       result = 'Tie.';
//     } else if (computerMove === 'paper') {
//       result = 'You lose.';
//     } else if (computerMove === 'scissors') {
//       result = 'You win.';
//     }
//   }

//   if (result === 'You win.') {
//     score.wins += 1;
//     document.querySelector('.winsd').innerHTML = `Wins: ${score.wins}`;
//     document.querySelector('.overalltxt').innerHTML = result;
//   } else if (result === 'You lose.') {
//     score.losses += 1;
//     document.querySelector('.lossesd').innerHTML = `Losses: ${score.losses}`;
//     document.querySelector('.overalltxt').innerHTML = result;
//   } else if (result === 'Tie.') {
//     score.ties += 1;
//     document.querySelector('.tiesd').innerHTML = `Ties: ${score.ties}`;
//     document.querySelector('.overalltxt').innerHTML = result;
//   }
//   localStorage.setItem('score', JSON.stringify(score));

//   //       alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} 
//   // Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);
// }
// function pickComputerMove() {
//   const randomNumber = Math.random();

//   if (randomNumber >= 0 && randomNumber < 1 / 3) {
//     computerMove = 'rock';
//   } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
//     computerMove = 'paper';
//   } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
//     computerMove = 'scissors';
//   }

//   return computerMove;
// }

// let cQuantity = 0;
// let totalC = 0;
// let cartCost = 0;
// let cartTax = 0;
// function updateCart(item, cost) {
//   cQuantity++;
//   cartCost += Number(cost);
//   cartCost = Math.round(cartCost)
//   cartTax += cost * 0.2
//   cartTax = Math.round(cartTax)
//   totalC += Number(cost + cartTax);
//   totalC = Math.round(totalC)
//   document.querySelector('.cartList').innerHTML = ` Cart: ${cQuantity} * ${item}`
//   document.querySelector('.totalC').innerHTML = `Total: $${totalC}`;
//   document.querySelector('.cartCost').innerHTML = `Cost: $${cartCost}`;
//   document.querySelector('.cartTax').innerHTML = `Tax: $${cartTax}`;
// }


let calculation = '';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  document.querySelector('.screen').innerHTML = calculation;
}

let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreDisplay();
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreDisplay();
  document.querySelector('.overalltxt').innerHTML = result;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove;

  if (randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

function updateScoreDisplay() {
  document.querySelector('.winsd').innerHTML = `Wins: ${score.wins}`;
  document.querySelector('.lossesd').innerHTML = `Losses: ${score.losses}`;
  document.querySelector('.tiesd').innerHTML = `Ties: ${score.ties}`;
  document.querySelector('.overalltxt').innerHTML = `--`;
}

window.onload = function () {
  updateScoreDisplay();
};

let cQuantity = 0;
let totalC = 0;
let cartCost = 0;
let cartTax = 0;

function updateCart(item, cost) {
  cQuantity++;
  cartCost += Number(cost);
  cartCost = Math.round(cartCost);
  cartTax += cost * 0.2;
  cartTax = Math.round(cartTax);
  totalC += Number(cost + cartTax);
  totalC = Math.round(totalC);
  document.querySelector('.cartList').innerHTML = ` Cart: ${cQuantity} * ${item}`;
  document.querySelector('.totalC').innerHTML = `Total: $${totalC}`;
  document.querySelector('.cartCost').innerHTML = `Cost: $${cartCost}`;
  document.querySelector('.cartTax').innerHTML = `Tax: $${cartTax}`;
}

function resetCart() {
  cQuantity = 0;
  totalC = 0;
  cartCost = 0;
  cartTax = 0;
  updateCartDisplay();
}
function updateCartDisplay() {
  document.querySelector('.cartList').innerHTML = ` Cart: ${cQuantity} * --`;
  document.querySelector('.totalC').innerHTML = `Total: $0`;
  document.querySelector('.cartCost').innerHTML = `Cost: $0`;
  document.querySelector('.cartTax').innerHTML = `Tax: $0`;
}
