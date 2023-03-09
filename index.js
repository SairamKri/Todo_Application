let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoItemToList = document.getElementById("addTodoItemToList");


let todoList = [
  {
    text: "Learn HTML",
    uniqueNo:1
  },
  {
    text: "Learn CSS",
    uniqueNo:2
  },
  {
    text: "Learn JavaScript",
    uniqueNo:3
  }
];

function onChangeTodoStatus(checkboxId,labelId){
    let checkboxIdElement = document.getElementById(checkboxId);
    let labelIdElement = document.getElementById(labelId);
    labelIdElement.classList.toggle("checked");
}

function onDeleteTodo(todoId){
    let todoIdElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoIdElement);
}

addTodoItemToList.onclick = function(){
    onAddTodo()
}

function createAndAppendTodo(todo) {
  let checkboxId = "checkbox" + todo.uniqueNo;
  let labelId = "label" + todo.uniqueNo;
  let todoId = "todo" + todo.uniqueNo;
  
  let todoElement = document.createElement("li");
  todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
  todoElement.id = todoId;
  todoItemsContainer.appendChild(todoElement);

  let inputElement = document.createElement("input");
  inputElement.type = "checkbox";
  inputElement.id = checkboxId;
  inputElement.classList.add("checkbox-input");
  inputElement.onclick = function(){
    onChangeTodoStatus(checkboxId,labelId)
  }
  todoElement.appendChild(inputElement);

  let labelContainer = document.createElement("div");
  labelContainer.classList.add("label-container", "d-flex", "flex-row");
  todoElement.appendChild(labelContainer);

  let labelElement = document.createElement("label");
  labelElement.setAttribute("for", checkboxId);
  labelElement.classList.add("checkbox-label");
  labelElement.textContent = todo.text;
  labelElement.id = labelId;
  labelContainer.appendChild(labelElement);

  let deleteIconContainer = document.createElement("div");
  deleteIconContainer.classList.add("delete-icon-container");
  labelContainer.appendChild(deleteIconContainer);

  let deleteIcon = document.createElement("i");
  deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
  deleteIcon.onclick = function(){
    onDeleteTodo(todoId)
  }
  deleteIconContainer.appendChild(deleteIcon);
}

function onAddTodo(){
    let todosCount = todoList.lenght;
    todosCount = todosCount + 1;
    
    let inputTextElement = document.getElementById("todoUserInput");
    let inputTextElementValue = inputTextElement.value;
    
    if(inputTextElementValue === ""){
        alert("Enter the valid input");
        return;
    }
    let newTodo = {
        text:inputTextElementValue,
        uniqueNo:todosCount,
        isChecked:true
    }
    todoList.push(newTodo);
    createAndAppendTodo(newTodo);
    inputTextElement.value = "";
}

for (let todo of todoList) {
  createAndAppendTodo(todo);
}
