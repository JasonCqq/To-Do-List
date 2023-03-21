import { addGrid, createNewTaskFunction, createProjectButtonFunction, getUserName, removeProjectFunction, welcomeTheUser } from "./index.js";
import { projectArr, taskArr } from "./get.js";
window.addEventListener("load", function () {
  getStartedButtonFunction();
  for (var i = 0; i < projectArr.length; i++) {
    var project = projectArr[i];
    localStorage.setItem("project_".concat(project.id), JSON.stringify(project));
  }
  for (var _i = 0; _i < taskArr.length; _i++) {
    var task = taskArr[_i];
    localStorage.setItem("task_".concat(task.id), JSON.stringify(task));
  }
  for (var _i2 = 0; _i2 < localStorage.length; _i2++) {
    var key = localStorage.key(_i2);
    var value = JSON.parse(localStorage.getItem(key));
    if (key.startsWith("project_")) {
      projectArr.push(value);
    } else if (key.startsWith("task_")) {
      taskArr.push(value);
    }
  }
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