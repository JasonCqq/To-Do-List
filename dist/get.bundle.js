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

/***/ "./src/get.js":
/*!********************!*\
  !*** ./src/get.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"assignID\": () => (/* binding */ assignID),\n/* harmony export */   \"createProject\": () => (/* binding */ createProject),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"currentDiv\": () => (/* binding */ currentDiv),\n/* harmony export */   \"getCurrentID\": () => (/* binding */ getCurrentID),\n/* harmony export */   \"projectArr\": () => (/* binding */ projectArr),\n/* harmony export */   \"pushProject\": () => (/* binding */ pushProject),\n/* harmony export */   \"pushTask\": () => (/* binding */ pushTask),\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask),\n/* harmony export */   \"showProjects\": () => (/* binding */ showProjects),\n/* harmony export */   \"showTasks\": () => (/* binding */ showTasks),\n/* harmony export */   \"taskArr\": () => (/* binding */ taskArr)\n/* harmony export */ });\n//factories?\n\nvar projectArr = [];\nfunction createProject(title, id) {\n  var taskArray = [];\n  return {\n    title: title,\n    id: id,\n    taskArray: taskArray,\n    showProjectArr: function showProjectArr() {\n      return projectArr;\n    },\n    pushTask: function pushTask(task) {\n      taskArray.push(task);\n    }\n  };\n}\nfunction pushProject(object) {\n  projectArr.push(object);\n}\nfunction showProjects() {\n  return projectArr;\n}\nvar taskArr = [];\nfunction pushTask(task) {\n  taskArr.push(task);\n}\nfunction showTasks() {\n  return taskArr;\n}\nfunction removeTask(task) {\n  var index = taskArr.indexOf(task);\n  if (index > -1) {\n    taskArr.splice(index, 1);\n  }\n}\nfunction createTask(title, dueDate, priority, description, notes, taskID, projectID) {\n  projectID = getCurrentID();\n  return {\n    title: title,\n    dueDate: dueDate,\n    priority: priority,\n    description: description,\n    notes: notes,\n    taskID: taskID,\n    projectID: projectID\n  };\n}\nfunction assignID() {\n  return String(Date.now() * Math.random());\n}\nvar id;\nfunction currentDiv(projectID) {\n  id = projectID;\n}\nfunction getCurrentID() {\n  return id;\n}\n\n//# sourceURL=webpack://odin-todolist/./src/get.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/get.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;