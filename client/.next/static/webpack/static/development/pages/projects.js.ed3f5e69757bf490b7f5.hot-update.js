webpackHotUpdate("static\\development\\pages\\projects.js",{

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\NavigationBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var NavigationBar = function NavigationBar(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    className: "navigationbar",
    color: "light",
    light: true,
    expand: "md",
    fixed: 'top',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarToggler"], {
    onClick: toggle,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "mr-auto",
    navbar: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    style: {
      fontFamily: 'Roboto',
      fontSize: '30px',
      padding: '1rem'
    },
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: "jsx-1150477233" + " " + "navtab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 114
    }
  }, "Home"), " "))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    style: {
      fontFamily: 'Roboto',
      fontSize: '30px',
      padding: '1rem'
    },
    href: "/projects",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 38
    }
  }, __jsx("div", {
    className: "jsx-1150477233" + " " + "navtab",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 130
    }
  }, "Projects")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1150477233",
    __self: _this
  }, "@media (max-width:768px){.navtab.jsx-1150477233{color:black;}}@media (min-width:768px){.navtab.jsx-1150477233{color:black;}.navtab.jsx-1150477233:hover{color:#3377CC;-webkit-transition-duration:0.5s;transition-duration:0.5s;-webkit-animation:jiggle-jsx-1150477233 0.5s infinite linear;animation:jiggle-jsx-1150477233 0.5s infinite linear;}@-webkit-keyframes jiggle-jsx-1150477233{0%{-webkit-transform:rotate(0deg) scale(1.15,1.15);-ms-transform:rotate(0deg) scale(1.15,1.15);transform:rotate(0deg) scale(1.15,1.15);}50%{-webkit-transform:rotate(1deg) scale(1.15,1.15);-ms-transform:rotate(1deg) scale(1.15,1.15);transform:rotate(1deg) scale(1.15,1.15);}100%{-webkit-transform:rotate(-1deg) scale(1.15,1.15);-ms-transform:rotate(-1deg) scale(1.15,1.15);transform:rotate(-1deg) scale(1.15,1.15);}}@keyframes jiggle-jsx-1150477233{0%{-webkit-transform:rotate(0deg) scale(1.15,1.15);-ms-transform:rotate(0deg) scale(1.15,1.15);transform:rotate(0deg) scale(1.15,1.15);}50%{-webkit-transform:rotate(1deg) scale(1.15,1.15);-ms-transform:rotate(1deg) scale(1.15,1.15);transform:rotate(1deg) scale(1.15,1.15);}100%{-webkit-transform:rotate(-1deg) scale(1.15,1.15);-ms-transform:rotate(-1deg) scale(1.15,1.15);transform:rotate(-1deg) scale(1.15,1.15);}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDb0IsQUFJeUIsQUFLRSxBQUlFLEFBTTZCLEFBQ0MsQUFDRyxZQWhCakQsQUFLQSxFQUkyQiwwREFDYSw0REFJTSxBQUNDLEdBQ0csbURBTGxEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb2xsYXBzZSxcclxuICBOYXZiYXIsXHJcbiAgTmF2YmFyVG9nZ2xlcixcclxuICBOYXZiYXJCcmFuZCxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZMaW5rLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgTmF2YmFyVGV4dFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbkJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uYmFyXCIgY29sb3I9XCJsaWdodFwiIGxpZ2h0IGV4cGFuZD1cIm1kXCIgZml4ZWQ9eyd0b3AnfT5cclxuICAgICAgICA8TmF2YmFyVG9nZ2xlciAgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxOYXZMaW5rIHN0eWxlPXt7Zm9udEZhbWlseTogJ1JvYm90bycsIGZvbnRTaXplOiAnMzBweCcsIHBhZGRpbmc6ICcxcmVtJ319IGhyZWY9XCIvXCI+PGRpdiBjbGFzc05hbWU9XCJuYXZ0YWJcIj5Ib21lPC9kaXY+IDwvTmF2TGluaz48L0xpbms+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj48TmF2TGluayBzdHlsZT17e2ZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250U2l6ZTogJzMwcHgnLCBwYWRkaW5nOiAnMXJlbSd9fSBocmVmPVwiL3Byb2plY3RzXCI+PGRpdiBjbGFzc05hbWU9XCJuYXZ0YWJcIj5Qcm9qZWN0czwvZGl2PjwvTmF2TGluaz48L0xpbms+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAubmF2dGFiIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLm5hdnRhYiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2dGFiOmhvdmVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzNzdDQztcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogamlnZ2xlIDAuNXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGppZ2dsZSB7XHJcbiAgICAgICAgICAgICAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEuMTUsMS4xNSk7fVxyXG4gICAgICAgICAgICAgIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoMWRlZykgc2NhbGUoMS4xNSwxLjE1KTt9XHJcbiAgICAgICAgICAgICAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMTUsMS4xNSl9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICAgICBcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\components\\\\NavigationBar.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ })

})
//# sourceMappingURL=projects.js.ed3f5e69757bf490b7f5.hot-update.js.map