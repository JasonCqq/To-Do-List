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
                <button type="submit" id="createProject">Create New</button>
                <h1>Projects</h1>
              </div>
              <div class="projects-grid">
                <div>Project 1</div>
                <div>Project 2</div>
                <div>Project 3</div>
                <div>Project 4</div>
                <div>Project 5</div>
              </div>
            </div>
            <div id="todos">
              <h1>To-dos</h1>
              <button type="submit" id="createNewTask">Create a new task</button>
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
  });
}

//todo form
export function createToDoForm() {
  const details = document.getElementById("details");
  const form = elementFromHtml(`
  <form>
    <div id="title-grid">
      <label for="titleInput">Title</label>
      <input id="titleInput" name="titleInput" type="text">
    </div>

    <div id="description-grid">
      <label for="descriptionInput">Description</label> <br>
      <textarea id="descriptionInput" name="descriptionInput" type="text"></textarea>
    </div>

    <div id="dueDate-grid">
      <label for="dueDateInput">Due Date</label>
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
  </form>
  `);
  details.appendChild(form);
}

//welcome the user with the current date
export function welcomeTheUser(username) {
  const welcome = document.getElementById("welcome");
  const welcomeMessage = document.createElement("p");
  const d = new Date().toDateString();
  welcomeMessage.innerHTML = `Welcome, ${username} <br> Today's date is <br> ${d}`;
  welcome.appendChild(welcomeMessage);
}
