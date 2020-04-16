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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Ethos.js":
/*!*****************************!*\
  !*** ./components/Ethos.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\Ethos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const items = [{
  src: '/people.jpg',
  altText: 'people',
  caption: 'People are the greatest assets of a team. Everyone matters when moving forward together as a Tribe.',
  header: 'People',
  key: '1'
}, {
  src: '/purpose.jpg',
  altText: 'Purpose',
  caption: '"It does not matter how slowly you go as long as you do not stop." Having a consistent direction means that reaching your goal, is only a matter of time',
  header: 'Purpose',
  key: '2'
}, {
  src: '/passion.jpg',
  altText: 'Passion',
  caption: 'Passion is energy. Enjoying what I do spurs me to give everything that is on my plate my best.',
  header: 'Passion',
  key: '3'
}];

const MyEthos = () => __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["UncontrolledCarousel"], {
  items: items,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 23
  }
});

/* harmony default export */ __webpack_exports__["default"] = (MyEthos);

/***/ }),

/***/ "./components/ExperienceCard.js":
/*!**************************************!*\
  !*** ./components/ExperienceCard.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\ExperienceCard.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const ExperienceCard = props => {
  return __jsx("div", {
    style: {
      textAlign: "center",
      fontFamily: "Roboto"
    },
    className: "jsx-2324677773",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2324677773" + " " + "mainContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2324677773" + " " + "imageContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("img", {
    src: props.image,
    alt: props.image_alt,
    className: "jsx-2324677773",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "jsx-2324677773" + " " + "subContainer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    href: props.link,
    className: "jsx-2324677773" + " " + "company",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, props.title), __jsx("p", {
    className: "jsx-2324677773" + " " + "jobTitle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, props.position, ", ", props.date), __jsx("p", {
    className: "jsx-2324677773" + " " + "country",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, props.country), __jsx("p", {
    className: "jsx-2324677773" + " " + "jobDescription",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, props.description))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2324677773",
    __self: undefined
  }, ".mainContainer.jsx-2324677773{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.subContainer.jsx-2324677773{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.container.jsx-2324677773{display:inline-block;}img.jsx-2324677773{border-radius:20px;}.company.jsx-2324677773{font-size:2rem;color:#3377cc;font-weight:500;}.jobTitle.jsx-2324677773{font-size:1.5rem;color:#5e9516;font-weight:500;}.country.jsx-2324677773{color:#50555c;font-weight:700;}a.jsx-2324677773:hover{color:#0080ff;-webkit-text-decoration:none;text-decoration:none;-webkit-transition-duration:0.5s;transition-duration:0.5s;}@media (max-width:768px){.mainContainer.jsx-2324677773{margin:5vh 5vw;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}img.jsx-2324677773{max-width:80vw;}}@media (min-width:768px){.mainContainer.jsx-2324677773{margin:5vh auto;max-width:50vw;}.subContainer.jsx-2324677773{text-align:left;height:30vh;}.imageContainer.jsx-2324677773{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:inline-flex;-ms-flex-direction:inline-flex;flex-direction:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}img.jsx-2324677773{width:20vw;}.company.jsx-2324677773{padding-left:2rem;}.jobTitle.jsx-2324677773{padding-left:2rem;}.country.jsx-2324677773{padding-left:2rem;}.jobDescription.jsx-2324677773{padding-left:2rem;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxFeHBlcmllbmNlQ2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmdCLEFBRzBCLEFBR0EsQUFLTyxBQUlELEFBSUosQUFNRSxBQU9ILEFBS0EsQUFPSyxBQVFwQixBQUtxQixBQUtBLEFBS0gsQUFPbEIsQUFJQSxBQUlBLEFBSUEsQUFJQSxXQWhCQyxHQXpDZ0IsQUFLSyxDQWxCUCxBQXlCRyxBQU9qQixDQU9ELEFBS0EsQ0F0Q2UsQ0FvRGQsQUFJQSxBQUlBLEFBSUEsQ0ExRUosRUFKQSxPQW9ESSxDQTNDZ0IsQ0FhcEIsQ0FQb0IsQUFnQ2hCLGNBckNKLEVBT0EsaUJBV0QsVUFwQ0MsQUFHMEIsQUE2RFMsZUFwQmhDLGlDQVJILDhCQWhDQSxlQXdDSSxBQXFCdUIsNkZBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxFeHBlcmllbmNlQ2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBFeHBlcmllbmNlQ2FyZCA9IChwcm9wcykgPT4ge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsIGZvbnRGYW1pbHk6XCJSb2JvdG9cIn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5Db250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvcHMuaW1hZ2V9IGFsdD17cHJvcHMuaW1hZ2VfYWx0fT48L2ltZz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiAgY2xhc3NOYW1lPVwiY29tcGFueVwiIGhyZWY9e3Byb3BzLmxpbmt9Pntwcm9wcy50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiam9iVGl0bGVcIj57cHJvcHMucG9zaXRpb259LCB7cHJvcHMuZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY291bnRyeVwiPntwcm9wcy5jb3VudHJ5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJqb2JEZXNjcmlwdGlvblwiPntwcm9wcy5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubWFpbkNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb21wYW55IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzNzdjYztcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5qb2JUaXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzVlOTUxNjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY291bnRyeSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNTA1NTVjO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA4MGZmO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXMgICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAubWFpbkNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDV2aCA1dnc7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODB2d1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLm1haW5Db250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiA1dmggYXV0bztcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTB2d1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuc3ViQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmhcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmltYWdlQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMjB2d1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuY29tcGFueSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmpvYlRpdGxlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY291bnRyeSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW1cclxuICAgICAgICAgICAgfSAgXHJcblxyXG4gICAgICAgICAgICAuam9iRGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAycmVtXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBgfSA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgICAgICBcclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXhwZXJpZW5jZUNhcmQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\components\\\\ExperienceCard.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (ExperienceCard);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Footer = props => {
  return __jsx("div", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("footer", {
    style: {
      fontFamily: "Roboto"
    },
    className: "jsx-4169141780" + " " + "site-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-4169141780" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4169141780" + " " + "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4169141780" + " " + "col-sm-12 col-md-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("h6", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "About"), __jsx("p", {
    className: "jsx-4169141780" + " " + "text-justify",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "With a passion for technology, I have explored and worked on projects involving Machine Learning and Full-Stack Development. I believe that there are many potentially disruptive opportunities by integrating Tech with Finance, and hope to accomplish this in the future."), __jsx("p", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, "I can be easily bribed over with a cup of coffee, so feel free to contact me either on Github or LinkedIn!")), __jsx("div", {
    className: "jsx-4169141780" + " " + "col-xs-6 col-md-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("h6", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Skill Sets"), __jsx("ul", {
    className: "jsx-4169141780" + " " + "footer-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Machine Learning"), __jsx("li", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "Full Stack Development"), __jsx("li", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, "Data Science"))), __jsx("div", {
    className: "jsx-4169141780" + " " + "col-xs-6 col-md-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx("h6", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, "Interests"), __jsx("ul", {
    className: "jsx-4169141780" + " " + "footer-links",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "Bartending"), __jsx("li", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "Long Distance Running"), __jsx("li", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, "Algorithmic Trading"), __jsx("li", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, "Coffee")))), __jsx("hr", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "jsx-4169141780" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4169141780" + " " + "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4169141780" + " " + "col-md-8 col-sm-6 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-4169141780" + " " + "col-md-4 col-sm-6 col-xs-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx("ul", {
    className: "jsx-4169141780" + " " + "social-icons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("a", {
    target: "_blank",
    href: "https://github.com/marcusfooo",
    className: "jsx-4169141780" + " " + "github",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-4169141780" + " " + "fa fa-github",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 94
    }
  }))), __jsx("li", {
    className: "jsx-4169141780",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("a", {
    target: "_blank",
    href: "https://www.linkedin.com/in/marcus-foo-86496513a/",
    className: "jsx-4169141780" + " " + "linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "jsx-4169141780" + " " + "fa fa-linkedin",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 116
    }
  })))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4169141780",
    __self: undefined
  }, ".site-footer.jsx-4169141780{background-color:#26272b;padding:45px 0 20px;font-size:15px;line-height:24px;color:#737373;}.site-footer.jsx-4169141780 hr.jsx-4169141780{border-top-color:#bbb;opacity:0.5;}.site-footer.jsx-4169141780 hr.small.jsx-4169141780{margin:20px 0;}.site-footer.jsx-4169141780 h6.jsx-4169141780{color:#fff;font-size:16px;text-transform:uppercase;margin-top:5px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.site-footer.jsx-4169141780 a.jsx-4169141780{color:#737373;}.site-footer.jsx-4169141780 a.jsx-4169141780:hover{color:#3366cc;-webkit-text-decoration:none;text-decoration:none;}.footer-links.jsx-4169141780{padding-left:0;list-style:none;}.footer-links.jsx-4169141780 li.jsx-4169141780{display:block;}.footer-links.jsx-4169141780 a.jsx-4169141780{color:#737373;}.footer-links.jsx-4169141780 a.jsx-4169141780:active,.footer-links.jsx-4169141780 a.jsx-4169141780:focus,.footer-links.jsx-4169141780 a.jsx-4169141780:hover{color:#3366cc;-webkit-text-decoration:none;text-decoration:none;}.footer-links.inline.jsx-4169141780 li.jsx-4169141780{display:inline-block;}.site-footer.jsx-4169141780 .social-icons.jsx-4169141780{text-align:right;}.site-footer.jsx-4169141780 .social-icons.jsx-4169141780 a.jsx-4169141780{width:40px;height:40px;line-height:40px;margin-left:6px;margin-right:0;border-radius:100%;background-color:#33353d;}.copyright-text.jsx-4169141780{margin:0;}@media (max-width:991px){.site-footer.jsx-4169141780 [className^=col-].jsx-4169141780{margin-bottom:30px;}}@media (max-width:767px){.site-footer.jsx-4169141780{padding-bottom:0;}.site-footer.jsx-4169141780 .copyright-text.jsx-4169141780,.site-footer.jsx-4169141780 .social-icons.jsx-4169141780{text-align:center;}}.social-icons.jsx-4169141780{padding-left:0;margin-bottom:0;list-style:none;}.social-icons.jsx-4169141780 li.jsx-4169141780{display:inline-block;margin-bottom:4px;}.social-icons.jsx-4169141780 li.title.jsx-4169141780{margin-right:15px;text-transform:uppercase;color:#96a2b2;font-weight:700;font-size:13px;}.social-icons.jsx-4169141780 a.jsx-4169141780{background-color:#eceeef;color:#818a91;font-size:16px;display:inline-block;line-height:44px;width:44px;height:44px;text-align:center;margin-right:8px;-webkit-transition:all .2s linear;-o-transition:all .2s linear;-webkit-transition:all .2s linear;transition:all .2s linear;}.social-icons.jsx-4169141780 a.jsx-4169141780:active,.social-icons.jsx-4169141780 a.jsx-4169141780:focus,.social-icons.jsx-4169141780 a.jsx-4169141780:hover{color:#fff;background-color:#29aafe;}.social-icons.size-sm.jsx-4169141780 a.jsx-4169141780{line-height:34px;height:34px;width:34px;font-size:14px;}.social-icons.jsx-4169141780 a.facebook.jsx-4169141780:hover{background-color:#3b5998;}.social-icons.jsx-4169141780 a.twitter.jsx-4169141780:hover{background-color:#00aced;}.social-icons.jsx-4169141780 a.linkedin.jsx-4169141780:hover{background-color:#007bb6;}.social-icons.jsx-4169141780 a.github.jsx-4169141780:hover{background-color:#6e5494;}@media (max-width:767px){.social-icons.jsx-4169141780 li.title.jsx-4169141780{display:block;margin-right:0;font-weight:600;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0RnQixBQUl1QyxBQVFILEFBTXhCLEFBR2EsQUFRRyxBQUlBLEFBS0MsQUFNakIsQUFJQSxBQUdnQixBQU1oQixBQUlBLEFBR2EsQUFXYixBQU1FLEFBT0EsQUFJQSxBQUllLEFBTU0sQUFLSCxBQU9PLEFBZWQsQUFLTSxBQVFuQixBQUlBLEFBSUEsQUFJQSxBQUtrQixTQXBGakIsRUFyRGdCLEFBMkNILEFBa0VkLEdBakhDLEFBWUEsQUFJc0IsQUFVdEIsQUFJQSxBQUlzQixBQTRHSixDQXhIbkIsQUF5RGtCLEVBcENqQixBQTJCRSxBQStDVyxDQTNDWCxBQWdCd0IsQ0EzQnhCLEVBeEJGLEFBK0NELENBMUZBLENBb0RtQixFQTdERyxBQThHTixBQTJCZixBQUlBLEFBSUEsQUFJQSxDQW5JMEIsR0FpSGQsQUEwQlgsRUExSEQsQUEyREQsR0FyRkMsRUFxSEEsR0EzQkEsQUFZZ0IsQ0FqREMsQUF1RWxCLEdBN0JnQixFQXZHQyxBQTRKZCxFQS9ERixJQTNFZ0IsR0E2Rk0sQ0FxQnRCLENBdEVnQixDQTBDQyxHQXZHQyxJQTRCbEIsQUFrQkEsRUEzQkQsS0EyQ3FCLEVBMkNyQixFQU1tQixFQTlHSCxXQXdHZixFQXpDRCxDQTlEQyxDQThHWSxXQUNDLFlBakRiLEFBa0RtQixrQkFDRCxpQkFDaUIsU0FqR25DLHlCQWtHOEIsNkJBRS9CLDREQUFDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInNpdGUtZm9vdGVyXCIgc3R5bGU9e3tmb250RmFtaWx5OlwiUm9ib3RvXCJ9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgPGg2PkFib3V0PC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCI+V2l0aCBhIHBhc3Npb24gZm9yIHRlY2hub2xvZ3ksIEkgaGF2ZSBleHBsb3JlZCBhbmQgd29ya2VkIG9uIHByb2plY3RzIGludm9sdmluZyBNYWNoaW5lIExlYXJuaW5nIGFuZCBGdWxsLVN0YWNrIERldmVsb3BtZW50LiBJIGJlbGlldmUgdGhhdCB0aGVyZSBhcmUgbWFueSBwb3RlbnRpYWxseSBkaXNydXB0aXZlIG9wcG9ydHVuaXRpZXMgYnkgaW50ZWdyYXRpbmcgVGVjaCB3aXRoIEZpbmFuY2UsIGFuZCBob3BlIHRvIGFjY29tcGxpc2ggdGhpcyBpbiB0aGUgZnV0dXJlLjwvcD5cclxuICAgICAgICAgICAgPHA+SSBjYW4gYmUgZWFzaWx5IGJyaWJlZCBvdmVyIHdpdGggYSBjdXAgb2YgY29mZmVlLCBzbyBmZWVsIGZyZWUgdG8gY29udGFjdCBtZSBlaXRoZXIgb24gR2l0aHViIG9yIExpbmtlZEluITwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhzLTYgY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgPGg2PlNraWxsIFNldHM8L2g2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgPGxpPk1hY2hpbmUgTGVhcm5pbmc8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5GdWxsIFN0YWNrIERldmVsb3BtZW50PC9saT5cclxuICAgICAgICAgICAgICA8bGk+RGF0YSBTY2llbmNlPC9saT5cclxuXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14cy02IGNvbC1tZC0zXCI+XHJcbiAgICAgICAgICAgIDxoNj5JbnRlcmVzdHM8L2g2PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZm9vdGVyLWxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgPGxpPkJhcnRlbmRpbmc8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5Mb25nIERpc3RhbmNlIFJ1bm5pbmc8L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT5BbGdvcml0aG1pYyBUcmFkaW5nPC9saT5cclxuICAgICAgICAgICAgICA8bGk+Q29mZmVlPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxociAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOCBjb2wtc20tNiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTQgY29sLXNtLTYgY29sLXhzLTEyXCI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzb2NpYWwtaWNvbnNcIj5cclxuICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiZ2l0aHViXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tYXJjdXNmb29vXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtZ2l0aHViXCI+PC9pPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJsaW5rZWRpblwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbWFyY3VzLWZvby04NjQ5NjUxM2EvXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtbGlua2VkaW5cIj48L2k+PC9hPjwvbGk+ICAgXHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbjwvZm9vdGVyPlxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAuc2l0ZS1mb290ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzI2MjcyYjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOjQ1cHggMCAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZToxNXB4O1xyXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjI0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzczNzM3MztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2l0ZS1mb290ZXIgaHJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6I2JiYjtcclxuICAgICAgICAgICAgICBvcGFjaXR5OjAuNVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaXRlLWZvb3RlciBoci5zbWFsbFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjIwcHggMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaXRlLWZvb3RlciBoNlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDo1cHg7XHJcbiAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6MnB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNpdGUtZm9vdGVyIGFcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiM3MzczNzM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNpdGUtZm9vdGVyIGE6aG92ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiMzMzY2Y2M7XHJcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3Rlci1saW5rc1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OjA7XHJcbiAgICAgICAgICAgICAgbGlzdC1zdHlsZTpub25lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvb3Rlci1saW5rcyBsaVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTpibG9ja1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXItbGlua3MgYVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzczNzM3M1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5mb290ZXItbGlua3MgYTphY3RpdmUsLmZvb3Rlci1saW5rcyBhOmZvY3VzLC5mb290ZXItbGlua3MgYTpob3ZlclxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzMzNjZjYztcclxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZm9vdGVyLWxpbmtzLmlubGluZSBsaVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29uc1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zIGFcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6NDBweDtcclxuICAgICAgICAgICAgICBtYXJnaW4tbGVmdDo2cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzMzMzUzZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb3B5cmlnaHQtdGV4dFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOjBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo5OTFweClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC5zaXRlLWZvb3RlciBbY2xhc3NOYW1lXj1jb2wtXVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MzBweFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo3NjdweClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC5zaXRlLWZvb3RlclxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOjBcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLnNpdGUtZm9vdGVyIC5jb3B5cmlnaHQtdGV4dCwuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29uc1xyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWwtaWNvbnNcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDowO1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MDtcclxuICAgICAgICAgICAgICBsaXN0LXN0eWxlOm5vbmVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc29jaWFsLWljb25zIGxpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOjRweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWwtaWNvbnMgbGkudGl0bGVcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDoxNXB4O1xyXG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICBjb2xvcjojOTZhMmIyO1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MTNweFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWwtaWNvbnMgYXtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2VlZWY7XHJcbiAgICAgICAgICAgICAgY29sb3I6IzgxOGE5MTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6MTZweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDo0NHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOjQ0cHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OjQ0cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OjhweDtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIC4ycyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgLW8tdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhcjtcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNvY2lhbC1pY29ucyBhOmFjdGl2ZSwuc29jaWFsLWljb25zIGE6Zm9jdXMsLnNvY2lhbC1pY29ucyBhOmhvdmVyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBjb2xvcjojZmZmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzI5YWFmZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWwtaWNvbnMuc2l6ZS1zbSBhXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDozNHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDozNHB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOjM0cHg7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc29jaWFsLWljb25zIGEuZmFjZWJvb2s6aG92ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzNiNTk5OFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWwtaWNvbnMgYS50d2l0dGVyOmhvdmVyXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwMGFjZWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc29jaWFsLWljb25zIGEubGlua2VkaW46aG92ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzAwN2JiNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zb2NpYWwtaWNvbnMgYS5naXRodWI6aG92ZXJcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IzZlNTQ5NFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLnNvY2lhbC1pY29ucyBsaS50aXRsZVxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgYH0gPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\components\\\\Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Hero.js":
/*!****************************!*\
  !*** ./components/Hero.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hero; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\Hero.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Hero() {
  return __jsx("div", {
    className: "jsx-2219541449" + " " + "hero-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/Hero.jpg",
    alt: "my image",
    className: "jsx-2219541449",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-2219541449" + " " + "hero-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "jsx-2219541449",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Hey I'm"), __jsx("h1", {
    className: "jsx-2219541449",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }, "Marcus Foo"), __jsx("h2", {
    className: "jsx-2219541449",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "and I'm an aspiring Software Engineer"), __jsx("div", {
    style: {
      textAlign: 'center'
    },
    className: "jsx-2219541449",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      height: '5px',
      width: '15vw',
      background: 'white',
      display: 'inline-block'
    },
    className: "jsx-2219541449" + " " + "line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 52
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2219541449",
    __self: this
  }, ".hero-image.jsx-2219541449{background-position:center;background-repeat:no-repeat;background-size:cover;position:relative;}img.jsx-2219541449{overflow-x:hidden hidden;width:100vw;-webkit-filter:blur(8px);filter:blur(8px);height:115vh;}.hero-text.jsx-2219541449{text-align:center;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);color:white;}h1.jsx-2219541449{font-size:5rem;font-style:bold;}p.jsx-2219541449{font-size:1.5rem;font-style:italic;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxIZXJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWF3QixBQUdnRCxBQU9GLEFBT1AsQUFTRixBQUtHLGVBSkQsRUFLRSxDQWRGLE9BUFAsRUFQaUIsSUF3QjlCLElBS0EsQ0FkVSxDQVBTLE9BUVIsU0FDdUIsRUFoQlYsc0JBQ0osRUFRdkIsYUFBQyxHQVBBLCtEQWVnQixZQUNkIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxIZXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVybygpIHtcclxuICAgIHJldHVybiAoICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL0hlcm8uanBnXCIgYWx0PVwibXkgaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+SGV5IEknbTwvcD5cclxuICAgICAgICAgICAgICAgIDxoMT5NYXJjdXMgRm9vPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMj5hbmQgSSdtIGFuIGFzcGlyaW5nIFNvZnR3YXJlIEVuZ2luZWVyPC9oMj5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+PGRpdiBjbGFzc05hbWU9XCJsaW5lXCIgc3R5bGU9e3toZWlnaHQ6ICc1cHgnLCB3aWR0aDogJzE1dncnLCBiYWNrZ3JvdW5kOiAnd2hpdGUnLCBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJ319PjwvZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaGVyby1pbWFnZSB7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW4gaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjEwMHZ3O1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogYmx1cig4cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTE1dmhcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVyby10ZXh0IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHlsZTogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\components\\\\Hero.js */"));
}

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NavigationBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavigationBar */ "./components/NavigationBar.js");
var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["default"] = (({
  children
}) => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx("meta", {
  charSet: "utf-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "viewport",
  content: "width=device-width,minimum-scale=1,initial-scale=1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 7
  }
}), __jsx("link", {
  href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,700;1,100;1,400;1,700&display=swap",
  rel: "stylesheet",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "icon",
  type: "image/x-icon",
  href: "/images/favicon.ico",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
})), __jsx(_components_NavigationBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}), __jsx("header", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}), children));

/***/ }),

/***/ "./components/NavigationBar.js":
/*!*************************************!*\
  !*** ./components/NavigationBar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\NavigationBar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const NavigationBar = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx("div", {
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarToggler"], {
    onClick: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    isOpen: isOpen,
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    className: "mr-auto",
    navbar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 30
    }
  }, __jsx("div", {
    className: "jsx-1150477233" + " " + "navtab",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 114
    }
  }, "Home"), " "))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavItem"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/projects",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 38
    }
  }, __jsx("div", {
    className: "jsx-1150477233" + " " + "navtab",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 130
    }
  }, "Projects")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1150477233",
    __self: undefined
  }, "@media (max-width:768px){.navtab.jsx-1150477233{color:black;}}@media (min-width:768px){.navtab.jsx-1150477233{color:black;}.navtab.jsx-1150477233:hover{color:#3377CC;-webkit-transition-duration:0.5s;transition-duration:0.5s;-webkit-animation:jiggle-jsx-1150477233 0.5s infinite linear;animation:jiggle-jsx-1150477233 0.5s infinite linear;}@-webkit-keyframes jiggle-jsx-1150477233{0%{-webkit-transform:rotate(0deg) scale(1.15,1.15);-ms-transform:rotate(0deg) scale(1.15,1.15);transform:rotate(0deg) scale(1.15,1.15);}50%{-webkit-transform:rotate(1deg) scale(1.15,1.15);-ms-transform:rotate(1deg) scale(1.15,1.15);transform:rotate(1deg) scale(1.15,1.15);}100%{-webkit-transform:rotate(-1deg) scale(1.15,1.15);-ms-transform:rotate(-1deg) scale(1.15,1.15);transform:rotate(-1deg) scale(1.15,1.15);}}@keyframes jiggle-jsx-1150477233{0%{-webkit-transform:rotate(0deg) scale(1.15,1.15);-ms-transform:rotate(0deg) scale(1.15,1.15);transform:rotate(0deg) scale(1.15,1.15);}50%{-webkit-transform:rotate(1deg) scale(1.15,1.15);-ms-transform:rotate(1deg) scale(1.15,1.15);transform:rotate(1deg) scale(1.15,1.15);}100%{-webkit-transform:rotate(-1deg) scale(1.15,1.15);-ms-transform:rotate(-1deg) scale(1.15,1.15);transform:rotate(-1deg) scale(1.15,1.15);}}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDb0IsQUFJeUIsQUFLRSxBQUlFLEFBTTZCLEFBQ0MsQUFDRyxZQWhCakQsQUFLQSxFQUkyQiwwREFDYSw0REFJTSxBQUNDLEdBQ0csbURBTGxEIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxjb21wb25lbnRzXFxOYXZpZ2F0aW9uQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb2xsYXBzZSxcclxuICBOYXZiYXIsXHJcbiAgTmF2YmFyVG9nZ2xlcixcclxuICBOYXZiYXJCcmFuZCxcclxuICBOYXYsXHJcbiAgTmF2SXRlbSxcclxuICBOYXZMaW5rLFxyXG4gIFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG4gIERyb3Bkb3duVG9nZ2xlLFxyXG4gIERyb3Bkb3duTWVudSxcclxuICBEcm9wZG93bkl0ZW0sXHJcbiAgTmF2YmFyVGV4dFxyXG59IGZyb20gJ3JlYWN0c3RyYXAnO1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbkJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHRvZ2dsZSA9ICgpID0+IHNldElzT3BlbighaXNPcGVuKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPE5hdmJhciBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uYmFyXCIgY29sb3I9XCJsaWdodFwiIGxpZ2h0IGV4cGFuZD1cIm1kXCIgZml4ZWQ9eyd0b3AnfT5cclxuICAgICAgICA8TmF2YmFyVG9nZ2xlciAgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpc09wZW49e2lzT3Blbn0gbmF2YmFyPlxyXG4gICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxOYXZMaW5rIHN0eWxlPXt7Zm9udEZhbWlseTogJ1JvYm90bycsIGZvbnRTaXplOiAnMzBweCcsIHBhZGRpbmc6ICcxcmVtJ319IGhyZWY9XCIvXCI+PGRpdiBjbGFzc05hbWU9XCJuYXZ0YWJcIj5Ib21lPC9kaXY+IDwvTmF2TGluaz48L0xpbms+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj48TmF2TGluayBzdHlsZT17e2ZvbnRGYW1pbHk6ICdSb2JvdG8nLCBmb250U2l6ZTogJzMwcHgnLCBwYWRkaW5nOiAnMXJlbSd9fSBocmVmPVwiL3Byb2plY3RzXCI+PGRpdiBjbGFzc05hbWU9XCJuYXZ0YWJcIj5Qcm9qZWN0czwvZGl2PjwvTmF2TGluaz48L0xpbms+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICA8L05hdj5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAubmF2dGFiIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgLm5hdnRhYiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2dGFiOmhvdmVyIHtcclxuICAgICAgICAgICAgICBjb2xvcjogIzMzNzdDQztcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgICAgICAgICAgIGFuaW1hdGlvbjogamlnZ2xlIDAuNXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGppZ2dsZSB7XHJcbiAgICAgICAgICAgICAgMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEuMTUsMS4xNSk7fVxyXG4gICAgICAgICAgICAgIDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoMWRlZykgc2NhbGUoMS4xNSwxLjE1KTt9XHJcbiAgICAgICAgICAgICAgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoLTFkZWcpIHNjYWxlKDEuMTUsMS4xNSl9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgICA8L05hdmJhcj5cclxuICAgIDwvZGl2PlxyXG4gICAgICBcclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQmFyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\components\\\\NavigationBar.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationBar);

/***/ }),

/***/ "./components/Technology.js":
/*!**********************************!*\
  !*** ./components/Technology.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\components\\Technology.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Technology = props => {
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardDeck"], {
    style: {
      fontFamily: "Roboto",
      marginBottom: "5vh"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    top: true,
    width: "100%",
    src: "/frontend.png",
    alt: "Card image cap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    style: {
      textAlign: "center",
      fontWeight: "500",
      fontSize: "2rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Front-End"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardSubtitle"], {
    style: {
      fontWeight: "500",
      fontSize: "1.25rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, "ReactJs/ NextJS/ ReactStrap"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    style: {
      paddingTop: "0.6rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Components styled using ReactStrap"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, "Components written using ES6 and ReactJS Framework"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, "Multi page Server Side Rendering and Routing through NextJS"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    top: true,
    width: "100%",
    src: "/backend.jpg",
    alt: "Card image cap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    style: {
      textAlign: "center",
      fontWeight: "500",
      fontSize: "2rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, "Back-End"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardSubtitle"], {
    style: {
      fontWeight: "500",
      fontSize: "1.25rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, "NodeJS/ Express/ GraphQL/ MySQL"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    style: {
      paddingTop: "0.6rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, "Event-driven Architecture using NodeJS backend"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, "Apollo server App with Express Middleware"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, "GraphQL (/graphql) API endpoint integrated with Sequelize"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, "MySQL Database for storing Github repositories"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardImg"], {
    top: true,
    width: "100%",
    src: "/deployment.png",
    alt: "Card image cap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardTitle"], {
    style: {
      textAlign: "center",
      fontWeight: "500",
      fontSize: "2rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Deployment/ Networking"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardSubtitle"], {
    style: {
      fontWeight: "500",
      fontSize: "1.25rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "NGINX/ Docker/ Jenkins/ DigitalOcean/"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardText"], {
    style: {
      paddingTop: "0.6rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, "Reverse Proxy Routing with HTTPS encrpytion through NGINX"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "Microservice Architecture and Container Orchestration through Docker Compose"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Deployed on a DigitalOcean Ubuntu VPS"), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  }, "Continuous Integration and Deployment through Jenkins"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Technology);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: index, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Hero */ "./components/Hero.js");
/* harmony import */ var _components_ExperienceCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ExperienceCard */ "./components/ExperienceCard.js");
/* harmony import */ var _components_Ethos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Ethos */ "./components/Ethos.js");
/* harmony import */ var _components_Technology__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Technology */ "./components/Technology.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\Marcus\\Desktop\\Projects\\Website\\client\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const isServer = true;
const WOW = !isServer ? __webpack_require__(/*! wow.js */ "wow.js") : null;
class index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  componentDidMount() {
    const wow = new WOW({
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

  render() {
    return __jsx("div", {
      className: "jsx-1656132742" + " " + "main",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
      content: "/thumbnail.png",
      className: "jsx-1656132742",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 10
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
    })), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }
    }), __jsx(_components_Hero__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    }, __jsx(_components_ExperienceCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }, __jsx(_components_ExperienceCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }, __jsx(_components_ExperienceCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
    }, __jsx(_components_Ethos__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }, __jsx(_components_Technology__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 9
      }
    })), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 7
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1656132742",
      __self: this
    }, ".headerContainer.jsx-1656132742{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.sectiontitle.jsx-1656132742{text-align:center;color:black;margin:45px 25px;font-size:2.5rem;font-weight:bold;}.line.jsx-1656132742{width:25vw;height:5px;background:#404040;margin:70px 2vw;border-radius:15px;}@media (max-width:768px){.sectiontitle.jsx-1656132742{font-size:1.5rem;margin:55px 10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEhrQixBQUk0QixBQUtLLEFBUVAsQUFTUyxXQVJULE1BU1UsQ0FqQlQsSUFTTyxRQVJGLElBaUJqQixPQVJnQixNQVJDLFVBU0UsT0FSRixVQVJNLEVBaUJ6QixLQVJBLDRGQVJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxQcm9qZWN0c1xcV2Vic2l0ZVxcY2xpZW50XFxwYWdlc1xcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcclxuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJ1xyXG5pbXBvcnQgRXhwZXJpZW5jZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9FeHBlcmllbmNlQ2FyZCdcclxuaW1wb3J0IE15RXRob3MgZnJvbSAnLi4vY29tcG9uZW50cy9FdGhvcydcclxuaW1wb3J0IFRlY2hub2xvZ3kgZnJvbSAnLi4vY29tcG9uZW50cy9UZWNobm9sb2d5J1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xyXG5cclxuY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xyXG5jb25zdCBXT1cgPSAhaXNTZXJ2ZXIgPyByZXF1aXJlKCd3b3cuanMnKSA6IG51bGwgXHJcblxyXG5leHBvcnQgY2xhc3MgaW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkgeyBcclxuICAgIGNvbnN0IHdvdyA9IG5ldyBXT1coXHJcbiAgICAgIHtcclxuICAgICAgICBib3hDbGFzczogICAgICd3b3cnLCAgICAgIC8vIGRlZmF1bHRcclxuICAgICAgICBhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsIC8vIGRlZmF1bHRcclxuICAgICAgICBvZmZzZXQ6ICAgICAgIDAsICAgICAgICAgIC8vIGRlZmF1bHRcclxuICAgICAgICBtb2JpbGU6ICAgICAgIHRydWUsICAgICAgIFxyXG4gICAgICAgIGxpdmU6ICAgICAgICAgdHJ1ZSAgICAgICAgLy8gZGVmYXVsdFxyXG4gICAgICB9XHJcbiAgICApXHJcbiAgd293LmluaXQoKTtcclxuICB9IFxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxyXG5cclxuICAgICAgICB7LyogVG9wIGJhbm5lciBzZWN0aW9uICovfVxyXG5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIk15IFBlcnNvbmFsIFdlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIvdGh1bWJuYWlsLnBuZ1wiIC8+XHJcbiAgICAgICAgPHRpdGxlPkknbSBNYXJjdXMgRm9vPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNi4xL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiPjwvbGluaz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPExheW91dCAvPlxyXG4gICAgICAgIDxIZXJvIC8+ICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJDb250YWluZXIgd293IHNsaWRlSW5VcFwiIGRhdGEtd293LW9mZnNldD1cIjIwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9udGl0bGVcIiA+SGVyZSdzIHdoYXQgSSd2ZSBkb25lIHNvIGZhcjwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgXHJcblxyXG4gICAgICB7LyogRXhwZXJpZW5jZXMgc2VjdGlvbiAqL30gICBcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3b3cgc2xpZGVJbkxlZnRcIiBkYXRhLXdvdy1vZmZzZXQ9XCIyMFwiPlxyXG4gICAgICAgICAgPEV4cGVyaWVuY2VDYXJkIFxyXG4gICAgICAgICAgaW1hZ2U9XCIvVGVtYXNlay5qcGdcIlxyXG4gICAgICAgICAgaW1hZ2VfYWx0PVwiVGVtYXNlayBJbWFnZVwiXHJcbiAgICAgICAgICBsaW5rPVwiaHR0cHM6Ly93d3cudGVtYXNlay5jb20uc2cvZW4vaW5kZXhcIlxyXG4gICAgICAgICAgdGl0bGU9XCJUZW1hc2VrIEhvbGRpbmdzXCJcclxuICAgICAgICAgIGRhdGU9XCIoTWF5IDIwMjAgLSBQcmVzZW50KVwiXHJcbiAgICAgICAgICBjb3VudHJ5ID0gXCJTaW5nYXBvcmUsIFNHXCJcclxuICAgICAgICAgIHBvc2l0aW9uPVwiU29mdHdhcmUgRW5naW5lZXIgSW50ZXJuXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUGFydCBvZiB0aGUgVGVtYXNlayBEaWdpdGFsIFRlYW0uIFdvcmtpbmcgY2xvc2VseSB3aXRoIG90aGVyIHRlYW0gbWVtYmVycyBpbiBhbiBhZ2lsZSBzZXR1cCB0byBkZXZlbG9wIHNvZnR3YXJlIGZvciBkaWdpdGFsIGluaXRpYXRpdmVzLCBsZXZlcmFnaW5nIGJpZyBkYXRhLCBtYWNoaW5lIGxlYXJuaW5nIGFuZCBjbG91ZCB0ZWNobm9sb2dpZXMuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid293IHNsaWRlSW5SaWdodFwiIGRhdGEtd293LW9mZnNldD1cIjIwXCI+XHJcbiAgICAgICAgICA8RXhwZXJpZW5jZUNhcmQgXHJcbiAgICAgICAgICBpbWFnZT1cIi9zYXR1cmRheV9raWRzLnBuZ1wiXHJcbiAgICAgICAgICBpbWFnZV9hbHQ9XCJTYXR1cmRheSBLaWRzIEltYWdlXCJcclxuICAgICAgICAgIGxpbms9XCJodHRwczovL3d3dy5zYXR1cmRheWtpZHMuY29tL1wiXHJcbiAgICAgICAgICB0aXRsZT1cIlNhdHVyZGF5IEtpZHNcIlxyXG4gICAgICAgICAgZGF0ZT1cIihKYW4gMjAyMCAtIFByZXNlbnQpXCJcclxuICAgICAgICAgIGNvdW50cnkgPSBcIlNpbmdhcG9yZSwgU0dcIlxyXG4gICAgICAgICAgcG9zaXRpb249XCJQeXRob24gSW5zdHJ1Y3RvclwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNlbGVjdGVkIGFzIGEgUHl0aG9uIEluc3RydWN0b3IgZm9yIHRoZSBCdWtpdCBQYW5qYW5nIGxpYnJhcnkgc3R1ZGVudHMuIEluIGNvbGxhYm9yYXRpb24gd2l0aCBHb29nbGUgYW5kIElNREEsIEkgbGVkIGEgZ3JvdXAgb2YgYXNzaXN0YW50cyB0byB0ZWFjaCBhIGNsYXNzIG9mIDE4IHN0dWRlbnRzLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid293IHNsaWRlSW5MZWZ0XCIgZGF0YS13b3ctb2Zmc2V0PVwiMjBcIj5cclxuICAgICAgICAgIDxFeHBlcmllbmNlQ2FyZCBcclxuICAgICAgICAgIGltYWdlPVwiL250dS5qcGdcIlxyXG4gICAgICAgICAgaW1hZ2VfYWx0PVwiTlRVIEltYWdlXCJcclxuICAgICAgICAgIGxpbms9XCJodHRwczovL3d3dy5udHUuZWR1LnNnL1BhZ2VzL2hvbWUuYXNweFwiXHJcbiAgICAgICAgICB0aXRsZT1cIk5UVVwiXHJcbiAgICAgICAgICBkYXRlPVwiKEF1ZyAyMDE5IC0gUHJlc2VudClcIlxyXG4gICAgICAgICAgY291bnRyeSA9IFwiU2luZ2Fwb3JlLCBTR1wiXHJcbiAgICAgICAgICBwb3NpdGlvbj1cIkRvdWJsZSBEZWdyZWUgaW4gQnVzaW5lc3MgQW5hbHl0aWNzICYgQ29tcHV0ZXIgU2NpZW5jZVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj17PHVsPlxyXG4gICAgICAgICAgICA8bGk+VGVjaG5pY2FsIERpcmVjdG9yIGF0IE5hbnlhbmcgT3BlbiBTb3VyY2UgU29jaWV0eTwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5CdXNpbmVzcyBNYW5hZ2VyIGF0IE5hbnlhbmcgQmFua2luZyAmIEZpbmFuY2UgQ2x1YjwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG5cclxuICAgICAgey8qIEV0aG9zIHNlY3Rpb24gKi99ICBcclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQ29udGFpbmVyIHdvdyBzbGlkZUluVXBcIiBkYXRhLXdvdy1vZmZzZXQ9XCIyMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9udGl0bGVcIiA+TXkgRXRob3M8L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid293IHNsaWRlSW5VcFwiIGRhdGEtd293LW9mZnNldD1cIjIwXCI+XHJcbiAgICAgICAgPE15RXRob3MgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICAgIHsvKiBUZWNobm9sb2d5IHNlY3Rpb24gKi99IFxyXG5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyQ29udGFpbmVyIHdvdyBzbGlkZUluVXBcIiBkYXRhLXdvdy1vZmZzZXQ9XCIyMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJzZWN0aW9udGl0bGVcIiA+VGVjaG5vbG9neSBTdGFjazxwIHN0eWxlPXt7Zm9udEZhbWlseTpcIlJvYm90b1wiLCBmb250V2VpZ2h0OlwiNTAwXCIsIGZvbnRTaXplOlwiMS43NXJlbVwifX0+TXkgV2Vic2l0ZSBBcmNoaXRlY3R1cmU8L3A+PC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid293IHNsaWRlSW5VcFwiIGRhdGEtd293LW9mZnNldD1cIjIwXCI+XHJcbiAgICAgICAgPFRlY2hub2xvZ3kgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG5cclxuXHJcbiAgICAgIHsvKiBGb290ZXIgc2VjdGlvbiAqL31cclxuICAgICAgXHJcblxyXG4gICAgICA8Rm9vdGVyIC8+XHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICAgICAgLmhlYWRlckNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNlY3Rpb250aXRsZSB7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICBtYXJnaW46IDQ1cHggMjVweDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxpbmUge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyNXZ3O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0MDQwNDA7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA3MHB4IDJ2dztcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAuc2VjdGlvbnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1NXB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIFxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXhcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Marcus\\\\Desktop\\\\Projects\\\\Website\\\\client\\\\pages\\\\index.js */"));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marcus\Desktop\Projects\Website\client\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "wow.js":
/*!*************************!*\
  !*** external "wow.js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("wow.js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map