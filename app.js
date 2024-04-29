document.addEventListener('DOMContentLoaded', function () {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    const todos = [];

    todoForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        const newTodo = todoInput.value.trim();
        if (newTodo) {
            todos.push(newTodo);
            renderTodos();
            todoInput.value = ''; // Clear the input field
        }
    });

    function renderTodos() {
        todoList.innerHTML = ''; // Clear existing todos
        todos.forEach(function (todo) {
            const li = document.createElement('li');
            li.textContent = todo;
            todoList.appendChild(li);
        });
    }
});
