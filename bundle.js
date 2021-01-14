/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Commands/Command.js":
/*!*********************************!*\
  !*** ./src/Commands/Command.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\nclass Command {\r\n\r\n    constructor() {\r\n        this.command = false;\r\n\r\n        var el = window;\r\n        var eventName = 'keypress';\r\n        if (el.addEventListener) {\r\n            el.addEventListener('mouseup', (e) => this.keyListener(e, this), false);\r\n            el.addEventListener('mousemove', (e) => this.keyListener(e, this), false);\r\n            el.addEventListener('keyup', (e) => this.keyListener(e, this), false);\r\n            el.addEventListener('keydown', (e) => this.keyListener(e, this), false);\r\n        } else if (el.attachEvent) {\r\n            el.attachEvent('on' + eventName, this.keyListener);\r\n        }\r\n    }\r\n\r\n    keyListener(event, thisCopy) {\r\n        event = event || window.event;\r\n        var key = event.key || event.which || event.keyCode;\r\n        if (key === 3 && event.type === \"mouseup\") {\r\n            let mousePos = this.getMousePos(event);\r\n            this.command = [key, mousePos]\r\n        }\r\n        if (event.type === \"keyup\" && (key === \"q\" || key === \"w\")) {\r\n            this.command = [key, thisCopy.mousePos]\r\n        }\r\n        if (event.type === \"mousemove\") {\r\n            this.mousePos = this.getMousePos(event);\r\n        }\r\n    }\r\n\r\n    getMousePos(event) {\r\n        var canvas = document.getElementById('game-canvas')\r\n        var rect = canvas.getBoundingClientRect();\r\n        return {\r\n            x: event.clientX - rect.left,\r\n            y: event.clientY - rect.top\r\n        };\r\n    }\r\n\r\n    runCommand() {\r\n        let commandClone = [...this.command];\r\n        this.command = false;\r\n        return commandClone;\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Command);\r\n\n\n//# sourceURL=webpack://ponglegends/./src/Commands/Command.js?");

/***/ }),

/***/ "./src/GUI/Ability.js":
/*!****************************!*\
  !*** ./src/GUI/Ability.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\nclass Ability {\r\n\r\n    constructor(startingX, startingY) {\r\n        this.startingX = startingX;\r\n        this.startingY = startingY;\r\n    }\r\n\r\n    renderQ(x, y, ctx) {\r\n        ctx.moveTo(this.startingX, this.startingY);\r\n        ctx.lineTo(x, y);\r\n        ctx.stroke();\r\n    }\r\n\r\n    renderW(x, y, ctx) { \r\n        let xMiddle = (x - (10 / 2));\r\n        let yMiddle = (y - (10 / 2));\r\n        ctx.fillRect(xMiddle, yMiddle, 10, 10);\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ability);\r\n\n\n//# sourceURL=webpack://ponglegends/./src/GUI/Ability.js?");

/***/ }),

/***/ "./src/GUI/Champion.js":
/*!*****************************!*\
  !*** ./src/GUI/Champion.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\n\r\nclass Champion {\r\n\r\n    constructor(fromId) {\r\n        this.fromId = fromId;\r\n        this.height = 30;\r\n        this.width = 30;\r\n        this.health = 100;\r\n        this.maxHealth = 100;\r\n    }\r\n\r\n    setXY(x, y) {\r\n        this.xLoc = (x - (this.width / 2));\r\n        this.yLoc = (y - (this.width / 2));\r\n    }\r\n    \r\n    renderHealth(ctx) {\r\n        let x = this.xLoc\r\n        let y = this.yLoc\r\n        let leftX = x - 5;\r\n        let leftY = y - 5;\r\n        let rightX = x - 5 + ((this.width + 10) * this.health / this.maxHealth);\r\n        let rightY = y - 5;\r\n        ctx.moveTo(leftX, leftY);\r\n        ctx.lineTo(rightX, rightY);\r\n        ctx.stroke();\r\n    }\r\n\r\n    render(x, y, ctx) {\r\n        this.setXY(x, y);\r\n        this.renderHealth(ctx);\r\n        ctx.fillRect(this.xLoc, this.yLoc, this.width, this.height);\r\n    }\r\n\r\n    renderStill(ctx) {\r\n        this.renderHealth(ctx);\r\n        ctx.fillRect(this.xLoc, this.yLoc, this.width, this.height);\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Champion);\r\n\n\n//# sourceURL=webpack://ponglegends/./src/GUI/Champion.js?");

/***/ }),

/***/ "./src/GUI/Draw.js":
/*!*************************!*\
  !*** ./src/GUI/Draw.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Ability_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ability.js */ \"./src/GUI/Ability.js\");\n/* harmony import */ var _Champion_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Champion.js */ \"./src/GUI/Champion.js\");\n\r\n\r\n\r\n// import \"./Ablity.js\";\r\n// import \"./Champion.js\";\r\n\r\nclass Draw {\r\n\r\n    constructor() {\r\n        this.champion = new _Champion_js__WEBPACK_IMPORTED_MODULE_1__.default(0);\r\n        this.champion1 = new _Champion_js__WEBPACK_IMPORTED_MODULE_1__.default(1);\r\n        this.champion1.setXY(100, 100);\r\n        this.champion.setXY(50, 50);\r\n\r\n        this.championList = [this.champion, this.champion1];\r\n    }\r\n\r\n    draw(data) {\r\n        let canvas = document.getElementById('game-canvas');\r\n        canvas.width = 1000;\r\n        canvas.height = 1000;\r\n        var ctx = canvas.getContext('2d');\r\n        ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n        this.parseData(data, ctx);\r\n        this.champion.renderStill(ctx);\r\n        this.champion1.renderStill(ctx);\r\n\r\n    }\r\n\r\n    parseData(data, ctx) {\r\n        data.forEach(el => {\r\n            let x = el.x;\r\n            let y = el.y;\r\n            let affectedChampion = this.championList.find(champion => champion.fromId === el.fromId);\r\n            let middleX = affectedChampion.xLoc + (affectedChampion.width / 2);\r\n            let middleY = affectedChampion.yLoc + (affectedChampion.height / 2);\r\n\r\n            if (el.name === \"champion\") {\r\n                affectedChampion.render(x, y, ctx);\r\n            }\r\n            if (el.name === \"championHealth\") {\r\n                affectedChampion.health = y;\r\n            }\r\n            if (el.name === \"q\") {\r\n                let ability = new _Ability_js__WEBPACK_IMPORTED_MODULE_0__.default(middleX, middleY);\r\n                ability.renderQ(x, y, ctx);\r\n            }\r\n            if (el.name === \"w\") {\r\n                let ability = new _Ability_js__WEBPACK_IMPORTED_MODULE_0__.default(0, 0);\r\n                ability.renderW(x, y, ctx);\r\n            }\r\n        });\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Draw);\r\n\n\n//# sourceURL=webpack://ponglegends/./src/GUI/Draw.js?");

/***/ }),

/***/ "./src/ServerConnection/LegendSocket.js":
/*!**********************************************!*\
  !*** ./src/ServerConnection/LegendSocket.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\nclass LegendSocket {\r\n\r\n    constructor(url, fromId, draw) {\r\n        this.fromId = fromId;\r\n        this.connected = false;\r\n        this.getSocket(url);\r\n        this.draw = draw;\r\n    }\r\n\r\n    setFromId(fromId) {\r\n        console.log(fromId);\r\n        this.fromId = fromId;\r\n    }\r\n\r\n    async sendInfo(pressedKeys) {\r\n        this.socket.send(JSON.stringify(pressedKeys));\r\n    }\r\n\r\n    formatMessage(key, coordinate) {\r\n        return {\r\n            \"fromId\": this.fromId,\r\n            \"key\": key,\r\n            \"coordinate\": coordinate,\r\n        }\r\n    }\r\n\r\n    getSocket(url) {\r\n        this.socket = new WebSocket(url);\r\n        // refactor this figure out why it doesn't connect = true on open\r\n        this.connected = true;\r\n        this.socket.onopen = this.onOpen;\r\n        this.socket.onmessage = (event) => this.onMessage(event, this);\r\n        this.socket.onerror = this.onError;\r\n        this.socket.onclose = this.onClose;\r\n    }\r\n\r\n    onOpen() {\r\n        this.connected = true;\r\n        console.log(\"connected!\");\r\n        console.log(this.connected);\r\n    }\r\n\r\n    onMessage(event, thisCopy) {\r\n        let data = JSON.parse(event.data);\r\n        thisCopy.draw.draw(data);\r\n    }\r\n\r\n    onError(event) {\r\n        if (event.data === undefined) {\r\n            return null;\r\n        } else {\r\n            let data = JSON.parse(event.data);\r\n            this.error = data;\r\n        }\r\n    }\r\n\r\n    onClose() {\r\n        this.connected = false;\r\n        console.log(\"connection closed.\")\r\n    }\r\n\r\n    render() {\r\n        let body = document.getElementById(\"container\");\r\n        let socketContainer = document.createElement('div');\r\n        socketContainer.className = \"websocket\";\r\n        body.appendChild(socketContainer);\r\n    };\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LegendSocket);\r\n\n\n//# sourceURL=webpack://ponglegends/./src/ServerConnection/LegendSocket.js?");

/***/ }),

/***/ "./src/ServerConnection/UIElements.js":
/*!********************************************!*\
  !*** ./src/ServerConnection/UIElements.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n\r\nclass UIElements {\r\n    \r\n    constructor() {\r\n        this.connectButton = document.getElementsByClassName(\"connect-button\");\r\n        this.playerButtons = document.getElementsByClassName(\"player-button\");\r\n    }\r\n\r\n    connectButtonOnClick(legendSocket, render) {\r\n        let keys = Object.keys(this.connectButton);\r\n        keys.map(key => this.connectButton[key].addEventListener(\"click\", () => {\r\n            legendSocket.sendInfo(\"Connect!\");\r\n            render();\r\n        }));\r\n    }\r\n\r\n    playerButtonOnClick(legendSocket) {\r\n        let keys = Object.keys(this.playerButtons);\r\n        console.log(this.playerButtons[0].innerHTML)\r\n        keys.map(key => this.playerButtons[key].addEventListener(\"click\", () => legendSocket.setFromId(this.playerButtons[key].innerHTML)));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UIElements);\r\n\n\n//# sourceURL=webpack://ponglegends/./src/ServerConnection/UIElements.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ServerConnection_LegendSocket_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ServerConnection/LegendSocket.js */ \"./src/ServerConnection/LegendSocket.js\");\n/* harmony import */ var _Commands_Command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Commands/Command.js */ \"./src/Commands/Command.js\");\n/* harmony import */ var _GUI_Draw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GUI/Draw.js */ \"./src/GUI/Draw.js\");\n/* harmony import */ var _ServerConnection_UIElements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ServerConnection/UIElements.js */ \"./src/ServerConnection/UIElements.js\");\n\r\n\r\n\r\n\r\n\r\n// import \"./ServerConnection/LegendSocket.js\";\r\n// import \"./Commands/Command.js\";\r\n// import \"./GUI/Draw.js\";\r\n// import \"./ServerConnection/UIElements.js\";\r\n\r\nclass Main {\r\n\r\n    constructor() {\r\n        this.fromId = 0;\r\n        this.command = new _Commands_Command_js__WEBPACK_IMPORTED_MODULE_1__.default;\r\n        this.draw = new _GUI_Draw_js__WEBPACK_IMPORTED_MODULE_2__.default;\r\n        this.UIElements = new _ServerConnection_UIElements_js__WEBPACK_IMPORTED_MODULE_3__.default;\r\n        this.link = \"ws://ec2-3-23-130-183.us-east-2.compute.amazonaws.com\"\r\n        //this.link = \"ws://localhost\"\r\n\r\n        //this.legendSocket = new LegendSocket(\"wss://172.31.40.232:8080/ws\", this.fromId, this.draw);\r\n        //this.legendSocket2 = new LegendSocket(\"ws://localhost:8080/socket\", this.fromId, this.draw);\r\n        //this.legendSocket = new LegendSocket(\"ws://localhost:8082/ws\", this.fromId, this.draw);\r\n        this.pressedKeys = this.command.pressedKeysObj;\r\n\r\n        this.legendSocket2 = new _ServerConnection_LegendSocket_js__WEBPACK_IMPORTED_MODULE_0__.default(this.link + \":8080/socket\", this.fromId, this.draw);\r\n        this.UIElements.connectButtonOnClick(this.legendSocket2, () => this.render(this));\r\n\r\n        let startingData = [{\r\n            \"object\": \"champion\",\r\n            \"fromId\": 1,\r\n            \"x\": 0,\r\n            \"y\": 0,\r\n        },\r\n        {\r\n            \"object\": \"champion\",\r\n            \"fromId\": 0,\r\n            \"x\": 50,\r\n            \"y\": 50,\r\n        }\r\n        ];\r\n        this.draw.draw(startingData);\r\n\r\n    }\r\n\r\n    async render(thisCopy) {\r\n        console.log(\"hit render\");\r\n        console.log(thisCopy.legendSocket2);\r\n        console.log(thisCopy.legendSocket2.connected);\r\n        if (thisCopy.legendSocket2.connected) {\r\n            thisCopy.legendSocket = new _ServerConnection_LegendSocket_js__WEBPACK_IMPORTED_MODULE_0__.default(this.link + \":8082/ws/\",\r\n                thisCopy.fromId, thisCopy.draw);\r\n            thisCopy.UIElements.playerButtonOnClick(thisCopy.legendSocket)\r\n            while (thisCopy.legendSocket.connected) {\r\n                await new Promise(r => setTimeout(r, 20));\r\n                if (thisCopy.command.command) {\r\n                    let toRun = thisCopy.command.runCommand();\r\n                    let formatted = thisCopy.legendSocket.formatMessage(toRun[0].toString(), toRun[1]);\r\n                    thisCopy.legendSocket.sendInfo(formatted);\r\n                }\r\n\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\nlet main = new Main;\r\n\n\n//# sourceURL=webpack://ponglegends/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;