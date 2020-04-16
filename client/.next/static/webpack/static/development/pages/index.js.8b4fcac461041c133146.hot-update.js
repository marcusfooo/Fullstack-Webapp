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
      }, __jsx("title", {
        className: "jsx-1656132742",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }
      }, "I'm Marcus Foo"), __jsx("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css",
        className: "jsx-1656132742",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 9
        }
      })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 9
        }
      }), __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "headerContainer wow slideInUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }
      }), __jsx("h1", {
        className: "jsx-1656132742" + " " + "sectiontitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, "Here's what I've done so far"), __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "wow slideInLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
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
          lineNumber: 48,
          columnNumber: 11
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "wow slideInRight",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
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
          lineNumber: 61,
          columnNumber: 11
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "wow slideInLeft",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
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
            lineNumber: 82,
            columnNumber: 24
          }
        }, __jsx("li", {
          className: "jsx-1656132742",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }
        }, "Technical Director at Nanyang Open Source Society"), __jsx("li", {
          className: "jsx-1656132742",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }
        }, "Business Manager at Nanyang Banking & Finance Club")),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 11
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "headerContainer wow slideInUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-1656132742" + " " + "sectiontitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 9
        }
      }, "My Ethos"), __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 9
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "wow slideInUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 7
        }
      }, __jsx(_components_Ethos__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "headerContainer wow slideInUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 7
        }
      }, __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 9
        }
      }), __jsx("h1", {
        className: "jsx-1656132742" + " " + "sectiontitle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
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
          lineNumber: 109,
          columnNumber: 55
        }
      }, "My Website Architecture")), __jsx("div", {
        className: "jsx-1656132742" + " " + "line",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }
      })), __jsx("div", {
        "data-wow-offset": "20",
        className: "jsx-1656132742" + " " + "wow slideInUp",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 7
        }
      }, __jsx(_components_Technology__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 9
        }
      })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 7
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1656132742",
        __self: this
      }, ".headerContainer.jsx-1656132742{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.sectiontitle.jsx-1656132742{text-align:center;color:black;margin:45px 25px;font-size:2.5rem;font-weight:bold;}.line.jsx-1656132742{width:25vw;height:5px;background:#404040;margin:70px 2vw;border-radius:15px;}@media (max-width:768px){.sectiontitle.jsx-1656132742{font-size:1.5rem;margin:55px 10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkhrQixBQUk0QixBQUtLLEFBUVAsQUFTUyxXQVJULE1BU1UsQ0FqQlQsSUFTTyxRQVJGLElBaUJqQixPQVJnQixNQVJDLFVBU0UsT0FSRixVQVJNLEVBaUJ6QixLQVJBLDRGQVJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJ1xyXG5pbXBvcnQgRXhwZXJpZW5jZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQ2FyZCdcclxuaW1wb3J0IE15RXRob3MgZnJvbSAnLi4vY29tcG9uZW50cy9FdGhvcydcclxuaW1wb3J0IFRlY2hub2xvZ3kgZnJvbSAnLi4vY29tcG9uZW50cy9UZWNobm9sb2d5J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xyXG5jb25zdCBXT1cgPSAhaXNTZXJ2ZXIgPyByZXF1aXJlKCd3b3cuanMnKSA6IG51bGwgXHJcblxyXG5leHBvcnQgY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkgeyBcclxuICAgIGNvbnN0IHdvdyA9IG5ldyBXT1coXHJcbiAgICAgIHtcclxuICAgICAgICBib3hDbGFzczogICAgICd3b3cnLCAgICAgIC8vIGRlZmF1bHRcclxuICAgICAgICBhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsIC8vIGRlZmF1bHRcclxuICAgICAgICBvZmZzZXQ6ICAgICAgIDAsICAgICAgICAgIC8vIGRlZmF1bHRcclxuICAgICAgICBtb2JpbGU6ICAgICAgIHRydWUsICAgICAgIFxyXG4gICAgICAgIGxpdmU6ICAgICAgICAgdHJ1ZSAgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgd293LmluaXQoKTtcclxuICB9IFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cclxuICAgICAgICB7LyogVG9wIGJhbm5lciBzZWN0aW9uICovfVxyXG5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+SSdtIE1hcmN1cyBGb288L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC42LjEvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXCI+PC9saW5rPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICBcclxuICAgICAgICA8TGF5b3V0IC8+XHJcbiAgICAgICAgPEhlcm8gLz4gICBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlckNvbnRhaW5lciB3b3cgc2xpZGVJblVwXCIgZGF0YS13b3ctb2Zmc2V0PVwiMjBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb250aXRsZVwiID5IZXJlJ3Mgd2hhdCBJJ3ZlIGRvbmUgc28gZmFyPC9oMT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICBcclxuXHJcbiAgICAgIHsvKiBFeHBlcmllbmNlcyBzZWN0aW9uICovfSAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvdyBzbGlkZUluTGVmdFwiIGRhdGEtd293LW9mZnNldD1cIjIwXCI+XHJcbiAgICAgICAgICA8RXhwZXJpZW5jZUNhcmQgXHJcbiAgICAgICAgICBpbWFnZT1cIi9UZW1hc2VrLmpwZ1wiXHJcbiAgICAgICAgICBpbWFnZV9hbHQ9XCJUZW1hc2VrIEltYWdlXCJcclxuICAgICAgICAgIGxpbms9XCJodHRwczovL3d3dy50ZW1hc2VrLmNvbS5zZy9lbi9pbmRleFwiXHJcbiAgICAgICAgICB0aXRsZT1cIlRlbWFzZWsgSG9sZGluZ3NcIlxyXG4gICAgICAgICAgZGF0ZT1cIihNYXkgMjAyMCAtIFByZXNlbnQpXCJcclxuICAgICAgICAgIGNvdW50cnkgPSBcIlNpbmdhcG9yZSwgU0dcIlxyXG4gICAgICAgICAgcG9zaXRpb249XCJTb2Z0d2FyZSBFbmdpbmVlciBJbnRlcm5cIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJQYXJ0IG9mIHRoZSBUZW1hc2VrIERpZ2l0YWwgVGVhbS4gV29ya2luZyBjbG9zZWx5IHdpdGggb3RoZXIgdGVhbSBtZW1iZXJzIGluIGFuIGFnaWxlIHNldHVwIHRvIGRldmVsb3Agc29mdHdhcmUgZm9yIGRpZ2l0YWwgaW5pdGlhdGl2ZXMsIGxldmVyYWdpbmcgYmlnIGRhdGEsIG1hY2hpbmUgbGVhcm5pbmcgYW5kIGNsb3VkIHRlY2hub2xvZ2llcy5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3cgc2xpZGVJblJpZ2h0XCIgZGF0YS13b3ctb2Zmc2V0PVwiMjBcIj5cclxuICAgICAgICAgIDxFeHBlcmllbmNlQ2FyZCBcclxuICAgICAgICAgIGltYWdlPVwiL3NhdHVyZGF5X2tpZHMucG5nXCJcclxuICAgICAgICAgIGltYWdlX2FsdD1cIlNhdHVyZGF5IEtpZHMgSW1hZ2VcIlxyXG4gICAgICAgICAgbGluaz1cImh0dHBzOi8vd3d3LnNhdHVyZGF5a2lkcy5jb20vXCJcclxuICAgICAgICAgIHRpdGxlPVwiU2F0dXJkYXkgS2lkc1wiXHJcbiAgICAgICAgICBkYXRlPVwiKEphbiAyMDIwIC0gUHJlc2VudClcIlxyXG4gICAgICAgICAgY291bnRyeSA9IFwiU2luZ2Fwb3JlLCBTR1wiXHJcbiAgICAgICAgICBwb3NpdGlvbj1cIlB5dGhvbiBJbnN0cnVjdG9yXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU2VsZWN0ZWQgYXMgYSBQeXRob24gSW5zdHJ1Y3RvciBmb3IgdGhlIEJ1a2l0IFBhbmphbmcgbGlicmFyeSBzdHVkZW50cy4gSW4gY29sbGFib3JhdGlvbiB3aXRoIEdvb2dsZSBhbmQgSU1EQSwgSSBsZWQgYSBncm91cCBvZiBhc3Npc3RhbnRzIHRvIHRlYWNoIGEgY2xhc3Mgb2YgMTggc3R1ZGVudHMuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3cgc2xpZGVJbkxlZnRcIiBkYXRhLXdvdy1vZmZzZXQ9XCIyMFwiPlxyXG4gICAgICAgICAgPEV4cGVyaWVuY2VDYXJkIFxyXG4gICAgICAgICAgaW1hZ2U9XCIvbnR1LmpwZ1wiXHJcbiAgICAgICAgICBpbWFnZV9hbHQ9XCJOVFUgSW1hZ2VcIlxyXG4gICAgICAgICAgbGluaz1cImh0dHBzOi8vd3d3Lm50dS5lZHUuc2cvUGFnZXMvaG9tZS5hc3B4XCJcclxuICAgICAgICAgIHRpdGxlPVwiTlRVXCJcclxuICAgICAgICAgIGRhdGU9XCIoQXVnIDIwMTkgLSBQcmVzZW50KVwiXHJcbiAgICAgICAgICBjb3VudHJ5ID0gXCJTaW5nYXBvcmUsIFNHXCJcclxuICAgICAgICAgIHBvc2l0aW9uPVwiRG91YmxlIERlZ3JlZSBpbiBCdXNpbmVzcyBBbmFseXRpY3MgJiBDb21wdXRlciBTY2llbmNlXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPXs8dWw+XHJcbiAgICAgICAgICAgIDxsaT5UZWNobmljYWwgRGlyZWN0b3IgYXQgTmFueWFuZyBPcGVuIFNvdXJjZSBTb2NpZXR5PC9saT5cclxuICAgICAgICAgICAgPGxpPkJ1c2luZXNzIE1hbmFnZXIgYXQgTmFueWFuZyBCYW5raW5nICYgRmluYW5jZSBDbHViPC9saT5cclxuICAgICAgICAgICAgPC91bD59XHJcbiAgICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcblxyXG4gICAgICB7LyogRXRob3Mgc2VjdGlvbiAqL30gIFxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJDb250YWluZXIgd293IHNsaWRlSW5VcFwiIGRhdGEtd293LW9mZnNldD1cIjIwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb250aXRsZVwiID5NeSBFdGhvczwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3cgc2xpZGVJblVwXCIgZGF0YS13b3ctb2Zmc2V0PVwiMjBcIj5cclxuICAgICAgICA8TXlFdGhvcyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgey8qIFRlY2hub2xvZ3kgc2VjdGlvbiAqL30gXHJcblxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJDb250YWluZXIgd293IHNsaWRlSW5VcFwiIGRhdGEtd293LW9mZnNldD1cIjIwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNlY3Rpb250aXRsZVwiID5UZWNobm9sb2d5IFN0YWNrPHAgc3R5bGU9e3tmb250RmFtaWx5OlwiUm9ib3RvXCIsIGZvbnRXZWlnaHQ6XCI1MDBcIiwgZm9udFNpemU6XCIxLjc1cmVtXCJ9fT5NeSBXZWJzaXRlIEFyY2hpdGVjdHVyZTwvcD48L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3cgc2xpZGVJblVwXCIgZGF0YS13b3ctb2Zmc2V0PVwiMjBcIj5cclxuICAgICAgICA8VGVjaG5vbG9neSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcblxyXG5cclxuICAgICAgey8qIEZvb3RlciBzZWN0aW9uICovfVxyXG4gICAgICBcclxuXHJcbiAgICAgIDxGb290ZXIgLz5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcblxyXG4gICAgICAgICAgICAuaGVhZGVyQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc2VjdGlvbnRpdGxlIHtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogNDVweCAyNXB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGluZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDI1dnc7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQwNDA0MDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDcwcHggMnZ3O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgIC5zZWN0aW9udGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6MS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW46IDU1cHggMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIGB9IDwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgXHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbmRleFxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\pages\\\\index.js */"));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

})
//# sourceMappingURL=index.js.8b4fcac461041c133146.hot-update.js.map