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

/***/ "./src/components/btn-footer-component.ts":
/*!************************************************!*\
  !*** ./src/components/btn-footer-component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_controller_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/controller-tab */ \"./src/utils/controller-tab.ts\");\n/* harmony import */ var _utils_manage_content_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/manage-content-tab */ \"./src/utils/manage-content-tab.ts\");\n\n\nconst btnFilter = document.querySelector(\"#filterTask\");\nconst btnCreate = document.querySelector(\"#createTask\");\nconst btnColor = document.querySelector(\"#colorTask\");\nif (btnFilter) {\n    btnFilter.addEventListener(\"click\", () => {\n        var _a;\n        (0,_utils_controller_tab__WEBPACK_IMPORTED_MODULE_0__.toggleTab)();\n        if ((_a = document.querySelector(\".footer\")) === null || _a === void 0 ? void 0 : _a.classList.contains(\"open\")) {\n            (0,_utils_manage_content_tab__WEBPACK_IMPORTED_MODULE_1__.showContent)(\"filter\");\n        }\n    });\n}\nelse {\n    console.error(\"Button with ID #filterTask not found\");\n}\nif (btnCreate) {\n    btnCreate.addEventListener(\"click\", () => {\n        var _a;\n        (0,_utils_controller_tab__WEBPACK_IMPORTED_MODULE_0__.toggleTab)();\n        // cria somente quando está aberto\n        if ((_a = document.querySelector(\".footer\")) === null || _a === void 0 ? void 0 : _a.classList.contains(\"open\")) {\n            (0,_utils_manage_content_tab__WEBPACK_IMPORTED_MODULE_1__.showContent)(\"create\");\n        }\n    });\n}\nelse {\n    console.error(\"Button with ID #createTask not found\");\n}\nif (btnColor) {\n    btnColor.addEventListener(\"click\", () => {\n        var _a;\n        (0,_utils_controller_tab__WEBPACK_IMPORTED_MODULE_0__.toggleTab)();\n        if ((_a = document.querySelector(\".footer\")) === null || _a === void 0 ? void 0 : _a.classList.contains(\"open\")) {\n            (0,_utils_manage_content_tab__WEBPACK_IMPORTED_MODULE_1__.showContent)(\"color\");\n        }\n    });\n}\nelse {\n    console.error(\"Button with ID #colorTask not found\");\n}\nwindow.addEventListener(\"resize\", () => {\n    (0,_utils_controller_tab__WEBPACK_IMPORTED_MODULE_0__.closeTab)();\n    let tab = document.querySelector(\".footer\");\n    let tabOptions = document.querySelector(\".footer__btn\");\n    if (window.innerWidth >= 768) {\n        if (tab !== null) {\n            tab.style.width = \"100%\";\n            tab.style.height = \"100%\";\n        }\n    }\n    else {\n        if (tabOptions) {\n            tabOptions.style.flexDirection = \"row\";\n        }\n    }\n});\n\n\n//# sourceURL=webpack:///./src/components/btn-footer-component.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_btn_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/btn-footer-component */ \"./src/components/btn-footer-component.ts\");\n/* harmony import */ var _utils_controller_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/controller-tab */ \"./src/utils/controller-tab.ts\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/utils/controller-tab.ts":
/*!*************************************!*\
  !*** ./src/utils/controller-tab.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeTab: () => (/* binding */ closeTab),\n/* harmony export */   toggleTab: () => (/* binding */ toggleTab)\n/* harmony export */ });\n/* harmony import */ var _manage_content_tab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-content-tab */ \"./src/utils/manage-content-tab.ts\");\n\nconst tab = document.querySelector(\".footer\");\nconst tabOptions = document.querySelector(\".footer__btn\");\nconst header = document.querySelector(\".header\");\nlet isOpen;\nfunction toggleTab() {\n    if (!tab) {\n        throw new Error(\"O elemento footer não foi renderizado tente recarregar a página\");\n    }\n    const viewPort = window.innerWidth;\n    let isMobile;\n    isMobile = viewPort <= 767 ? true : false;\n    isOpen = tab.classList.contains(\"open\") ? true : false;\n    if (isOpen && isMobile) {\n        alternateClassOpen(\"remove\");\n        tab.style.height = \"92px\";\n    }\n    else if (isOpen === false && isMobile) {\n        alternateClassOpen(\"add\");\n        tab.style.height = \"450px\";\n    }\n    else if (isOpen && isMobile === false) {\n        alternateClassOpen(\"remove\");\n        tab.style.width = \"100%\";\n        if (header && tabOptions) {\n            tabOptions.style.flexDirection = \"column\";\n            header.style.width = \"100%\";\n        }\n    }\n    else if (isOpen === false && isMobile === false) {\n        alternateClassOpen(\"add\");\n        tab.style.width = \"600px\";\n        if (header && tabOptions) {\n            tabOptions.style.flexDirection = \"row\";\n            header.style.width = \"600px\";\n        }\n    }\n}\nfunction alternateClassOpen(option) {\n    if (option === \"remove\") {\n        tab === null || tab === void 0 ? void 0 : tab.classList.remove(\"open\");\n        (0,_manage_content_tab__WEBPACK_IMPORTED_MODULE_0__.hideContent)();\n        return;\n    }\n    tab === null || tab === void 0 ? void 0 : tab.classList.add(\"open\");\n}\nfunction closeTab() {\n    (0,_manage_content_tab__WEBPACK_IMPORTED_MODULE_0__.hideContent)();\n    alternateClassOpen(\"add\");\n    toggleTab();\n}\n\n\n//# sourceURL=webpack:///./src/utils/controller-tab.ts?");

/***/ }),

/***/ "./src/utils/manage-content-tab.ts":
/*!*****************************************!*\
  !*** ./src/utils/manage-content-tab.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideContent: () => (/* binding */ hideContent),\n/* harmony export */   showContent: () => (/* binding */ showContent)\n/* harmony export */ });\nconst tab = document.querySelector(\".footer\");\nfunction showContent(typeContent) {\n    var _a;\n    let content;\n    if (!tab) {\n        throw new Error(\"O elemento footer não foi renderizado tente recarregar a página\");\n    }\n    let divContainerContent = document.createElement(\"div\");\n    divContainerContent.classList.add(\"content__tab\");\n    hideContent(); // não duplica pois apaga o anterior\n    if (typeContent === \"filter\") {\n        divContainerContent.innerHTML = `\r\n        <h1> hello 1</h1>`;\n        tab.appendChild(divContainerContent);\n    }\n    if (typeContent === \"create\") {\n        divContainerContent.innerHTML = `\r\n        <div class=\"createSection\">\r\n          <div class=\"createSection__title\">\r\n            <input type=\"text\" placeholder=\"Título do bloco\">\r\n            <span>\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\r\n                    <path d=\"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z\"\r\n            </span>\r\n            </div>\r\n            <div class=\"createSection__task\">\r\n                <input type=\"text\" placeholder=\"Nome da tarefa\">\r\n                <span>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\r\n                    <path d=\"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z\"\r\n                </span>\r\n            </div>\r\n            <button class=\"createSection__button\">\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>\r\n            </button>\r\n            <p class=\"createSection__error\" data-create-error></p>\r\n            <p class=\"createSection__listTitle\" data-create-listTitle>Coisas para fazer</p>\r\n            <ul class=\"createSection__list\" data-create-list>\r\n              <li>\r\n                <span>Task1</span>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z\"/></svg>\r\n              </li>\r\n            </ul>\r\n        </div>`;\n        tab.appendChild(divContainerContent);\n    }\n    if (typeContent === \"color\") {\n        divContainerContent.innerHTML = `\r\n        <div class=\"colorPicker\">\r\n            <h2>Escolha a cor do bloco</h3>\r\n            <input type=\"color\" class=\"colorPicker__display\">\r\n            <span data-color=\"color\"></span>\r\n        </div>`;\n        const colorPicker = (_a = divContainerContent.firstElementChild) === null || _a === void 0 ? void 0 : _a.querySelector(\"input[type=color]\");\n        const colorSpan = colorPicker.nextSibling;\n        const btnColor = document.querySelector(\"#colorTask\");\n        if (!colorPicker && !colorSpan && !document.querySelector(\"#colorTask\")) {\n            throw new Error(\"O elemento colorPicker__display, colorSpan e btnColor não foi renderizado tente recarregar a página\");\n        }\n        colorPicker.addEventListener(\"change\", () => {\n            console.log(colorPicker.value);\n            colorSpan.textContent = colorPicker.value;\n            btnColor.style.backgroundColor = colorPicker.value;\n        });\n        tab.appendChild(divContainerContent);\n    }\n}\nfunction hideContent() {\n    if (!tab) {\n        throw new Error(\"O elemento footer não foi renderizado tente recarregar a página\");\n    }\n    let targetContent = tab.querySelectorAll(\".content__tab\");\n    if (targetContent) {\n        targetContent.forEach((content) => content.remove());\n    }\n    else {\n        console.error(\"Não há conteúdo para remover.\");\n    }\n}\n\n\n//# sourceURL=webpack:///./src/utils/manage-content-tab.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;