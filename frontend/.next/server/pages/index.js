(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/CTA.tsx":
/*!********************************!*\
  !*** ./src/components/CTA.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CTA": function() { return /* binding */ CTA; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./src/components/Container.tsx");

var _jsxFileName = "/home/mie999/Work/graphql-practice-photo-share/frontend/src/components/CTA.tsx";


const CTA = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Container__WEBPACK_IMPORTED_MODULE_2__.Container, {
  flexDirection: "row",
  position: "fixed",
  bottom: "0",
  width: "100%",
  maxWidth: "48rem",
  py: 3,
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    isExternal: true,
    href: "https://chakra-ui.com",
    flexGrow: 1,
    mx: 2,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      width: "100%",
      variant: "outline",
      colorScheme: "green",
      children: "chakra-ui"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    isExternal: true,
    href: "https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui-typescript",
    flexGrow: 3,
    mx: 2,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
      width: "100%",
      variant: "solid",
      colorScheme: "green",
      children: "View Repo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/components/Container.tsx":
/*!**************************************!*\
  !*** ./src/components/Container.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/mie999/Work/graphql-practice-photo-share/frontend/src/components/Container.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Container = props => {
  const {
    colorMode
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900'
  };
  const color = {
    light: 'black',
    dark: 'white'
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, _objectSpread({
    direction: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    bg: bgColor[colorMode],
    color: color[colorMode]
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/DarkModeSwitch.tsx":
/*!*******************************************!*\
  !*** ./src/components/DarkModeSwitch.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkModeSwitch": function() { return /* binding */ DarkModeSwitch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/mie999/Work/graphql-practice-photo-share/frontend/src/components/DarkModeSwitch.tsx";

const DarkModeSwitch = () => {
  const {
    colorMode,
    toggleColorMode
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();
  const isDark = colorMode === 'dark';
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Switch, {
    position: "fixed",
    top: "1rem",
    right: "1rem",
    color: "green",
    isChecked: isDark,
    onChange: toggleColorMode
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/Footer.tsx":
/*!***********************************!*\
  !*** ./src/components/Footer.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": function() { return /* binding */ Footer; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/mie999/Work/graphql-practice-photo-share/frontend/src/components/Footer.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Footer = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, _objectSpread({
  as: "footer",
  py: "8rem"
}, props), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/components/Hero.tsx":
/*!*********************************!*\
  !*** ./src/components/Hero.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hero": function() { return /* binding */ Hero; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/mie999/Work/graphql-practice-photo-share/frontend/src/components/Hero.tsx";

const Hero = ({
  title
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  bgGradient: "linear(to-l, #7928CA, #FF0080)",
  bgClip: "text",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
    fontSize: "6vw",
    children: title
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);
Hero.defaultProps = {
  title: 'with-chakra-ui-typescript'
};

/***/ }),

/***/ "./src/components/Main.tsx":
/*!*********************************!*\
  !*** ./src/components/Main.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": function() { return /* binding */ Main; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/mie999/Work/graphql-practice-photo-share/frontend/src/components/Main.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Main = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, _objectSpread({
  spacing: "1.5rem",
  width: "100%",
  maxWidth: "48rem",
  mt: "-45vh",
  pt: "8rem",
  px: "1rem"
}, props), void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero */ "./src/components/Hero.tsx");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.tsx");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Main */ "./src/components/Main.tsx");
/* harmony import */ var _components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/DarkModeSwitch */ "./src/components/DarkModeSwitch.tsx");
/* harmony import */ var _components_CTA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CTA */ "./src/components/CTA.tsx");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Footer */ "./src/components/Footer.tsx");

var _jsxFileName = "/home/mie999/Work/graphql-practice-photo-share/frontend/src/pages/index.tsx";









const Index = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_4__.Container, {
  height: "100vh",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero__WEBPACK_IMPORTED_MODULE_3__.Hero, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Main__WEBPACK_IMPORTED_MODULE_5__.Main, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      children: ["Example repository of ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Code, {
        children: "Next.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 31
      }, undefined), " + ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Code, {
        children: "chakra-ui"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 54
      }, undefined), " +", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Code, {
        children: "typescript"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), "."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
      spacing: 3,
      my: 0,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListIcon, {
          as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.CheckCircleIcon,
          color: "green.500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          isExternal: true,
          href: "https://chakra-ui.com",
          flexGrow: 1,
          mr: 2,
          children: ["Chakra UI ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.LinkIcon, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 23
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListItem, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ListIcon, {
          as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.CheckCircleIcon,
          color: "green.500"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
          isExternal: true,
          href: "https://nextjs.org",
          flexGrow: 1,
          mr: 2,
          children: ["Next.js ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.LinkIcon, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_6__.DarkModeSwitch, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_8__.Footer, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
      children: "Next \u2764\uFE0F Chakra"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CTA__WEBPACK_IMPORTED_MODULE_7__.CTA, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 19,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/icons");;

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFrcmEtdGVtcGxhdGUvLi9zcmMvY29tcG9uZW50cy9DVEEudHN4Iiwid2VicGFjazovL2NoYWtyYS10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vY2hha3JhLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2gudHN4Iiwid2VicGFjazovL2NoYWtyYS10ZW1wbGF0ZS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vY2hha3JhLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvSGVyby50c3giLCJ3ZWJwYWNrOi8vY2hha3JhLXRlbXBsYXRlLy4vc3JjL2NvbXBvbmVudHMvTWFpbi50c3giLCJ3ZWJwYWNrOi8vY2hha3JhLXRlbXBsYXRlLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jaGFrcmEtdGVtcGxhdGUvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vY2hha3JhLXRlbXBsYXRlL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovL2NoYWtyYS10ZW1wbGF0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNUQSIsIkNvbnRhaW5lciIsInByb3BzIiwiY29sb3JNb2RlIiwidXNlQ29sb3JNb2RlIiwiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsImNvbG9yIiwiRGFya01vZGVTd2l0Y2giLCJ0b2dnbGVDb2xvck1vZGUiLCJpc0RhcmsiLCJGb290ZXIiLCJIZXJvIiwidGl0bGUiLCJkZWZhdWx0UHJvcHMiLCJNYWluIiwiSW5kZXgiLCJDaGVja0NpcmNsZUljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFTyxNQUFNQSxHQUFHLEdBQUcsbUJBQ2pCLDhEQUFDLGlEQUFEO0FBQ0UsZUFB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QUFmLEU7Ozs7Ozs7Ozs7O0FDdkRBLDhDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGluayBhcyBDaGFrcmFMaW5rLCBCdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi9Db250YWluZXInO1xuXG5leHBvcnQgY29uc3QgQ1RBID0gKCkgPT4gKFxuICA8Q29udGFpbmVyXG4gICAgZmxleERpcmVjdGlvbj1cInJvd1wiXG4gICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgYm90dG9tPVwiMFwiXG4gICAgd2lkdGg9XCIxMDAlXCJcbiAgICBtYXhXaWR0aD1cIjQ4cmVtXCJcbiAgICBweT17M31cbiAgPlxuICAgIDxDaGFrcmFMaW5rIGlzRXh0ZXJuYWwgaHJlZj1cImh0dHBzOi8vY2hha3JhLXVpLmNvbVwiIGZsZXhHcm93PXsxfSBteD17Mn0+XG4gICAgICA8QnV0dG9uIHdpZHRoPVwiMTAwJVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgY29sb3JTY2hlbWU9XCJncmVlblwiPlxuICAgICAgICBjaGFrcmEtdWlcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQ2hha3JhTGluaz5cblxuICAgIDxDaGFrcmFMaW5rXG4gICAgICBpc0V4dGVybmFsXG4gICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Jsb2IvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtY2hha3JhLXVpLXR5cGVzY3JpcHRcIlxuICAgICAgZmxleEdyb3c9ezN9XG4gICAgICBteD17Mn1cbiAgICA+XG4gICAgICA8QnV0dG9uIHdpZHRoPVwiMTAwJVwiIHZhcmlhbnQ9XCJzb2xpZFwiIGNvbG9yU2NoZW1lPVwiZ3JlZW5cIj5cbiAgICAgICAgVmlldyBSZXBvXG4gICAgICA8L0J1dHRvbj5cbiAgICA8L0NoYWtyYUxpbms+XG4gIDwvQ29udGFpbmVyPlxuKTtcbiIsImltcG9ydCB7IEZsZXgsIHVzZUNvbG9yTW9kZSwgRmxleFByb3BzIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSAocHJvcHM6IEZsZXhQcm9wcykgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XG5cbiAgY29uc3QgYmdDb2xvciA9IHsgbGlnaHQ6ICdncmF5LjUwJywgZGFyazogJ2dyYXkuOTAwJyB9O1xuXG4gIGNvbnN0IGNvbG9yID0geyBsaWdodDogJ2JsYWNrJywgZGFyazogJ3doaXRlJyB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxuICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyB1c2VDb2xvck1vZGUsIFN3aXRjaCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5leHBvcnQgY29uc3QgRGFya01vZGVTd2l0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpO1xuICBjb25zdCBpc0RhcmsgPSBjb2xvck1vZGUgPT09ICdkYXJrJztcblxuICByZXR1cm4gKFxuICAgIDxTd2l0Y2hcbiAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxuICAgICAgdG9wPVwiMXJlbVwiXG4gICAgICByaWdodD1cIjFyZW1cIlxuICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICBpc0NoZWNrZWQ9e2lzRGFya31cbiAgICAgIG9uQ2hhbmdlPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgLz5cbiAgKTtcbn07XG4iLCJpbXBvcnQgeyBGbGV4LCBGbGV4UHJvcHMgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9IChwcm9wczogRmxleFByb3BzKSA9PiAoXG4gIDxGbGV4IGFzPVwiZm9vdGVyXCIgcHk9XCI4cmVtXCIgey4uLnByb3BzfSAvPlxuKTtcbiIsImltcG9ydCB7IEZsZXgsIEhlYWRpbmcgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IEhlcm8gPSAoeyB0aXRsZSB9OiB7IHRpdGxlOiBzdHJpbmcgfSkgPT4gKFxuICA8RmxleFxuICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICBoZWlnaHQ9XCIxMDB2aFwiXG4gICAgYmdHcmFkaWVudD1cImxpbmVhcih0by1sLCAjNzkyOENBLCAjRkYwMDgwKVwiXG4gICAgYmdDbGlwPVwidGV4dFwiXG4gID5cbiAgICA8SGVhZGluZyBmb250U2l6ZT1cIjZ2d1wiPnt0aXRsZX08L0hlYWRpbmc+XG4gIDwvRmxleD5cbik7XG5cbkhlcm8uZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogJ3dpdGgtY2hha3JhLXVpLXR5cGVzY3JpcHQnLFxufTtcbiIsImltcG9ydCB7IFN0YWNrLCBTdGFja1Byb3BzIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBNYWluID0gKHByb3BzOiBTdGFja1Byb3BzKSA9PiAoXG4gIDxTdGFja1xuICAgIHNwYWNpbmc9XCIxLjVyZW1cIlxuICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgbWF4V2lkdGg9XCI0OHJlbVwiXG4gICAgbXQ9XCItNDV2aFwiXG4gICAgcHQ9XCI4cmVtXCJcbiAgICBweD1cIjFyZW1cIlxuICAgIHsuLi5wcm9wc31cbiAgLz5cbik7XG4iLCJpbXBvcnQge1xuICBMaW5rIGFzIENoYWtyYUxpbmssXG4gIFRleHQsXG4gIENvZGUsXG4gIExpc3QsXG4gIExpc3RJY29uLFxuICBMaXN0SXRlbSxcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBDaGVja0NpcmNsZUljb24sIExpbmtJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5cbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8nO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250YWluZXInO1xuaW1wb3J0IHsgTWFpbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvTWFpbic7XG5pbXBvcnQgeyBEYXJrTW9kZVN3aXRjaCB9IGZyb20gJy4uL2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2gnO1xuaW1wb3J0IHsgQ1RBIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DVEEnO1xuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPENvbnRhaW5lciBoZWlnaHQ9XCIxMDB2aFwiPlxuICAgIDxIZXJvIC8+XG4gICAgPE1haW4+XG4gICAgICA8VGV4dD5cbiAgICAgICAgRXhhbXBsZSByZXBvc2l0b3J5IG9mIDxDb2RlPk5leHQuanM8L0NvZGU+ICsgPENvZGU+Y2hha3JhLXVpPC9Db2RlPiAreycgJ31cbiAgICAgICAgPENvZGU+dHlwZXNjcmlwdDwvQ29kZT4uXG4gICAgICA8L1RleHQ+XG5cbiAgICAgIDxMaXN0IHNwYWNpbmc9ezN9IG15PXswfT5cbiAgICAgICAgPExpc3RJdGVtPlxuICAgICAgICAgIDxMaXN0SWNvbiBhcz17Q2hlY2tDaXJjbGVJY29ufSBjb2xvcj1cImdyZWVuLjUwMFwiIC8+XG4gICAgICAgICAgPENoYWtyYUxpbmtcbiAgICAgICAgICAgIGlzRXh0ZXJuYWxcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NoYWtyYS11aS5jb21cIlxuICAgICAgICAgICAgZmxleEdyb3c9ezF9XG4gICAgICAgICAgICBtcj17Mn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBDaGFrcmEgVUkgPExpbmtJY29uIC8+XG4gICAgICAgICAgPC9DaGFrcmFMaW5rPlxuICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICA8TGlzdEl0ZW0+XG4gICAgICAgICAgPExpc3RJY29uIGFzPXtDaGVja0NpcmNsZUljb259IGNvbG9yPVwiZ3JlZW4uNTAwXCIgLz5cbiAgICAgICAgICA8Q2hha3JhTGluayBpc0V4dGVybmFsIGhyZWY9XCJodHRwczovL25leHRqcy5vcmdcIiBmbGV4R3Jvdz17MX0gbXI9ezJ9PlxuICAgICAgICAgICAgTmV4dC5qcyA8TGlua0ljb24gLz5cbiAgICAgICAgICA8L0NoYWtyYUxpbms+XG4gICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICA8L0xpc3Q+XG4gICAgPC9NYWluPlxuXG4gICAgPERhcmtNb2RlU3dpdGNoIC8+XG4gICAgPEZvb3Rlcj5cbiAgICAgIDxUZXh0Pk5leHQg4p2k77iPIENoYWtyYTwvVGV4dD5cbiAgICA8L0Zvb3Rlcj5cbiAgICA8Q1RBIC8+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2ljb25zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=