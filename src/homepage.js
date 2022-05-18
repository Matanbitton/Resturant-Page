export function renderHomePage() {
  const homeContainer = document.createElement("div");
  const heroSection = document.createElement("div");
  const heroText = document.createElement("p");

  homeContainer.className = "home-container";

  heroSection.className = "hero";
  heroText.className = "hero-text";

  heroText.innerText = "Enjoy Our Variety of Pizzas And Wines.";

  homeContainer.append(heroSection);
  heroSection.append(heroText);
  return homeContainer;
}

export function menuButtons() {
  const buttonsContainer = document.createElement("div");
  const home = document.createElement("button");
  const pizza = document.createElement("button");
  const wine = document.createElement("button");
  const contact = document.createElement("button");

  buttonsContainer.classList.add("buttons");
  home.classList.add("home-btn");
  pizza.classList.add("pizza-btn");
  wine.classList.add("wine-btn");
  contact.classList.add("contact-btn");

  home.innerText = "Home";
  pizza.innerText = "Our Pizzas";
  wine.innerText = "Our Wines";
  contact.innerText = "Contanct";
  buttonsContainer.append(home, pizza, wine, contact);

  return buttonsContainer;
}
