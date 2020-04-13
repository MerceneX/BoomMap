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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/config/keys.js":
/*!*****************************!*\
  !*** ../src/config/keys.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	server: "http://localhost:5000"
	//server: "https://varno-domov.si"
};


/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/components/design/App.css":
/*!*****************************************!*\
  !*** ./pages/components/design/App.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/components/design/VarnoDomovLogo.svg":
/*!****************************************************!*\
  !*** ./pages/components/design/VarnoDomovLogo.svg ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjQ3LjE5IDI0My41OSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2ZmZjt9LmJ7ZmlsbDpub25lO30uY3tmaWxsOnVybCgjYSk7fS5ke2ZpbGw6IzBjNDU2MDt9LmV7ZmlsbDp1cmwoI2IpO30uZntmaWxsOiM5ZDFlMmQ7fTwvc3R5bGU+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMTUyLjI3IiB5MT0iMTI3LjMxIiB4Mj0iMTUyLjI3IiB5Mj0iLTI0LjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwYmE3YjUiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNhYmRmZjEiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgeDE9IjIwNS4zNyIgeTE9IjE4NS41NSIgeDI9IjIwNS4zNyIgeTI9IjUxLjYzIiB4bGluazpocmVmPSIjYSIvPjwvZGVmcz48dGl0bGU+VmFybm9Eb21vdkxvZ288L3RpdGxlPjxwYXRoIGNsYXNzPSJhIiBkPSJNMzcuMjEsMTU2LjcxYy4yMywxLjQxLjU3LDIuNTEsMi44MSw4LjcsMS41NSw0LjI5LDIuODYsNy44NiwzLjgsMTAuMzdsODMuNjItMjkuMzgsMTEyLTI1LjgsMjMuODEtMjkuMjEtMzUuODEtMTYuMi0yOS40MS04LjQxLTEzNS40Myw1N0w0MCwxNDIuNEMzNi42OSwxNDksMzYuNzUsMTUzLjgxLDM3LjIxLDE1Ni43MVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi45MSAtNS4xKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTg2LjQsMjQ1LjdhMjA2LjA5LDIwNi4wOSwwLDAsMS00My43OCwyLjgsODAuNyw4MC43LDAsMCwxLTIwLjMyLTExYy02LjU3LTQuODktMTMuODQtMTAuMy0xOC42LTIwLjRhNDUuMjYsNDUuMjYsMCwwLDEtNC4yLTIxLjYxLDQzLjU0LDQzLjU0LDAsMCwxLDUuNi0xOS40YzYuNzgtMTEuMzYsMTguNDctMTUuNywzMC0xOS44MSwzOC44OS0xMy44NSw1OC4zNC0yMC43OCw1OC43NC0yMC45aDBjMzYuMjEtMTAuODYsNTIuMTQtMTcuNzQsNTYuNDItMjAuMiwxNy4wOS05Ljg0LDE3LjQzLTE1LjI1LDE3LjMzLTE3LS4yMS00LTMuNy03LjEyLTUuODYtOS4wNy01LjEzLTQuNjEtMTAuMjYtNS43Ny0xNy4zNC03LjczLTEyLjgtMy41NSwxLS41Ni0zNi0xMS40N2wtMTEuNTQtMy4zN2ExMiwxMiwwLDAsMSwzLjYtNy40YzMuNTQtMy4yMyw5LjExLTMuODQsMTQuMDctMS41LDYuNDEtLjExLDIxLjM4LjE4LDM1LjM1LDUuOWE0OS41Miw0OS41MiwwLDAsMSwxNC44LDksMzcuMzUsMzcuMzUsMCwwLDEsNi45NSw4LjI1YzEsMS41NiwyLjc2LDQuNzYsNC42NSwxMS43NWE5MS4yLDkxLjIsMCwwLDEsMywxOS4xOWMtMy45MywxMi43NC0xMiwzMi4xOS0yOS44NCw0Ny0yOSwyNC4xMi02MS40MiwxNy40LTcyLDM4LjIxQzE3My40NywyMDQuODMsMTcxLjI5LDIxOSwxODYuNCwyNDUuN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi45MSAtNS4xKSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjAyLjE0LDcyLjgyYy0uMy41NC0uNjEsMS4wOS0uOTQsMS42NWwtLjYxLS4yYy03LjkxLTIuNjMtMTQuNDYtNC43Ni0xOC44Ni02LjJsLTItLjY0LDIuNS41NEMxODcuMiw2OS4wNiwxOTQuMyw3MC43LDIwMi4xNCw3Mi44MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi45MSAtNS4xKSIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjA1LjczLDY2LjEzYy01LS40OS0xMC4yNi0uOTEtMTUuNzktMS4yNC0zLjI2LS4xOS02LjYxLS4zNi0xMC0uNDksMy4xNS0uMjUsNy4wNy0uNDgsMTEuNi0uNTgsMS4yOSwwLDIuNjIsMCw0LDBzNS4yNywwLDExLjIyLjM0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuOTEgLTUuMSkiLz48cGF0aCBjbGFzcz0iYyIgZD0iTTIwMS4yLDc0LjQ3YzE4LjA2LDYuMTEsNTQsMTcuMjEsMjcuMjksMzMuMDktMTQuMDUsOC4zMy0zOS45LDkuNzctNTUuNzUsMTIuNTMtNDUsNy44NC05OS4zMSw0LjMxLTEzNS41MywzNi42MkMtLjE0LDExLjI3LDIxNi44LTU4Ljg2LDI3MS42Miw4MC44NCwyNTMuMDYsNjcuMiwyMjksNjUuNDEsMjA2LjcxLDY0LjExWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMyLjkxIC01LjEpIi8+PHBhdGggY2xhc3M9ImQiIGQ9Ik0yNzUuMTYsOTkuMmMtLjc4LDM0LjgxLTkwLjMzLDQ0LjQ2LTExNC4xMSw1Mi41OC01NCwxOC40Mi03MC4wNiw2MS0xOC40Myw5Ni43MmExMjMuNDgsMTIzLjQ4LDAsMCwxLTk4LjgtNzIuNzJjMzIuMTYtMzcuMjksODcuNS0zNi43MSwxMzIuMDYtNDcuMiwxNy42OC00LjE2LDU2LjU5LTguMTgsNjguNDEtMjQsMTQuNjMtMTkuNTMtMjYuMzMtMjguNS00MS40OS0zMywuNzktMS41MSwxLjY0LTMsMi41My00LjQ0QzIyMS44Myw2OC4yNywyNzUuNzQsNzIuODgsMjc1LjE2LDk5LjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuOTEgLTUuMSkiLz48cGF0aCBjbGFzcz0iZSIgZD0iTTI4MC4xMSwxMjUuOUExMjMuNDQsMTIzLjQ0LDAsMCwxLDE4Ni40LDI0NS43Yy00MC4xMy0xNS4xNS04Ni40MS00OC42NC0yOC41Mi03Ny4xNkMxOTUuNSwxNTAsMjUzLjA5LDE0Ny45LDI3OS4zMSwxMTEuNzhBMTI0LjM3LDEyNC4zNywwLDAsMSwyODAuMTEsMTI1LjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuOTEgLTUuMSkiLz48cGF0aCBjbGFzcz0iZiIgZD0iTTIwOCwyNi40OGMtOC4yNC0xNC0yNS4wNy0xNS42MS0yNi42Ny0xNS43My0yLjYtLjIxLTE2LjIyLTEtMjYuNjYsOS4xOC05LjM0LDkuMS05Ljk0LDIwLjg4LTEwLjA2LDI0LjQ4LS4zMiw5LjIsMi44MiwxNS40MywxNCwzNS40MSw3Ljg1LDE0LDE0LjYsMjUuNzksMTkuNjgsMzQuNTQsNC4yNS03LjA4LDEwLjQ1LTE3LjQ3LDE3LjkyLTMwLjE3LDIuMTYtMy42OCw0LTYuODcsNS42NC05LjdsLjkzLTEuNjVjMS40MS0yLjQ5LDIuNTktNC42OCwzLjYtNi42OS4zNS0uNjkuNjctMS4zNiwxLTJhNDIsNDIsMCwwLDAsNC4xNS0xNEMyMTIuMTgsNDQuMzMsMjEzLjIxLDM1LjMzLDIwOCwyNi40OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi45MSAtNS4xKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTg3LjA1LDYxLjgyYy0uMjEuMTEtLjQyLjIyLS42My4zMWwtLjE3LjA4LS4zOC4xNy0uMzkuMTZjLS4xOC4wNy0uMzcuMTUtLjU2LjIxbC0uMzUuMTNjLS4yNC4wOC0uNDguMTYtLjc0LjIzcy0uNTUuMTYtLjg0LjI0bC0uMzkuMDktLjQ2LjEtLjQxLjA4aDBjLS4yNywwLS41NC4wOS0uODEuMTJoMGwtLjQxLDAtLjMxLDBjLS4yNiwwLS41MS4wNS0uNzguMDZzLS42OCwwLTEsMGExOS4xNSwxOS4xNSwwLDEsMSwxOS4xNC0xOS4xNWMwLC4yLDAsLjM5LDAsLjU5di4xYzAsLjEsMCwuMiwwLC4zczAsLjQyLDAsLjYzbDAsLjMxQTE4Ljg0LDE4Ljg0LDAsMCwxLDE5Nyw0OWMwLC4xMi0uMDUuMjUtLjA4LjM3LS4wOS4zNy0uMTkuNzMtLjMsMS4wOSwwLC4xNy0uMTEuMzQtLjE2LjVzLS4xLjMtLjE2LjQ0YTMuMzQsMy4zNCwwLDAsMS0uMTcuNDRsMCwuMDljLS4wNy4xOS0uMTUuMzgtLjIzLjU2bC0uMjcuNTgsMCwwYTMuNzgsMy43OCwwLDAsMS0uMTcuMzVjLS4wOC4xNi0uMTYuMzItLjI1LjQ4YTQuMSw0LjEsMCwwLDEtLjIzLjRjLS4wOS4xNy0uMTkuMzQtLjI5LjVBMTkuMTIsMTkuMTIsMCwwLDEsMTkzLjExLDU3Yy0uMDkuMTItLjE5LjIzLS4zLjM1YTMuMTcsMy4xNywwLDAsMS0uMy4zNGMtLjIuMjItLjQxLjQ1LS42My42NnMtLjQ0LjQ0LS42OC42NWwtLjM0LjMtLjM1LjI5YTMuMTEsMy4xMSwwLDAsMS0uMjguMjNsLS40My4zNGgwYTcuMTcsNy4xNywwLDAsMS0uNjMuNDUsMS43NywxLjc3LDAsMCwxLS4xNy4xMmwtLjI2LjE3LS4yMy4xNEExNC43MiwxNC43MiwwLDAsMSwxODcuMDUsNjEuODJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzIuOTEgLTUuMSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTI3NC40NywyMTEuNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMi45MSAtNS4xKSIvPjwvc3ZnPg=="

/***/ }),

/***/ "./pages/components/graphs/IntenzivnostPoskodbe.js":
/*!*********************************************************!*\
  !*** ./pages/components/graphs/IntenzivnostPoskodbe.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntenzivnostPoskodbe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

var data = [];
class IntenzivnostPoskodbe extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      dataLeto: []
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${serverLocation}/api/graph/34`).then(res => {
      this.setState({
        dataLeto: res.data
      });
      console.log(res.data);

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
      width: 500,
      height: 300,
      data: this.state.dataLeto.podatki,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["CartesianGrid"], {
      strokeDasharray: "3 3"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["XAxis"], {
      dataKey: "intenzivnost",
      interval: 0,
      fontSize: 6.5
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["YAxis"], {
      domain: [0, 25000]
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Legend"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
      layout: "horizontal",
      dataKey: "nesrece",
      fill: "#037253",
      fillOpacity: "0.7",
      label: {
        fill: 'black',
        fontSize: 10
      }
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesreceCeste.js":
/*!*************************************************!*\
  !*** ./pages/components/graphs/NesreceCeste.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NesreceCeste; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

var data = [];
class NesreceCeste extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datag: []
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${serverLocation}/api/graph/32`).then(res => {
      this.setState({
        datag: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
      width: 1200,
      height: 300,
      data: this.state.datag.podatki,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["CartesianGrid"], {
      strokeDasharray: "3 3"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["XAxis"], {
      dataKey: "cesta",
      interval: 0,
      fontSize: 7
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["YAxis"], {
      domain: [0, 70000]
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Legend"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
      layout: "horizontal",
      dataKey: "nesrece",
      fill: "#4ca64c",
      fillOpacity: "0.8",
      label: {
        fill: 'white',
        fontSize: 10
      }
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesreceDnevi.js":
/*!*************************************************!*\
  !*** ./pages/components/graphs/NesreceDnevi.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NesreceDnevi; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

var data = [];
class NesreceDnevi extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datag: []
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${serverLocation}/api/graph/24`).then(res => {
      this.setState({
        datag: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
      width: 1200,
      height: 300,
      data: this.state.datag.podatki,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["CartesianGrid"], {
      strokeDasharray: "3 3"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["XAxis"], {
      dataKey: "dan",
      interval: 0,
      fontSize: 12
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["YAxis"], {
      domain: [0, 25000]
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Legend"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
      layout: "horizontal",
      dataKey: "nesrece",
      fill: "#008080",
      fillOpacity: "0.7",
      label: {
        fill: "white",
        fontSize: 10
      }
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesreceIntenzivnostPrazniki.js":
/*!****************************************************************!*\
  !*** ./pages/components/graphs/NesreceIntenzivnostPrazniki.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NesreceIntenzivnostPrazniki; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return __jsx("g", null, __jsx("text", {
    x: cx,
    y: cy,
    dy: 5,
    textAnchor: "middle",
    fontSize: 11,
    fill: "black"
  }, payload.intenzivnost), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    startAngle: startAngle,
    endAngle: endAngle,
    fill: fill
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    startAngle: startAngle,
    endAngle: endAngle,
    innerRadius: outerRadius + 6,
    outerRadius: outerRadius + 10,
    fill: fill
  }), __jsx("path", {
    d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`,
    stroke: fill,
    fill: "none"
  }), __jsx("circle", {
    cx: ex,
    cy: ey,
    r: 2,
    fill: fill,
    stroke: "none"
  }), __jsx("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    textAnchor: textAnchor,
    fill: "#333"
  }, `${value}`), __jsx("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    dy: 18,
    textAnchor: textAnchor,
    fill: "#999"
  }, `(Rate ${(percent * 100).toFixed(2)}%)`));
};

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class NesreceIntenzivnostPrazniki extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datag: [],
      activeIndex: 0
    });

    _defineProperty(this, "onPieEnter", (data, index) => {
      this.setState({
        activeIndex: index
      });
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${serverLocation}/api/graph/36`).then(res => {
      this.setState({
        datag: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["PieChart"], {
      width: 500,
      height: 400
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
      activeIndex: this.state.activeIndex,
      activeShape: renderActiveShape,
      data: this.state.datag.podatki,
      cx: 230,
      cy: 150,
      innerRadius: 80,
      outerRadius: 100,
      paddingAngle: 5,
      fill: "#66b2b2",
      dataKey: "nesrece",
      onMouseEnter: this.onPieEnter
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesreceLeto.js":
/*!************************************************!*\
  !*** ./pages/components/graphs/NesreceLeto.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NesreceLeto; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class NesreceLeto extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      dataLeto: []
    });

    _defineProperty(this, "state", {
      dataLeto: []
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${serverLocation}/api/graph/23`).then(res => {
      this.setState({
        dataLeto: res.data
      });
      console.log(res.data);

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
      width: 1200,
      height: 300,
      data: this.state.dataLeto.podatki,
      margin: {
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
      strokeDasharray: "3 3"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
      dataKey: "leto"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
      type: "monotone",
      dataKey: "nesrece",
      stroke: "#66b2b2",
      fill: "#66b2b2"
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesrecePraznik.js":
/*!***************************************************!*\
  !*** ./pages/components/graphs/NesrecePraznik.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NesrecePraznik; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return __jsx("g", null, __jsx("text", {
    x: cx,
    y: cy,
    dy: 8,
    textAnchor: "middle",
    fill: fill
  }, payload.dan), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    startAngle: startAngle,
    endAngle: endAngle,
    fill: fill
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    startAngle: startAngle,
    endAngle: endAngle,
    innerRadius: outerRadius + 6,
    outerRadius: outerRadius + 10,
    fill: fill
  }), __jsx("path", {
    d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`,
    stroke: fill,
    fill: "none"
  }), __jsx("circle", {
    cx: ex,
    cy: ey,
    r: 2,
    fill: fill,
    stroke: "none"
  }), __jsx("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    textAnchor: textAnchor,
    fill: "#333"
  }, `${value}`), __jsx("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    dy: 18,
    textAnchor: textAnchor,
    fill: "#999"
  }, `(Rate ${(percent * 100).toFixed(2)}%)`));
};

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class NesrecePraznik extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datag: [],
      activeIndex: 0
    });

    _defineProperty(this, "onPieEnter", (data, index) => {
      this.setState({
        activeIndex: index
      });
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${serverLocation}/api/graph/29`).then(res => {
      this.setState({
        datag: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["PieChart"], {
      width: 500,
      height: 400
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
      activeIndex: this.state.activeIndex,
      activeShape: renderActiveShape,
      data: this.state.datag.podatki,
      cx: 230,
      cy: 150,
      innerRadius: 60,
      outerRadius: 80,
      paddingAngle: 5,
      fill: "#3d8b6e",
      dataKey: "nesrece",
      onMouseEnter: this.onPieEnter
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesreceSpol.js":
/*!************************************************!*\
  !*** ./pages/components/graphs/NesreceSpol.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NesreceSpol; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return __jsx("g", null, __jsx("text", {
    x: cx,
    y: cy,
    dy: 8,
    textAnchor: "middle",
    fill: fill
  }, payload.spol), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    startAngle: startAngle,
    endAngle: endAngle,
    fill: fill
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    startAngle: startAngle,
    endAngle: endAngle,
    innerRadius: outerRadius + 6,
    outerRadius: outerRadius + 10,
    fill: fill
  }), __jsx("path", {
    d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`,
    stroke: fill,
    fill: "none"
  }), __jsx("circle", {
    cx: ex,
    cy: ey,
    r: 2,
    fill: fill,
    stroke: "none"
  }), __jsx("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    textAnchor: textAnchor,
    fill: "#333"
  }, `${value}`), __jsx("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    dy: 18,
    textAnchor: textAnchor,
    fill: "#999"
  }, `(Rate ${(percent * 100).toFixed(2)}%)`));
};

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class NesreceSpol extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datag: [],
      activeIndex: 0
    });

    _defineProperty(this, "onPieEnter", (data, index) => {
      this.setState({
        activeIndex: index
      });
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${serverLocation}/api/graph/33`).then(res => {
      this.setState({
        datag: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["PieChart"], {
      width: 500,
      height: 400
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
      activeIndex: this.state.activeIndex,
      activeShape: renderActiveShape,
      data: this.state.datag.podatki,
      cx: 230,
      cy: 150,
      innerRadius: 60,
      outerRadius: 80,
      paddingAngle: 5,
      fill: "#249273",
      dataKey: "nesrece",
      onMouseEnter: this.onPieEnter
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesreceStanjePrometa.js":
/*!*********************************************************!*\
  !*** ./pages/components/graphs/NesreceStanjePrometa.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Test; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class Test extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      dataLeto: []
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${serverLocation}/api/graph/31`).then(res => {
      this.setState({
        dataLeto: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
      width: 500,
      height: 300,
      data: this.state.dataLeto.podatki,
      margin: {
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
      strokeDasharray: "3 3"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
      dataKey: "promet",
      "text-transform": "uppercase"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], {
      domain: [0, 70000]
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
      type: "monotone",
      dataKey: "nesrece",
      stroke: "#66b2b2",
      fill: "#66b2b2",
      dot: {
        fill: '#008080',
        strokeWidth: 1
      }
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesreceTip.js":
/*!***********************************************!*\
  !*** ./pages/components/graphs/NesreceTip.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NesreceTip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class NesreceTip extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datac: []
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${serverLocation}/api/graph/30`).then(res => {
      this.setState({
        datac: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
      width: 1100,
      height: 300,
      data: this.state.datac.podatki,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
      strokeDasharray: "5 5"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
      dataKey: "tip",
      interval: 0,
      fontSize: 8
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      dataKey: "nesrece",
      fill: "#52bf90",
      label: {
        fill: 'white',
        fontSize: 15
      }
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesreceVozilo.js":
/*!**************************************************!*\
  !*** ./pages/components/graphs/NesreceVozilo.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NesreceVozilo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class NesreceVozilo extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datag: []
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${serverLocation}/api/graph/27`).then(res => {
      this.setState({
        datag: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["BarChart"], {
      width: 1250,
      height: 300,
      data: this.state.datag.podatki,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["CartesianGrid"], {
      strokeDasharray: "3 3"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["XAxis"], {
      dataKey: "vozilo",
      interval: 0,
      fontSize: 6
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["YAxis"], {
      domain: [0, 9500]
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Legend"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_2__["Bar"], {
      layout: "horizontal",
      dataKey: "nesrece",
      fill: "#008080",
      fillOpacity: "0.7",
      label: {
        fill: 'white',
        fontSize: 10
      }
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesreceVreme.js":
/*!*************************************************!*\
  !*** ./pages/components/graphs/NesreceVreme.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NesreceVreme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class NesreceVreme extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datag: []
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${serverLocation}/api/graph/25`).then(res => {
      this.setState({
        datag: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
      width: 500,
      height: 300,
      data: this.state.datag.podatki,
      margin: {
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
      strokeDasharray: "3 3"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
      dataKey: "vreme",
      interval: 0,
      fontSize: 10
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Area"], {
      type: "monotone",
      dataKey: "nesrece",
      stroke: "#0091b0",
      fill: "#0091b0",
      dot: {
        fill: '#008080',
        strokeWidth: 1
      }
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/NesreceVzrok.js":
/*!*************************************************!*\
  !*** ./pages/components/graphs/NesreceVzrok.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NesreceVzrok; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class NesreceVzrok extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datac: []
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${serverLocation}/api/graph/26`).then(res => {
      this.setState({
        datac: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
      width: 1200,
      height: 300,
      data: this.state.datac.podatki,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
      strokeDasharray: "3 3"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
      dataKey: "vzrok",
      interval: 0,
      fontSize: 8
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      dataKey: "nesrece",
      fill: "#419873",
      label: {
        fill: 'black',
        fontSize: 12
      }
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/PoskodbeNedelja.js":
/*!****************************************************!*\
  !*** ./pages/components/graphs/PoskodbeNedelja.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PoskodbeNedelja; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  return __jsx("g", null, __jsx("text", {
    x: cx,
    y: cy,
    dy: 5,
    textAnchor: "middle",
    fontSize: 11,
    fill: "black"
  }, payload.intenzivnost), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    innerRadius: innerRadius,
    outerRadius: outerRadius,
    startAngle: startAngle,
    endAngle: endAngle,
    fill: fill
  }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Sector"], {
    cx: cx,
    cy: cy,
    startAngle: startAngle,
    endAngle: endAngle,
    innerRadius: outerRadius + 6,
    outerRadius: outerRadius + 10,
    fill: fill
  }), __jsx("path", {
    d: `M${sx},${sy}L${mx},${my}L${ex},${ey}`,
    stroke: fill,
    fill: "none"
  }), __jsx("circle", {
    cx: ex,
    cy: ey,
    r: 2,
    fill: fill,
    stroke: "none"
  }), __jsx("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    textAnchor: textAnchor,
    fill: "#333"
  }, `${value}`), __jsx("text", {
    x: ex + (cos >= 0 ? 1 : -1) * 12,
    y: ey,
    dy: 18,
    textAnchor: textAnchor,
    fill: "#999"
  }, `(Rate ${(percent * 100).toFixed(2)}%)`));
};

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class PoskodbeNedelja extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datag: [],
      activeIndex: 0
    });

    _defineProperty(this, "onPieEnter", (data, index) => {
      this.setState({
        activeIndex: index
      });
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${serverLocation}/api/graph/35`).then(res => {
      this.setState({
        datag: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["PieChart"], {
      width: 500,
      height: 400
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Pie"], {
      activeIndex: this.state.activeIndex,
      activeShape: renderActiveShape,
      data: this.state.datag.podatki,
      cx: 230,
      cy: 150,
      innerRadius: 80,
      outerRadius: 100,
      paddingAngle: 5,
      fill: "#54b2a9",
      dataKey: "nesrece",
      onMouseEnter: this.onPieEnter
    }));
  }

}

/***/ }),

/***/ "./pages/components/graphs/TipTrcenja.js":
/*!***********************************************!*\
  !*** ./pages/components/graphs/TipTrcenja.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TipTrcenja; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "recharts");
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var data = [];

const serverLocation = __webpack_require__(/*! ../../../../src/config/keys */ "../src/config/keys.js").server;

class TipTrcenja extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      datac: []
    });
  }

  componentDidMount() {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`${serverLocation}/api/graph/37`).then(res => {
      this.setState({
        datac: res.data
      });

      for (var key in this.state) {
        data.push(this.state[key]);
      }
    });
  }

  render() {
    return __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
      width: 1200,
      height: 300,
      data: this.state.datac.podatki,
      margin: {
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }
    }, __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
      strokeDasharray: "3 3"
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
      dataKey: "intenzivnost",
      interval: 0,
      fontSize: 7
    }), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), __jsx(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
      dataKey: "nesrece",
      fill: "#398564",
      label: {
        fill: 'white',
        fontSize: 12
      }
    }));
  }

}

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

/***/ "./pages/statistics.js":
/*!*****************************!*\
  !*** ./pages/statistics.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_design_App_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/design/App.css */ "./pages/components/design/App.css");
/* harmony import */ var _components_design_App_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_design_App_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_graphs_NesreceLeto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/graphs/NesreceLeto */ "./pages/components/graphs/NesreceLeto.js");
/* harmony import */ var _components_graphs_NesreceDnevi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/graphs/NesreceDnevi */ "./pages/components/graphs/NesreceDnevi.js");
/* harmony import */ var _components_graphs_NesreceSpol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/graphs/NesreceSpol */ "./pages/components/graphs/NesreceSpol.js");
/* harmony import */ var _components_graphs_NesreceVzrok__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/graphs/NesreceVzrok */ "./pages/components/graphs/NesreceVzrok.js");
/* harmony import */ var _components_graphs_NesrecePraznik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/graphs/NesrecePraznik */ "./pages/components/graphs/NesrecePraznik.js");
/* harmony import */ var _components_graphs_NesreceVreme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/graphs/NesreceVreme */ "./pages/components/graphs/NesreceVreme.js");
/* harmony import */ var _components_graphs_NesreceCeste__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/graphs/NesreceCeste */ "./pages/components/graphs/NesreceCeste.js");
/* harmony import */ var _components_graphs_NesreceStanjePrometa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/graphs/NesreceStanjePrometa */ "./pages/components/graphs/NesreceStanjePrometa.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_graphs_NesreceVozilo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/graphs/NesreceVozilo */ "./pages/components/graphs/NesreceVozilo.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_graphs_NesreceIntenzivnostPrazniki__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/graphs/NesreceIntenzivnostPrazniki */ "./pages/components/graphs/NesreceIntenzivnostPrazniki.js");
/* harmony import */ var _components_graphs_IntenzivnostPoskodbe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/graphs/IntenzivnostPoskodbe */ "./pages/components/graphs/IntenzivnostPoskodbe.js");
/* harmony import */ var _components_graphs_PoskodbeNedelja__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/graphs/PoskodbeNedelja */ "./pages/components/graphs/PoskodbeNedelja.js");
/* harmony import */ var _components_graphs_NesreceTip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/graphs/NesreceTip */ "./pages/components/graphs/NesreceTip.js");
/* harmony import */ var _components_graphs_TipTrcenja__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/graphs/TipTrcenja */ "./pages/components/graphs/TipTrcenja.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/layout/Layout */ "./pages/components/layout/Layout.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






















class Statistics extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      show: [true, true, false, false, false, false, false, false, false, false, false, false, false]
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  showHide(num) {
    this.setState(prevState => {
      const newItems = [...prevState.show];
      newItems[num] = !newItems[num];
      return {
        show: newItems
      };
    });
  }

  render() {
    return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_19__["default"], null, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "container"
    }, __jsx("br", null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["ButtonDropdown"], {
      isOpen: this.state.dropdownOpen,
      toggle: this.toggle
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownToggle"], {
      caret: true
    }, "Izberite graf"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownMenu"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(0)
    }, "\u0160tevilo nesre\u010D v posameznem letu"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(1)
    }, "\u0160tevilo nesre\u010D glede na posamezen dan v tednu"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(2)
    }, "\u0160tevilo nesre\u010D glede na vzrok"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(3)
    }, "\u0160tevilo nesre\u010D glede na tip vozila"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(4)
    }, "Nesre\u010De glede na spol povzro\u010Ditelja"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(5)
    }, "Glede na praznike"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(6)
    }, "Glede na stanje prometa"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(7)
    }, "Glede na vreme"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(8)
    }, "Glede na tip ceste"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(9)
    }, "Glede na intenzivnost po\u0161kodbe med prazniki"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(10)
    }, "Glede intenzivnost po\u0161kodbe"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(11)
    }, "Glede intenzivnost po\u0161kodbe v nedeljo"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(12)
    }, "Glede tip nesre\u010De"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["DropdownItem"], {
      onClick: () => this.showHide(13)
    }, "Glede tip tr\u010Denja (najbolj smrtonosni)"))), __jsx("br", null), __jsx("br", null), this.state.show[0] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "\u0160tevilo nesre\u010D v posameznem letu",
      onDelete: () => this.showHide(0),
      variant: "outlined"
    }), this.state.show[1] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "\u0160tevilo nesre\u010D glede na posamezen dan v tednu",
      onDelete: () => this.showHide(1),
      variant: "outlined"
    }), this.state.show[2] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "\u0160tevilo nesre\u010D glede na vzrok",
      onDelete: () => this.showHide(2),
      variant: "outlined"
    }), this.state.show[3] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "\u0160tevilo nesre\u010D glede na tip vozila",
      onDelete: () => this.showHide(3),
      variant: "outlined"
    }), this.state.show[4] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "Nesre\u010De glede na spol povzro\u010Ditelja",
      onDelete: () => this.showHide(4),
      variant: "outlined"
    }), this.state.show[5] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "Glede na praznike",
      onDelete: () => this.showHide(5),
      variant: "outlined"
    }), this.state.show[6] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "Glede na stanje prometa",
      onDelete: () => this.showHide(6),
      variant: "outlined"
    }), this.state.show[7] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "Glede na vreme",
      onDelete: () => this.showHide(7),
      variant: "outlined"
    }), this.state.show[8] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "Glede na tip ceste",
      onDelete: () => this.showHide(8),
      variant: "outlined"
    }), this.state.show[9] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "Glede na intenzivnost po\u0161kodbe med prazniki",
      onDelete: () => this.showHide(9),
      variant: "outlined"
    }), this.state.show[10] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "Intenzivnost po\u0161kodbe",
      onDelete: () => this.showHide(10),
      variant: "outlined"
    }), this.state.show[11] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "Intenzivnost po\u0161kodbe v nedeljo",
      onDelete: () => this.showHide(11),
      variant: "outlined"
    }), this.state.show[12] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "Tip nesre\u010De",
      onDelete: () => this.showHide(12),
      variant: "outlined"
    }), this.state.show[13] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13___default.a, {
      label: "Tip tr\u010Denja",
      onDelete: () => this.showHide(13),
      variant: "outlined"
    }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Container"], {
      className: "graphs"
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[0] && __jsx("h6", null, " \u0160tevilo nesre\u010D v posameznem letu "), this.state.show[0] && __jsx(_components_graphs_NesreceLeto__WEBPACK_IMPORTED_MODULE_3__["default"], null))), __jsx("br", null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[1] && __jsx("h6", null, " \u0160tevilo nesre\u010D glede na posamezen dan v tednu "), this.state.show[1] && __jsx(_components_graphs_NesreceDnevi__WEBPACK_IMPORTED_MODULE_4__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[2] && __jsx("h6", null, " \u0160tevilo nesre\u010D glede na vzrok "), this.state.show[2] && __jsx(_components_graphs_NesreceVzrok__WEBPACK_IMPORTED_MODULE_6__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[3] && __jsx("h6", null, " \u0160tevilo nesre\u010D glede na tip vozila "), this.state.show[3] && __jsx(_components_graphs_NesreceVozilo__WEBPACK_IMPORTED_MODULE_12__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[4] && __jsx("h6", null, " Nesre\u010De glede na spol povzro\u010Ditelja"), this.state.show[4] && __jsx(_components_graphs_NesreceSpol__WEBPACK_IMPORTED_MODULE_5__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[7] && __jsx("h6", null, " Glede na vreme "), this.state.show[7] && __jsx(_components_graphs_NesreceVreme__WEBPACK_IMPORTED_MODULE_8__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[5] && __jsx("h6", null, " Glede na praznike "), this.state.show[5] && __jsx(_components_graphs_NesrecePraznik__WEBPACK_IMPORTED_MODULE_7__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[6] && __jsx("h6", null, " Glede na stanje prometa "), this.state.show[6] && __jsx(_components_graphs_NesreceStanjePrometa__WEBPACK_IMPORTED_MODULE_10__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[8] && __jsx("h6", null, " Glede na tip ceste "), this.state.show[8] && __jsx(_components_graphs_NesreceCeste__WEBPACK_IMPORTED_MODULE_9__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[10] && __jsx("h6", null, " Intenzivnost po\u0161kodb "), this.state.show[10] && __jsx(_components_graphs_IntenzivnostPoskodbe__WEBPACK_IMPORTED_MODULE_15__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[11] && __jsx("h6", null, " Intenzivnost po\u0161kodb v nedeljo"), this.state.show[11] && __jsx(_components_graphs_PoskodbeNedelja__WEBPACK_IMPORTED_MODULE_16__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[9] && __jsx("h6", null, " Glede na intenzivnost po\u0161kodb med prazniki "), this.state.show[9] && __jsx(_components_graphs_NesreceIntenzivnostPrazniki__WEBPACK_IMPORTED_MODULE_14__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[12] && __jsx("h6", null, " Glede na tip nesre\u010De "), this.state.show[12] && __jsx(_components_graphs_NesreceTip__WEBPACK_IMPORTED_MODULE_17__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, __jsx("div", null, this.state.show[13] && __jsx("h6", null, " Glede na tip tr\u010Denja (najbolj smrtonosni) "), this.state.show[13] && __jsx(_components_graphs_TipTrcenja__WEBPACK_IMPORTED_MODULE_18__["default"], null)))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ }),

/***/ 4:
/*!***********************************!*\
  !*** multi ./pages/statistics.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\Webpages\BoomMap\client\react-SSR-app\pages\statistics.js */"./pages/statistics.js");


/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

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

/***/ }),

/***/ "recharts":
/*!***************************!*\
  !*** external "recharts" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recharts");

/***/ })

/******/ });
//# sourceMappingURL=statistics.js.map