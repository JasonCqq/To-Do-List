import { assignID, createTask, createProject } from "./get.js";
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
                <div id='project1'>Project 1</div>
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
    console.log(task);
    tasks.appendChild(addNewTaskToDiv(task));
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
  const d = new Date().toDateString();
  welcomeMessage.innerHTML = `Welcome, ${username} <br> ${d}`;
  welcome.appendChild(welcomeMessage);
}

export function addNewTaskToDiv(task) {
  let newTask = elementFromHtml(`
  <div>
    <h3>${task.title}</h3>
    <p>${task.dueDate}</p>
    <p>${task.priority}</p>
    <p>${task.description}</p>
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
      const project = createProject(input.value, assignID());
      newDiv.id = project.id;
      projectGrid.appendChild(newDiv);
      newDiv.appendChild(p);
      p.textContent = project.title;
      tempDiv.style.display = "none";
      button.removeEventListener("click", submitButtonClick);
    }
  });
}
