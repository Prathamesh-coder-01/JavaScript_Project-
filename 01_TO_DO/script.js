const buttonEl = document.querySelector("#button");
const todoList = document.querySelector("#todo_list");
const inputEl = document.querySelector(".input");

function addTodo() {

    let inputValue = inputEl.value.trim();

    if (inputValue === "") {
        alert("Please enter a valid value");
        return;
    }

    const li = document.createElement("li");
    li.textContent = inputValue;

    todoList.appendChild(li);

    console.log(inputValue);

    inputEl.value = "";
}

buttonEl.addEventListener("click", addTodo);