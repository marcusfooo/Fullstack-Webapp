webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_ExperienceCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ExperienceCard */ "./components/ExperienceCard.js");
/* harmony import */ var _components_Ethos__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Ethos */ "./components/Ethos.js");
/* harmony import */ var _components_Technology__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Technology */ "./components/Technology.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");





var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var isServer = false;
var WOW = !isServer ? __webpack_require__(/*! wow.js */ "./node_modules/wow.js/dist/wow.js") : null;
var index = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(index, _Component);

  var _super = _createSuper(index);

  function index() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, index);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var wow = new WOW({
        boxClass: 'wow',
        // default
        animateClass: 'animated',
        // default
        offset: 0,
        // default
        mobile: true,
        live: true // default

      });
      wow.init();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-1656132742" + " " + "main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 7
        }
      }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }
      }, __jsx("meta", {
        property: "og:title",
        content: "My Personal Website",
        className: "jsx-1656132742",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }), __jsx("meta", {
        property: "og:type",
        content: "website",
        className: "jsx-1656132742",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      }), __jsx("meta", {
        property: "og:image",
        content: "https://marcusfoo.io/Hero.jpg",
        className: "jsx-1656132742",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }), __jsx("title", {
        className: "jsx-1656132742",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }
      }, "I'm Marcus Foo"), __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css",
        className: "jsx-1656132742",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }), __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "headerContainer wow slideInUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }), __jsx("h1", {
        className: "jsx-1656132742" + " " + "sectiontitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, "Here's what I've done so far"), __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "wow slideInLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 7
        }
      }, __jsx(_components_ExperienceCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        image: "/Temasek.jpg",
        image_alt: "Temasek Image",
        link: "https://www.temasek.com.sg/en/index",
        title: "Temasek Holdings",
        date: "(May 2020 - Present)",
        country: "Singapore, SG",
        position: "Software Engineer Intern",
        description: "Part of the Temasek Digital Team. Working closely with other team members in an agile setup to develop software for digital initiatives, leveraging big data, machine learning and cloud technologies.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "wow slideInRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 7
        }
      }, __jsx(_components_ExperienceCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        image: "/saturday_kids.png",
        image_alt: "Saturday Kids Image",
        link: "https://www.saturdaykids.com/",
        title: "Saturday Kids",
        date: "(Jan 2020 - Present)",
        country: "Singapore, SG",
        position: "Python Instructor",
        description: "Selected as a Python Instructor for the Bukit Panjang library students. In collaboration with Google and IMDA, I led a group of assistants to teach a class of 18 students.",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "wow slideInLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 7
        }
      }, __jsx(_components_ExperienceCard__WEBPACK_IMPORTED_MODULE_10__["default"], {
        image: "/ntu.jpg",
        image_alt: "NTU Image",
        link: "https://www.ntu.edu.sg/Pages/home.aspx",
        title: "NTU",
        date: "(Aug 2019 - Present)",
        country: "Singapore, SG",
        position: "Double Degree in Business Analytics & Computer Science",
        description: __jsx("ul", {
          className: "jsx-1656132742",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 24
          }
        }, __jsx("li", {
          className: "jsx-1656132742",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }
        }, "Technical Director at Nanyang Open Source Society"), __jsx("li", {
          className: "jsx-1656132742",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }
        }, "Business Manager at Nanyang Banking & Finance Club")),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "headerContainer wow slideInUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-1656132742" + " " + "sectiontitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 9
        }
      }, "My Ethos"), __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 9
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "wow slideInUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 7
        }
      }, __jsx(_components_Ethos__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 9
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "headerContainer wow slideInUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-1656132742" + " " + "sectiontitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 9
        }
      }, "Technology Stack", __jsx("p", {
        style: {
          fontFamily: "Roboto",
          fontWeight: "500",
          fontSize: "1.75rem"
        },
        className: "jsx-1656132742",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 55
        }
      }, "My Website Architecture")), __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "wow slideInUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 7
        }
      }, __jsx(_components_Technology__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 9
        }
      })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 7
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1656132742",
        __self: this
      }, ".headerContainer.jsx-1656132742{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.sectiontitle.jsx-1656132742{text-align:center;color:black;margin:45px 25px;font-size:2.5rem;font-weight:bold;}.line.jsx-1656132742{width:25vw;height:5px;background:#404040;margin:70px 2vw;border-radius:15px;}@media (max-width:768px){.sectiontitle.jsx-1656132742{font-size:1.5rem;margin:55px 10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEhrQixBQUk0QixBQUtLLEFBUVAsQUFTUyxXQVJULE1BU1UsQ0FqQlQsSUFTTyxRQVJGLElBaUJqQixPQVJnQixNQVJDLFVBU0UsT0FSRixVQVJNLEVBaUJ6QixLQVJBLDRGQVJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJ1xyXG5pbXBvcnQgRXhwZXJpZW5jZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQ2FyZCdcclxuaW1wb3J0IE15RXRob3MgZnJvbSAnLi4vY29tcG9uZW50cy9FdGhvcydcclxuaW1wb3J0IFRlY2hub2xvZ3kgZnJvbSAnLi4vY29tcG9uZW50cy9UZWNobm9sb2d5J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xyXG5jb25zdCBXT1cgPSAhaXNTZXJ2ZXIgPyByZXF1aXJlKCd3b3cuanMnKSA6IG51bGwgXHJcblxyXG5leHBvcnQgY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkgeyBcclxuICAgIGNvbnN0IHdvdyA9IG5ldyBXT1coXHJcbiAgICAgIHtcclxuICAgICAgICBib3hDbGFzczogICAgICd3b3cnLCAgICAgIC8vIGRlZmF1bHRcclxuICAgICAgICBhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsIC8vIGRlZmF1bHRcclxuICAgICAgICBvZmZzZXQ6ICAgICAgIDAsICAgICAgICAgIC8vIGRlZmF1bHRcclxuICAgICAgICBtb2JpbGU6ICAgICAgIHRydWUsICAgICAgIFxyXG4gICAgICAgIGxpdmU6ICAgICAgICAgdHJ1ZSAgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgd293LmluaXQoKTtcclxuICB9IFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cclxuICAgICAgICB7LyogVG9wIGJhbm5lciBzZWN0aW9uICovfVxyXG5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk15IFBlcnNvbmFsIFdlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD1cImh0dHBzOi8vbWFyY3VzZm9vLmlvL0hlcm8uanBnXCIvPlxyXG4gICAgICAgIDx0aXRsZT5JJ20gTWFyY3VzIEZvbzwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjYuMS9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIj48L2xpbms+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxMYXlvdXQgLz5cclxuICAgICAgICA8SGVybyAvPiAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQ29udGFpbmVyIHdvdyBzbGlkZUluVXBcIiBkYXRhLXdvdy1vZmZzZXQ9XCIyMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbnRpdGxlXCIgPkhlcmUncyB3aGF0IEkndmUgZG9uZSBzbyBmYXI8L2gxPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgey8qIEV4cGVyaWVuY2VzIHNlY3Rpb24gKi99ICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid293IHNsaWRlSW5MZWZ0XCIgZGF0YS13b3ctb2Zmc2V0PVwiMjBcIj5cclxuICAgICAgICAgIDxFeHBlcmllbmNlQ2FyZCBcclxuICAgICAgICAgIGltYWdlPVwiL1RlbWFzZWsuanBnXCJcclxuICAgICAgICAgIGltYWdlX2FsdD1cIlRlbWFzZWsgSW1hZ2VcIlxyXG4gICAgICAgICAgbGluaz1cImh0dHBzOi8vd3d3LnRlbWFzZWsuY29tLnNnL2VuL2luZGV4XCJcclxuICAgICAgICAgIHRpdGxlPVwiVGVtYXNlayBIb2xkaW5nc1wiXHJcbiAgICAgICAgICBkYXRlPVwiKE1heSAyMDIwIC0gUHJlc2VudClcIlxyXG4gICAgICAgICAgY291bnRyeSA9IFwiU2luZ2Fwb3JlLCBTR1wiXHJcbiAgICAgICAgICBwb3NpdGlvbj1cIlNvZnR3YXJlIEVuZ2luZWVyIEludGVyblwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlBhcnQgb2YgdGhlIFRlbWFzZWsgRGlnaXRhbCBUZWFtLiBXb3JraW5nIGNsb3NlbHkgd2l0aCBvdGhlciB0ZWFtIG1lbWJlcnMgaW4gYW4gYWdpbGUgc2V0dXAgdG8gZGV2ZWxvcCBzb2Z0d2FyZSBmb3IgZGlnaXRhbCBpbml0aWF0aXZlcywgbGV2ZXJhZ2luZyBiaWcgZGF0YSwgbWFjaGluZSBsZWFybmluZyBhbmQgY2xvdWQgdGVjaG5vbG9naWVzLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvdyBzbGlkZUluUmlnaHRcIiBkYXRhLXdvdy1vZmZzZXQ9XCIyMFwiPlxyXG4gICAgICAgICAgPEV4cGVyaWVuY2VDYXJkIFxyXG4gICAgICAgICAgaW1hZ2U9XCIvc2F0dXJkYXlfa2lkcy5wbmdcIlxyXG4gICAgICAgICAgaW1hZ2VfYWx0PVwiU2F0dXJkYXkgS2lkcyBJbWFnZVwiXHJcbiAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly93d3cuc2F0dXJkYXlraWRzLmNvbS9cIlxyXG4gICAgICAgICAgdGl0bGU9XCJTYXR1cmRheSBLaWRzXCJcclxuICAgICAgICAgIGRhdGU9XCIoSmFuIDIwMjAgLSBQcmVzZW50KVwiXHJcbiAgICAgICAgICBjb3VudHJ5ID0gXCJTaW5nYXBvcmUsIFNHXCJcclxuICAgICAgICAgIHBvc2l0aW9uPVwiUHl0aG9uIEluc3RydWN0b3JcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJTZWxlY3RlZCBhcyBhIFB5dGhvbiBJbnN0cnVjdG9yIGZvciB0aGUgQnVraXQgUGFuamFuZyBsaWJyYXJ5IHN0dWRlbnRzLiBJbiBjb2xsYWJvcmF0aW9uIHdpdGggR29vZ2xlIGFuZCBJTURBLCBJIGxlZCBhIGdyb3VwIG9mIGFzc2lzdGFudHMgdG8gdGVhY2ggYSBjbGFzcyBvZiAxOCBzdHVkZW50cy5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvdyBzbGlkZUluTGVmdFwiIGRhdGEtd293LW9mZnNldD1cIjIwXCI+XHJcbiAgICAgICAgICA8RXhwZXJpZW5jZUNhcmQgXHJcbiAgICAgICAgICBpbWFnZT1cIi9udHUuanBnXCJcclxuICAgICAgICAgIGltYWdlX2FsdD1cIk5UVSBJbWFnZVwiXHJcbiAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly93d3cubnR1LmVkdS5zZy9QYWdlcy9ob21lLmFzcHhcIlxyXG4gICAgICAgICAgdGl0bGU9XCJOVFVcIlxyXG4gICAgICAgICAgZGF0ZT1cIihBdWcgMjAxOSAtIFByZXNlbnQpXCJcclxuICAgICAgICAgIGNvdW50cnkgPSBcIlNpbmdhcG9yZSwgU0dcIlxyXG4gICAgICAgICAgcG9zaXRpb249XCJEb3VibGUgRGVncmVlIGluIEJ1c2luZXNzIEFuYWx5dGljcyAmIENvbXB1dGVyIFNjaWVuY2VcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249ezx1bD5cclxuICAgICAgICAgICAgPGxpPlRlY2huaWNhbCBEaXJlY3RvciBhdCBOYW55YW5nIE9wZW4gU291cmNlIFNvY2lldHk8L2xpPlxyXG4gICAgICAgICAgICA8bGk+QnVzaW5lc3MgTWFuYWdlciBhdCBOYW55YW5nIEJhbmtpbmcgJiBGaW5hbmNlIENsdWI8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPn1cclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuXHJcbiAgICAgIHsvKiBFdGhvcyBzZWN0aW9uICovfSAgXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRhaW5lciB3b3cgc2xpZGVJblVwXCIgZGF0YS13b3ctb2Zmc2V0PVwiMjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbnRpdGxlXCIgPk15IEV0aG9zPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvdyBzbGlkZUluVXBcIiBkYXRhLXdvdy1vZmZzZXQ9XCIyMFwiPlxyXG4gICAgICAgIDxNeUV0aG9zIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuXHJcblxyXG4gICAgICB7LyogVGVjaG5vbG9neSBzZWN0aW9uICovfSBcclxuXHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRhaW5lciB3b3cgc2xpZGVJblVwXCIgZGF0YS13b3ctb2Zmc2V0PVwiMjBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwic2VjdGlvbnRpdGxlXCIgPlRlY2hub2xvZ3kgU3RhY2s8cCBzdHlsZT17e2ZvbnRGYW1pbHk6XCJSb2JvdG9cIiwgZm9udFdlaWdodDpcIjUwMFwiLCBmb250U2l6ZTpcIjEuNzVyZW1cIn19Pk15IFdlYnNpdGUgQXJjaGl0ZWN0dXJlPC9wPjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvdyBzbGlkZUluVXBcIiBkYXRhLXdvdy1vZmZzZXQ9XCIyMFwiPlxyXG4gICAgICAgIDxUZWNobm9sb2d5IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuXHJcblxyXG4gICAgICB7LyogRm9vdGVyIHNlY3Rpb24gKi99XHJcbiAgICAgIFxyXG5cclxuICAgICAgPEZvb3RlciAvPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXJDb250YWluZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zZWN0aW9udGl0bGUge1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA0NXB4IDI1cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjV2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDA0MDQwO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNzBweCAydnc7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgLnNlY3Rpb250aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTVweCAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgYH0gPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICBcclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\pages\\\\index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.3d49ad4c5f8a2bcde7b4.hot-update.js.map