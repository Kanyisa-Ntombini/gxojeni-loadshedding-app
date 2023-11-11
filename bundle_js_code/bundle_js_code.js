/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app_response.js":
/*!*****************************!*\
  !*** ./src/app_response.js ***!
  \*****************************/
/***/ ((module) => {

eval("const customerMessages = {\r\n  'loadshedding ngoku': 'get loadshedding information for now',\r\n  'loadshedding namhlanje': 'get loadshedding info for today',\r\n  'loadshedding ngomso': 'get loadshedding information for tomorrow',\r\n  'loadshedding kuleveki': 'get loadshedding information for the next 7 days',\r\n};\r\n\r\nconst appResponse = (customerRequest) => {\r\n  const customerRequestRegex = new RegExp('hello', 'g');\r\n  console.log(customerRequestRegex);\r\n  for (const message in customerMessages) {\r\n    if (message === customerRequest) {\r\n      return customerMessages[message];\r\n    }\r\n  }\r\n};\r\n\r\nmodule.exports = { appResponse };\r\n\n\n//# sourceURL=webpack://gxojeni/./src/app_response.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { appResponse } = __webpack_require__(/*! ./app_response */ \"./src/app_response.js\");\r\n\r\nconst customerSubmitButton = document.getElementById('customerSubmitButton');\r\nconst displayAppResponse = document.getElementById('displayAppResponse');\r\nconst customerRequest = document.getElementById('customerRequest');\r\n\r\nconst printAppResponse = () => {\r\n  displayAppResponse.innerHTML = appResponse(customerRequest.value);\r\n};\r\ncustomerSubmitButton.addEventListener('click', printAppResponse);\r\n\n\n//# sourceURL=webpack://gxojeni/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;