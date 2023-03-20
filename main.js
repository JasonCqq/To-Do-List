import {
  addGrid,
  createNewTaskFunction,
  createProjectButtonFunction,
  getUserName,
  welcomeTheUser,
} from "../src/index.js";

window.addEventListener("load", () => {
  getStartedButtonFunction();
});

function getStartedButtonFunction() {
  const getStartedButton = document.getElementById("getStartedButton");
  const usernameInput = document.getElementById("usernameInput");
  const mainScreen = document.getElementById("mainScreen");
  getStartedButton.addEventListener("click", () => {
    if (usernameInput.value !== "") {
      let currentUserName = getUserName();
      mainScreen.remove(); //remove front page
      addGrid();
      createNewTaskFunction(); //adds functions for buttons
      createProjectButtonFunction();
      welcomeTheUser(currentUserName);
    }
  });
}
