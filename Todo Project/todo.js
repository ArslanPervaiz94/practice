let todoList = [
  {
    item: "abc",
    dueDate: "02/20/2024",
  },
  {
    item: "cdf",
    dueDate: "02/20/2024",
  },
];
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#ad-todo");
  let dateElement = document.querySelector("#ad-date");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  dateElement.value = "";
  displayItems();
}

function displayItems() {
  let contElement = document.querySelector(".todo-cont");
  let newItems = "";
  for (let i = 0; i < todoList.length; i++) {
    // let item = todoList[i].item;
    // let dueDate = todoList[i].dueDate;
    // this or above can be used
    let { item, dueDate } = todoList[i];
    newItems += `
    <span> ${item} </span> 
    <span> ${dueDate} </span>
    <button class="del-btn" onclick ='todoList.splice(${i},1); displayItems();'>Delete Todo</button>
    `;
  }
  contElement.innerHTML = newItems;
}
