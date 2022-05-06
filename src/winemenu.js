export default function renderWineMenu() {
  let menuContainer;
  for (let i = 0; i <= 6; i++) {
    menuContainer = document.createElement("div");
    const menuItem = document.createElement("div");
    const menuItemTitle = document.createElement("h4");
    const menuItemPrice = document.createElement("h4");

    menuItem.className = "wine menu-item";
    menuItemTitle.className = "wine menu-item-title";
    menuItemPrice.className = "wine menu-item-price";

    menuItemTitle.innerText = "Wine";
    menuItemPrice.innerText = "$14.99";
    menuContainer.append(menuItem);
    menuItem.append(menuItemTitle, menuItemPrice);
  }
  return menuContainer;
}
