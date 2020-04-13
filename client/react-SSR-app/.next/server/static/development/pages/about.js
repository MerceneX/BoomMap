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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "../node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_design_IdeaIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/design/IdeaIcon.svg */ "./pages/components/design/IdeaIcon.svg");
/* harmony import */ var _components_design_IdeaIcon_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_design_IdeaIcon_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_design_MG_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/design/MG.jpg */ "./pages/components/design/MG.jpg");
/* harmony import */ var _components_design_MG_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_design_MG_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_design_MK_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/design/MK.jpg */ "./pages/components/design/MK.jpg");
/* harmony import */ var _components_design_MK_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_design_MK_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_design_PG_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/design/PG.jpg */ "./pages/components/design/PG.jpg");
/* harmony import */ var _components_design_PG_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_design_PG_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_design_NF_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/design/NF.jpg */ "./pages/components/design/NF.jpg");
/* harmony import */ var _components_design_NF_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_design_NF_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/Layout */ "./pages/components/layout/Layout.js");
/* harmony import */ var _components_layout_Footer2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/layout/Footer2 */ "./pages/components/layout/Footer2.js");
/* harmony import */ var _components_design_App_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/design/App.css */ "./pages/components/design/App.css");
/* harmony import */ var _components_design_App_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_components_design_App_css__WEBPACK_IMPORTED_MODULE_10__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function About() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], null, __jsx("br", null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "aboutContainer"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("h4", null, "Ideja")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null)), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 8
  }, __jsx("p", null, "V Republiki Sloveniji smo od osamosvojitve zgradili mnoge dr\u017Eavne in lokalne ceste, ki (zaradi \u0161iritve na eni in manj vzdr\u017Eevanja na drugi strani) veljajo za dokaj nevarne. Najhuj\u0161ih prometnih nesre\u010D s smrtnim izidom je zadnja leta res manj, a to \u017Eal ne velja za nesre\u010De v splo\u0161nem, pa naj imajo zgolj materialne ali tudi blage oz. huj\u0161e telesne po\u0161kodbe. Eden izmed mehanizmov za pove\u010Danje varnosti je opozarjanje udele\u017Eencev na t. i. nevarne cestne odseke. Menimo, da je v smeri prepoznavanja in ozave\u0161\u010Danja udele\u017Eencev prometa mogo\u010De narediti \u0161e ve\u010D. Sami smo s to mislijo, skovali vizijo o spletni re\u0161itvi, ki bi zajemala naprednej\u0161o in u\u010Dinkovitej\u0161o klasifikacijo cestnih odsekov, ter oceno stopnje njihove nevarnosti.", " ")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    sm: 4
  }, __jsx("img", {
    className: "ideaImage",
    src: _components_design_IdeaIcon_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "imageFrontPage"
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("h4", null, "Projekt"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("p", null, "Na osnovi javnih podatkov o nesre\u010Dah na slovenskih cestah, smo s pomo\u010Djo metod strojnega u\u010Denja razvili osrednjo funkcionalnost na\u0161e re\u0161itve \u2013 zemljevid z dinami\u010Dnim prikazovanjem in opozarjanjem na nevarne cestne odseke. Odseki so prikazani v odvisnosti od podanih parametrov (\u010Das, vreme, dan, mesec, \u2026) in kvalificirani glede na stopnjo kriti\u010Dnosti. Poleg osnovne funkcionalnosti, uporabnikom omogo\u010Damo tudi integrirano brskanje po statisti\u010Dnih podatkih in izpostavljamo zanimive povezave, ki smo jih z ustrezno obdelavo pridobili iz oprtih podatkov. Na\u0161 portal prav tako omogo\u010Da pregled aktualnih prometnih informacij, kot so stanje na slovenskih mejah, prometna poro\u010Dila, napovedi prometa in trenutni dogodki na cestah."), __jsx("h5", null, "Tehnolo\u0161ki sklad:"), __jsx("p", null, "Za tako inovativno re\u0161itev, smo se odlo\u010Dili uporabiti najbolj sve\u017Ee tehnologije. Razmi\u0161ljali smo v smislu odzivnosti, izgleda in agilnega programiranja. Na koncu smo se odlo\u010Dili za:", __jsx("ul", null, __jsx("li", null, "React za uporabni\u0161ki vmesnik"), __jsx("li", null, "Python za strojno u\u010Denje, s knji\u017Enico Efficient Apriori"), __jsx("li", null, "NodeJS in Express za zaledje"), __jsx("li", null, "MongoDB za podatkovno bazo"), __jsx("li", null, "Star laptop, Nginx in Docker za gostovanje")))))), __jsx("br", null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    className: "aboutContainer"
  }, __jsx("h4", {
    className: "headers"
  }, " Ekipa "), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("p", null, "Smo ekipa \u0161tirih \u0161tudentov univerzitetnega programa Informatike in Tehnologij Komuniciranja na Fakulteti za Elektrotehniko, Ra\u010Dunalni\u0161tvo in Informatiko Univerze v Mariboru. Re\u0161itev, ki vam jo predstavljamo, smo za\u010Deli v sklopu zaklju\u010Dnega projektnega dela ob koncu 2. letnika. Po koncu petih tednov obveznega dela smo verjeli, da imamo dobro idejo, mo\u017Enosti izbolj\u0161ave in smisel za delo, smo se odlo\u010Dili nadaljevati z razvojem tudi v prostem \u010Dasu. Mi smo ekipa, za Varno Domov:"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    className: "teamTitles"
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("img", {
    className: "teamPhoto",
    src: _components_design_MG_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "person"
  }), __jsx("p", {
    className: "teamName"
  }, "Marko Gluhak"), __jsx("p", null, "Vodja in razvijalec zaledja")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("img", {
    className: "teamPhoto",
    src: _components_design_MK_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    alt: "person"
  }), __jsx("p", {
    className: "teamName"
  }, "Maru\u0161a Kone\u010Dnik"), __jsx("p", null, "Razvijalka strojnega u\u010Denja")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("img", {
    className: "teamPhoto",
    src: _components_design_PG_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "person"
  }), __jsx("p", {
    className: "teamName"
  }, "Pina Gornik"), __jsx("p", null, "Razvijalka grafi\u010Dnega vmesnika")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], null, __jsx("img", {
    className: "teamPhoto",
    src: _components_design_NF_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "person"
  }), __jsx("p", {
    className: "teamName"
  }, "Nata\u0161a Feher"), __jsx("p", null, "Grafi\u010Dna oblikovalka"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/components/design/App.css":
/*!*****************************************!*\
  !*** ./pages/components/design/App.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/components/design/IdeaIcon.svg":
/*!**********************************************!*\
  !*** ./pages/components/design/IdeaIcon.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojYWNkMWQ0O29wYWNpdHk6MC44NTtpc29sYXRpb246aXNvbGF0ZTt9LmIsLmd7ZmlsbDpub25lO30uYiwuZywuaCwuaXtzdHJva2U6IzIzMWYyMDt9LmIsLmMsLmcsLmgsLml7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fS5ie3N0cm9rZS13aWR0aDowLjcycHg7fS5je2ZpbGw6IzlkMWUyZDtzdHJva2U6IzlkMWUyZDtzdHJva2Utd2lkdGg6MC45cHg7fS5ke2ZpbGw6I2ZmZjt9LmV7ZmlsbDojMjMxZjIwO30uZntmaWxsOiNlNmU3ZTg7fS5nLC5oe3N0cm9rZS13aWR0aDowLjY3cHg7fS5oLC5pe2ZpbGw6I2QxZDNkNDt9Lml7c3Ryb2tlLXdpZHRoOjAuODRweDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPklkZWFJY29uPC90aXRsZT48cmVjdCBjbGFzcz0iYSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiLz48cGF0aCBjbGFzcz0iYiIgZD0iTTQzLjg1LDUyLjE0QTQuNDIsNC40MiwwLDAsMSw0Nyw1MS4zYzEuNTYuMjcsMi4yOSwxLjU2LDMuNjcsMS4yOS41OS0uMTIuNjUtLjQsMS4zNy0uNzRhNS41NSw1LjU1LDAsMCwxLDMuNy0uMjQiLz48cmVjdCBjbGFzcz0iYyIgeD0iMzAuNzUiIHk9IjI0LjQ1IiB3aWR0aD0iMi40NSIgaGVpZ2h0PSI3Ljk0IiByeD0iMS4yMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwLjUyIDIzLjQ4KSByb3RhdGUoLTM1KSIvPjxyZWN0IGNsYXNzPSJjIiB4PSI2Ni44IiB5PSIyNC42OCIgd2lkdGg9IjIuNDUiIGhlaWdodD0iNy45NCIgcng9IjEuMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI4LjczIC0zMy44Mykgcm90YXRlKDM1KSIvPjxyZWN0IGNsYXNzPSJjIiB4PSI0OC4zNiIgeT0iMTguNSIgd2lkdGg9IjIuNDUiIGhlaWdodD0iNy45NCIgcng9IjEuMjMiLz48cmVjdCBjbGFzcz0iYyIgeD0iMjEuNzQiIHk9IjM4Ljg1IiB3aWR0aD0iMi40NSIgaGVpZ2h0PSI3Ljk0IiByeD0iMS4yMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI1LjU1IDQ1LjU0KSByb3RhdGUoLTY1KSIvPjxyZWN0IGNsYXNzPSJjIiB4PSI3NS44MSIgeT0iMzkuMjMiIHdpZHRoPSIyLjQ1IiBoZWlnaHQ9IjcuOTQiIHJ4PSIxLjIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4My42MyAtNDQuODcpIHJvdGF0ZSg2NSkiLz48cGF0aCBjbGFzcz0iZCIgZD0iTTQzLjE5LDY4LjMzbC0uODQtMi4yMUExNy41LDE3LjUsMCwxLDEsNTcuMjcsNjZsLTEuMTEsMi4yNC0uMy4xOS0xMi4zNS4wOFoiLz48cGF0aCBjbGFzcz0iZSIgZD0iTTQ5LjcxLDMzLjA4QTE3LjE3LDE3LjE3LDAsMCwxLDU3LDY1Ljc4aDBsLTEuMTUsMi4zNC0xMi4zNi4wOS0uODgtMi4zM2gwYTE3LjE3LDE3LjE3LDAsMCwxLDcuMDgtMzIuOG0wLS42N2ExNy44NCwxNy44NCwwLDAsMC03LjYyLDM0bC43OCwyLjA4LjY0LjQzLDYuMTgsMCw2LjE3LDAsLjYtLjM3LjUxLTEsLjU1LTEuMTFhMTcuODQsMTcuODQsMCwwLDAtNy44MS0zMy44N1oiLz48Y2lyY2xlIGNsYXNzPSJmIiBjeD0iNDkuNiIgY3k9IjQ5LjY0IiByPSIxMS4zNiIvPjxwYXRoIGNsYXNzPSJnIiBkPSJNNDMuNzYsNTAuMWwzLjUyLDE4LjExIi8+PHBhdGggY2xhc3M9ImciIGQ9Ik01NS42OSw1MC4zMyw1Mi4xNyw2OC40NCIvPjxwYXRoIGNsYXNzPSJoIiBkPSJNNDYuMzksNzcuN2EzLjQ1LDMuNDUsMCwwLDAsNi43OC0uMDciLz48cGF0aCBjbGFzcz0iaCIgZD0iTTQzLjUsNjguMjFINTUuNjlhMCwwLDAsMCwxLDAsMHY2LjIyYTMuMywzLjMsMCwwLDEtMy4zLDMuM0g0Ni44MWEzLjMsMy4zLDAsMCwxLTMuMy0zLjNWNjguMjFBMCwwLDAsMCwxLDQzLjUsNjguMjFaIi8+PHBhdGggY2xhc3M9ImkiIGQ9Ik00My41LDcwLjczbDEyLjE5LjA2Ii8+PHBhdGggY2xhc3M9ImkiIGQ9Ik00My41LDczLjU3bDEyLjE5LjA2Ii8+PHBhdGggY2xhc3M9ImIiIGQ9Ik00NC4zNSw1My4xNWE3LjI3LDcuMjcsMCwwLDEsMi4zNS0uNDVjMS44LDAsMi42Ni42OSw0LjA5LjlhNyw3LDAsMCwwLDQuNDctMS4wNSIvPjwvc3ZnPg=="

/***/ }),

/***/ "./pages/components/design/MG.jpg":
/*!****************************************!*\
  !*** ./pages/components/design/MG.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/MG-6a64364ddee0e48d56dbeae08d99e51f.jpg";

/***/ }),

/***/ "./pages/components/design/MK.jpg":
/*!****************************************!*\
  !*** ./pages/components/design/MK.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/MK-25847a55028c5c9b8c1a7ea061db1519.jpg";

/***/ }),

/***/ "./pages/components/design/NF.jpg":
/*!****************************************!*\
  !*** ./pages/components/design/NF.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/NF-1fd96376053c416c00a413cb84aee9ee.jpg";

/***/ }),

/***/ "./pages/components/design/PG.jpg":
/*!****************************************!*\
  !*** ./pages/components/design/PG.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/PG-9f6da33a53684f33f8dcfce79acffc31.jpg";

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

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/about.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pinagornik/Documents/faks/praktikumSSV/client/react-SSR-app/pages/about.js */"./pages/about.js");


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
//# sourceMappingURL=about.js.map