const addButton = document.getElementById("add-todo");

addButton.onclick = addTodo;

function addTodo() {
    const todo_list = document.getElementById("todo-list");

    // todo-item 추가
    const todo_item = document.createElement("div");
    todo_item.className = "todo-item";

    // todo-item 안에 checkbox 추가
    const todo_check = document.createElement("input");
    todo_check.type = "checkbox";

    // todo-item 안에 input 요소 추가
    const todo_input = document.createElement("input");
    todo_input.type = "text";
    todo_input.disabled = true;

    todo_input.addEventListener("blur", function () {
        todo_input.disabled = true;
    });

    // revise 버튼 추가
    const revise_button = document.createElement("button");
    revise_button.textContent = "Revise";
    revise_button.onclick = function () {
        todo_input.disabled = false;
        todo_input.focus();
    };

    // delete 버튼 추가
    const delete_button = document.createElement("button");
    delete_button.textContent = "Delete";
    delete_button.onclick = function () {
        todo_item.remove();
    };

    // todo-item에 요소 추가
    todo_item.appendChild(todo_check);
    todo_item.appendChild(todo_input);
    todo_item.appendChild(revise_button);
    todo_item.appendChild(delete_button);

    // todo-list에 todo-item 추가
    todo_list.appendChild(todo_item);
}

