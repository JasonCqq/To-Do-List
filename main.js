import {
  addGrid,
  createNewTaskFunction,
  getUserName,
  welcomeTheUser,
} from "../src/index.js";

//MAIN DOM

function getStartedButtonFunction() {
  const getStartedButton = document.getElementById("getStartedButton");
  const usernameInput = document.getElementById("usernameInput");
  const mainScreen = document.getElementById("mainScreen");
  getStartedButton.addEventListener("click", () => {
    if (usernameInput.value !== "") {
      let currentUserName = getUserName();
      mainScreen.remove(); //remove front page
      addGrid(); //add second page
      createNewTaskFunction(); //adds functions for buttons
      welcomeTheUser(currentUserName);
    }
  });
}
getStartedButtonFunction();
