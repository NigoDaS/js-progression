function getUserInput() {
  const inputElement = document.querySelector('.userInput');
  const userInput = inputElement.value;


  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  todos.push(userInput);
  localStorage.setItem('todos', JSON.stringify(todos));

  inputElement.value = '';
}

function addTodo() {
  const todos = JSON.parse(localStorage.getItem('todos')) || [];
  const list = document.querySelector('.js-todoList');
  list.innerHTML = '';

  todos.forEach(todo => {
    list.innerHTML += `<li>${todo}</li>`;
  });
}

function handleAddTodo() {
  getUserInput();
  addTodo();
}

window.onload = () => {
  addTodo();
};
