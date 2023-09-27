//Array to put todo objects
const todoArr = [];
//Declaring variables outside main codeblock
const inputBar = document.querySelector("#inputBar");

const todoCount = document.querySelector("#todoCount");

let completed = 0;

const todoList = document.querySelector("main");

const addTodoBtn = document.querySelector("#addTodoBtn");

const alertText = document.querySelector("#alert");

//The main codeblock, click event to make + button add input into list
addTodoBtn.addEventListener("click", () => {
  //Variable that has the value of inputbar textcontent
  text = inputBar.value;
  //If statement that doesnt let you put in nothing in inputbar
  if (text.length == 0) {
    alertText.innerText = "Please write a Todo";
    return;
  } else {
    alertText.innerText = "";
  }
  //Declaration of variables inside scope that creates elements in HTML
  const container = document.createElement("article");

  const todoItem = document.createElement("li");
  //Putting text of todo in variable
  todoItem.innerText = text;

  const trash = document.createElement("img");
  //Adding source to image i want to use
  trash.src = "trash.svg";

  const checkBox = document.createElement("input");
  //Setting attribute to input element so it changes to checkbox type
  checkBox.setAttribute("type", "checkbox");

  let todoText = todoItem.innerText;
  //Adding childelements to article element
  container.appendChild(checkBox);
  container.appendChild(todoItem);
  container.appendChild(trash);
  //Adding article element as child to main element
  todoList.appendChild(container);
  ///Creating object with text content of inputbar and status of false to push into array.
  const todoObject = {
    name: text,
    status: false,
  };
  //Pushing object into array
  todoArr.push(todoObject);

  //Click event for li element. Checks if  li element has a class and adds if not.
  todoItem.addEventListener("click", () => {
    if (todoItem.getAttribute("class") == "checked") {
      //Sets li element class to nothing
      todoItem.setAttribute("class", "");
      //Retracts 1 from finished todo
      completed--;
      //Changes checkedvalue of checkbox
      checkBox.checked = false;
      //Calls function to change status of object
      changeStatus(todoText, false);
    } else {
      //Sets li element class to checked
      todoItem.setAttribute("class", "checked");
      //Adds 1 to finished todos
      completed++;
      //Changes checkedvalue of checkbox
      checkBox.checked = true;
      //Calls function to change status of object
      changeStatus(todoText, true);
    }
    //Adds or retracts finished todos count
    todoCount.innerText = `Finished Todos: ${completed}`;
  });

  //Click event for input type:checkbox element. Checks if  li element has a class and adds if not. Same as li clickevent. Is used to be able to check list items when checkbox is clicked. Otherwise same as todoItem click event
  checkBox.addEventListener("click", () => {
    if (todoItem.getAttribute("class") == "checked") {
      todoItem.setAttribute("class", "");

      completed--;

      checkBox.checked = false;

      changeStatus(todoText, false);
    } else {
      todoItem.setAttribute("class", "checked");
      completed++;
      checkBox.checked = true;

      changeStatus(todoText, true);
    }
    //Adds or retracts finished todos count
    todoCount.innerText = `Finished Todos: ${completed}`;
  });
  //click event for trash icon that removes todo.
  trash.addEventListener("click", () => {
    //If finished todo count is higher than 0 it retracts 1.
    if (completed > 0) {
      //Calls function to remove object from array
      removeListObject(todoText);
      //Retracts 1 from finished todos
      completed--;
      //Removes article element wich contains todo
      container.remove();
    } else {
      //Calls function to remove object from array
      removeListObject(todoText);
      //Removes article element wich contains todo
      container.remove();
    }
    //Adds or retracts finished todos count
    todoCount.innerText = `Finished Todos: ${completed}`;
  });
  //Removes text user wrote in inputbar after pressing + button
  inputBar.value = "";
});
//Finds correct index in todoArr then changes objects status to true/false
function changeStatus(todoText, checked) {
  let checkIndex = todoArr
    .map((todoObject) => todoObject.name)
    .indexOf(todoText);

  todoArr[checkIndex].status = checked;
}

//Finds correct index then removes that object from array
function removeListObject(todoText) {
  let checkIndex = todoArr
    .map((todoObject) => todoObject.name)
    .indexOf(todoText);
  todoArr.splice(checkIndex, 1);
}
