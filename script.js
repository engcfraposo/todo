document
.getElementById('addTodoButton')
.addEventListener('click', function(){
    let value = document
    .getElementById('todoInput').value;
    let priority = document
    .getElementById('prioritySelect').value;
   if(value && priority){
    addTodo(value, priority)
    document
    .getElementById('todoInput').value = '';
    document
    .getElementById('prioritySelect').value = '';
   }
})

function addTodo(text, priority){
    let list = document
    .getElementById('todoList');
    let item = renderItem(text);
    let deleteButton = renderDeleteButton(item, list);
    let completeButton = renderCompleteButton(item)
    setPriority(priority, item)
    item.appendChild(deleteButton);
    item.appendChild(completeButton);
    list.appendChild(item);
}

function setPriority(priority, item){
switch (priority) {
    case '1':
        item.style.backgroundColor = 'green';
        item.style.color = 'white';
        break;
    case '2':
        item.style.backgroundColor = 'yellow';
        break;
    case '3':
        item.style.backgroundColor = 'red';
        item.style.color = 'white';
        break;
}
}

function renderDeleteButton(item, list){
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add(
        'btn',
        'btn-danger',
        'btn-sm',
        'float-right'
    );
    deleteButton
    .addEventListener('click', function(){
        list.removeChild(item)
    })
    return deleteButton;
}

function renderCompleteButton(item){
    let completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.classList.add(
        'btn',
        'btn-info',
        'btn-sm',
        'float-right',
        'mr-2'
    );
    completeButton
    .addEventListener('click', function(){
        item.style.textDecoration = 
        item.style.textDecoration === 'line-through'
        ? 'none'
        : 'line-through';
    })
    return completeButton;
}

function renderItem(text){
    let item = document
    .createElement('li');

    item.innerText = text;
    item.classList.add('list-group-item', 'mt-2')
    return item;
}