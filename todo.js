//Array to put todo items
const todoList = [];
//Variables
const inputBar = document.querySelector("#inputBar");

const todoCount = document.querySelector("#todoCount");

let completed = 0;

const list = document.querySelector("main");

const addTodoBtn = document.querySelector("#addTodoBtn");

const alertText = document.querySelector("#alert");

//click event to make + button add input into list.
addTodoBtn.addEventListener("click", () => {
  text = inputBar.value;

  if (text.length == 0) {
    alertText.innerText = "Please write a Todo";
    return;
  } else {
    alertText.innerText = "";
  }

  const container = document.createElement("article");

  const todoItem = document.createElement("li");
  todoItem.innerText = text;

  const trash = document.createElement("img");
  trash.src = "trash.svg";

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  container.appendChild(checkBox);
  container.appendChild(todoItem);
  container.appendChild(trash);

  list.appendChild(container);

  todoItem.addEventListener("click", () => {
    if (todoItem.getAttribute("class") == "checked") {
      todoItem.setAttribute("class", "");
      completed--;
      checkBox.checked = false;
    } else {
      todoItem.setAttribute("class", "checked");
      completed++;
      checkBox.checked = true;
    }
    todoCount.innerText = `Finished Todos: ${completed}`;
  });

  //Click event for checkbox. Same as click event for li element
  checkBox.addEventListener("click", () => {
    if (todoItem.getAttribute("class") == "checked") {
      todoItem.setAttribute("class", "");
      completed--;
      checkBox.checked = false;
    } else {
      todoItem.setAttribute("class", "checked");
      completed++;
      checkBox.checked = true;
    }
    todoCount.innerText = `Finished Todos: ${completed}`;
  });

  trash.addEventListener("click", () => {
    if (completed > 0) {
      completed--;
      container.remove();
    } else {
      container.remove();
    }

    todoCount.innerText = `Finished Todos: ${completed}`;
  });

  inputBar.value = "";
});

//function to make li with text from variables in object created and appended to hmtl

//click event to change class of art and boolean of object to done/true. Add/remove 1 from counter depending on boolean value.

function checkTodo() {}

//click event to remove li item and object in array through trashcan icon
