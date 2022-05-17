import { renderHomePage, menuButtons } from "./homepage";
import renderPizzaMenu from "./pizzamenu";
import renderWineMenu from "./winemenu";
import renderContactPage from "./contactpage";
import "./style.css";
import Icon from "./icon.jpeg";

// creating elements
const contentDisplayed = document.querySelector("#content");
let homePage = renderHomePage(); //needs to be re-assigned later
const hero = homePage.firstChild;
const pizzaMenu = renderPizzaMenu();
const pizzaItems = pizzaMenu.childNodes;
const wineMenu = renderWineMenu();
const contact = renderContactPage();
const header = document.createElement("header");
const buttonsContainer = menuButtons();
const homeBtn = buttonsContainer.querySelector(".home-btn");
const pizzaBtn = buttonsContainer.querySelector(".pizza-btn");
const wineBtn = buttonsContainer.querySelector(".wine-btn");
const contactBtn = buttonsContainer.querySelector(".contact-btn");
const logo = document.createElement("h4");

console.log(pizzaItems);

const myIcon = new Image();
myIcon.src = Icon;
myIcon.className = "icon";
logo.innerText = "Basil's Pizza Parlor";

logo.className = "logo";

header.append(logo, homeBtn, pizzaBtn, wineBtn, contactBtn);
contentDisplayed.append(header, homePage);

//event listeners
homeBtn.addEventListener("click", () => {
  homePage.innerHTML = "";
  homePage.append(hero);
});
pizzaBtn.addEventListener("click", () => {
  homePage.innerHTML = "";
  homePage.append(pizzaMenu);
});
wineBtn.addEventListener("click", () => {
  homePage.innerHTML = "";
  homePage.append(wineMenu);
});
contactBtn.addEventListener("click", () => {
  homePage.innerHTML = "";
  homePage.append(contact);
});

header.className = "header";
