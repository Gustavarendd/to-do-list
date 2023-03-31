"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkpractice_oop_01_starting_setup"] = self["webpackChunkpractice_oop_01_starting_setup"] || []).push([["src_App_Tooltip_js"],{

/***/ "./src/App/Component.js":
/*!******************************!*\
  !*** ./src/App/Component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\n  constructor(hostElementId, insertBefore = false) {\n    if (hostElementId) {\n      this.hostElement = document.getElementById(hostElementId);\n    } else {\n      this.hostElement = document.body;\n    }\n    this.insertBefore = insertBefore;\n  }\n\n  attach() {\n    this.hostElement.insertAdjacentElement(\n      this.insertBefore ? \"afterbegin\" : \"beforeend\",\n      this.element\n    );\n  }\n\n  detach() {\n    this.element.remove();\n  }\n}\n\n\n//# sourceURL=webpack://practice-oop-01-starting-setup/./src/App/Component.js?");

/***/ }),

/***/ "./src/App/Tooltip.js":
/*!****************************!*\
  !*** ./src/App/Tooltip.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToolTip\": () => (/* binding */ ToolTip)\n/* harmony export */ });\n/* harmony import */ var _Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component.js */ \"./src/App/Component.js\");\n\n\nclass ToolTip extends _Component_js__WEBPACK_IMPORTED_MODULE_0__.Component {\n  constructor(closeNotifierFn, text, hostElementId) {\n    super(hostElementId);\n    this.closeNotifier = closeNotifierFn;\n    this.text = text;\n\n    this.create();\n  }\n\n  create() {\n    const tooltipElement = document.createElement('div');\n    tooltipElement.className = 'card';\n    const tooltipElementTemplate = document.getElementById('tooltip');\n    const toolTipBody = document.importNode(\n      tooltipElementTemplate.content,\n      true,\n    );\n    toolTipBody.querySelector('p').textContent = this.text;\n    tooltipElement.append(toolTipBody);\n\n    const hostElPosLeft = this.hostElement.offsetLeft;\n    const hostElPosTop = this.hostElement.offsetTop;\n    const hostElPosHeight = this.hostElement.clientHeight;\n    const parentElementScroll = this.hostElement.parentElement.scrollTop;\n\n    const x = hostElPosLeft + 20;\n    const y = hostElPosTop + hostElPosHeight - parentElementScroll - 10;\n\n    tooltipElement.style.position = 'absolute';\n    tooltipElement.style.left = x + 'px';\n    tooltipElement.style.top = y + 'px';\n\n    tooltipElement.addEventListener('click', this.closeToolTip.bind(this));\n\n    this.element = tooltipElement;\n  }\n\n  closeToolTip() {\n    this.detach();\n    this.closeNotifier();\n  }\n}\n\n\n//# sourceURL=webpack://practice-oop-01-starting-setup/./src/App/Tooltip.js?");

/***/ })

}]);