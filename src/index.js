import {
  assignID,
  createTask,
  createProject,
  currentDiv,
  getCurrentID,
  showProjects,
  pushProject,
} from "./get.js";
//get username
export function getUserName() {
  const usernameInput = document.getElementById("usernameInput");
  const username = usernameInput.value;
  return username;
}

//html template
export function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

//adds second main page
export function addGrid() {
  const grid = elementFromHtml(`
        <div class="grid-container">
            <div id="welcome"></div>
            <div id="details"></div>
            <div id="projects">
              <div>
                <h1>Projects</h1>
              </div>
              <div id="projects-grid">
                <div id='project0' class="projectItem">Default Project</div>
              </div>
              <button type="submit" id="createProject">Create New</button>
            </div>
            <div id="todos">
              <div class="todosTitle">
                <h1>To-dos</h1>
                <button type="submit" id="createNewTask">Create a new task</button>
              </div>

              <div id="tasks">
              </div>

            </div>
        </div>
    `);
  document.body.appendChild(grid);
  currentDiv("project1");
}

//create form when creating a new todo
export function createNewTaskFunction() {
  const btn = document.getElementById("createNewTask");
  btn.addEventListener("click", () => {
    createToDoForm();
    createTaskButtonFunction();
  });
}

function createTaskButtonFunction() {
  const btn5 = document.getElementById("submitForm");
  const tasks = document.getElementById("tasks");
  const titleInput = document.getElementById("titleInput");
  const dueDateInput = document.getElementById("dueDateInput");
  const priorityInput = document.getElementById("priorityInput");
  const descriptionInput = document.getElementById("descriptionInput");
  const notesInput = document.getElementById("notesInput");
  btn5.addEventListener("click", (e) => {
    e.preventDefault();
    const task = createTask(
      titleInput.value,
      dueDateInput.value,
      "RED",
      descriptionInput.value,
      notesInput.value,
      assignID()
    );
    // let tempArray = showProjects();
    // let tempDiv = tempArray.find(getCurrentID);
    let tempArray = showProjects();
    let tempID = document.getElementById(`${getCurrentID()}`);
    for (let key of tempArray) {
      if (key.id == getCurrentID()) {
        key.pushTask(task);
        console.log(key.taskArray);
      }
    }
    // tempID.appendChild(addNewTaskToDiv(task));
    // tasks.appendChild(tempID);

    titleInput.value = "";
    dueDateInput.value = "";
    // priorityInput.value = "";
    descriptionInput.value = "";
    notesInput.value = "";
  });
}

//todo form
export function createToDoForm() {
  const details = document.getElementById("details");
  const form = elementFromHtml(`
  <form>
    <div id="title-grid">
      <label for="titleInput">Title</label> <br>
      <input id="titleInput" name="titleInput" type="text">
    </div>

    <div id="description-grid">
      <label for="descriptionInput">Description</label> <br>
      <textarea id="descriptionInput" name="descriptionInput" type="text"></textarea>
    </div>

    <div id="dueDate-grid">
      <label for="dueDateInput">Due Date</label> <br>
      <input id="dueDateInput" name="dueDateInput" type="date">
    </div>

    <div id="priority-grid"> 
      <h3>Priority</h3>
      <button id="redPriority"></button>
      <button id="bluePriority"></button>
      <button id="whitePriority"></button>
    </div>

    <div id="notes-grid">
      <label for="notesInput">Extra Notes</label> <br>
      <textarea  id="notesInput" name="notesInput" type="text"></textarea>
    </div>

    <div id="submitForm-grid">
      <button id="submitForm">CREATE</button>
    </div>
  </form>
  `);
  details.appendChild(form);
}

//welcome the user with the current date
export function welcomeTheUser(username) {
  const welcome = document.getElementById("welcome");
  const welcomeMessage = document.createElement("p");
  const amountOfTasksMessage = document.createElement("p");
  const d = new Date().toDateString();
  welcomeMessage.innerHTML = `Welcome, ${username} <br> ${d}`;
  amountOfTasksMessage.innerHTML = `You have # of tasks due TODAY`;
  welcome.appendChild(welcomeMessage);
  welcome.appendChild(amountOfTasksMessage);
  const project1 = createProject("Default", "project1");
  pushProject(project1);
  defaultProjectFunction();
}

export function addNewTaskToDiv(task) {
  let newTask = elementFromHtml(`
  <div>
    <h3>${task.title}</h3>
    <p>Due: ${task.dueDate}</p>
    <p>Description: ${task.description}</p>
  </div>
`);
  return newTask;
}

export function createProjectButtonFunction() {
  const createNewProject = document.getElementById("createProject");
  const projectGrid = document.getElementById("projects-grid");
  const tempDiv = document.createElement("div");
  const input = document.createElement("input");
  const button = document.createElement("button");
  button.textContent = "+";
  button.id = "projectTitleSubmit";
  button.type = "submit";
  input.id = "projectTitleInput";
  createNewProject.addEventListener("click", (e) => {
    e.preventDefault();
    projectGrid.appendChild(tempDiv);
    tempDiv.appendChild(input);
    tempDiv.appendChild(button);
    tempDiv.id = assignID();
    tempDiv.style.display = "block";

    button.addEventListener("click", submitButtonClick);
    function submitButtonClick(e) {
      e.preventDefault();
      const newDiv = document.createElement("div");
      const p = document.createElement("p");
      let project = createProject(input.value, assignID());
      pushProject(project);

      console.log(showProjects());

      newDiv.id = project.id;
      newDiv.classList.add("projectItem");
      projectGrid.appendChild(newDiv);
      newDiv.appendChild(p);
      newDiv.addEventListener("click", () => {
        currentDiv(project.id);
        lightUpDiv(project.id);
        let task = document.getElementById("tasks");
        removeAllChildElements(task);
        console.log(project.taskArray);
        for (let i = 0; i < project.taskArray.length; i++) {
          for (let key of project.taskArray) {
            let taskDiv = elementFromHtml(`
            <div>
              <h3>${key.title}<h3>
              <p>Due: ${key.dueDate}<p>
              <p>Description: ${key.description}<p>
            </div>
          `);
            task.appendChild(taskDiv);
          }
        }
        console.log(showProjects());
      });
      newDiv.appendChild(removeProjectFunction());
      removeButtonFunction(newDiv.id);
      p.textContent = project.title;
      tempDiv.style.display = "none";
      // lightUpDiv();
      button.removeEventListener("click", submitButtonClick);
      input.value = "";
    }
  });
}

function removeAllChildElements(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export function removeProjectFunction() {
  // const projects = document.querySelectorAll("div.projectItem");
  const btn = document.createElement("button");
  btn.className = "deleteButton";
  btn.textContent = "X";
  btn.type = "submit";
  btn.style.border = "none";
  btn.style.background = "none";
  btn.style.fontSize = "1rem";
  return btn;
}

function lightUpDiv(id) {
  let tempid1 = Array.from(document.querySelectorAll("div.projectItem"));
  for (let i = 0; i < tempid1.length; i++) {
    tempid1[i].style.backgroundColor = "rgba(255, 255, 255, 0.05)";
  }
  let tempid2 = document.getElementById(`${id}`);
  tempid2.style.backgroundColor = "white";
}

export function removeButtonFunction(currentDiv) {
  const btn = document.querySelectorAll(".deleteButton");
  btn.forEach((buttons) =>
    buttons.addEventListener("click", () => {
      const divId = document.getElementById(currentDiv);
      divId.remove();
    })
  );
}

export function defaultProjectFunction() {
  const defaultProject = document.getElementById("project0");
  defaultProject.addEventListener("click", () => {
    currentDiv("project1");
    lightUpDiv("project0");
    let task = document.getElementById("tasks");
    removeAllChildElements(task);

    let tempArray = showProjects();
    for (let key of tempArray) {
      if (key.id == "project1") {
        for (let i = 0; i < key.taskArray.length; i++) {
          let taskDiv = elementFromHtml(`
                <div>
                  ${key.taskArray[i]}
                </div>
              `);
          task.appendChild(taskDiv);
        }
        console.log(showProjects());
      }
    }
  });
}
