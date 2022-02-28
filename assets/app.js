function Task(title, description = "", status = "not done") {
  this.title = title;
  this.description = description;
  this.status = status;
}

Task.prototype = {
  checkDone: function (status) {
    if (status === "done") {
      return "checked";
    } else {
      return "";
    }
  },
};

let todo1 = new Task("Chart", "complete chart", "done");

console.log(todo1.checkDone(todo1.status));

let taskData = [
  {
    title: "Table",
    description:
      "Usce id sagittis sem, a porttitor eros Vivamus eget tincidunt leo. Nula ultricies ligula sed dui porttitor bibendum",
    status: "done",
  },
  {
    title: "Chart",
    description:
      "Usce id sagittis sem, a porttitor eros Vivamus eget tincidunt leo. Nula ultricies ligula sed dui porttitor bibendum",
    status: "not done",
  },
  {
    title: "Shelf",
    description:
      "Usce id sagittis sem, a porttitor eros Vivamus eget tincidunt leo. Nula ultricies ligula sed dui porttitor bibendum",
    status: " not done",
  },
  {
    title: "Cereals",
    description:
      "Usce id sagittis sem, a porttitor eros Vivamus eget tincidunt leo. Nula ultricies ligula sed dui porttitor bibendum",
    status: "done",
  },
];

let TaskList = [];

taskData.forEach((data) => {
  TaskList.push(new Task(data.title, data.description, data.status));
});
const taskTitle = document.getElementById("new-task");
const taskDescription = document.getElementById("new-description");
const addButton = document.getElementsByTagName("button")[0];
const incompleteTaskHolder = document.getElementById("incomplete-tasks");
const completedTasksHolder = document.getElementById("completed-tasks");

addButton.addEventListener("click", () => {
  let taskTittle = taskTitle.value;
  let taskDes = taskDescription.value;
  if (taskTittle == "") {
    alert("You need add some thing");
  } else {
    TaskList.push(new Task(taskTittle, taskDes));
    displayTasks(TaskList);
  }
});

const displayTasks = (TaskList) => {
  const htmlString = TaskList.map((todo) => {
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

displayTasks(TaskList);

let listCheckBox = document.querySelectorAll('input[type="checkbox"]');
console.log(listTask);

// listCheckBox.forEach((inputCheck) => {
//   let todoTitle = document.querySelectorAll("task-title");
//   let todoDes = document.querySelectorAll("task-des");

//   console.log(todoTitle);
//   console.log(todoDes);
//   if (inputCheck.checked == true) {
//     todoTitle.classList.toggle("task-complete");
//     todoDes.classList.toggle("task-complete");
//   }
// });
