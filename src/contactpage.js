export default function renderContactPage() {
  const contentContainer = document.querySelector("#content");
  const contactContainer = document.createElement("div");
  const heroSection = document.createElement("div");
  const heroText = document.createElement("p");

  heroSection.className = "contact-hero-section";
  heroText.className = "contact-hero-text";
  heroText.innerText = "Our number is: 0504606894 call us!";

  contentContainer.append(contactContainer);
  contactContainer.append(heroSection);
  heroSection.append(heroText);
}
