import { renderHomePage, menuButtons } from "./homepage";
import renderPizzaMenu from "./pizzamenu";
import renderWineMenu from "./winemenu";
import renderContactPage from "./contactpage";

// creating elements
const contentDisplayed = document.querySelector("#content");
let homePage = renderHomePage();
const pizzaMenu = renderPizzaMenu();
const wineMenu = renderWineMenu();
const contact = renderContactPage();
const header = document.createElement("header");
const buttonsContainer = menuButtons();
const homeBtn = buttonsContainer.querySelector(".home-btn");
const pizzaBtn = buttonsContainer.querySelector(".pizza-btn");
const wineBtn = buttonsContainer.querySelector(".wine-btn");
const contactBtn = buttonsContainer.querySelector(".contact-btn");

header.append(homeBtn, pizzaBtn, wineBtn, contactBtn);
contentDisplayed.append(header, homePage);

//event listeners
homeBtn.addEventListener("click", () => {
  homePage.innerHTML = "";
  homePage.append(renderHomePage());
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
