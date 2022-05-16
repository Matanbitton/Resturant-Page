export default function renderPizzaMenu() {
  const menuTitle = document.createElement("h3");
  menuTitle.className = "pizza-menu-title";
  menuTitle.innerText = "Pizza Menu";
  let menuContainer = document.createElement("div");
  menuContainer.append(menuTitle);
  for (let i = 0; i <= 5; i++) {
    let menuItem = document.createElement("div");
    let menuItemTitle = document.createElement("h4");
    let menuItemPrice = document.createElement("h4");

    menuContainer.className = "pizza-menu-container";
    menuItem.className = "pizza-menu-item";
    menuItemTitle.className = "pizza-menu-item-title";
    menuItemPrice.className = "pizza-menu-item-price";

    menuItemTitle.innerText = "Pizza Item";
    menuItemPrice.innerText = "$9.99";
    menuItem.append(menuItemTitle, menuItemPrice);
    menuContainer.append(menuItem);
  }

  return menuContainer;
}
