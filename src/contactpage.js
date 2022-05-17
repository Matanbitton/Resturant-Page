export default function renderContactPage() {
  const contactContainer = document.createElement("div");
  const heroSection = document.createElement("div");
  const heroText = document.createElement("p");

  heroSection.className = "contact-hero-section";
  heroText.className = "contact-hero-text";
  heroText.innerText = "For reservations contact us: 03-000-000";

  contactContainer.append(heroSection);
  heroSection.append(heroText);
  return contactContainer;
}
