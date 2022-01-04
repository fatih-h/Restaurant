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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact() {\r\n    let main = document.createElement('div');\r\n    main.classList.add('contact');\r\n\r\n    let header = document.createElement('h1');\r\n\r\n    let div1 = document.createElement('div');\r\n    let form = document.createElement('form');\r\n    let inputName = document.createElement('input');\r\n    let inputMail = document.createElement('input');\r\n    let inputText = document.createElement('input');\r\n    let button = document.createElement('button');\r\n    let div2 = document.createElement('div');\r\n    let display1 = document.createElement('h2');\r\n    let display2 = document.createElement('p');\r\n    let display3 = document.createElement('p');\r\n    let display4 = document.createElement('p');\r\n\r\n    header.classList.add('contact-header');\r\n\r\n    div1.classList.add('contact-div1');\r\n    form.classList.add('contact-form');\r\n    inputName.classList.add('contact-name');\r\n    inputName.classList.add('input-iu');\r\n    inputMail.classList.add('contact-mail');\r\n    inputMail.classList.add('input-iu');\r\n    inputText.classList.add('contact-text');\r\n    inputText.classList.add('input-iu');\r\n    button.classList.add('contact-button');\r\n\r\n    div2.classList.add('contact-div2');\r\n    display1.classList.add('contact-display1');\r\n    display2.classList.add('contact-display2');\r\n    display3.classList.add('contact-display3');\r\n    display4.classList.add('contact-display4');\r\n\r\n    header.textContent = 'Contact US';\r\n    form.setAttribute('action', '/');\r\n    inputName.setAttribute('type', 'text');\r\n    inputName.setAttribute('placeholder', 'Name');\r\n    inputMail.setAttribute('type', 'email');\r\n    inputMail.setAttribute('placeholder', 'Mail');\r\n    inputText.setAttribute('type', 'text');\r\n    inputText.setAttribute('placeholder', 'Give us your opinion');\r\n    button.setAttribute('type', 'submit');\r\n    button.textContent = 'Submit';\r\n\r\n    display1.textContent = \"Let's Get in Touch\";\r\n    display2.innerHTML = `<i class=\"fas fa-map-marker-alt\"></i> George Street 12th`;\r\n    display3.innerHTML = `<i class=\"fas fa-phone-alt\"></i> +1 532 123 45 67`;\r\n    display4.innerHTML = `<i class=\"fas fa-envelope\"></i> info@unique_restauant.com`;\r\n\r\n    main.appendChild(div1);\r\n    main.appendChild(div2);\r\n\r\n    div1.appendChild(form);\r\n    form.appendChild(header);\r\n    form.appendChild(inputName);\r\n    form.appendChild(inputMail);\r\n    form.appendChild(inputText);\r\n    form.appendChild(button);\r\n\r\n    div2.appendChild(display1);\r\n    div2.appendChild(display2);\r\n    div2.appendChild(display3);\r\n    div2.appendChild(display4);\r\n\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction footer() {\r\n    let main = document.createElement('div');\r\n    main.classList.add('footer');\r\n\r\n    let icons = document.createElement('div');\r\n    let icon1 = document.createElement('i');\r\n    let icon2 = document.createElement('i');\r\n    let icon3 = document.createElement('i');\r\n    let author = document.createElement('h6');\r\n\r\n    icons.classList.add('footer-icons');\r\n    author.classList.add('footer-author');\r\n    icon1.classList.add('footer-i');\r\n    icon2.classList.add('footer-i');\r\n    icon3.classList.add('footer-i');\r\n\r\n    icon1.innerHTML = '<a href=\"#\"><i style=\"color:#a8763e;\" class=\"fab fa-facebook-f fa-2x f-button\"></i></a>';\r\n    icon2.innerHTML = '<a href=\"#\"><i style=\"color:#a8763e;\" class=\"fab fa-instagram fa-2x f-button\"></i></a>';\r\n    icon3.innerHTML = '<a href=\"#\"><i style=\"color:#a8763e;\" class=\"fab fa-pinterest fa-2x f-button\"></i></a>';\r\n    author.textContent = 'Copyright © Me 2022';\r\n\r\n    main.appendChild(icons);\r\n    icons.appendChild(icon1);\r\n    icons.appendChild(icon2);\r\n    icons.appendChild(icon3);\r\n    main.appendChild(author);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://restaurant/./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\n(0,_website__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menu() {\r\n    let main = document.createElement('div');\r\n    main.classList.add('menu');\r\n\r\n    let header = document.createElement('h1');\r\n    let div1 = document.createElement('div');\r\n    let div2 = document.createElement('div');\r\n    let div3 = document.createElement('div');\r\n    let div4 = document.createElement('div');\r\n\r\n    let subHeader1 = document.createElement('h2');\r\n    let food1 = document.createElement('h4');\r\n    let food2 = document.createElement('h4');\r\n    let food3 = document.createElement('h4');\r\n    let food4 = document.createElement('h4');\r\n    let food5 = document.createElement('h4');\r\n    let food6 = document.createElement('h4');\r\n    let food7 = document.createElement('h4');\r\n\r\n    let subHeader2 = document.createElement('h2');\r\n    let food8 = document.createElement('h4');\r\n    let food9 = document.createElement('h4');\r\n    let food10 = document.createElement('h4');\r\n\r\n\r\n    let subHeader3 = document.createElement('h2');\r\n    let food11 = document.createElement('h4');\r\n    let food12 = document.createElement('h4');\r\n    let food13 = document.createElement('h4');\r\n    let food14 = document.createElement('h4');\r\n\r\n\r\n    let subHeader4 = document.createElement('h2');\r\n    let food15 = document.createElement('h4');\r\n    let food16 = document.createElement('h4');\r\n    let food17 = document.createElement('h4');\r\n    let food18 = document.createElement('h4');\r\n\r\n\r\n    header.classList.add('menu-header');\r\n    div1.classList.add('menu-div1');\r\n    div2.classList.add('menu-div2');\r\n    div3.classList.add('menu-div3');\r\n    div4.classList.add('menu-div4');\r\n\r\n    subHeader1.classList.add('menu-subHeader1');\r\n\r\n    subHeader2.classList.add('menu-subHeader2');\r\n    subHeader3.classList.add('menu-subHeader3');\r\n    subHeader4.classList.add('menu-subHeader4');\r\n\r\n    header.textContent = 'MENU';\r\n\r\n    subHeader1.textContent = 'Main-Course';\r\n    food1.textContent = '$30 T-bone Steak';\r\n    food2.textContent = '$20 Meatball with Cheese';\r\n    food3.textContent = '$10 Grilled Chicken Wings';\r\n    food4.textContent = '$40.45 Roast Prime Rib of Beef';\r\n    food5.textContent = 'Creamy Beef and Mushroom';\r\n    food6.textContent = '$13.95 The Italian Pizza';\r\n    food7.textContent = '$18.89 Western Bacon Barbeque\\nCheeseburger';\r\n    food7.setAttribute('style', 'white-space: pre;');\r\n\r\n\r\n    subHeader2.textContent = 'SeaFood';\r\n    food8.textContent = '$29 Blue Ribbon';\r\n    food9.textContent = '$17 Spicy Crab Roll';\r\n    food10.textContent = '$23.50 California with King Crab';\r\n\r\n    subHeader3.textContent = 'Dessert';\r\n    food11.textContent = '$19.95 Apple Pie';\r\n    food12.textContent = '$5.95 Tarts';\r\n    food13.textContent = '$5.95 Cheesecake';\r\n    food14.textContent = '$54.95 Gingerbread House';\r\n\r\n    subHeader4.textContent = 'Drink';\r\n    food15.textContent = '$2.95 Coffee Latte';\r\n    food16.textContent = '$3.75 White Chocolate Mocha';\r\n    food17.textContent = '$5 Turkish Coffee';\r\n    food18.textContent = '$1 Water';\r\n\r\n\r\n    main.appendChild(header);\r\n    main.appendChild(div1);\r\n    main.appendChild(div2);\r\n    main.appendChild(div3);\r\n    main.appendChild(div4);\r\n\r\n    div1.appendChild(subHeader1);\r\n    div1.appendChild(food1);\r\n    div1.appendChild(food2);\r\n    div1.appendChild(food3);\r\n    div1.appendChild(food4);\r\n    div1.appendChild(food5);\r\n    div1.appendChild(food6);\r\n    div1.appendChild(food7);\r\n\r\n    div2.appendChild(subHeader2);\r\n    div2.appendChild(food8);\r\n    div2.appendChild(food9);\r\n    div2.appendChild(food10);\r\n\r\n\r\n    div3.appendChild(subHeader3);\r\n    div3.appendChild(food11);\r\n    div3.appendChild(food12);\r\n    div3.appendChild(food13);\r\n    div3.appendChild(food14);\r\n\r\n    div4.appendChild(subHeader4);\r\n    div4.appendChild(food15);\r\n    div4.appendChild(food16);\r\n    div4.appendChild(food17);\r\n    div4.appendChild(food18);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction navigation() {\r\n\r\n    let main = document.createElement('div');\r\n    main.classList.add('navbar');\r\n\r\n    let logoDiv = document.createElement('div');\r\n    let option = document.createElement('div');\r\n    let welcome = document.createElement('button');\r\n    let menu = document.createElement('button');\r\n    let contact = document.createElement('button');\r\n    welcome.setAttribute('type', 'button');\r\n    menu.setAttribute('type', 'button');\r\n    contact.setAttribute('type', 'button');\r\n\r\n    option.classList.add('navbar-option');\r\n    logoDiv.classList.add('navbar-logo-div');\r\n\r\n    welcome.classList.add('navbar-welcome');\r\n    welcome.classList.add('navbar-button-ui');\r\n    menu.classList.add('navbar-menu');\r\n    menu.classList.add('navbar-button-ui');\r\n    contact.classList.add('navbar-contact');\r\n    contact.classList.add('navbar-button-ui');\r\n\r\n    welcome.textContent = 'Main';\r\n    menu.textContent = 'Menu';\r\n    contact.textContent = 'Contact';\r\n\r\n    main.append(option);\r\n    option.appendChild(logoDiv);\r\n    option.appendChild(welcome);\r\n    option.appendChild(menu);\r\n    option.appendChild(contact);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);\n\n//# sourceURL=webpack://restaurant/./src/navigation.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ \"./src/navigation.js\");\n/* harmony import */ var _welcome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./welcome */ \"./src/welcome.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction web() {\r\n    const content = document.getElementById('content');\r\n\r\n    content.appendChild((0,_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\r\n    content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (web);\n\n//# sourceURL=webpack://restaurant/./src/website.js?");

/***/ }),

/***/ "./src/welcome.js":
/*!************************!*\
  !*** ./src/welcome.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction welcome() {\r\n    let main = document.createElement('div');\r\n    main.classList.add('welcome');\r\n\r\n    let div1 = document.createElement('div');\r\n    let header = document.createElement('h1');\r\n    \r\n    let div2 = document.createElement('div');\r\n    let subHeader = document.createElement('h2');\r\n    let img1 = document.createElement('img');\r\n    let paragraph = document.createElement('p');\r\n    let img2 = document.createElement('img');\r\n\r\n    div1.classList.add('welcome-div1');\r\n    header.classList.add('welcome-header');\r\n\r\n    div2.classList.add('welcome-div2');\r\n    subHeader.classList.add('welcome-subHeader');\r\n    img1.classList.add('welcome-img1');\r\n    paragraph.classList.add('welcome-paragraph');\r\n    img2.classList.add('welcome-img2');\r\n\r\n    header.textContent = 'Just like\\ngrandma used \\nto make';\r\n    header.setAttribute('style', 'white-space: pre;');\r\n    subHeader.textContent = 'Our Philosophy';\r\n    paragraph.textContent = 'Best products with a unique taste makes you special in the Restaurant. The Restaurant provide the most quality foods and chefs all over the world.';\r\n    img1.setAttribute('src', '../dist/image/sashimi.jpg');\r\n    img2.setAttribute('src', '../dist/image/cof.jpg');\r\n\r\n\r\n    main.appendChild(div1);\r\n    div1.appendChild(header);\r\n\r\n    main.appendChild(subHeader);\r\n\r\n    main.appendChild(div2);\r\n    div2.appendChild(img1);\r\n    div2.appendChild(paragraph);\r\n    div2.appendChild(img2);\r\n\r\n    return main;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (welcome);\r\n\r\n\n\n//# sourceURL=webpack://restaurant/./src/welcome.js?");

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