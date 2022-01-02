/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact() {\r\n    let main = document.createElement('div');\r\n    main.classList.add('contact');\r\n\r\n    let header = document.createElement('h2');\r\n    let form = document.createElement('form');\r\n    let inputName = document.createElement('input');\r\n    let inputMail = document.createElement('input');\r\n    let inputText = document.createElement('input');\r\n    let button = document.createElement('button');\r\n\r\n    header.classList.add('contact-header');\r\n    form.classList.add('contact-form');\r\n    inputName.classList.add('contact-name');\r\n    inputMail.classList.add('contact-mail');\r\n    inputText.classList.add('contact-text');\r\n    button.classList.add('contact-button');\r\n\r\n    header.textContent = 'Contact US';\r\n    form.setAttribute('action', '/');\r\n    inputName.setAttribute('type', 'text');\r\n    inputName.setAttribute('placeholder', 'Name');\r\n    inputMail.setAttribute('type', 'email');\r\n    inputMail.setAttribute('placeholder', 'Mail');\r\n    inputText.setAttribute('type', 'text');\r\n    inputText.setAttribute('placeholder', 'Give us your opinion');\r\n    button.setAttribute('type', 'submit');\r\n    button.textContent = 'Submit';\r\n\r\n\r\n    main.appendChild(header);\r\n    main.appendChild(form);\r\n    form.appendChild(inputName);\r\n    form.appendChild(inputMail);\r\n    form.appendChild(inputText);\r\n    form.appendChild(button);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./welcome */ \"./src/welcome.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n\r\n\r\n\r\n\r\n\r\nconst content = document.getElementById('content');\r\ncontent.appendChild((0,_navigation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu(){\r\n    let main = document.createElement('div');\r\n    main.classList.add('menu');\r\n\r\n    let header = document.createElement('h2');\r\n    let subHeader1 = document.createElement('h3');\r\n    let subHeader2 = document.createElement('h3');\r\n    let subHeader3 = document.createElement('h3');\r\n    let subHeader4 = document.createElement('h3');\r\n\r\n    header.classList.add('menu-header');\r\n    subHeader1.classList.add('menu-subHeader1');\r\n    subHeader2.classList.add('menu-subHeader2');\r\n    subHeader3.classList.add('menu-subHeader3');\r\n    subHeader4.classList.add('menu-subHeader4');\r\n    \r\n    header.textContent = 'MENU';\r\n    subHeader1.textContent = 'Main';\r\n    subHeader2.textContent = 'SeaFood';\r\n    subHeader3.textContent = 'Bakery';\r\n    subHeader4.textContent = 'Beverage';\r\n\r\n    main.appendChild(header);\r\n    main.appendChild(subHeader1);\r\n    main.appendChild(subHeader2);\r\n    main.appendChild(subHeader3);\r\n    main.appendChild(subHeader4);\r\n    \r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction navigation() {\r\n    let main = document.createElement('div');\r\n    main.classList.add('navbar');\r\n\r\n    let header = document.createElement('h1');\r\n    let welcome = document.createElement('h3');\r\n    let menu = document.createElement('h3');\r\n    let contact = document.createElement('h3');\r\n\r\n    header.classList.add('header');\r\n    welcome.classList.add('welcome');\r\n    menu.classList.add('menu');\r\n    contact.classList.add('contact');\r\n\r\n    header.textContent = 'League Restaurant';\r\n    welcome.textContent = 'Main';\r\n    menu.textContent = 'Menu';\r\n    contact.textContent = 'Contact';\r\n\r\n    main.appendChild(header);\r\n    main.appendChild(welcome);\r\n    main.appendChild(menu);\r\n    main.appendChild(contact);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);\n\n//# sourceURL=webpack://restaurant/./src/navigation.js?");

/***/ }),

/***/ "./src/welcome.js":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction welcome() {\r\n    let main = document.createElement('div');\r\n    main.classList.add('welcome');\r\n\r\n    let header = document.createElement('h2');\r\n    let subHeader = document.createElement('h3');\r\n    let paragraph = document.createElement('p');\r\n    let chefImg = document.createElement('img');\r\n\r\n    header.classList.add('welcome-header');\r\n    subHeader.classList.add('welcome-subHeader');\r\n    paragraph.classList.add('welcome-paragraph');\r\n    chefImg.classList.add('welcome-img');\r\n\r\n    header.textContent = 'Welcome to League Restaurant';\r\n    subHeader.textContent = 'Feel the Experience Taste the Flavor';\r\n    paragraph.textContent = 'Best products with a unique taste makes you special in League Restaurant. League Restaurant provide the most quality foods and chefs all over the world.';\r\n    chefImg.setAttribute('src', '../dist/image/open.jpg');\r\n    chefImg.setAttribute('width','100%');\r\n\r\n\r\n    main.appendChild(header);\r\n    main.appendChild(subHeader);\r\n    main.appendChild(paragraph);\r\n    main.appendChild(chefImg);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcome);\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/welcome.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;