function getUserInput() {
  const inputElement = document.querySelector('.userInput');
  const userInput = inputElement.value;
  localStorage.setItem('userInput', userInput)
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(userInput);
  localStorage.setItem('todos', JSON.stringify(todos));
  inputElement.value = '';
}


function addTodo() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const list = document.querySelector('.js-todoList');
  list.innerHTML = '';

  // for (let i = 0; i < todos.length; i++) {
  //   let todo = todos[i];
  //   list.innerHTML += `<li>${todo}</li>`;
  // }

  todos.forEach((todo, index) => {
    list.innerHTML += `
      <li>
        ${todo}
        <button class="deleteBtn" onclick="deleteTodo(${index})">❌</button>
      </li>`;
  });
}

function deleteTodo(index) {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.splice(index, 1);
  localStorage.setItem('todos', JSON.stringify(todos));
  addTodo();
}

function handleAddTodo() {
  getUserInput();
  addTodo();
}

window.onload = () => {
  addTodo();
};

