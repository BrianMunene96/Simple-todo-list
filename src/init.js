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
console.log(container[0]);

// CREATE DOM ELEMENT
function createDomEl(array) {
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
