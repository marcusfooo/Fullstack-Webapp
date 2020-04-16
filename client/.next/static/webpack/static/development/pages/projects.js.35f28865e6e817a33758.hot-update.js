webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./components/ProjectTable.js":
/*!************************************!*\
  !*** ./components/ProjectTable.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\ProjectTable.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var ProjectTable = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(ProjectTable, _React$Component);

  var _super = _createSuper(ProjectTable);

  function ProjectTable(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ProjectTable);

    _this = _super.call(this, props);
    _this.state = {
      data: [{}]
    };
    _this.fetchGithub = _this.fetchGithub.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ProjectTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchGithub();
    }
  }, {
    key: "fetchGithub",
    value: function fetchGithub() {
      var _this2 = this;

      var query = "\n    query {\n      repos {\n        id\n        name\n        description\n        url\n        language\n      }\n    }\n    ";
      var url = "/graphql";
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          query: query
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return _this2.setState({
          data: res.data.repos
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __jsx("div", {
        style: {
          textAlign: "center"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7
        }
      }, __jsx("div", {
        style: {
          maxWidth: "80vw",
          display: "inline-block",
          fontFamily: "Roboto",
          overflow: "scroll"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_8__["Table"], {
        bordered: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, __jsx("thead", {
        style: {
          background: "#808080",
          borderStyle: "inset"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx("tr", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, "ID"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, "Repository Name"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, "Description"), __jsx("th", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, "Language"))), this.state.data.map(function (row) {
        var _jsx;

        return __jsx("tr", {
          scope: "row",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 37
          }
        }, __jsx("td", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 53
          }
        }, row.id), __jsx("td", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 70
          }
        }, __jsx("a", (_jsx = {
          href: true,
          target: "_blank"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "href", row.url), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 74
        }), _jsx), row.name)), __jsx("td", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 132
          }
        }, row.description), __jsx("td", {
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 158
          }
        }, row.language));
      }))));
    }
  }]);

  return ProjectTable;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectTable);

/***/ })

})
//# sourceMappingURL=projects.js.35f28865e6e817a33758.hot-update.js.map