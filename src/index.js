const content = document.getElementById("content");
const h1 = document.createElement("h1");
const p = document.createElement("p");

export function createNavBar() {
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

export function createHomePage() {
  let titles = ["Welcome", "Hours", "Location"];
  let descriptions = [
    "Welcome to Jason's Restauraunt, we serve all kinds of cheeses such as: Fermundo Cheese, Bermundo Cheese, Deluxe Yeast, Mega premium cheese. Please Enjoy Our Premium cheeses imported from all over the world!!",
    "MON: 1AM-1PM<br> TUE: 1AM-1PM<br>  WED: 1AM-1PM<br> THU: 1AM-1PM<br> FRI: 1AM-1PM<br> SAT: 1AM-1PM<br> SUN: 1AM-1PM<br>",
    "12491 RatouttileJr Street. City: New York Zip: 41212",
  ];
  const newDiv = document.createElement("div");
  newDiv.id = "homePage";
  content.appendChild(newDiv);
  const homePage = document.getElementById("homePage");
  for (let i = 0; i < titles.length; i++) {
    const newHomePageDivs = document.createElement("div");
    newHomePageDivs.id = `homePageBox${i}`;
    homePage.appendChild(newHomePageDivs);
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    h1.textContent = titles[i];
    p.innerHTML = descriptions[i];
    newHomePageDivs.appendChild(h1);
    newHomePageDivs.appendChild(p);
  }
}

export function createMenuPage() {}

// export function createContactPage() {
//   const content = document.getElementById("content");
// }
