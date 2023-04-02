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

/***/ "./src/App/Add-to-do.js":
/*!******************************!*\
  !*** ./src/App/Add-to-do.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToDoForm\": () => (/* binding */ addToDoForm)\n/* harmony export */ });\n/* harmony import */ var _NewToDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NewToDo */ \"./src/App/NewToDo.js\");\n\n\nclass addToDoForm {\n  constructor() {\n    this.modalTemplateEl = document.getElementById('modal-template');\n  }\n\n  show() {\n    const modalElements = document.importNode(\n      this.modalTemplateEl.content,\n      true,\n    );\n    this.modalElement = modalElements.querySelector('.modal');\n    this.backdropElement = modalElements.querySelector('.backdrop');\n\n    document.body.insertAdjacentElement('afterbegin', this.modalElement);\n    document.body.insertAdjacentElement('afterbegin', this.backdropElement);\n    this.render();\n  }\n\n  render() {\n    const contentTemplateEl = document.querySelector('.modal');\n    const form = document.createElement('form');\n\n    const titleLabel = document.createElement('label');\n    titleLabel.htmlFor = 'title';\n    titleLabel.textContent = 'Title:';\n\n    const titleInput = document.createElement('input');\n    titleInput.type = 'text';\n    titleInput.name = 'title';\n    titleInput.required = true;\n\n    const bodyLabel = document.createElement('label');\n    bodyLabel.htmlFor = 'body';\n    bodyLabel.textContent = 'Description:';\n\n    const bodyInput = document.createElement('input');\n    bodyInput.type = 'text';\n    bodyInput.name = 'body';\n    bodyInput.required = true;\n\n    const moreInfoLabel = document.createElement('label');\n    moreInfoLabel.htmlFor = 'moreInfo';\n    moreInfoLabel.textContent = 'More Info:';\n\n    const moreInfoInput = document.createElement('input');\n    moreInfoInput.type = 'text';\n    moreInfoInput.name = 'moreInfo';\n    moreInfoInput.required = true;\n\n    const submit = document.createElement('button');\n    submit.type = 'submit';\n    submit.textContent = 'Add';\n\n    const cancel = document.createElement('button');\n    cancel.type = 'button';\n    cancel.textContent = 'Cancel';\n    cancel.className = 'alt';\n    cancel.addEventListener('click', () => {\n      this.hide();\n    });\n\n    form.className = 'form';\n    form.appendChild(titleLabel);\n    form.appendChild(titleInput);\n    form.appendChild(bodyLabel);\n    form.appendChild(bodyInput);\n    form.appendChild(moreInfoLabel);\n    form.appendChild(moreInfoInput);\n    form.appendChild(submit);\n    form.appendChild(cancel);\n\n    form.addEventListener('submit', event => {\n      event.preventDefault();\n      const value1 = titleInput.value;\n      const value2 = bodyInput.value;\n      const value3 = moreInfoInput.value;\n      this.hide();\n      const newEl = new _NewToDo__WEBPACK_IMPORTED_MODULE_0__.NewToDoElement(value1, value2, value3);\n      newEl.render();\n      console.log(`Input values: ${value1}, ${value2}, ${value3}`);\n    });\n\n    contentTemplateEl.appendChild(form);\n  }\n\n  hide() {\n    if (this.modalElement) {\n      this.modalElement.remove();\n      this.backdropElement.remove();\n\n      this.modalElement = null;\n      this.backdropElement = null;\n    }\n  }\n}\n\n\n//# sourceURL=webpack://practice-oop-01-starting-setup/./src/App/Add-to-do.js?");

/***/ }),

/***/ "./src/App/NewToDo.js":
/*!****************************!*\
  !*** ./src/App/NewToDo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NewToDoElement\": () => (/* binding */ NewToDoElement)\n/* harmony export */ });\n/* harmony import */ var _ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectList */ \"./src/App/ProjectList.js\");\n\nclass NewToDoElement {\n  constructor(title, body, moreInfo) {\n    this.title = title;\n    this.body = body;\n    this.moreInfo = moreInfo;\n  }\n\n  render() {\n    const liElement = document.createElement('li');\n    liElement.id = Math.random();\n    liElement.className = 'card';\n    liElement.draggable = true;\n    liElement.setAttribute('data-extra-info', `${this.moreInfo}`);\n\n    const h2Element = document.createElement('h2');\n    h2Element.textContent = this.title;\n\n    const pElement = document.createElement('p');\n    pElement.textContent = this.body;\n\n    const moreInfoBtnElement = document.createElement('button');\n    moreInfoBtnElement.className = 'alt';\n    moreInfoBtnElement.textContent = 'More Info';\n\n    const finishBtn = document.createElement('button');\n    finishBtn.textContent = 'Finish';\n\n    liElement.appendChild(h2Element);\n    liElement.appendChild(pElement);\n    liElement.appendChild(moreInfoBtnElement);\n    liElement.appendChild(finishBtn);\n    document\n      .querySelector(`#active-projects ul`)\n      .insertAdjacentElement('afterbegin', liElement);\n\n    const activeProjectList = new _ProjectList__WEBPACK_IMPORTED_MODULE_0__.ProjectList('active');\n    const finishedProjectList = new _ProjectList__WEBPACK_IMPORTED_MODULE_0__.ProjectList('finished');\n    activeProjectList.setSwitchHandlerFunction(\n      finishedProjectList.addProject.bind(finishedProjectList),\n    );\n    finishedProjectList.setSwitchHandlerFunction(\n      activeProjectList.addProject.bind(activeProjectList),\n    );\n  }\n}\n\n\n//# sourceURL=webpack://practice-oop-01-starting-setup/./src/App/NewToDo.js?");

/***/ }),

/***/ "./src/App/ProjectItem.js":
/*!********************************!*\
  !*** ./src/App/ProjectItem.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectItem\": () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utility/DOMHelper.js */ \"./src/Utility/DOMHelper.js\");\n\n// import { ToolTip } from \"./Tooltip.js\"; // gets imported dynamically later in the script\n\nclass ProjectItem {\n  hasActiveToolTip = false;\n\n  constructor(id, updateProjectListsFunction, type) {\n    this.type = type;\n    this.updateProjectListsHandler = updateProjectListsFunction;\n    this.id = id;\n    this.connectMoreInfoButton();\n    this.connectSwitchButton(type);\n    this.connectDrag();\n  }\n\n  showMoreInfoHandler() {\n    if (this.hasActiveToolTip) {\n      return;\n    }\n    const projectElement = document.getElementById(this.id);\n    const tooltipText = projectElement.dataset.extraInfo;\n    // Dynamic Import HERE\n    __webpack_require__.e(/*! import() */ \"src_App_Tooltip_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./Tooltip.js */ \"./src/App/Tooltip.js\")).then(module => {\n      const toolTip = new module.ToolTip(\n        () => {\n          this.hasActiveToolTip = false;\n        },\n        tooltipText,\n        this.id,\n      );\n\n      toolTip.attach();\n\n      this.hasActiveToolTip = true;\n    });\n  }\n\n  connectDrag() {\n    document.getElementById(this.id).addEventListener('dragstart', event => {\n      event.dataTransfer.setData('text/plain', this.id);\n      event.dataTransfer.effectAllowed = 'move';\n    });\n  }\n\n  connectMoreInfoButton() {\n    const projectItemElement = document.getElementById(this.id);\n    let moreInfoBtn = projectItemElement.querySelector('button:first-of-type');\n    moreInfoBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListeners(moreInfoBtn);\n    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));\n  }\n\n  connectSwitchButton(type) {\n    const projectItemElement = document.getElementById(this.id);\n    let switchBtn = projectItemElement.querySelector('button:last-of-type');\n    switchBtn = _Utility_DOMHelper_js__WEBPACK_IMPORTED_MODULE_0__.DOMHelper.clearEventListeners(switchBtn);\n    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';\n    switchBtn.addEventListener(\n      'click',\n      this.updateProjectListsHandler.bind(null, this.id),\n    );\n  }\n\n  update(updateProjectListsFn, type) {\n    this.updateProjectListsHandler = updateProjectListsFn;\n    this.connectSwitchButton(type);\n  }\n}\n\n\n//# sourceURL=webpack://practice-oop-01-starting-setup/./src/App/ProjectItem.js?");

/***/ }),

/***/ "./src/App/ProjectList.js":
/*!********************************!*\
  !*** ./src/App/ProjectList.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem */ \"./src/App/ProjectItem.js\");\n/* harmony import */ var _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utility/DOMHelper */ \"./src/Utility/DOMHelper.js\");\n\n\n\nclass ProjectList {\n  projects = [];\n\n  constructor(type) {\n    this.type = type;\n    const prjItems = document.querySelectorAll(`#${type}-projects li`);\n    for (const prjItem of prjItems) {\n      this.projects.push(\n        new _ProjectItem__WEBPACK_IMPORTED_MODULE_0__.ProjectItem(prjItem.id, this.switchProject.bind(this), this.type),\n      );\n    }\n    this.connectDroppable();\n  }\n\n  connectDroppable() {\n    const list = document.querySelector(`#${this.type}-projects ul`);\n    list.addEventListener('dragenter', event => {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        event.preventDefault();\n        list.parentElement.classList.add('droppable');\n      }\n    });\n    list.addEventListener('dragover', event => {\n      if (event.dataTransfer.types[0] === 'text/plain') {\n        event.preventDefault();\n      }\n    });\n\n    list.addEventListener('dragleave', event => {\n      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {\n        list.parentElement.classList.remove('droppable');\n      }\n    });\n\n    list.addEventListener('drop', event => {\n      const prjId = event.dataTransfer.getData('text/plain');\n      if (this.projects.find(p => p.id === prjId)) {\n        return;\n      }\n      document\n        .getElementById(prjId)\n        .querySelector('button:last-of-type')\n        .click();\n\n      list.parentElement.classList.remove('droppable');\n    });\n  }\n\n  setSwitchHandlerFunction(switchHandlerFunction) {\n    this.switchHandler = switchHandlerFunction;\n  }\n\n  addProject(project) {\n    this.projects.push(project);\n    _Utility_DOMHelper__WEBPACK_IMPORTED_MODULE_1__.DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);\n    project.update(this.switchProject.bind(this), this.type);\n  }\n\n  switchProject(projectId) {\n    this.switchHandler(this.projects.find(p => p.id === projectId));\n    this.projects = this.projects.filter(p => p.id !== projectId);\n  }\n}\n\n\n//# sourceURL=webpack://practice-oop-01-starting-setup/./src/App/ProjectList.js?");

/***/ }),

/***/ "./src/Utility/DOMHelper.js":
/*!**********************************!*\
  !*** ./src/Utility/DOMHelper.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DOMHelper\": () => (/* binding */ DOMHelper)\n/* harmony export */ });\nclass DOMHelper {\n  static clearEventListeners(element) {\n    const clonedElement = element.cloneNode(true);\n    element.replaceWith(clonedElement);\n    return clonedElement;\n  }\n\n  static moveElement(elementId, newDestinationSelector) {\n    const element = document.getElementById(elementId);\n    const destinationElement = document.querySelector(newDestinationSelector);\n    destinationElement.append(element);\n    element.scrollIntoView({ behavior: \"smooth\" });\n  }\n}\n\n\n//# sourceURL=webpack://practice-oop-01-starting-setup/./src/Utility/DOMHelper.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/ProjectList */ \"./src/App/ProjectList.js\");\n/* harmony import */ var _App_Add_to_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App/Add-to-do */ \"./src/App/Add-to-do.js\");\n\n\n\nclass App {\n  static init() {\n    const activeProjectList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__.ProjectList('active');\n    const finishedProjectList = new _App_ProjectList__WEBPACK_IMPORTED_MODULE_0__.ProjectList('finished');\n    const toDoForm = new _App_Add_to_do__WEBPACK_IMPORTED_MODULE_1__.addToDoForm('.modal');\n    const addToDoButton = document.querySelector('.add-to-do-button');\n    addToDoButton.addEventListener('click', () => {\n      toDoForm.show();\n    });\n\n    activeProjectList.setSwitchHandlerFunction(\n      finishedProjectList.addProject.bind(finishedProjectList),\n    );\n    finishedProjectList.setSwitchHandlerFunction(\n      activeProjectList.addProject.bind(activeProjectList),\n    );\n  }\n}\n\nApp.init();\n\n\n//# sourceURL=webpack://practice-oop-01-starting-setup/./src/app.js?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".app.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "practice-oop-01-starting-setup:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			};
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpractice_oop_01_starting_setup"] = self["webpackChunkpractice_oop_01_starting_setup"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;