/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactpage.js":
/*!****************************!*\
  !*** ./src/contactpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderContactPage)
/* harmony export */ });
function renderContactPage() {
  const contactContainer = document.createElement("div");
  const heroSection = document.createElement("div");
  const heroText = document.createElement("p");

  heroSection.className = "contact-hero-section";
  heroText.className = "contact-hero-text";
  heroText.innerText = "Our number is: 0504606894 call us!";

  contactContainer.append(heroSection);
  heroSection.append(heroText);
  return contactContainer;
}


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuButtons": () => (/* binding */ menuButtons),
/* harmony export */   "renderHomePage": () => (/* binding */ renderHomePage)
/* harmony export */ });
function renderHomePage() {
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

function menuButtons() {
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


/***/ }),

/***/ "./src/pizzamenu.js":
/*!**************************!*\
  !*** ./src/pizzamenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPizzaMenu)
/* harmony export */ });
function renderPizzaMenu() {
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


/***/ }),

/***/ "./src/winemenu.js":
/*!*************************!*\
  !*** ./src/winemenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderWineMenu)
/* harmony export */ });
function renderWineMenu() {
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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");
/* harmony import */ var _pizzamenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pizzamenu */ "./src/pizzamenu.js");
/* harmony import */ var _winemenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./winemenu */ "./src/winemenu.js");
/* harmony import */ var _contactpage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactpage */ "./src/contactpage.js");





// creating elements
const homePage = (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.renderHomePage)();
const pizzaMenu = (0,_pizzamenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
const wineMenu = (0,_winemenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
const contact = (0,_contactpage__WEBPACK_IMPORTED_MODULE_3__["default"])();
const header = document.createElement("header");
const buttonsContainer = (0,_homepage__WEBPACK_IMPORTED_MODULE_0__.menuButtons)();

const homeBtn = buttonsContainer.querySelector(".home-btn");
const pizzaBtn = buttonsContainer.querySelector(".pizza-btn");
const wineBtn = buttonsContainer.querySelector(".wine-btn");
const contactBtn = buttonsContainer.querySelector(".contact-btn");

header.className = "header";

header.append(homeBtn, pizzaBtn, wineBtn, contactBtn);

const content = document.querySelector("#content");

content.append(header, homePage);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q2U7QUFDZjtBQUNBLGtCQUFrQixRQUFRO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQSxrQkFBa0IsUUFBUTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNsQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ055RDtBQUNmO0FBQ0Y7QUFDTTs7QUFFOUM7QUFDQSxpQkFBaUIseURBQWM7QUFDL0Isa0JBQWtCLHNEQUFlO0FBQ2pDLGlCQUFpQixxREFBYztBQUMvQixnQkFBZ0Isd0RBQWlCO0FBQ2pDO0FBQ0EseUJBQXlCLHNEQUFXOztBQUVwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RwYWdlLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3BpenphbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy93aW5lbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckNvbnRhY3RQYWdlKCkge1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGhlcm9TZWN0aW9uLmNsYXNzTmFtZSA9IFwiY29udGFjdC1oZXJvLXNlY3Rpb25cIjtcbiAgaGVyb1RleHQuY2xhc3NOYW1lID0gXCJjb250YWN0LWhlcm8tdGV4dFwiO1xuICBoZXJvVGV4dC5pbm5lclRleHQgPSBcIk91ciBudW1iZXIgaXM6IDA1MDQ2MDY4OTQgY2FsbCB1cyFcIjtcblxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZChoZXJvU2VjdGlvbik7XG4gIGhlcm9TZWN0aW9uLmFwcGVuZChoZXJvVGV4dCk7XG4gIHJldHVybiBjb250YWN0Q29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCkge1xuICBjb25zdCBob21lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGhvbWVDb250YWluZXIuY2xhc3NOYW1lID0gXCJob21lLWNvbnRhaW5lclwiO1xuICBsb2dvLmNsYXNzTmFtZSA9IFwibG9nb1wiO1xuICBoZXJvU2VjdGlvbi5jbGFzc05hbWUgPSBcImhlcm9cIjtcbiAgaGVyb1RleHQuY2xhc3NOYW1lID0gXCJoZXJvLXRleHRcIjtcblxuICBsb2dvLmlubmVyVGV4dCA9IFwiUGl6emFCYXJcIjtcbiAgaGVyb1RleHQuaW5uZXJUZXh0ID0gXCJQaXp6YSBhbmQgZmluZSB3aW5lIVwiO1xuXG4gIGhvbWVDb250YWluZXIuYXBwZW5kKGhlcm9TZWN0aW9uKTtcbiAgaGVyb1NlY3Rpb24uYXBwZW5kKGxvZ28sIGhlcm9UZXh0KTtcbiAgcmV0dXJuIGhvbWVDb250YWluZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51QnV0dG9ucygpIHtcbiAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBwaXp6YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IHdpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBob21lLmNsYXNzTGlzdC5hZGQoXCJob21lLWJ0blwiKTtcbiAgcGl6emEuY2xhc3NMaXN0LmFkZChcInBpenphLWJ0blwiKTtcbiAgd2luZS5jbGFzc0xpc3QuYWRkKFwid2luZS1idG5cIik7XG4gIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcImNvbnRhY3QtYnRuXCIpO1xuXG4gIGhvbWUuaW5uZXJUZXh0ID0gXCJIb21lXCI7XG4gIHBpenphLmlubmVyVGV4dCA9IFwiT3VyIFBpenphJ3NcIjtcbiAgd2luZS5pbm5lclRleHQgPSBcIk91ciBXaW5lXCI7XG4gIGNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDb250YW5jdFwiO1xuICBidXR0b25zQ29udGFpbmVyLmFwcGVuZChob21lLCBwaXp6YSwgd2luZSwgY29udGFjdCk7XG5cbiAgcmV0dXJuIGJ1dHRvbnNDb250YWluZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJQaXp6YU1lbnUoKSB7XG4gIGxldCBtZW51Q29udGFpbmVyO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudUl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgICBjb25zdCBtZW51SXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuXG4gICAgbWVudUl0ZW0uY2xhc3NOYW1lID0gXCJwaXp6YSBtZW51LWl0ZW1cIjtcbiAgICBtZW51SXRlbVRpdGxlLmNsYXNzTmFtZSA9IFwicGl6emEgbWVudS1pdGVtLXRpdGxlXCI7XG4gICAgbWVudUl0ZW1QcmljZS5jbGFzc05hbWUgPSBcInBpenphIG1lbnUtaXRlbS1wcmljZVwiO1xuXG4gICAgbWVudUl0ZW1UaXRsZS5pbm5lclRleHQgPSBcIlBpenphXCI7XG4gICAgbWVudUl0ZW1QcmljZS5pbm5lclRleHQgPSBcIiQ5Ljk5XCI7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudUl0ZW0pO1xuICAgIG1lbnVJdGVtLmFwcGVuZChtZW51SXRlbVRpdGxlLCBtZW51SXRlbVByaWNlKTtcbiAgfVxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcldpbmVNZW51KCkge1xuICBsZXQgbWVudUNvbnRhaW5lcjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgY29uc3QgbWVudUl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblxuICAgIG1lbnVJdGVtLmNsYXNzTmFtZSA9IFwid2luZSBtZW51LWl0ZW1cIjtcbiAgICBtZW51SXRlbVRpdGxlLmNsYXNzTmFtZSA9IFwid2luZSBtZW51LWl0ZW0tdGl0bGVcIjtcbiAgICBtZW51SXRlbVByaWNlLmNsYXNzTmFtZSA9IFwid2luZSBtZW51LWl0ZW0tcHJpY2VcIjtcblxuICAgIG1lbnVJdGVtVGl0bGUuaW5uZXJUZXh0ID0gXCJXaW5lXCI7XG4gICAgbWVudUl0ZW1QcmljZS5pbm5lclRleHQgPSBcIiQxNC45OVwiO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtKTtcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudUl0ZW1UaXRsZSwgbWVudUl0ZW1QcmljZSk7XG4gIH1cbiAgcmV0dXJuIG1lbnVDb250YWluZXI7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHJlbmRlckhvbWVQYWdlLCBtZW51QnV0dG9ucyB9IGZyb20gXCIuL2hvbWVwYWdlXCI7XG5pbXBvcnQgcmVuZGVyUGl6emFNZW51IGZyb20gXCIuL3BpenphbWVudVwiO1xuaW1wb3J0IHJlbmRlcldpbmVNZW51IGZyb20gXCIuL3dpbmVtZW51XCI7XG5pbXBvcnQgcmVuZGVyQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdHBhZ2VcIjtcblxuLy8gY3JlYXRpbmcgZWxlbWVudHNcbmNvbnN0IGhvbWVQYWdlID0gcmVuZGVySG9tZVBhZ2UoKTtcbmNvbnN0IHBpenphTWVudSA9IHJlbmRlclBpenphTWVudSgpO1xuY29uc3Qgd2luZU1lbnUgPSByZW5kZXJXaW5lTWVudSgpO1xuY29uc3QgY29udGFjdCA9IHJlbmRlckNvbnRhY3RQYWdlKCk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IG1lbnVCdXR0b25zKCk7XG5cbmNvbnN0IGhvbWVCdG4gPSBidXR0b25zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZS1idG5cIik7XG5jb25zdCBwaXp6YUJ0biA9IGJ1dHRvbnNDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5waXp6YS1idG5cIik7XG5jb25zdCB3aW5lQnRuID0gYnV0dG9uc0NvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLndpbmUtYnRuXCIpO1xuY29uc3QgY29udGFjdEJ0biA9IGJ1dHRvbnNDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5jb250YWN0LWJ0blwiKTtcblxuaGVhZGVyLmNsYXNzTmFtZSA9IFwiaGVhZGVyXCI7XG5cbmhlYWRlci5hcHBlbmQoaG9tZUJ0biwgcGl6emFCdG4sIHdpbmVCdG4sIGNvbnRhY3RCdG4pO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG5jb250ZW50LmFwcGVuZChoZWFkZXIsIGhvbWVQYWdlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==