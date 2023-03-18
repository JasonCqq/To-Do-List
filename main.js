(() => {
  "use strict";
})();

import { createNavBar, createHomePage } from "../src/index.js";

createNavBar();

function navBarButtonFunctions() {
  const home = document.getElementById("Home");
  const menu = document.getElementById("Menu");
  const contact = document.getElementById("Contact");

  home.addEventListener("click", () => {});

  menu.addEventListener("click", () => {});

  contact.addEventListener("click", () => {});
}

createHomePage();
