webpackHotUpdate("static/development/pages/statistics.js",{

/***/ "./pages/statistics.js":
/*!*****************************!*\
  !*** ./pages/statistics.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "../node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_design_App_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/design/App.css */ "./pages/components/design/App.css");
/* harmony import */ var _components_design_App_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_components_design_App_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_graphs_NesreceLeto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/graphs/NesreceLeto */ "./pages/components/graphs/NesreceLeto.js");
/* harmony import */ var _components_graphs_NesreceDnevi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/graphs/NesreceDnevi */ "./pages/components/graphs/NesreceDnevi.js");
/* harmony import */ var _components_graphs_NesreceSpol__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/graphs/NesreceSpol */ "./pages/components/graphs/NesreceSpol.js");
/* harmony import */ var _components_graphs_NesreceVzrok__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/graphs/NesreceVzrok */ "./pages/components/graphs/NesreceVzrok.js");
/* harmony import */ var _components_graphs_NesrecePraznik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/graphs/NesrecePraznik */ "./pages/components/graphs/NesrecePraznik.js");
/* harmony import */ var _components_graphs_NesreceVreme__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/graphs/NesreceVreme */ "./pages/components/graphs/NesreceVreme.js");
/* harmony import */ var _components_graphs_NesreceCeste__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/graphs/NesreceCeste */ "./pages/components/graphs/NesreceCeste.js");
/* harmony import */ var _components_graphs_NesreceStanjePrometa__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/graphs/NesreceStanjePrometa */ "./pages/components/graphs/NesreceStanjePrometa.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! reactstrap */ "../node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_graphs_NesreceVozilo__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/graphs/NesreceVozilo */ "./pages/components/graphs/NesreceVozilo.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Chip */ "../node_modules/@material-ui/core/Chip/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_graphs_NesreceIntenzivnostPrazniki__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/graphs/NesreceIntenzivnostPrazniki */ "./pages/components/graphs/NesreceIntenzivnostPrazniki.js");
/* harmony import */ var _components_graphs_IntenzivnostPoskodbe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/graphs/IntenzivnostPoskodbe */ "./pages/components/graphs/IntenzivnostPoskodbe.js");
/* harmony import */ var _components_graphs_PoskodbeNedelja__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/graphs/PoskodbeNedelja */ "./pages/components/graphs/PoskodbeNedelja.js");
/* harmony import */ var _components_graphs_NesreceTip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/graphs/NesreceTip */ "./pages/components/graphs/NesreceTip.js");
/* harmony import */ var _components_graphs_TipTrcenja__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/graphs/TipTrcenja */ "./pages/components/graphs/TipTrcenja.js");
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/layout/Layout */ "./pages/components/layout/Layout.js");







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }























var Statistics = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Statistics, _React$Component);

  var _super = _createSuper(Statistics);

  function Statistics(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Statistics);

    _this = _super.call(this, props);
    _this.toggle = _this.toggle.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.state = {
      dropdownOpen: false,
      show: [true, true, false, false, false, false, false, false, false, false, false, false, false]
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Statistics, [{
    key: "toggle",
    value: function toggle() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
  }, {
    key: "showHide",
    value: function showHide(num) {
      this.setState(function (prevState) {
        var newItems = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(prevState.show);

        newItems[num] = !newItems[num];
        return {
          show: newItems
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_26__["default"], null, __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx("div", {
        className: "container"
      }, __jsx("br", null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["ButtonDropdown"], {
        isOpen: this.state.dropdownOpen,
        toggle: this.toggle
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownToggle"], {
        caret: true
      }, "Izberite graf"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownMenu"], null, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(0);
        }
      }, "\u0160tevilo nesre\u010D v posameznem letu"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(1);
        }
      }, "\u0160tevilo nesre\u010D glede na posamezen dan v tednu"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(2);
        }
      }, "\u0160tevilo nesre\u010D glede na vzrok"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(3);
        }
      }, "\u0160tevilo nesre\u010D glede na tip vozila"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(4);
        }
      }, "Nesre\u010De glede na spol povzro\u010Ditelja"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(5);
        }
      }, "Glede na praznike"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(6);
        }
      }, "Glede na stanje prometa"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(7);
        }
      }, "Glede na vreme"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(8);
        }
      }, "Glede na tip ceste"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(9);
        }
      }, "Glede na intenzivnost po\u0161kodbe med prazniki"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(10);
        }
      }, "Glede intenzivnost po\u0161kodbe"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(11);
        }
      }, "Glede intenzivnost po\u0161kodbe v nedeljo"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(12);
        }
      }, "Glede tip nesre\u010De"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["DropdownItem"], {
        onClick: function onClick() {
          return _this2.showHide(13);
        }
      }, "Glede tip tr\u010Denja (najbolj smrtonosni)"))), __jsx("br", null), __jsx("br", null), this.state.show[0] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "\u0160tevilo nesre\u010D v posameznem letu",
        onDelete: function onDelete() {
          return _this2.showHide(0);
        },
        variant: "outlined"
      }), this.state.show[1] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "\u0160tevilo nesre\u010D glede na posamezen dan v tednu",
        onDelete: function onDelete() {
          return _this2.showHide(1);
        },
        variant: "outlined"
      }), this.state.show[2] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "\u0160tevilo nesre\u010D glede na vzrok",
        onDelete: function onDelete() {
          return _this2.showHide(2);
        },
        variant: "outlined"
      }), this.state.show[3] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "\u0160tevilo nesre\u010D glede na tip vozila",
        onDelete: function onDelete() {
          return _this2.showHide(3);
        },
        variant: "outlined"
      }), this.state.show[4] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "Nesre\u010De glede na spol povzro\u010Ditelja",
        onDelete: function onDelete() {
          return _this2.showHide(4);
        },
        variant: "outlined"
      }), this.state.show[5] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "Glede na praznike",
        onDelete: function onDelete() {
          return _this2.showHide(5);
        },
        variant: "outlined"
      }), this.state.show[6] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "Glede na stanje prometa",
        onDelete: function onDelete() {
          return _this2.showHide(6);
        },
        variant: "outlined"
      }), this.state.show[7] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "Glede na vreme",
        onDelete: function onDelete() {
          return _this2.showHide(7);
        },
        variant: "outlined"
      }), this.state.show[8] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "Glede na tip ceste",
        onDelete: function onDelete() {
          return _this2.showHide(8);
        },
        variant: "outlined"
      }), this.state.show[9] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "Glede na intenzivnost po\u0161kodbe med prazniki",
        onDelete: function onDelete() {
          return _this2.showHide(9);
        },
        variant: "outlined"
      }), this.state.show[10] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "Intenzivnost po\u0161kodbe",
        onDelete: function onDelete() {
          return _this2.showHide(10);
        },
        variant: "outlined"
      }), this.state.show[11] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "Intenzivnost po\u0161kodbe v nedeljo",
        onDelete: function onDelete() {
          return _this2.showHide(11);
        },
        variant: "outlined"
      }), this.state.show[12] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "Tip nesre\u010De",
        onDelete: function onDelete() {
          return _this2.showHide(12);
        },
        variant: "outlined"
      }), this.state.show[13] && __jsx(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_20___default.a, {
        label: "Tip tr\u010Denja",
        onDelete: function onDelete() {
          return _this2.showHide(13);
        },
        variant: "outlined"
      }), __jsx("br", null), __jsx("br", null), __jsx("br", null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Container"], {
        className: "graphs"
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[0] && __jsx("h6", null, " \u0160tevilo nesre\u010D v posameznem letu "), this.state.show[0] && __jsx(_components_graphs_NesreceLeto__WEBPACK_IMPORTED_MODULE_10__["default"], null))), __jsx("br", null), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[1] && __jsx("h6", null, " \u0160tevilo nesre\u010D glede na posamezen dan v tednu "), this.state.show[1] && __jsx(_components_graphs_NesreceDnevi__WEBPACK_IMPORTED_MODULE_11__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[2] && __jsx("h6", null, " \u0160tevilo nesre\u010D glede na vzrok "), this.state.show[2] && __jsx(_components_graphs_NesreceVzrok__WEBPACK_IMPORTED_MODULE_13__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[3] && __jsx("h6", null, " \u0160tevilo nesre\u010D glede na tip vozila "), this.state.show[3] && __jsx(_components_graphs_NesreceVozilo__WEBPACK_IMPORTED_MODULE_19__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[4] && __jsx("h6", null, " Nesre\u010De glede na spol povzro\u010Ditelja"), this.state.show[4] && __jsx(_components_graphs_NesreceSpol__WEBPACK_IMPORTED_MODULE_12__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[7] && __jsx("h6", null, " Glede na vreme "), this.state.show[7] && __jsx(_components_graphs_NesreceVreme__WEBPACK_IMPORTED_MODULE_15__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[5] && __jsx("h6", null, " Glede na praznike "), this.state.show[5] && __jsx(_components_graphs_NesrecePraznik__WEBPACK_IMPORTED_MODULE_14__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[6] && __jsx("h6", null, " Glede na stanje prometa "), this.state.show[6] && __jsx(_components_graphs_NesreceStanjePrometa__WEBPACK_IMPORTED_MODULE_17__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[8] && __jsx("h6", null, " Glede na tip ceste "), this.state.show[8] && __jsx(_components_graphs_NesreceCeste__WEBPACK_IMPORTED_MODULE_16__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[10] && __jsx("h6", null, " Intenzivnost po\u0161kodb "), this.state.show[10] && __jsx(_components_graphs_IntenzivnostPoskodbe__WEBPACK_IMPORTED_MODULE_22__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[11] && __jsx("h6", null, " Intenzivnost po\u0161kodb v nedeljo"), this.state.show[11] && __jsx(_components_graphs_PoskodbeNedelja__WEBPACK_IMPORTED_MODULE_23__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[9] && __jsx("h6", null, " Glede na intenzivnost po\u0161kodb med prazniki "), this.state.show[9] && __jsx(_components_graphs_NesreceIntenzivnostPrazniki__WEBPACK_IMPORTED_MODULE_21__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[12] && __jsx("h6", null, " Glede na tip nesre\u010De "), this.state.show[12] && __jsx(_components_graphs_NesreceTip__WEBPACK_IMPORTED_MODULE_24__["default"], null))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_18__["Row"], null, __jsx("div", null, this.state.show[13] && __jsx("h6", null, " Glede na tip tr\u010Denja (najbolj smrtonosni) "), this.state.show[13] && __jsx(_components_graphs_TipTrcenja__WEBPACK_IMPORTED_MODULE_25__["default"], null)))))));
    }
  }]);

  return Statistics;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Statistics);

/***/ })

})
//# sourceMappingURL=statistics.js.43726fb62dd6ee8b4060.hot-update.js.map