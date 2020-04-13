module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/bootstrap-css-only/css/bootstrap.min.css":
/*!****************************************************************!*\
  !*** ../node_modules/bootstrap-css-only/css/bootstrap.min.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/components/design/AboutIcon.svg":
/*!***********************************************!*\
  !*** ./pages/components/design/AboutIcon.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojYWNkMWQ0O29wYWNpdHk6MC44NTtpc29sYXRpb246aXNvbGF0ZTt9LmJ7ZmlsbDojZmZmO30uYiwuYywuZCwuZSwuZntzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6MnB4O30uY3tmaWxsOiNiY2JlYzA7fS5ke2ZpbGw6IzlkMWUyZDt9LmV7ZmlsbDojNTg1OTViO30uZntmaWxsOiNmMWYyZjI7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5BYm91dEljb248L3RpdGxlPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPjxjaXJjbGUgY2xhc3M9ImIiIGN4PSI1MCIgY3k9IjIzLjIzIiByPSIxMC4xNSIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNNDYuNTUsMzMuMzhoNi45MUExMS42NywxMS42NywwLDAsMSw2NS4xMyw0NS4wNnY3Ljg2YTAsMCwwLDAsMSwwLDBIMzQuODdhMCwwLDAsMCwxLDAsMFY0NS4wNkExMS42NywxMS42NywwLDAsMSw0Ni41NSwzMy4zOFoiLz48Y2lyY2xlIGNsYXNzPSJiIiBjeD0iMzAuMDQiIGN5PSIzNy40NyIgcj0iMTAuMTUiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTI2LjU5LDQ3LjYySDMzLjVBMTEuNjcsMTEuNjcsMCwwLDEsNDUuMTcsNTkuMjl2Ny44NmEwLDAsMCwwLDEsMCwwSDE0LjkxYTAsMCwwLDAsMSwwLDBWNTkuMjlBMTEuNjcsMTEuNjcsMCwwLDEsMjYuNTksNDcuNjJaIi8+PGNpcmNsZSBjbGFzcz0iYiIgY3g9IjcwLjA0IiBjeT0iMzcuNDciIHI9IjEwLjE1Ii8+PHBhdGggY2xhc3M9ImUiIGQ9Ik02Ni41OSw0Ny42Mkg3My41QTExLjY3LDExLjY3LDAsMCwxLDg1LjE3LDU5LjI5djcuODZhMCwwLDAsMCwxLDAsMEg1NC45MWEwLDAsMCwwLDEsMCwwVjU5LjI5QTExLjY3LDExLjY3LDAsMCwxLDY2LjU5LDQ3LjYyWiIvPjxjaXJjbGUgY2xhc3M9ImIiIGN4PSI1MCIgY3k9IjUwLjIzIiByPSIxMC4xNSIvPjxwYXRoIGNsYXNzPSJmIiBkPSJNNDYuNTUsNjAuMzhoNi45MUExMS42NywxMS42NywwLDAsMSw2NS4xMyw3Mi4wNnY3Ljg2YTAsMCwwLDAsMSwwLDBIMzQuODdhMCwwLDAsMCwxLDAsMFY3Mi4wNkExMS42NywxMS42NywwLDAsMSw0Ni41NSw2MC4zOFoiLz48L3N2Zz4="

/***/ }),

/***/ "./pages/components/design/App.css":
/*!*****************************************!*\
  !*** ./pages/components/design/App.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/components/design/EventsIcon.svg":
/*!************************************************!*\
  !*** ./pages/components/design/EventsIcon.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojYWNkMWQ0O29wYWNpdHk6MC44NTtpc29sYXRpb246aXNvbGF0ZTt9LmJ7ZmlsbDojMjMxZjIwO30uY3tmaWxsOiM5ZDFlMmQ7fS5ke2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkV2ZW50c0ljb248L3RpdGxlPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPjxwb2x5Z29uIGNsYXNzPSJiIiBwb2ludHM9IjY4LjE2IDcxLjYyIDMyLjE1IDcxLjYyIDQzLjIxIDI4LjM4IDU3LjA0IDI4LjM4IDY4LjE2IDcxLjYyIi8+PHBvbHlnb24gY2xhc3M9ImMiIHBvaW50cz0iMjcuMyA3MS42MiAyMi4xMSA3MS42MiAzOS41NSAyOC4zOCA0MS41OSAyOC4zOCAyNy4zIDcxLjYyIi8+PHBvbHlnb24gY2xhc3M9ImIiIHBvaW50cz0iNzIuNyA3MS42MiA3Ny44OSA3MS42MiA2MC40NSAyOC4zOCA1OC40MSAyOC4zOCA3Mi43IDcxLjYyIi8+PHJlY3QgY2xhc3M9ImQiIHg9IjQ4Ljk4IiB5PSIyOC4zOCIgd2lkdGg9IjIuMjciIGhlaWdodD0iMy41MSIvPjxwb2x5Z29uIGNsYXNzPSJkIiBwb2ludHM9IjUxLjggNDcuMjggNDguNjIgNDcuMjggNDguOTggMzcuMzUgNTEuMjYgMzcuMzUgNTEuOCA0Ny4yOCIvPjxwb2x5Z29uIGNsYXNzPSJkIiBwb2ludHM9IjUyLjIzIDYyLjYgNDguMDYgNjIuNiA0OC42MiA1Mi45NSA1MS44IDUyLjk1IDUyLjIzIDYyLjYiLz48cG9seWdvbiBjbGFzcz0iZCIgcG9pbnRzPSI1Mi42NiA3MS42MiA0Ny42NSA3MS42MiA0OC4wNiA2OC4xMiA1Mi4yMyA2OC4xMiA1Mi42NiA3MS42MiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./pages/components/design/ForecastIcon.svg":
/*!**************************************************!*\
  !*** ./pages/components/design/ForecastIcon.svg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojYWNkMWQ0O29wYWNpdHk6MC44NTtpc29sYXRpb246aXNvbGF0ZTt9LmJ7ZmlsbDojOWQxZTJkO30uYiwuZXtzdHJva2U6IzIzMWYyMDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2Utd2lkdGg6NC4yM3B4O30uY3tmaWxsOiMyMzFmMjA7fS5ke2ZpbGw6I2ZmZjt9LmV7ZmlsbDojYmNiZWMwO308L3N0eWxlPjwvZGVmcz48dGl0bGU+Rm9yZWNhc3RJY29uPC90aXRsZT48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTU2LjA3LDM4YzAtNC40OC0yLjM4LTguMTMtNS4zNi04LjEzSDMzLjc3Yy0yLjgzLDAtNS4zNCwzLjY1LTUuMzQsOC4xM0wyOCw0NC41Mkg1Ni42WiIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNNTYuOSw0MS40NEgyNy44MWE2LDYsMCwwLDAtNiw2VjYxYTIuNSwyLjUsMCwwLDAsMi41LDIuNTFoM0EyLjUxLDIuNTEsMCwwLDAsMjkuODQsNjF2LTIuOUg1NC41MlY2MUEyLjUsMi41LDAsMCwwLDU3LDYzLjUyaDMuMjNBMi41LDIuNSwwLDAsMCw2Mi43NSw2MVY0Ny40QTUuOTMsNS45MywwLDAsMCw1Ni45LDQxLjQ0WiIvPjxjaXJjbGUgY2xhc3M9ImQiIGN4PSIzMC45OSIgY3k9IjQ5LjgyIiByPSIyLjUzIi8+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjU0LjA3IiBjeT0iNDkuODIiIHI9IjIuNTMiLz48cGF0aCBjbGFzcz0iZSIgZD0iTTcxLjQ3LDQ0LjcyYzAtNC41MS0yLjQxLTguMTYtNS4zNi04LjE2aC0xN2MtMi44NSwwLTUuMzYsMy42NS01LjM2LDguMTZsLS40Miw2LjQ4SDcxLjkyWiIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNNzIuMTksNDguMUg0Mi45M2E2LDYsMCwwLDAtNS45Myw2VjY3LjZhMi41LDIuNSwwLDAsMCwyLjUsMi41aDMuMjVhMi41LDIuNSwwLDAsMCwyLjUxLTIuNVY2NC43N0g2OS45MVY2Ny42YTIuNSwyLjUsMCwwLDAsMi41MSwyLjVoMy4yM2EyLjUsMi41LDAsMCwwLDIuNS0yLjVWNTQuMDhBNiw2LDAsMCwwLDcyLjE5LDQ4LjFaIi8+PGNpcmNsZSBjbGFzcz0iZCIgY3g9IjQ2LjM4IiBjeT0iNTYuNTEiIHI9IjIuNTMiLz48Y2lyY2xlIGNsYXNzPSJkIiBjeD0iNjkuNDYiIGN5PSI1Ni41MSIgcj0iMi41MyIvPjwvc3ZnPg=="

/***/ }),

/***/ "./pages/components/design/GraphIcon.svg":
/*!***********************************************!*\
  !*** ./pages/components/design/GraphIcon.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojYWNkMWQ0O29wYWNpdHk6MC44NTtpc29sYXRpb246aXNvbGF0ZTt9LmJ7ZmlsbDojZmZmO30uY3tmaWxsOiM1ODU5NWI7fS5ke2ZpbGw6IzlkMWUyZDt9LmUsLmd7ZmlsbDpub25lO3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30uZXtzdHJva2Utd2lkdGg6MS44NnB4O30uZntmaWxsOiMyMzFmMjA7fS5ne3N0cm9rZS13aWR0aDoxLjgxcHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5HcmFwaEljb248L3RpdGxlPjxyZWN0IGNsYXNzPSJhIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPjxwb2x5Z29uIGNsYXNzPSJiIiBwb2ludHM9IjI5LjcgNDEuOTkgMTUuNTUgMzMuNzMgMTUuNTUgNzIuMTMgMjkuNyA3Mi4xMyAyOS43IDQxLjk5Ii8+PHBhdGggY2xhc3M9ImMiIGQ9Ik00Ny4xMyw0NC4zOWwtNy40NywyLjMyTDMzLDQzLjA4VjcyLjEzSDQ3LjEzWiIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNNjQuNDMsNDYuMmwtNy0zLjY5LTcuMiwxLjg0VjcyLjEzSDY0LjQzWiIvPjxwb2x5Z29uIGNsYXNzPSJiIiBwb2ludHM9IjgxLjMzIDU0Ljk2IDY3LjE4IDQ3Ljg4IDY3LjE4IDcyLjEzIDgxLjMzIDcyLjEzIDgxLjMzIDU0Ljk2Ii8+PHBhdGggY2xhc3M9ImUiIGQ9Ik0xNC4zNywyOC44NiwzOS43OSw0Myw1OCwzOC4xN2wyOS4zNSwxNiIvPjxwb2x5Z29uIGNsYXNzPSJmIiBwb2ludHM9Ijg0LjYzIDU2Ljg5IDkyLjA2IDU2LjcxIDg4LjE4IDUwLjM3IDg0LjYzIDU2Ljg5Ii8+PHBhdGggY2xhc3M9ImciIGQ9Ik05MS4xMSw3OC42NEg4Ljg5VjE3LjM2Ii8+PC9zdmc+"

/***/ }),

/***/ "./pages/components/design/MapIcon.svg":
/*!*********************************************!*\
  !*** ./pages/components/design/MapIcon.svg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojYWNkMWQ0O29wYWNpdHk6MC44NTt9LmJ7ZmlsbDojYmNiZWMwO30uYywuZntmaWxsOiNmZmY7fS5jLC5lLC5me3N0cm9rZTojZmZmO30uYywuZCwuZSwuZntzdHJva2UtbWl0ZXJsaW1pdDoxMDt9LmN7c3Ryb2tlLXdpZHRoOjAuNDVweDt9LmR7ZmlsbDpub25lO3N0cm9rZTojMjMxZjIwO30uZCwuZXtzdHJva2Utd2lkdGg6MnB4O30uZXtmaWxsOiM5ZDFlMmQ7fS5me3N0cm9rZS13aWR0aDoxLjQ2cHg7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5NYXBJY29uVGVzdDwvdGl0bGU+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+PHBvbHlnb24gY2xhc3M9ImIiIHBvaW50cz0iODcuMyA4Ni4yOCAxMi43IDg2LjI4IDMxLjM1IDQ4Ljk4IDY4LjY1IDQ4Ljk4IDg3LjMgODYuMjgiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTI3LjYsNTYuNDlsOS44LDE3LjEyLDE4LjA3LTMuODNxLTQuNjYtMTAuMjQtOS4zNS0yMC40OWw5LjUyLS4xMSw4LjcyLDE5LjE1LDEyLjU3LTIuNzksMy45NSw3LjktNDAuNSw5LDEuODQsMy45LTkuODctLjIzTDIyLjMyLDY3WiIvPjxwb2x5Z29uIGNsYXNzPSJkIiBwb2ludHM9Ijg3LjMgODYuMjggMTIuNyA4Ni4yOCAzMS4zNSA0OC45OCA2OC42NSA0OC45OCA4Ny4zIDg2LjI4Ii8+PHBhdGggY2xhc3M9ImUiIGQ9Ik02NS40MSwyMWMtNC4yNC03LjIxLTEyLjkxLTgtMTMuNzQtOC4xMS0xLjM0LS4xMS04LjM1LS41MS0xMy43Myw0LjczYTE4LjI4LDE4LjI4LDAsMCwwLTUuMTgsMTIuNjFDMzIuNiwzNSwzNC4yMSwzOC4yLDQwLDQ4LjQ5YzQsNy4yMyw3LjUyLDEzLjI5LDEwLjEzLDE3Ljc5LDIuMTktMy42NCw1LjM4LTksOS4yMy0xNS41NCwxLjEyLTEuODksMi4wOC0zLjU0LDIuOTEtNSwuMTYtLjI5LjMyLS41OC40OC0uODUuNzItMS4yOSwxLjMzLTIuNDIsMS44NS0zLjQ1LjE4LS4zNi4zNS0uNy41LTFhMjEuNDgsMjEuNDgsMCwwLDAsMi4xNC03LjIzQzY3LjU2LDMwLjIxLDY4LjA5LDI1LjU3LDY1LjQxLDIxWiIvPjxwYXRoIGNsYXNzPSJmIiBkPSJNNTMuNzgsMzkuNDVhMS4yNiwxLjI2LDAsMCwxLS4yNi4xM2wtLjA3LDAtLjE2LjA3LS4xNi4wNy0uMjQuMDktLjE1LDAtLjMxLjEtLjM1LjA5LS4xNywwLS4xOSwwLS4xNywwaDBsLS4zMywwaDBsLS4xNywwaC0uMTNsLS4zMywwaC0uNDNhOCw4LDAsMSwxLDgtOHYuMjlzMCwuMDgsMCwuMTJhMi40NSwyLjQ1LDAsMCwxLDAsLjI3LjYyLjYyLDAsMCwxLDAsLjEzLDcuMzYsNy4zNiwwLDAsMS0uMTUuOTQuOTQuOTQsMCwwLDEsMCwuMTYsMy43NCwzLjc0LDAsMCwxLS4xMi40NSwxLjg3LDEuODcsMCwwLDEtLjA3LjIyLDEuMzQsMS4zNCwwLDAsMS0uMDcuMThsLS4wNi4xOSwwLDBhMi40NCwyLjQ0LDAsMCwxLS4xLjI0LDIuNTYsMi41NiwwLDAsMS0uMTEuMjRzMCwwLDAsMGwtLjA3LjE1LS4xMS4yLS4wOS4xN2EyLjM5LDIuMzksMCwwLDEtLjEzLjIxLDkuMjEsOS4yMSwwLDAsMS0uNjQuOWwtLjEzLjE1LS4xMy4xNC0uMjYuMjgtLjI4LjI3LS4xNS4xMmEuODYuODYsMCwwLDEtLjE0LjEzbC0uMTIuMDktLjE4LjE0aDBsLS4yNi4xOS0uMDcsMC0uMTEuMDctLjEuMDZBNiw2LDAsMCwxLDUzLjc4LDM5LjQ1WiIvPjwvc3ZnPg=="

/***/ }),

/***/ "./pages/components/design/NewsIcon.svg":
/*!**********************************************!*\
  !*** ./pages/components/design/NewsIcon.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojYWNkMWQ0O29wYWNpdHk6MC44NTtpc29sYXRpb246aXNvbGF0ZTt9LmJ7ZmlsbDojYmNiZWMwO30uYywuZHtmaWxsOm5vbmU7fS5jLC5kLC5le3N0cm9rZTojMjMxZjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30uY3tzdHJva2Utd2lkdGg6MnB4O30uZHtzdHJva2Utd2lkdGg6MS45NHB4O30uZXtmaWxsOiMyMzFmMjA7c3Ryb2tlLXdpZHRoOjEuODVweDt9LmZ7ZmlsbDojZmZmO30uZ3tmaWxsOiM5ZDFlMmQ7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5OZXdzSWNvbjwvdGl0bGU+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik03NS4zMiwxOUg0MS41M0E2LjUxLDYuNTEsMCwwLDAsMzUsMjUuNTNWMzUuNjhIMjIuMjVhNC4wOCw0LjA4LDAsMCwwLTQuMDgsNC4wOFY3NGE3LDcsMCwwLDAsNyw3SDI5YTYuMDUsNi4wNSwwLDAsMCw2LjA1LTZ2Nmg0MC4zYTYuNTEsNi41MSwwLDAsMCw2LjUxLTYuNTFWMjUuNTNBNi41MSw2LjUxLDAsMCwwLDc1LjMyLDE5WiIvPjxwYXRoIGNsYXNzPSJjIiBkPSJNMzUuMzQsODAuMzhoNDAuM2E2LjUxLDYuNTEsMCwwLDAsNi41MS02LjUxVjI0Ljk0YTYuNTEsNi41MSwwLDAsMC02LjUxLTYuNTFINDEuODVhNi41MSw2LjUxLDAsMCwwLTYuNTEsNi41MVY3NC4zMyIvPjxwYXRoIGNsYXNzPSJkIiBkPSJNMjIuNTcsMzUuMDlIMzUuMzRhMCwwLDAsMCwxLDAsMFY3NC4zM2E2LjA1LDYuMDUsMCwwLDEtNi4wNSw2LjA1SDI1LjUxYTcsNywwLDAsMS03LTdWMzkuMTdBNC4wOSw0LjA5LDAsMCwxLDIyLjU3LDM1LjA5WiIvPjxyZWN0IGNsYXNzPSJlIiB4PSIyNC43IiB5PSIzNS4wOSIgd2lkdGg9IjEwLjY0IiBoZWlnaHQ9IjI4LjI2Ii8+PHBhdGggY2xhc3M9ImMiIGQ9Ik0yNy43Nyw4MC4zOEg0NyIvPjxyZWN0IGNsYXNzPSJmIiB4PSI1OSIgeT0iMzAuNjgiIHdpZHRoPSIxOC4zMiIgaGVpZ2h0PSIxOC4zMiIgcng9IjIuOTEiLz48cmVjdCBjbGFzcz0iZyIgeD0iNDAuOCIgeT0iMzEuODMiIHdpZHRoPSIxNS40OSIgaGVpZ2h0PSIzLjE5IiByeD0iMS41NSIvPjxyZWN0IGNsYXNzPSJmIiB4PSI0MC44IiB5PSIzOC4yMiIgd2lkdGg9IjE1LjQ5IiBoZWlnaHQ9IjMuMTkiIHJ4PSIxLjU1Ii8+PHJlY3QgY2xhc3M9ImYiIHg9IjQwLjgiIHk9IjQ0LjYyIiB3aWR0aD0iMTUuNDkiIGhlaWdodD0iMy4xOSIgcng9IjEuNTUiLz48cmVjdCBjbGFzcz0iZiIgeD0iNDAuNjgiIHk9IjUzLjExIiB3aWR0aD0iMzYuNjQiIGhlaWdodD0iMy4xOSIgcng9IjEuNTciLz48cmVjdCBjbGFzcz0iZiIgeD0iNDAuNjgiIHk9IjU5LjExIiB3aWR0aD0iMzYuNjQiIGhlaWdodD0iMy4xOSIgcng9IjEuNTciLz48cmVjdCBjbGFzcz0iZiIgeD0iNDAuNjgiIHk9IjY1LjU0IiB3aWR0aD0iMzYuNjQiIGhlaWdodD0iMy4xOSIgcng9IjEuNTciLz48L3N2Zz4="

/***/ }),

/***/ "./pages/components/design/VarnoDomovLogo.svg":
/*!****************************************************!*\
  !*** ./pages/components/design/VarnoDomovLogo.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQ3LjE5IDI0My41OSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9LmJ7ZmlsbDpub25lO30uY3tmaWxsOnVybCgjYSk7fS5ke2ZpbGw6IzBjNDU2MDt9LmV7ZmlsbDp1cmwoI2IpO30uZntmaWxsOiM5ZDFlMmQ7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMTUyLjI3IiB5MT0iMTI3LjMxIiB4Mj0iMTUyLjI3IiB5Mj0iLTI0LjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwYmE3YjUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNhYmRmZjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjIwNS4zNyIgeTE9IjE4NS41NSIgeDI9IjIwNS4zNyIgeTI9IjUxLjYzIiB4bGluazpocmVmPSIjYSIvPjwvZGVmcz48dGl0bGU+VmFybm9Eb21vdkxvZ288L3RpdGxlPjxwYXRoIGNsYXNzPSJhIiBkPSJNMzcuMjEsMTU2LjcxYy4yMywxLjQxLjU3LDIuNTEsMi44MSw4LjcsMS41NSw0LjI5LDIuODYsNy44NiwzLjgsMTAuMzdsODMuNjItMjkuMzgsMTEyLTI1LjgsMjMuODEtMjkuMjEtMzUuODEtMTYuMi0yOS40MS04LjQxLTEzNS40Myw1N0w0MCwxNDIuNEMzNi42OSwxNDksMzYuNzUsMTUzLjgxLDM3LjIxLDE1Ni43MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi45MSAtNS4xKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTg2LjQsMjQ1LjdhMjA2LjA5LDIwNi4wOSwwLDAsMS00My43OCwyLjgsODAuNyw4MC43LDAsMCwxLTIwLjMyLTExYy02LjU3LTQuODktMTMuODQtMTAuMy0xOC42LTIwLjRhNDUuMjYsNDUuMjYsMCwwLDEtNC4yLTIxLjYxLDQzLjU0LDQzLjU0LDAsMCwxLDUuNi0xOS40YzYuNzgtMTEuMzYsMTguNDctMTUuNywzMC0xOS44MSwzOC44OS0xMy44NSw1OC4zNC0yMC43OCw1OC43NC0yMC45aDBjMzYuMjEtMTAuODYsNTIuMTQtMTcuNzQsNTYuNDItMjAuMiwxNy4wOS05Ljg0LDE3LjQzLTE1LjI1LDE3LjMzLTE3LS4yMS00LTMuNy03LjEyLTUuODYtOS4wNy01LjEzLTQuNjEtMTAuMjYtNS43Ny0xNy4zNC03LjczLTEyLjgtMy41NSwxLS41Ni0zNi0xMS40N2wtMTEuNTQtMy4zN2ExMiwxMiwwLDAsMSwzLjYtNy40YzMuNTQtMy4yMyw5LjExLTMuODQsMTQuMDctMS41LDYuNDEtLjExLDIxLjM4LjE4LDM1LjM1LDUuOWE0OS41Miw0OS41MiwwLDAsMSwxNC44LDksMzcuMzUsMzcuMzUsMCwwLDEsNi45NSw4LjI1YzEsMS41NiwyLjc2LDQuNzYsNC42NSwxMS43NWE5MS4yLDkxLjIsMCwwLDEsMywxOS4xOWMtMy45MywxMi43NC0xMiwzMi4xOS0yOS44NCw0Ny0yOSwyNC4xMi02MS40MiwxNy40LTcyLDM4LjIxQzE3My40NywyMDQuODMsMTcxLjI5LDIxOSwxODYuNCwyNDUuN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi45MSAtNS4xKSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjAyLjE0LDcyLjgyYy0uMy41NC0uNjEsMS4wOS0uOTQsMS42NWwtLjYxLS4yYy03LjkxLTIuNjMtMTQuNDYtNC43Ni0xOC44Ni02LjJsLTItLjY0LDIuNS41NEMxODcuMiw2OS4wNiwxOTQuMyw3MC43LDIwMi4xNCw3Mi44MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi45MSAtNS4xKSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjA1LjczLDY2LjEzYy01LS40OS0xMC4yNi0uOTEtMTUuNzktMS4yNC0zLjI2LS4xOS02LjYxLS4zNi0xMC0uNDksMy4xNS0uMjUsNy4wNy0uNDgsMTEuNi0uNTgsMS4yOSwwLDIuNjIsMCw0LDBzNS4yNywwLDExLjIyLjM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuOTEgLTUuMSkiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTIwMS4yLDc0LjQ3YzE4LjA2LDYuMTEsNTQsMTcuMjEsMjcuMjksMzMuMDktMTQuMDUsOC4zMy0zOS45LDkuNzctNTUuNzUsMTIuNTMtNDUsNy44NC05OS4zMSw0LjMxLTEzNS41MywzNi42MkMtLjE0LDExLjI3LDIxNi44LTU4Ljg2LDI3MS42Miw4MC44NCwyNTMuMDYsNjcuMiwyMjksNjUuNDEsMjA2LjcxLDY0LjExWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyLjkxIC01LjEpIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0yNzUuMTYsOTkuMmMtLjc4LDM0LjgxLTkwLjMzLDQ0LjQ2LTExNC4xMSw1Mi41OC01NCwxOC40Mi03MC4wNiw2MS0xOC40Myw5Ni43MmExMjMuNDgsMTIzLjQ4LDAsMCwxLTk4LjgtNzIuNzJjMzIuMTYtMzcuMjksODcuNS0zNi43MSwxMzIuMDYtNDcuMiwxNy42OC00LjE2LDU2LjU5LTguMTgsNjguNDEtMjQsMTQuNjMtMTkuNTMtMjYuMzMtMjguNS00MS40OS0zMywuNzktMS41MSwxLjY0LTMsMi41My00LjQ0QzIyMS44Myw2OC4yNywyNzUuNzQsNzIuODgsMjc1LjE2LDk5LjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuOTEgLTUuMSkiLz48cGF0aCBjbGFzcz0iZSIgZD0iTTI4MC4xMSwxMjUuOUExMjMuNDQsMTIzLjQ0LDAsMCwxLDE4Ni40LDI0NS43Yy00MC4xMy0xNS4xNS04Ni40MS00OC42NC0yOC41Mi03Ny4xNkMxOTUuNSwxNTAsMjUzLjA5LDE0Ny45LDI3OS4zMSwxMTEuNzhBMTI0LjM3LDEyNC4zNywwLDAsMSwyODAuMTEsMTI1LjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuOTEgLTUuMSkiLz48cGF0aCBjbGFzcz0iZiIgZD0iTTIwOCwyNi40OGMtOC4yNC0xNC0yNS4wNy0xNS42MS0yNi42Ny0xNS43My0yLjYtLjIxLTE2LjIyLTEtMjYuNjYsOS4xOC05LjM0LDkuMS05Ljk0LDIwLjg4LTEwLjA2LDI0LjQ4LS4zMiw5LjIsMi44MiwxNS40MywxNCwzNS40MSw3Ljg1LDE0LDE0LjYsMjUuNzksMTkuNjgsMzQuNTQsNC4yNS03LjA4LDEwLjQ1LTE3LjQ3LDE3LjkyLTMwLjE3LDIuMTYtMy42OCw0LTYuODcsNS42NC05LjdsLjkzLTEuNjVjMS40MS0yLjQ5LDIuNTktNC42OCwzLjYtNi42OS4zNS0uNjkuNjctMS4zNiwxLTJhNDIsNDIsMCwwLDAsNC4xNS0xNEMyMTIuMTgsNDQuMzMsMjEzLjIxLDM1LjMzLDIwOCwyNi40OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi45MSAtNS4xKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTg3LjA1LDYxLjgyYy0uMjEuMTEtLjQyLjIyLS42My4zMWwtLjE3LjA4LS4zOC4xNy0uMzkuMTZjLS4xOC4wNy0uMzcuMTUtLjU2LjIxbC0uMzUuMTNjLS4yNC4wOC0uNDguMTYtLjc0LjIzcy0uNTUuMTYtLjg0LjI0bC0uMzkuMDktLjQ2LjEtLjQxLjA4aDBjLS4yNywwLS41NC4wOS0uODEuMTJoMGwtLjQxLDAtLjMxLDBjLS4yNiwwLS41MS4wNS0uNzguMDZzLS42OCwwLTEsMGExOS4xNSwxOS4xNSwwLDEsMSwxOS4xNC0xOS4xNWMwLC4yLDAsLjM5LDAsLjU5di4xYzAsLjEsMCwuMiwwLC4zczAsLjQyLDAsLjYzbDAsLjMxQTE4Ljg0LDE4Ljg0LDAsMCwxLDE5Nyw0OWMwLC4xMi0uMDUuMjUtLjA4LjM3LS4wOS4zNy0uMTkuNzMtLjMsMS4wOSwwLC4xNy0uMTEuMzQtLjE2LjVzLS4xLjMtLjE2LjQ0YTMuMzQsMy4zNCwwLDAsMS0uMTcuNDRsMCwuMDljLS4wNy4xOS0uMTUuMzgtLjIzLjU2bC0uMjcuNTgsMCwwYTMuNzgsMy43OCwwLDAsMS0uMTcuMzVjLS4wOC4xNi0uMTYuMzItLjI1LjQ4YTQuMSw0LjEsMCwwLDEtLjIzLjRjLS4wOS4xNy0uMTkuMzQtLjI5LjVBMTkuMTIsMTkuMTIsMCwwLDEsMTkzLjExLDU3Yy0uMDkuMTItLjE5LjIzLS4zLjM1YTMuMTcsMy4xNywwLDAsMS0uMy4zNGMtLjIuMjItLjQxLjQ1LS42My42NnMtLjQ0LjQ0LS42OC42NWwtLjM0LjMtLjM1LjI5YTMuMTEsMy4xMSwwLDAsMS0uMjguMjNsLS40My4zNGgwYTcuMTcsNy4xNywwLDAsMS0uNjMuNDUsMS43NywxLjc3LDAsMCwxLS4xNy4xMmwtLjI2LjE3LS4yMy4xNEExNC43MiwxNC43MiwwLDAsMSwxODcuMDUsNjEuODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuOTEgLTUuMSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTI3NC40NywyMTEuNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi45MSAtNS4xKSIvPjwvc3ZnPg=="

/***/ }),

/***/ "./pages/components/layout/Footer2.js":
/*!********************************************!*\
  !*** ./pages/components/layout/Footer2.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer2; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _design_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../design/App.css */ "./pages/components/design/App.css");
/* harmony import */ var _design_App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_design_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Footer2 extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "footer"
    }, __jsx("div", null, __jsx("h5", null, "Vir podatkov: ", __jsx("a", {
      href: "https://www.avp-rs.si/"
    }, "avp-rs.si"))), __jsx("div", {
      className: "footP"
    }, __jsx("p", null, "Kontakt: info@varno-domov.si")));
  }

}

/***/ }),

/***/ "./pages/components/layout/Header.js":
/*!*******************************************!*\
  !*** ./pages/components/layout/Header.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _design_VarnoDomovLogo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../design/VarnoDomovLogo.svg */ "./pages/components/design/VarnoDomovLogo.svg");
/* harmony import */ var _design_VarnoDomovLogo_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_design_VarnoDomovLogo_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _design_App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design/App.css */ "./pages/components/design/App.css");
/* harmony import */ var _design_App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_design_App_css__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Header extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "bcg"
    }, __jsx("h2", null, __jsx("span", {
      className: "logo-bold"
    }, "VARNO"), " DOMOV"), __jsx("img", {
      className: "logo",
      src: _design_VarnoDomovLogo_svg__WEBPACK_IMPORTED_MODULE_1___default.a,
      alt: "Logo"
    }));
  }

}

/***/ }),

/***/ "./pages/components/layout/Layout.js":
/*!*******************************************!*\
  !*** ./pages/components/layout/Layout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _design_App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../design/App.css */ "./pages/components/design/App.css");
/* harmony import */ var _design_App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_design_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./pages/components/layout/Header.js");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation */ "./pages/components/layout/Navigation.js");
/* harmony import */ var _Footer2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Footer2 */ "./pages/components/layout/Footer2.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/Layout.js






const Layout = props => {
  return __jsx("div", null, __jsx(_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), props.children, __jsx(_Footer2__WEBPACK_IMPORTED_MODULE_4__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/components/layout/Navigation.js":
/*!***********************************************!*\
  !*** ./pages/components/layout/Navigation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _design_App_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../design/App.css */ "./pages/components/design/App.css");
/* harmony import */ var _design_App_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_design_App_css__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Navigation = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    color: "dark",
    dark: true,
    expand: "md",
    className: "nav-bar"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavbarToggler"], {
    onClick: toggle
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    expand: "sm",
    navbar: true
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/"
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosHome"], null), " Domov"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/zemljevid"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaMapMarkerAlt"], null), "Zemljevid"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/statistics"
  }, __jsx(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosStats"], null), " Statistika"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/novice"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaNewspaper"], null), " Novice"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/stanjenacestah"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaRoad"], null), " Stanje na cestah"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/napovedi"
  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaCar"], null), " Napovedi prometa"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
    href: "/about"
  }, __jsx(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdPerson"], null), " O nas"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);
/*
<div className="nav-div">
                <Navbar expand="sm" className="nav-bar">
                        <NavLink href="/"><IoIosHome/> Domov </NavLink>
                        <NavLink href="/zemljevid"><FaMapMarkerAlt/>Zemljevid </NavLink>
                        <NavLink href="/statistika"> <IoIosStats/> Statistika</NavLink>
                        <NavLink href="/prometnenovice"> <FaNewspaper/> Novice</NavLink>
                        <NavLink href="/stanjenacestah"> <FaRoad/> Stanje na cestah</NavLink>
                        <NavLink href="/napovedi"> <FaCar/> Napovedi prometa</NavLink>
                        <NavLink href="/onas"><MdPerson/> O nas</NavLink>
                </Navbar>
            </div>*/

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_design_NewsIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/design/NewsIcon.svg */ "./pages/components/design/NewsIcon.svg");
/* harmony import */ var _components_design_NewsIcon_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_design_NewsIcon_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_design_EventsIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/design/EventsIcon.svg */ "./pages/components/design/EventsIcon.svg");
/* harmony import */ var _components_design_EventsIcon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_design_EventsIcon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_design_ForecastIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/design/ForecastIcon.svg */ "./pages/components/design/ForecastIcon.svg");
/* harmony import */ var _components_design_ForecastIcon_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_design_ForecastIcon_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_design_MapIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/design/MapIcon.svg */ "./pages/components/design/MapIcon.svg");
/* harmony import */ var _components_design_MapIcon_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_design_MapIcon_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_design_GraphIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/design/GraphIcon.svg */ "./pages/components/design/GraphIcon.svg");
/* harmony import */ var _components_design_GraphIcon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_design_GraphIcon_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_design_AboutIcon_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/design/AboutIcon.svg */ "./pages/components/design/AboutIcon.svg");
/* harmony import */ var _components_design_AboutIcon_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_design_AboutIcon_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "../node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_design_App_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/design/App.css */ "./pages/components/design/App.css");
/* harmony import */ var _components_design_App_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_design_App_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/layout/Layout */ "./pages/components/layout/Layout.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function FrontPage(props) {
  const {
    classes
  } = props;
  return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], null, __jsx("div", null, __jsx("section", {
    class: "DescriptionClass"
  }, __jsx("div", {
    class: "DescriptionContent"
  }, __jsx("p", null, __jsx("span", null, "Vse najnovej\u0161e preverjene prometne informacije na enem mestu. \xA0"), "Predvidevamo\xA0", __jsx("b", null, "kriti\u010Dne regije"), " za mo\u017Enost nesre\u010De in ozave\u0161\u010Damo voznike, re\u0161evalne slu\u017Ebe in tiste, ki se jim mudi, kje pove\u010Dati potrpljenje in zmanj\u0161ati hitrost.", __jsx("a", {
    className: "descLink",
    href: "/zemljevid"
  }, "Na Zemljevid ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaAngleRight"], null))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "contentContainer"
  }, __jsx("h1", {
    align: "center",
    className: "Slogan"
  }, "Skupaj za varno pot domov"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "contentContainer"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    className: "fpCol"
  }, __jsx("img", {
    className: "imageFrontPage",
    src: _components_design_MapIcon_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "imageFrontPage"
  }), __jsx("h5", null, __jsx("b", null, "Zemljevid")), __jsx("p", null, "Prikaz kriti\u010Dnih odsekov na slovenskih cestah, z mo\u017Enostjo prilagoditve parametrov na trenutne razmere cest.", " "), __jsx("a", {
    href: "/zemljevid"
  }, "Preberi ve\u010D ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaAngleRight"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    className: "fpCol"
  }, __jsx("img", {
    className: "imageFrontPage",
    src: _components_design_GraphIcon_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "imageFrontPage"
  }), __jsx("h5", null, __jsx("b", null, "Statistika")), __jsx("p", null, "Statisti\u010Dno predelani podatki o prometnih nesre\u010Dah od leta 1994 naprej. Prikaz \u0161tevila prometnih nesre\u010D glede na razli\u010Dne filtre."), __jsx("a", {
    href: "/statistika"
  }, "Preberi ve\u010D ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaAngleRight"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    className: "fpCol"
  }, __jsx("img", {
    className: "imageFrontPage",
    src: _components_design_AboutIcon_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "imageFrontPage"
  }), __jsx("h5", null, __jsx("b", null, "O projektu")), __jsx("p", null, " ", "Zgodba o ideji, viziji, razvoju projekta in kdo stoji za njim."), __jsx("a", {
    href: "/onas"
  }, "Preberi ve\u010D ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaAngleRight"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    className: "fpCol"
  }, __jsx("img", {
    className: "imageFrontPage",
    src: _components_design_NewsIcon_svg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "imageFrontPage"
  }), __jsx("h5", null, __jsx("b", null, "Novice")), __jsx("p", null, "Zadnje aktualne prometne novice. "), __jsx("a", {
    href: "/prometnenovice"
  }, "Preberi ve\u010D ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaAngleRight"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    className: "fpCol"
  }, __jsx("img", {
    className: "imageFrontPage",
    src: _components_design_EventsIcon_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "imageFrontPage"
  }), __jsx("h5", null, __jsx("b", null, "Stanje na cestah")), __jsx("p", null, "Prometna poro\u010Dila, stanja na mejnihi prehodih in aktualni dogodki na cestah.", " "), __jsx("a", {
    href: "/stanjenacestah"
  }, "Preberi ve\u010D ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaAngleRight"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4,
    className: "fpCol"
  }, __jsx("img", {
    className: "imageFrontPage",
    src: _components_design_ForecastIcon_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "imageFrontPage"
  }), __jsx("h5", null, __jsx("b", null, "Prometna napoved")), __jsx("p", null, "Napovedi prometa za prihajajo\u010De dni, posebnosti na cesti, dogodki in ostale pomembne informacije.", " "), __jsx("a", {
    href: "/napovedi"
  }, "Preberi ve\u010D ", __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_8__["FaAngleRight"], null)))), __jsx("div", {
    className: "paragraphBelow"
  }, __jsx("p", null, __jsx("span", null, "Zdru\u017Eujemo podatke, pridobljene s\xA0", __jsx("b", null, "kredibilnih dr\u017Eavnih ustanov"), "in jim dodajamo pomen.\xA0"), "\xA0 Podatki prihajajo z\xA0", __jsx("b", null, "Agencije za Varnost v prometu"), "Slovenije in spletnih mest\xA0", __jsx("b", null, "DARS"), ". Vam ponujamo prosto\xA0", __jsx("b", null, "brskanje"), " po teh\xA0", __jsx("b", null, "podatkih"), ", saj vse shranjujemo v na\u0161o bazo podatkov v namene arhiviranja. Podatke o samih nesre\u010Dah, zbrane z AVP, pa urejamo v podobo zemljevida kriti\u010Dnih to\u010Dk , ki izvirajo vse od leta 1994."), __jsx("br", null)))));
}

/* harmony default export */ __webpack_exports__["default"] = (FrontPage);

/***/ }),

/***/ 8:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pinagornik/Documents/faks/praktikumSSV/client/react-SSR-app/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map