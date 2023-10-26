const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  let itemCount = 0;
  let uncheckedCount = 0;
  
  function updateCounts() {
    itemCountSpan.innerText = itemCount;
    uncheckedCountSpan.innerText = uncheckedCount;
  }
  
  function newTodo() {
    const todo = prompt("Введіть вашу справу:");
    if (todo) {
      itemCount++;
  
      const li = document.createElement('li');
      li.className = classNames.TODO_ITEM;
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = classNames.TODO_CHECKBOX;
      checkbox.addEventListener('change', toggleCheckbox);
  
      const text = document.createTextNode(todo);
  
      li.appendChild(checkbox);
      li.appendChild(text);
  
      list.appendChild(li);
  
      uncheckedCount++;
      updateCounts();
    }
  }
  
  function toggleCheckbox(event) {
    uncheckedCount += event.target.checked ? -1 : 1;
    updateCounts();
  }
  