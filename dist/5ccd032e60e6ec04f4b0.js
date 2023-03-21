import {
  addGrid,
  createNewTaskFunction,
  createProjectButtonFunction,
  getUserName,
  removeProjectFunction,
  welcomeTheUser,
} from "./index.js";
import { projectArr, taskArr } from "./get.js";
window.addEventListener("load", function () {
  getStartedButtonFunction();

  // for (let i = 0; i < projectArr.length; i++) {
  //   let project = projectArr[i];
  //   localStorage.setItem(`project_${project.id}`, JSON.stringify(project));
  // }

  // for (let i = 0; i < taskArr.length; i++) {
  //   let task = taskArr[i];
  //   localStorage.setItem(`task_${task.id}`, JSON.stringify(task));
  // }

  // for (let i = 0; i < localStorage.length; i++) {
  //   let key = localStorage.key(i);
  //   let value = JSON.parse(localStorage.getItem(key));

  //   if (key.startsWith("project_")) {
  //     projectArr.push(value);
  //   } else if (key.startsWith("task_")) {
  //     taskArr.push(value);
  //   }
  // }
});

function getStartedButtonFunction() {
  var getStartedButton = document.getElementById("getStartedButton");
  var usernameInput = document.getElementById("usernameInput");
  var mainScreen = document.getElementById("mainScreen");
  getStartedButton.addEventListener("click", function () {
    if (usernameInput.value !== "") {
      var currentUserName = getUserName();
      mainScreen.remove(); //remove front page
      addGrid();
      createNewTaskFunction(); //adds functions for buttons
      createProjectButtonFunction();
      removeProjectFunction();
      welcomeTheUser(currentUserName);
    }
  });
}
