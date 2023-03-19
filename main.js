import { getUserName } from "../src/index.js";

//MAIN DOM
function elementFromHtml(html) {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
}

function addGrid() {
  const grid = elementFromHtml(`
        <div class="grid-container">
            <div id="welcome"></div>
            <div id="details">2</div>
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
            </div>
        </div>
    `);
  document.body.appendChild(grid);
}

function welcomeTheUser(username) {
  const welcome = document.getElementById("welcome");
  const welcomeMessage = document.createElement("p");
  const d = new Date().toDateString();
  welcomeMessage.innerHTML = `Welcome, ${username} <br> Today's date is <br> ${d}`;
  welcome.appendChild(welcomeMessage);
}

// function projectsSection() {
//   const projects = document.getElementById("projects");
//   const projectTitle = document.createElement("h1");
//   projectTitle.textContent = "PROJECTS";
//   projects.appendChild(projectTitle);
// }

function getStartedButtonFunction() {
  const getStartedButton = document.getElementById("getStartedButton");
  const usernameInput = document.getElementById("usernameInput");
  const mainScreen = document.getElementById("mainScreen");
  getStartedButton.addEventListener("click", () => {
    if (usernameInput.value !== "") {
      let currentUserName = getUserName();
      mainScreen.remove(); //remove front page
      addGrid(); //add second page
      welcomeTheUser(currentUserName);
    }
  });
}
getStartedButtonFunction();
