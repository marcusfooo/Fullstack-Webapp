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
        className: "jsx-4257482529" + " " + "Container",
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
        className: "jsx-4257482529" + " " + "tableContainer",
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
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 9
        }
      }, __jsx("tr", {
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9
        }
      }, __jsx("th", {
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, "ID"), __jsx("th", {
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }, "Repository Name"), __jsx("th", {
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, "Description"), __jsx("th", {
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      }, "Language")), __jsx("tr", {
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }
      }, __jsx("th", {
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }
      }, "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"), __jsx("th", {
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }
      }, "Repository Namexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"), __jsx("th", {
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }
      }, "Descriptionxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"), __jsx("th", {
        className: "jsx-4257482529",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }
      }, "Languagexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"))), this.state.data.map(function (row) {
        var _jsx;

        return __jsx("tr", {
          scope: "row",
          className: "jsx-4257482529",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 37
          }
        }, __jsx("td", {
          className: "jsx-4257482529",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 53
          }
        }, row.id), __jsx("td", {
          className: "jsx-4257482529",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 70
          }
        }, __jsx("a", (_jsx = {
          href: true,
          target: "_blank"
        }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "href", row.url), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "className", "jsx-4257482529"), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", _this3), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 74
        }), _jsx), row.name)), __jsx("td", {
          className: "jsx-4257482529",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 132
          }
        }, row.description), __jsx("td", {
          className: "jsx-4257482529",
          __self: _this3,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 158
          }
        }, row.language));
      }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "4257482529",
        __self: this
      }, ".Container.jsx-4257482529{margin-bottom:2.5vh;text-align:center;overflow:scroll;}@media (max-width:768px){.Container.jsx-4257482529{max-width:93vw;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxQcm9qZWN0VGFibGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERvQixBQUlpQyxBQVNyQixlQUFDLEtBUmtCLGtCQUNGLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmN1c1xcRGVza3RvcFxcUHJvamVjdHNcXFdlYnNpdGVcXGNsaWVudFxcY29tcG9uZW50c1xcUHJvamVjdFRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGFibGUgfSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XHJcblxyXG5cclxuXHJcbmNsYXNzIFByb2plY3RUYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgZGF0YTogW3t9XX07XHJcbiAgICB0aGlzLmZldGNoR2l0aHViID0gdGhpcy5mZXRjaEdpdGh1Yi5iaW5kKHRoaXMpXHJcbiAgfVxyXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XHJcbiAgICB0aGlzLmZldGNoR2l0aHViKClcclxuIH1cclxuICBmZXRjaEdpdGh1YigpIHsgICAgXHJcbiAgICBjb25zdCBxdWVyeSA9IGBcclxuICAgIHF1ZXJ5IHtcclxuICAgICAgcmVwb3Mge1xyXG4gICAgICAgIGlkXHJcbiAgICAgICAgbmFtZVxyXG4gICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgdXJsXHJcbiAgICAgICAgbGFuZ3VhZ2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgYDtcclxuICBjb25zdCB1cmwgPSBcIi9ncmFwaHFsXCI7XHJcbiAgZmV0Y2godXJsLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHsgXHJcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgICAgICBcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHF1ZXJ5OiBxdWVyeSB9KSxcclxuICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihyZXMgPT4gdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcmVzLmRhdGEucmVwb3N9KSlcclxuXHJcbn1cclxuICByZW5kZXIoKSB7XHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWUgPSBcIkNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0gXCJ0YWJsZUNvbnRhaW5lclwiIHN0eWxlPSB7e21heFdpZHRoOlwiODB2d1wiLCBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBmb250RmFtaWx5OlwiUm9ib3RvXCJ9fT5cclxuICAgICAgICA8VGFibGUgYm9yZGVyZWQ+XHJcbiAgICAgICAgPHRoZWFkIHN0eWxlPXt7YmFja2dyb3VuZDpcIiM4MDgwODBcIiwgYm9yZGVyU3R5bGU6XCJpbnNldFwifX0+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPklEPC90aD5cclxuICAgICAgICAgIDx0aD5SZXBvc2l0b3J5IE5hbWU8L3RoPlxyXG4gICAgICAgICAgPHRoPkRlc2NyaXB0aW9uPC90aD5cclxuICAgICAgICAgIDx0aD5MYW5ndWFnZTwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHg8L3RoPlxyXG4gICAgICAgICAgPHRoPlJlcG9zaXRvcnkgTmFtZXh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHg8L3RoPlxyXG4gICAgICAgICAgPHRoPkRlc2NyaXB0aW9ueHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4PC90aD5cclxuICAgICAgICAgIDx0aD5MYW5ndWFnZXh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHg8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuZGF0YS5tYXAocm93ID0+IDx0ciBzY29wZT1cInJvd1wiPjx0ZD57cm93LmlkfTwvdGQ+PHRkPjxhIGhyZWYgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17cm93LnVybH0+e3Jvdy5uYW1lfTwvYT48L3RkPjx0ZD57cm93LmRlc2NyaXB0aW9ufTwvdGQ+PHRkPntyb3cubGFuZ3VhZ2V9PC90ZD48L3RyPiApfVxyXG4gICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICAgIC5Db250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyLjV2aDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLkNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6OTN2d1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH0gPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICk7XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0VGFibGU7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\components\\\\ProjectTable.js */"));
    }
  }]);

  return ProjectTable;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProjectTable);

/***/ })

})
//# sourceMappingURL=projects.js.0f7c765bb60c8c9a5e81.hot-update.js.map