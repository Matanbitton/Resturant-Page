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


/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHomePage)
/* harmony export */ });
function renderHomePage() {
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


/***/ }),

/***/ "./src/pizzamenu.js":
/*!**************************!*\
  !*** ./src/pizzamenu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
function renderMenu() {
  for (let i = 0; i <= 6; i++) {
    const contentContainer = document.querySelector("#content");
    const menuItem = document.createElement("div");
    const menuItemTitle = document.createElement("h4");
    const menuItemPrice = document.createElement("h4");

    menuItem.className = "pizza menu-item";
    menuItemTitle.className = "pizza menu-item-title";
    menuItemPrice.className = "pizza menu-item-price";

    menuItemTitle.innerText = "Pizza";
    menuItemPrice.innerText = "$9.99";
    contentContainer.append(menuItem);
    menuItem.append(menuItemTitle, menuItemPrice);
  }
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
  for (let i = 0; i <= 6; i++) {
    const contentContainer = document.querySelector("#content");
    const menuItem = document.createElement("div");
    const menuItemTitle = document.createElement("h4");
    const menuItemPrice = document.createElement("h4");

    menuItem.className = "wine menu-item";
    menuItemTitle.className = "wine menu-item-title";
    menuItemPrice.className = "wine menu-item-price";

    menuItemTitle.innerText = "Wine";
    menuItemPrice.innerText = "$14.99";
    contentContainer.append(menuItem);
    menuItem.append(menuItemTitle, menuItemPrice);
  }
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





(0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_pizzamenu__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_winemenu__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_contactpage__WEBPACK_IMPORTED_MODULE_3__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDckJlO0FBQ2Ysa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDaEJlO0FBQ2Ysa0JBQWtCLFFBQVE7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDd0M7QUFDSDtBQUNHO0FBQ007O0FBRTlDLHFEQUFjO0FBQ2Qsc0RBQVU7QUFDVixxREFBYztBQUNkLHdEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3RwYWdlLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL3BpenphbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS8uL3NyYy93aW5lbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdHVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3R1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckNvbnRhY3RQYWdlKCkge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICBjb25zdCBjb250YWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVyb1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGhlcm9TZWN0aW9uLmNsYXNzTmFtZSA9IFwiY29udGFjdC1oZXJvLXNlY3Rpb25cIjtcbiAgaGVyb1RleHQuY2xhc3NOYW1lID0gXCJjb250YWN0LWhlcm8tdGV4dFwiO1xuICBoZXJvVGV4dC5pbm5lclRleHQgPSBcIk91ciBudW1iZXIgaXM6IDA1MDQ2MDY4OTQgY2FsbCB1cyFcIjtcblxuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChjb250YWN0Q29udGFpbmVyKTtcbiAgY29udGFjdENvbnRhaW5lci5hcHBlbmQoaGVyb1NlY3Rpb24pO1xuICBoZXJvU2VjdGlvbi5hcHBlbmQoaGVyb1RleHQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVySG9tZVBhZ2UoKSB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCBoZXJvU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgaG9tZUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImhvbWUtY29udGFpbmVyXCI7XG4gIGhlYWRlci5jbGFzc05hbWUgPSBcImhlYWRlclwiO1xuICBsb2dvLmNsYXNzTmFtZSA9IFwibG9nb1wiO1xuICBoZXJvU2VjdGlvbi5jbGFzc05hbWUgPSBcImhlcm9cIjtcbiAgaGVyb1RleHQuY2xhc3NOYW1lID0gXCJoZXJvLXRleHRcIjtcblxuICBsb2dvLmlubmVyVGV4dCA9IFwiUGl6emFCYXJcIjtcbiAgaGVyb1RleHQuaW5uZXJUZXh0ID0gXCJQaXp6YSBhbmQgZmluZSB3aW5lIVwiO1xuXG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKGhvbWVDb250YWluZXIpO1xuICBob21lQ29udGFpbmVyLmFwcGVuZChoZWFkZXIsIGhlcm9TZWN0aW9uKTtcbiAgaGVhZGVyLmFwcGVuZChsb2dvKTtcbiAgaGVyb1NlY3Rpb24uYXBwZW5kKGhlcm9UZXh0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlck1lbnUoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gICAgY29uc3QgbWVudUl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcblxuICAgIG1lbnVJdGVtLmNsYXNzTmFtZSA9IFwicGl6emEgbWVudS1pdGVtXCI7XG4gICAgbWVudUl0ZW1UaXRsZS5jbGFzc05hbWUgPSBcInBpenphIG1lbnUtaXRlbS10aXRsZVwiO1xuICAgIG1lbnVJdGVtUHJpY2UuY2xhc3NOYW1lID0gXCJwaXp6YSBtZW51LWl0ZW0tcHJpY2VcIjtcblxuICAgIG1lbnVJdGVtVGl0bGUuaW5uZXJUZXh0ID0gXCJQaXp6YVwiO1xuICAgIG1lbnVJdGVtUHJpY2UuaW5uZXJUZXh0ID0gXCIkOS45OVwiO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtKTtcbiAgICBtZW51SXRlbS5hcHBlbmQobWVudUl0ZW1UaXRsZSwgbWVudUl0ZW1QcmljZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlcldpbmVNZW51KCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSA2OyBpKyspIHtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBtZW51SXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgIGNvbnN0IG1lbnVJdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG5cbiAgICBtZW51SXRlbS5jbGFzc05hbWUgPSBcIndpbmUgbWVudS1pdGVtXCI7XG4gICAgbWVudUl0ZW1UaXRsZS5jbGFzc05hbWUgPSBcIndpbmUgbWVudS1pdGVtLXRpdGxlXCI7XG4gICAgbWVudUl0ZW1QcmljZS5jbGFzc05hbWUgPSBcIndpbmUgbWVudS1pdGVtLXByaWNlXCI7XG5cbiAgICBtZW51SXRlbVRpdGxlLmlubmVyVGV4dCA9IFwiV2luZVwiO1xuICAgIG1lbnVJdGVtUHJpY2UuaW5uZXJUZXh0ID0gXCIkMTQuOTlcIjtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZChtZW51SXRlbSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kKG1lbnVJdGVtVGl0bGUsIG1lbnVJdGVtUHJpY2UpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGNyZWF0aW5nIGVsZW1lbnRzXG5pbXBvcnQgcmVuZGVySG9tZVBhZ2UgZnJvbSBcIi4vaG9tZXBhZ2VcIjtcbmltcG9ydCByZW5kZXJNZW51IGZyb20gXCIuL3BpenphbWVudVwiO1xuaW1wb3J0IHJlbmRlcldpbmVNZW51IGZyb20gXCIuL3dpbmVtZW51XCI7XG5pbXBvcnQgcmVuZGVyQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdHBhZ2VcIjtcblxucmVuZGVySG9tZVBhZ2UoKTtcbnJlbmRlck1lbnUoKTtcbnJlbmRlcldpbmVNZW51KCk7XG5yZW5kZXJDb250YWN0UGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9