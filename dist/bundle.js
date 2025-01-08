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

/***/ "./src/components/btn-color-footer.ts":
/*!********************************************!*\
  !*** ./src/components/btn-color-footer.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addListenerColorContent: () => (/* binding */ addListenerColorContent),\n/* harmony export */   colorSectionContent: () => (/* binding */ colorSectionContent),\n/* harmony export */   getColor: () => (/* binding */ getColor)\n/* harmony export */ });\nconst colorSection = `\r\n        <div class=\"colorPicker\">\r\n            <h2>Escolha a cor do bloco</h3>\r\n            <input type=\"color\" class=\"colorPicker__display\">\r\n            <span data-color=\"color\"></span>\r\n        </div>`;\nconst colorSectionContent = () => {\n    return colorSection;\n};\nfunction addListenerColorContent(tab, divSection) {\n    var _a;\n    const colorPicker = (_a = divSection.firstElementChild) === null || _a === void 0 ? void 0 : _a.querySelector(\"input[type=color]\");\n    const colorSpan = colorPicker.nextSibling;\n    const btnColor = document.querySelector(\"#colorTask\");\n    if (!colorPicker && !colorSpan && !document.querySelector(\"#colorTask\")) {\n        throw new Error(\"O elemento colorPicker__display, colorSpan e btnColor não foi renderizado tente recarregar a página\");\n    }\n    colorPicker.addEventListener(\"change\", () => {\n        // console.log(colorPicker.value);\n        colorSpan.textContent = colorPicker.value;\n        btnColor.style.backgroundColor = colorPicker.value;\n        btnColor.setAttribute(\"data-color-task\", colorPicker.value);\n    });\n    tab.appendChild(divSection);\n}\nconst getColor = () => {\n    const chosenColor = document.querySelector(\"#colorTask\");\n    if (chosenColor instanceof HTMLElement) {\n        const color = chosenColor.getAttribute(\"data-color-task\");\n        if (color) {\n            return color;\n        }\n    }\n    return \"#ff8000\";\n};\n\n\n//# sourceURL=webpack:///./src/components/btn-color-footer.ts?");

/***/ }),

/***/ "./src/components/btn-create-footer.ts":
/*!*********************************************!*\
  !*** ./src/components/btn-create-footer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addCategorySelect: () => (/* binding */ addCategorySelect),\n/* harmony export */   addListenerSectionContent: () => (/* binding */ addListenerSectionContent),\n/* harmony export */   createSectionContent: () => (/* binding */ createSectionContent)\n/* harmony export */ });\n/* harmony import */ var _types_Categorias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/Categorias */ \"./src/types/Categorias.ts\");\n/* harmony import */ var _utils_newBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/newBlock */ \"./src/utils/newBlock.ts\");\n/* harmony import */ var _btn_color_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btn-color-footer */ \"./src/components/btn-color-footer.ts\");\n\n\n\n// Salva a estrutura html da seção\nconst createSection = `\r\n        <div class=\"createSection\">\r\n        <div class=\"createSection__category\">\r\n            <select data-create-category>\r\n            </select>\r\n        </div>\r\n          <div class=\"createSection__title\">\r\n            <input type=\"text\" placeholder=\"Título do bloco\">\r\n            <span data-create-title>\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\r\n                    <path d=\"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z\"\r\n            </span>\r\n            </div>\r\n            <div class=\"createSection__task\">\r\n                <input type=\"text\" placeholder=\"Nome da tarefa\">\r\n                <span data-create-task>\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\">\r\n                    <path d=\"M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z\"\r\n                </span>\r\n            </div>\r\n            <button class=\"createSection__button\" data-create-button>\r\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\"M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z\"/></svg>\r\n            </button>\r\n            <p class=\"createSection__error\" data-create-error></p>\r\n            <p class=\"createSection__listTitle\" data-create-listTitle></p>\r\n            <ul class=\"createSection__list\" data-create-list></ul>\r\n        </div>`;\n// Retorna a estrutura quando chamado em outra parte de onde for chamado\nconst createSectionContent = () => {\n    return createSection;\n};\nconst addCategorySelect = () => {\n    const selectElement = document.querySelector(\"[data-create-category]\");\n    if (selectElement instanceof HTMLSelectElement) {\n        let options = (0,_types_Categorias__WEBPACK_IMPORTED_MODULE_0__.categoriaSelect)().join(\"\"); // join junta os elementos\n        selectElement.innerHTML = options;\n    }\n};\nconst addListenerSectionContent = (tab) => {\n    const btnTitleElement = tab.querySelector(\"[data-create-title]\");\n    const listTitleElement = tab.querySelector(\"[data-create-listTitle]\");\n    const btnTaskElement = tab.querySelector(\"[data-create-task]\");\n    const btnSaveBlock = tab.querySelector(\"[data-create-button]\");\n    const errorMessage = tab.querySelector(\"[data-create-error]\");\n    if (btnTitleElement && listTitleElement && errorMessage) {\n        btnTitleElement.addEventListener(\"click\", () => {\n            // Garantir que o previousElementSibling seja um input\n            const titleValue = btnTitleElement.previousElementSibling;\n            if (titleValue && titleValue.value) {\n                listTitleElement.textContent = titleValue.value; // Usando textContent para definir o texto\n                titleValue.value = \"\";\n                if (errorMessage.textContent !== \"\") {\n                    errorMessage.textContent = \"\";\n                }\n            }\n            else {\n                errorMessage.innerHTML = \"O título deve ser preenchido\";\n            }\n        });\n    }\n    // Adicionando um listener para o botão de tasks, se necessário\n    if (btnTaskElement && errorMessage) {\n        btnTaskElement.addEventListener(\"click\", () => {\n            let taskValue = btnTaskElement.previousElementSibling;\n            if (taskValue &&\n                taskValue.value !== \"\" &&\n                !verifyNewTask(taskValue.value)) {\n                const listItem = document.createElement(\"li\");\n                listItem.innerHTML = `\r\n          <span>${taskValue.value}</span>\r\n          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d=\"M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z\"/></svg>\r\n        `;\n                const deleteIcon = listItem.querySelector(\"svg\");\n                if (deleteIcon) {\n                    deleteIcon.addEventListener(\"click\", () => deleteTask(listItem));\n                }\n                const list = tab.querySelector(\"[data-create-list]\");\n                if (list) {\n                    list.appendChild(listItem);\n                }\n                taskValue.value = \"\";\n                errorMessage.innerHTML = \"\";\n            }\n            else {\n                errorMessage.innerHTML = \"A tarefa deve ser preenchida\";\n            }\n        });\n    }\n    if (btnSaveBlock) {\n        btnSaveBlock.addEventListener(\"click\", () => {\n            // console.log(saveNewTask(tab));\n            saveNewTask(tab);\n        });\n    }\n};\n// Funções internas\nfunction deleteTask(item) {\n    if (item) {\n        item.remove();\n    }\n}\nfunction verifyNewTask(value) {\n    const listTask = document.querySelector(\"[data-create-list]\");\n    if (listTask && value) {\n        const tasks = Array.from(listTask.querySelectorAll(\"li\"));\n        return tasks.some((task) => { var _a; return ((_a = task.textContent) === null || _a === void 0 ? void 0 : _a.trim().toLowerCase()) === value; });\n    }\n    return false;\n}\n// Recebe valores dos inputs do createSection, pega o tamanho da array com os valores do localStorage e retorna\n// moldado\nfunction formatTask(category, title, tasks) {\n    const tasksJson = localStorage.getItem(\"tasks\");\n    const tasksArray = tasksJson ? JSON.parse(tasksJson) : [];\n    if (!tasksArray) {\n        throw new Error(\"No tasks found\");\n    }\n    const id = tasksArray.length + 1;\n    const colorTask = (0,_btn_color_footer__WEBPACK_IMPORTED_MODULE_2__.getColor)();\n    const block = {\n        id: id,\n        color: colorTask,\n        category: category,\n        title: title,\n        task: tasks,\n        date: new Date().toLocaleDateString(\"pt-BR\"),\n    };\n    return block;\n}\n// Salva as tarefas preenchidas no footerBtn no localStorage\nfunction saveNewTask(t) {\n    var _a;\n    // dessa forma tem que certeza que o elemento estará lá\n    const selectGategory = t.querySelector(\"[data-create-category]\");\n    let categoria;\n    // nesse caso não tem certza\n    const titleBlock = t.querySelector(\"[data-create-listTitle]\");\n    const tasks = Array.from(t.querySelectorAll(\"[data-create-list] li span\"));\n    const errorMessage = t.querySelector(\"[data-create-error]\");\n    if (errorMessage) {\n        if (selectGategory instanceof HTMLSelectElement &&\n            selectGategory.value === \"\") {\n            errorMessage.innerHTML = \"Nenhuma categoria selecionada\";\n            return;\n        }\n        if (titleBlock instanceof HTMLElement && titleBlock.textContent === \"\") {\n            errorMessage.innerHTML = \"Não tem título para salvar\";\n            return;\n        }\n        if (tasks.length <= 0) {\n            errorMessage.innerHTML = \"Não tem itens para salvar\";\n            return;\n        }\n    }\n    categoria = selectGategory.value;\n    const tasksText = tasks\n        .map((task) => { var _a, _b; return (_b = (_a = task.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : \"\"; }) // Se for undefined, transforma em uma string vazia\n        .filter(Boolean); // Remove qualquer valor \"falsy\", como uma string vazia\n    if (titleBlock instanceof HTMLElement && ((_a = titleBlock.textContent) === null || _a === void 0 ? void 0 : _a.trim())) {\n        if (selectGategory instanceof HTMLSelectElement) {\n            let categoria = selectGategory.value;\n            const savedTasks = JSON.parse(localStorage.getItem(\"tasks\") || \"[]\");\n            // Salva no localStorage\n            if (savedTasks) {\n                savedTasks.push(formatTask(categoria, titleBlock.textContent.trim(), tasksText));\n                localStorage.setItem(\"tasks\", JSON.stringify(savedTasks));\n            }\n            // Chama a função para criar bloco e enviar as informações necessárias\n            const id = savedTasks.length;\n            const color = (0,_btn_color_footer__WEBPACK_IMPORTED_MODULE_2__.getColor)();\n            (0,_utils_newBlock__WEBPACK_IMPORTED_MODULE_1__.createBlock)(id, titleBlock.textContent.trim(), categoria, color);\n        }\n    }\n    if (titleBlock) {\n        titleBlock.textContent = \"\";\n    }\n    // Limpa as taks listadas na seção\n    const ul = t.querySelector(\"[data-create-list]\");\n    if (ul instanceof HTMLElement) {\n        // Remover todos os filhos da create-list\n        while (ul.firstChild) {\n            ul.removeChild(ul.firstChild);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/components/btn-create-footer.ts?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_btn_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/btn-footer-component */ \"./src/components/btn-footer-component.ts\");\n/* harmony import */ var _utils_controller_tab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/controller-tab */ \"./src/utils/controller-tab.ts\");\n/* harmony import */ var _utils_onPageLoad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/onPageLoad */ \"./src/utils/onPageLoad.ts\");\n\n\n\n(0,_utils_onPageLoad__WEBPACK_IMPORTED_MODULE_2__.addLoadEventListener)();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/types/Categorias.ts":
/*!*********************************!*\
  !*** ./src/types/Categorias.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Categoria: () => (/* binding */ Categoria),\n/* harmony export */   categoriaSelect: () => (/* binding */ categoriaSelect)\n/* harmony export */ });\nvar Categoria;\n(function (Categoria) {\n    Categoria[\"Pessoal\"] = \"Pessoal\";\n    Categoria[\"Trabalho\"] = \"Trabalho\";\n    Categoria[\"Estudos\"] = \"Estudos\";\n    Categoria[\"Casa\"] = \"Casa\";\n    Categoria[\"Sa\\u00FAde\"] = \"Sa\\u00FAde\";\n    Categoria[\"Financeiro\"] = \"Financeiro\";\n    Categoria[\"Social\"] = \"Social\";\n    Categoria[\"Projetos\"] = \"Projetos\";\n    Categoria[\"Compras\"] = \"Compras\";\n    Categoria[\"Manutencao\"] = \"Manuten\\u00E7\\u00E3o\";\n    Categoria[\"Urgente\"] = \"Urgente\";\n    Categoria[\"Eventos\"] = \"Eventos\";\n    Categoria[\"Viagens\"] = \"Viagens\";\n    Categoria[\"Autocuidado\"] = \"Autocuidado\";\n    Categoria[\"ObjetivosLongoPrazo\"] = \"Objetivos de Longo Prazo\";\n    Categoria[\"Networking\"] = \"Networking\";\n    Categoria[\"Inspiracao\"] = \"Inspira\\u00E7\\u00E3o\";\n    Categoria[\"Esportes\"] = \"Esportes\";\n    Categoria[\"Cultura\"] = \"Cultura\";\n    Categoria[\"Recados\"] = \"Recados\";\n})(Categoria || (Categoria = {}));\nconst categoriaSelect = () => {\n    return Object.values(Categoria).map(categoria => {\n        return `<option value=\"${categoria}\">${categoria}</option>`;\n    });\n};\n\n\n//# sourceURL=webpack:///./src/types/Categorias.ts?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hideContent: () => (/* binding */ hideContent),\n/* harmony export */   showContent: () => (/* binding */ showContent)\n/* harmony export */ });\n/* harmony import */ var _components_btn_create_footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/btn-create-footer */ \"./src/components/btn-create-footer.ts\");\n/* harmony import */ var _components_btn_color_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/btn-color-footer */ \"./src/components/btn-color-footer.ts\");\n\n\nconst tab = document.querySelector(\".footer\");\nfunction showContent(typeContent) {\n    let content;\n    if (!tab) {\n        throw new Error(\"O elemento footer não foi renderizado tente recarregar a página\");\n    }\n    let divContainerContent = document.createElement(\"div\");\n    divContainerContent.classList.add(\"content__tab\");\n    hideContent(); // não duplica pois apaga o anterior\n    if (typeContent === \"filter\") {\n        divContainerContent.innerHTML = `\r\n        <h1> hello 1</h1>`;\n        tab.appendChild(divContainerContent);\n    }\n    if (typeContent === \"create\") {\n        divContainerContent.innerHTML = (0,_components_btn_create_footer__WEBPACK_IMPORTED_MODULE_0__.createSectionContent)();\n        tab.appendChild(divContainerContent);\n        (0,_components_btn_create_footer__WEBPACK_IMPORTED_MODULE_0__.addListenerSectionContent)(tab);\n        (0,_components_btn_create_footer__WEBPACK_IMPORTED_MODULE_0__.addCategorySelect)();\n    }\n    if (typeContent === \"color\") {\n        divContainerContent.innerHTML = (0,_components_btn_color_footer__WEBPACK_IMPORTED_MODULE_1__.colorSectionContent)();\n        (0,_components_btn_color_footer__WEBPACK_IMPORTED_MODULE_1__.addListenerColorContent)(tab, divContainerContent);\n    }\n}\nfunction hideContent() {\n    if (!tab) {\n        throw new Error(\"O elemento footer não foi renderizado tente recarregar a página\");\n    }\n    let targetContent = tab.querySelectorAll(\".content__tab\");\n    if (targetContent) {\n        targetContent.forEach((content) => content.remove());\n    }\n    else {\n        console.error(\"Não há conteúdo para remover.\");\n    }\n}\n\n\n//# sourceURL=webpack:///./src/utils/manage-content-tab.ts?");

/***/ }),

/***/ "./src/utils/newBlock.ts":
/*!*******************************!*\
  !*** ./src/utils/newBlock.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBlock: () => (/* binding */ createBlock),\n/* harmony export */   newBlockStructure: () => (/* binding */ newBlockStructure)\n/* harmony export */ });\nconst newBlockStructure = (id, title, category) => {\n    return `\r\n        <p>${title}</p>\r\n        <p class=\"item__category\">${category}</p>\r\n                <div class=\"item__edit\" data-index-item=\"${id}\">\r\n                <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\">\r\n                    <path\r\n                    d=\"M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z\"\r\n                    />\r\n                </svg>\r\n                </div>`;\n};\nfunction createBlock(id, titleItem, categoryItem, color) {\n    var _a;\n    const blockList = document.querySelector(\".blocks\");\n    const newBlock = document.createElement(\"div\");\n    newBlock.classList.add(\"blocks__item\");\n    newBlock.innerHTML = newBlockStructure(id, titleItem, categoryItem);\n    newBlock.style.backgroundColor = `${color}`;\n    (_a = newBlock.querySelector(\".item__edit\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", () => {\n        // Abre mostrar mais\n        console.log(1);\n    });\n    blockList.appendChild(newBlock);\n}\n\n\n//# sourceURL=webpack:///./src/utils/newBlock.ts?");

/***/ }),

/***/ "./src/utils/onPageLoad.ts":
/*!*********************************!*\
  !*** ./src/utils/onPageLoad.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLoadEventListener: () => (/* binding */ addLoadEventListener),\n/* harmony export */   onPageLoad: () => (/* binding */ onPageLoad)\n/* harmony export */ });\n/* harmony import */ var _newBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newBlock */ \"./src/utils/newBlock.ts\");\n\nconst addLoadEventListener = () => {\n    window.addEventListener(\"load\", onPageLoad);\n};\nconst onPageLoad = () => {\n    const blockData = localStorage.getItem(\"tasks\");\n    if (blockData) {\n        const arrayBlocks = JSON.parse(blockData);\n        renderBlocks(arrayBlocks);\n    }\n};\nfunction renderBlocks(arrayBlocks) {\n    const blockList = document.querySelector(\".blocks\");\n    arrayBlocks.forEach((block) => {\n        const blockElement = document.createElement(\"div\");\n        blockElement.classList.add(\"blocks__item\");\n        blockElement.innerHTML = (0,_newBlock__WEBPACK_IMPORTED_MODULE_0__.newBlockStructure)(block.id, block.title, block.category);\n        blockElement.style.backgroundColor = block.color;\n        console.log(block);\n        blockList.appendChild(blockElement);\n    });\n}\n\n\n//# sourceURL=webpack:///./src/utils/onPageLoad.ts?");

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