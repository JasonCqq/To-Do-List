export function createNavBar() {
  const content = document.getElementById("content");
  const newNav = document.createElement("nav");
  const newUl = document.createElement("ul");
  content.appendChild(newNav.appendChild(newUl));

  const navBarContent = ["Home", "Menu", "Contact"];

  for (const i of navBarContent) {
    const newLi = document.createElement("li");
    newLi.textContent = i;
    newLi.id = i;
    newUl.appendChild(newLi);
  }
}

// function createHomePage() {
//   const content = document.getElementById("content");
//   const newDiv = document.createElement("div");
// }

// function createMenuPage() {
//   const content = document.getElementById("content");
// }

// function createContactPage() {
//   const content = document.getElementById("content");
// }
