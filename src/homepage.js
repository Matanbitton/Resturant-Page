export function renderHomePage() {
  const homeContainer = document.createElement("div");
  const logo = document.createElement("h4");
  const heroSection = document.createElement("div");
  const heroText = document.createElement("p");

  homeContainer.className = "home-container";
  logo.className = "logo";
  heroSection.className = "hero";
  heroText.className = "hero-text";

  logo.innerText = "PizzaBar";
  heroText.innerText = "Pizza and fine wine!";

  homeContainer.append(heroSection);
  heroSection.append(logo, heroText);
  return homeContainer;
}

export function menuButtons() {
  const buttonsContainer = document.createElement("div");
  const home = document.createElement("button");
  const pizza = document.createElement("button");
  const wine = document.createElement("button");
  const contact = document.createElement("button");

  home.classList.add("home-btn");
  pizza.classList.add("pizza-btn");
  wine.classList.add("wine-btn");
  contact.classList.add("contact-btn");

  home.innerText = "Home";
  pizza.innerText = "Our Pizza's";
  wine.innerText = "Our Wine";
  contact.innerText = "Contanct";
  buttonsContainer.append(home, pizza, wine, contact);

  return buttonsContainer;
}
