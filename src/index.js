import { renderHomePage, menuButtons } from "./homepage";
import renderPizzaMenu from "./pizzamenu";
import renderWineMenu from "./winemenu";
import renderContactPage from "./contactpage";

// creating elements
const homePage = renderHomePage();
const pizzaMenu = renderPizzaMenu();
const wineMenu = renderWineMenu();
const contact = renderContactPage();
const header = document.createElement("header");
const buttonsContainer = menuButtons();

const homeBtn = buttonsContainer.querySelector(".home-btn");
const pizzaBtn = buttonsContainer.querySelector(".pizza-btn");
const wineBtn = buttonsContainer.querySelector(".wine-btn");
const contactBtn = buttonsContainer.querySelector(".contact-btn");

header.className = "header";

header.append(homeBtn, pizzaBtn, wineBtn, contactBtn);

const content = document.querySelector("#content");

content.append(header, homePage);
