export default function renderPizzaMenu() {
  let menuContainer;
  for (let i = 0; i <= 6; i++) {
    menuContainer = document.createElement("div");
    const menuItem = document.createElement("div");
    const menuItemTitle = document.createElement("h4");
    const menuItemPrice = document.createElement("h4");

    menuItem.className = "pizza menu-item";
    menuItemTitle.className = "pizza menu-item-title";
    menuItemPrice.className = "pizza menu-item-price";

    menuItemTitle.innerText = "Pizza";
    menuItemPrice.innerText = "$9.99";
    menuContainer.append(menuItem);
    menuItem.append(menuItemTitle, menuItemPrice);
  }
  return menuContainer;
}
