let input;
let todoList;

window.onload = function() {
    init();
}

function init() {
    console.log('Initializing aplication...');
    input = document.getElementById('newTodo');
    todoList = document.getElementById('todoList');
}

function addTodoItem() {
    let todoItem = input.value;
    let todo = document.createElement('P');
    let btnDelete = document.createElement('BUTTON');
    let item = document.createElement('LI');
    btnDelete.setAttribute('onclick', 'deleteItem(this)');
    btnDelete.innerText = 'Borrar';
    todo.innerText = todoItem;
    item.appendChild(todo);
    item.appendChild(btnDelete);
    todoList.appendChild(item);
}

function deleteItem(todo) {
    todo.parentElement.remove();
}