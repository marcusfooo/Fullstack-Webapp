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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\ProjectTable.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

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
      isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_10___default()(url, {
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
        className: "jsx-1539502509",
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
          fontFamily: "Roboto"
        },
        className: "jsx-1539502509" + " " + "tableContainer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Table"], {
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
        className: "jsx-1539502509",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx("tr", {
        className: "jsx-1539502509",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, __jsx("th", {
        className: "jsx-1539502509",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, "ID"), __jsx("th", {
        className: "jsx-1539502509",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, "Repository Name"), __jsx("th", {
        className: "jsx-1539502509",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, "Description"), __jsx("th", {
        className: "jsx-1539502509",
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
          className: "jsx-1539502509",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 37
          }
        }, __jsx("td", {
          className: "jsx-1539502509",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 53
          }
        }, row.id), __jsx("td", {
          className: "jsx-1539502509",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 70
          }
        }, __jsx("a", (_jsx = {
          href: true,
          target: "_blank"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "href", row.url), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-1539502509"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 74
        }), _jsx), row.name)), __jsx("td", {
          className: "jsx-1539502509",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 132
          }
        }, row.description), __jsx("td", {
          className: "jsx-1539502509",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 158
          }
        }, row.language));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1539502509",
        __self: this
      }, ".tableContainer.jsx-1539502509{margin-bottom:2.5vh;}@media (max-width:768px){.tableContainer.jsx-1539502509{overflow:scroll;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxQcm9qZWN0VGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RvQixBQUlpQyxBQUtBLGdCQUNwQixJQUxGIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxQcm9qZWN0VGFibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuXHJcblxyXG5cclxuY2xhc3MgUHJvamVjdFRhYmxlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBkYXRhOiBbe31dfTtcclxuICAgIHRoaXMuZmV0Y2hHaXRodWIgPSB0aGlzLmZldGNoR2l0aHViLmJpbmQodGhpcylcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgIHRoaXMuZmV0Y2hHaXRodWIoKVxyXG4gfVxyXG4gIGZldGNoR2l0aHViKCkgeyAgICBcclxuICAgIGNvbnN0IHF1ZXJ5ID0gYFxyXG4gICAgcXVlcnkge1xyXG4gICAgICByZXBvcyB7XHJcbiAgICAgICAgaWRcclxuICAgICAgICBuYW1lXHJcbiAgICAgICAgZGVzY3JpcHRpb25cclxuICAgICAgICB1cmxcclxuICAgICAgICBsYW5ndWFnZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBgO1xyXG4gIGNvbnN0IHVybCA9IFwiL2dyYXBocWxcIjtcclxuICBmZXRjaCh1cmwsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczogeyBcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAgICAgIFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgcXVlcnk6IHF1ZXJ5IH0pLFxyXG4gIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHJlcyA9PiB0aGlzLnNldFN0YXRlKHtkYXRhOiByZXMuZGF0YS5yZXBvc30pKVxyXG5cclxufVxyXG4gIHJlbmRlcigpIHtcclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCJ9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IFwidGFibGVDb250YWluZXJcInN0eWxlPSB7e21heFdpZHRoOlwiODB2d1wiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBmb250RmFtaWx5OlwiUm9ib3RvXCJ9fT5cclxuICAgICAgICA8VGFibGUgYm9yZGVyZWQ+XHJcbiAgICAgICAgPHRoZWFkIHN0eWxlPXt7YmFja2dyb3VuZDpcIiM4MDgwODBcIiwgYm9yZGVyU3R5bGU6XCJpbnNldFwifX0+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgIDx0aD5SZXBvc2l0b3J5IE5hbWU8L3RoPlxyXG4gICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgIDx0aD5MYW5ndWFnZTwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgPC90aGVhZD5cclxuICAgICAgICB7dGhpcy5zdGF0ZS5kYXRhLm1hcChyb3cgPT4gPHRyIHNjb3BlPVwicm93XCI+PHRkPntyb3cuaWR9PC90ZD48dGQ+PGEgaHJlZiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPXtyb3cudXJsfT57cm93Lm5hbWV9PC9hPjwvdGQ+PHRkPntyb3cuZGVzY3JpcHRpb259PC90ZD48dGQ+e3Jvdy5sYW5ndWFnZX08L3RkPjwvdHI+ICl9XHJcbiAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgICAgLnRhYmxlQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41dmg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIC50YWJsZUNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH0gPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0VGFibGU7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\components\\\\ProjectTable.js */"));
    }
  }]);

  return ProjectTable;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectTable);

/***/ })

})
//# sourceMappingURL=projects.js.3936f1d632055304a5b9.hot-update.js.map