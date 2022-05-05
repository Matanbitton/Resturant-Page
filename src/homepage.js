export default function renderHomePage() {
  const contentContainer = document.querySelector("#content");
  const homeContainer = document.createElement("div");
  const header = document.createElement("header");
  const logo = document.createElement("h4");
  const heroSection = document.createElement("div");
  const heroText = document.createElement("p");

  homeContainer.className = "home-container";
  header.className = "header";
  logo.className = "logo";
  heroSection.className = "hero";
  heroText.className = "hero-text";

  logo.innerText = "PizzaBar";
  heroText.innerText = "Pizza and fine wine!";

  contentContainer.append(homeContainer);
  homeContainer.append(header, heroSection);
  header.append(logo);
  heroSection.append(heroText);
}
