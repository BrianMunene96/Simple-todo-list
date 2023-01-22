// HIDE FORM ELEMENT BY BUTTON HOUSE
function hideAddBtn() {
  const taskForm = document.getElementById('form');
  if (taskForm.style.display === 'none') {
    taskForm.style.display = 'block';
  } else {
    taskForm.style.display = 'none';
  }
}

const addBtn = document.getElementsByClassName('btn');
addBtn[0].addEventListener('click', hideAddBtn);

// GET CONTAINER DIV
const container = document.getElementsByClassName('container');

// CREATE DOM ELEMENT
export function createDomEl(array) {
  return array.forEach((object) => {
    const divEl = document.createElement('div');
    divEl.className = 'display-todos';
    const inputEl = document.createElement('input');
    inputEl.type = 'checkbox';
    inputEl.className = 'status';
    const paragraphEl = document.createElement('p');
    paragraphEl.className = 'todo-text';
    paragraphEl.innerText = object.title;
    const spanEl = document.createElement('span');
    const iEl = document.createElement('i');
    iEl.className = 'fa fa-trash';
    iEl.ariaHidden = true;
    spanEl.appendChild(iEl);
    divEl.appendChild(inputEl);
    divEl.appendChild(paragraphEl);
    divEl.appendChild(spanEl);
    container[0].appendChild(divEl);

    return divEl;
  });
}
// FETCH TODO FROM BACKEND
const getTodos = async () => {
  const url = 'http://localhost:5000/todos';

  try {
    const result = await fetch(url);
    const data = await result.json();

    createDomEl(data);
  } catch (error) {
    console.log(error);
  }
};

getTodos();

// POST NEW TODOS
const postTodos = async () => {
  const url = 'http://localhost:5000/todos';

  const newTodo = document.getElementById('add-task');

  const todoDetails = {
    title: newTodo.value,
    completed: false,
  };

  try {
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(todoDetails),
    });

    const data = await result.json();
    getTodos();
  } catch (error) {
    console.error(error);
  }
};

const saveBtn = document.getElementById('save-task');
saveBtn.addEventListener('click', postTodos);

// DELETE TODOS
const deleteTodo = async () => {
  const url = `http://localhost:5000/todos/${id}`;

  //const id =
};
