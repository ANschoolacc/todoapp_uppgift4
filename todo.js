//Array to put todo items
const todoArr = [];
//Declaring variables
const inputBar = document.querySelector("#inputBar");

const todoCount = document.querySelector("#todoCount");

let completed = 0;

const todoList = document.querySelector("main");

const addTodoBtn = document.querySelector("#addTodoBtn");

const alertText = document.querySelector("#alert");

//The main code block, click event to make + button add input into list
addTodoBtn.addEventListener("click", () => {
  text = inputBar.value;

  if (text.length == 0) {
    alertText.innerText = "Please write a Todo";
    return;
  } else {
    alertText.innerText = "";
  }
  //Declaration of variables inside scope
  const container = document.createElement("article");

  const todoItem = document.createElement("li");
  todoItem.innerText = text;

  const trash = document.createElement("img");
  trash.src = "trash.svg";

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  let todoText = todoItem.innerText;

  container.appendChild(checkBox);
  container.appendChild(todoItem);
  container.appendChild(trash);

  todoList.appendChild(container);

  const todoObject = {
    name: text,
    status: false,
  };

  todoArr.push(todoObject);
  console.log(todoArr);

  //Click event for li element. Checks what class the element has
  todoItem.addEventListener("click", () => {
    if (todoItem.getAttribute("class") == "checked") {
      todoItem.setAttribute("class", "");
      //Retracts
      completed--;
      checkBox.checked = false;

      let checkIndex = todoArr
        .map((todoObject) => todoObject.name)
        .indexOf(todoText);
      todoArr[checkIndex].status = false;

      console.log(todoArr);
    } else {
      todoItem.setAttribute("class", "checked");
      completed++;
      checkBox.checked = true;

      let checkIndex = todoArr
        .map((todoObject) => todoObject.name)
        .indexOf(todoText);
      todoArr[checkIndex].status = true;

      console.log(todoArr);
    }
    todoCount.innerText = `Finished Todos: ${completed}`;
  });

  //Click event for checkbox. Same as click event for li element
  checkBox.addEventListener("click", () => {
    if (todoItem.getAttribute("class") == "checked") {
      todoItem.setAttribute("class", "");
      completed--;
      checkBox.checked = false;

      let checkIndex = todoArr
        .map((todoObject) => todoObject.name)
        .indexOf(todoText);
      todoArr[checkIndex].status = false;
      console.log(todoArr);
    } else {
      todoItem.setAttribute("class", "checked");
      completed++;
      checkBox.checked = true;

      let checkIndex = todoArr
        .map((todoObject) => todoObject.name)
        .indexOf(todoText);
      todoArr[checkIndex].status = true;
    }

    todoCount.innerText = `Finished Todos: ${completed}`;
  });

  trash.addEventListener("click", () => {
    if (completed > 0) {
      let checkIndex = todoArr
        .map((todoObject) => todoObject.name)
        .indexOf(todoText);
      todoArr.splice(checkIndex, 1);
      console.log(todoArr);

      completed--;

      container.remove();
    } else {
      let checkIndex = todoArr
        .map((todoObject) => todoObject.name)
        .indexOf(todoText);
      todoArr.splice(checkIndex, 1);

      console.log(todoArr);

      container.remove();
    }

    todoCount.innerText = `Finished Todos: ${completed}`;
  });

  inputBar.value = "";
});
