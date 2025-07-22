// --- CALCULATOR ---
let calculation = '';

function updateCalculation(value) {
  calculation += value;
  console.log(calculation);
  document.querySelector('.screen').innerHTML = calculation;
}


// --- RPS ---
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
*/

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

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML =
    `You
    <img src="images/${playerMove}-emoji.png" alt="" width="80px" height="80px">
    <img src="images/${computerMove}-emoji.png" alt="" width="80px" height="80px">
    Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function () {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 100);
    isAutoPlaying = true;
  }else {
    clearInterval(intervalId)
    isAutoPlaying = false;
  }
}

document.querySelector('.autoRps').addEventListener('click', () => {
  autoPlay();
})

document.querySelector('.rockBtn').addEventListener('click', () => {
  playGame('rock');
})
document.querySelector('.paperBtn').addEventListener('click', () => {
  playGame('paper');
})
document.querySelector('.scissorsBtn').addEventListener('click', () => {
  playGame('scissors');
})

document.body.addEventListener('keydown', (event) => {
   if(event.key === 'r') {
     playGame('rock')
   }
   else if (event.key === 'p') {
    playGame('paper')
   }
   else if (event.key === 's') {
    playGame('scissors')
   }
})

// --- CART SYSTEM ---
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
  totalC = Math.round(cartCost + cartTax);

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

// --- NOTES SYSTEM ---
let noteList = [];

function renderNotes() {
  let noteListHtml = '';
  for (let i = 0; i < noteList.length; i++) {
    const noteObject = noteList[i];
    const { name, dueDate } = noteObject;

    const html = `
      <div class="note">
        <p class="noteTxt">${name}</p>
        <div class="sumsum">
          <p class="noteDate">${dueDate || "No Date"}</p>
          <button class="onNoteDelete" onclick="deleteNote(${i})">Delete</button>
          <button class="editNote" onclick="editNote(${i})">Edit</button>
        </div>
      </div>
    `;
    noteListHtml += html;
  }

  document.querySelector('.notepad').innerHTML = noteListHtml;
  saveNotesToStorage();
}

function addNote() {
  const inputElement = document.querySelector('.userInput');
  const userInput = inputElement.value.trim();
  const inputDateElement = document.querySelector('.userDateInput');
  const userDateInput = inputDateElement.value;

  if (!userInput) return;

  noteList.push({ name: userInput, dueDate: userDateInput });
  inputElement.value = '';
  inputDateElement.value = '';
  renderNotes();
}

function deleteNote(index) {
  noteList.splice(index, 1);
  renderNotes();
}

function editNote(index) {
  const note = noteList[index];
  document.querySelector('.userInput').value = note.name;
  document.querySelector('.userDateInput').value = note.dueDate;
  noteList.splice(index, 1);
  renderNotes();
}

function resetNotes() {
  if (confirm('Are you sure you want to reset all notes?')) {
    noteList = [];
    renderNotes();
  }
}

function saveNotesToStorage() {
  localStorage.setItem('notes', JSON.stringify(noteList));
}

function loadNotesFromStorage() {
  const storedNotes = localStorage.getItem('notes');
  if (storedNotes) {
    noteList = JSON.parse(storedNotes);
    renderNotes();
  }
}

document.querySelector('.addNoteBtnBox').addEventListener('click', () => {
  addNote();
})

document.querySelectorAll('.onNoteDelete').forEach((deleteButton, index) => {
  deleteButton.addEventListener('click', () => {
    deleteNote(i)
  })
})


window.onload = function () {
  loadNotesFromStorage();

  const resetBtn = document.getElementById('resetNotesBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetNotes);
  }
};
