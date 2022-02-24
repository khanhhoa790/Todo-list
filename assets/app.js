function Todo(title, description, status) {
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
const list = document.getElementById("incomplete-tasks");
const checkBox = document.get;

const displayTasks = (TodoList) => {
  const htmlString = TodoList.map((todo) => {
    return `
          <li>
              <input type="checkbox" ${todo.checkDone(todo.status)} />
              <label>${todo.title}</label>
              <p>${todo.description}</p>
              <button class="delete">Delete</button>
          </li>
          `;
  }).join("");
  list.innerHTML = htmlString;
};

displayTasks(TodoList);

let taskIncomplete = function () {
  console.log("Incomplete Task...");
  //Mark task as incomplete.
  //When the checkbox is unchecked
  //Append the task list item to the #incomplete-tasks.
  let listItem = this.parentNode;
  incompleteTaskHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
};
