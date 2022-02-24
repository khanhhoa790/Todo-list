function Todo(title, description = "", status = "not done") {
  this.title = title;
  this.description = description;
  this.status = status;
}

Todo.prototype = {
  checkDone: function (status) {
    if (status === "done") {
      return "checked";
    } else {
      return "";
    }
  },
};

let todo1 = new Todo("Chart", "complete chart", "done");

console.log(todo1.checkDone(todo1.status));

let TodoList = [
  new Todo(
    "Table",
    "Usce id sagittis sem, a porttitor eros Vivamus eget tincidunt leo. Nula ultricies ligula sed dui porttitor bibendum",
    "done"
  ),

  new Todo(
    "Chart",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae fugit quaerat iste blanditiis libero dicta eius vel reiciendis! Adipisci saepe cumque itaque vel mollitia labore ipsam officiis illum minima.",
    "not done"
  ),

  new Todo(
    "Shelf",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae fugit quaerat iste blanditiis",
    "done"
  ),

  new Todo("Cereals", "Use id abc", "not done"),
];

const taskTitle = document.getElementById("new-task");
const taskDescription = document.getElementById("new-description");
const addButton = document.getElementsByTagName("button")[0];
const incompleteTaskHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");

addButton.addEventListener("click", () => {
  let todoTittle = taskTitle.value;
  let todoDes = taskDescription.value;
  if (todoTittle == "") {
    alert("You need add some thing");
  } else {
    TodoList.push(new Todo(todoTittle, todoDes));
    displayTasks(TodoList);
  }
});

const displayTasks = (TodoList) => {
  const htmlString = TodoList.map((todo) => {
    return `
          <li>
              <input type="checkbox" ${todo.checkDone(todo.status)} />
              <label class="task-title">${todo.title}</label>
              <p class="task-des">${todo.description}</p>
              <button class="delete">Delete</button>
          </li>
          `;
  }).join("");
  incompleteTaskHolder.innerHTML = htmlString;
};

displayTasks(TodoList);

let listCheckBox = document.querySelectorAll('input[type="checkbox"]');

// listCheckBox.forEach((inputCheck) => {
//   let todoTitle = document.querySelectorAll("task-title");
//   let todoDes = document.querySelectorAll("task-des");

//   console.log(todoTitle);
//   console.log(todoDes);
//   if (inputCheck.checked == true) {
//     todoTitle.classList.add("task-complete");
//     todoDes.classList.add("task-complete");
//   }
// });
