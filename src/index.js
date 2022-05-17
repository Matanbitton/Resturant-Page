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

let firstPizza = pizzaItems[1];
firstPizza.innerHTML =
  "<h4> Pizza Margherita </h4>  <p>  a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt. That is all. </p> ";
let secondPizza = pizzaItems[2];
secondPizza.innerHTML =
  "<h4> Diavola </h4> <p> San Marzano Tomato Sauce | Fresh Mozzarella | Spicy Sopressata Salami | Basil | Special Hot Honey | Extra Virgin Olive Oil </p>  ";
let thirdPizza = pizzaItems[3];
thirdPizza.innerHTML =
  " <h4> Bianca</h4> <p> Fresh Mozzarella | Basil | Parmigiano Reggiano D.O.P </p>";

let wineItems = wineMenu.childNodes;
let firstWine = wineItems[1];
firstWine.innerHTML = "<h4> Chablis </h4> ";
let secondWine = wineItems[2];
secondWine.innerHTML = "<h4> Yarden Malbek - 2018 </h4>  ";
let thirdWine = wineItems[3];
thirdWine.innerHTML = " <h4> Shiloh Cabarnet Souvinion - 2016 </h4> ";

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
