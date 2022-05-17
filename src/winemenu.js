export default function renderWineMenu() {
  const menuTitle = document.createElement("h3");
  menuTitle.className = "wine-menu-title";
  menuTitle.innerText = "Wine Menu";
  let menuContainer = document.createElement("div");
  menuContainer.className = "wine-menu-container";
  menuContainer.append(menuTitle);
  for (let i = 0; i < 3; i++) {
    let menuItem = document.createElement("div");
    let menuItemTitle = document.createElement("h4");
    let menuItemPrice = document.createElement("h4");

    menuItem.className = "wine-menu-item";
    menuItemTitle.className = "wine-menu-item-title";
    menuItemPrice.className = "wine-menu-item-price";

    menuItemTitle.innerText = "Wine Item";
    menuItemPrice.innerText = "$14.99";
    menuContainer.append(menuItem);
    menuItem.append(menuItemTitle, menuItemPrice);
  }
  return menuContainer;
}
