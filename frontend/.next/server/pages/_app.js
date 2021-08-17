(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");

var _jsxFileName = "/home/mie999/Work/graphql-practice-photo-share/frontend/src/pages/_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const MyApp = ({
  Component,
  pageProps
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
  resetCSS: true,
  theme: _theme__WEBPACK_IMPORTED_MODULE_2__.default,
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ "@chakra-ui/theme-tools");
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


const fonts = {
  mono: "'Menlo', monospace"
};
const breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.createBreakpoints)({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
});
const zIndices = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}; // check this page to extendTheme function: https://chakra-ui.com/docs/theming/customize-theme

const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
  colors: {
    // default colors: https://chakra-ui.com/docs/theming/theme#colors
    black: '#16161D'
  },
  fonts,
  breakpoints,
  zIndices
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/react");;

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chakra-ui/theme-tools");;

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFrcmEtdGVtcGxhdGUvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vY2hha3JhLXRlbXBsYXRlLy4vc3JjL3RoZW1lLnRzeCIsIndlYnBhY2s6Ly9jaGFrcmEtdGVtcGxhdGUvZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vY2hha3JhLXRlbXBsYXRlL2V4dGVybmFsIFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiIiwid2VicGFjazovL2NoYWtyYS10ZW1wbGF0ZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJmb250cyIsIm1vbm8iLCJicmVha3BvaW50cyIsImNyZWF0ZUJyZWFrcG9pbnRzIiwic20iLCJtZCIsImxnIiwieGwiLCJ6SW5kaWNlcyIsImhpZGUiLCJhdXRvIiwiYmFzZSIsImRvY2tlZCIsImRyb3Bkb3duIiwic3RpY2t5IiwiYmFubmVyIiwib3ZlcmxheSIsIm1vZGFsIiwicG9wb3ZlciIsInNraXBMaW5rIiwidG9hc3QiLCJ0b29sdGlwIiwiZXh0ZW5kVGhlbWUiLCJjb2xvcnMiLCJibGFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR0E7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsa0JBQ1osOERBQUMsNERBQUQ7QUFBZ0IsVUFBUSxNQUF4QjtBQUF5QixPQUFLLEVBQUVDLDJDQUFoQztBQUFBLHlCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFNQSwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUVBLE1BQU1JLEtBQUssR0FBRztBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUFkO0FBRUEsTUFBTUMsV0FBVyxHQUFHQyx5RUFBaUIsQ0FBQztBQUNwQ0MsSUFBRSxFQUFFLE1BRGdDO0FBRXBDQyxJQUFFLEVBQUUsTUFGZ0M7QUFHcENDLElBQUUsRUFBRSxNQUhnQztBQUlwQ0MsSUFBRSxFQUFFO0FBSmdDLENBQUQsQ0FBckM7QUFPQSxNQUFNQyxRQUFRLEdBQUc7QUFDZkMsTUFBSSxFQUFFLENBQUMsQ0FEUTtBQUVmQyxNQUFJLEVBQUUsTUFGUztBQUdmQyxNQUFJLEVBQUUsQ0FIUztBQUlmQyxRQUFNLEVBQUUsRUFKTztBQUtmQyxVQUFRLEVBQUUsSUFMSztBQU1mQyxRQUFNLEVBQUUsSUFOTztBQU9mQyxRQUFNLEVBQUUsSUFQTztBQVFmQyxTQUFPLEVBQUUsSUFSTTtBQVNmQyxPQUFLLEVBQUUsSUFUUTtBQVVmQyxTQUFPLEVBQUUsSUFWTTtBQVdmQyxVQUFRLEVBQUUsSUFYSztBQVlmQyxPQUFLLEVBQUUsSUFaUTtBQWFmQyxTQUFPLEVBQUU7QUFiTSxDQUFqQixDLENBZ0JBOztBQUNBLE1BQU10QixLQUFLLEdBQUd1Qiw2REFBVyxDQUFDO0FBQ3hCQyxRQUFNLEVBQUU7QUFDTjtBQUNBQyxTQUFLLEVBQUU7QUFGRCxHQURnQjtBQUt4QnhCLE9BTHdCO0FBTXhCRSxhQU53QjtBQU94Qk07QUFQd0IsQ0FBRCxDQUF6QjtBQVVBLCtEQUFlVCxLQUFmLEU7Ozs7Ozs7Ozs7O0FDdkNBLDhDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuXG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSc7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IChcbiAgPENoYWtyYVByb3ZpZGVyIHJlc2V0Q1NTIHRoZW1lPXt0aGVtZX0+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L0NoYWtyYVByb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlQnJlYWtwb2ludHMgfSBmcm9tICdAY2hha3JhLXVpL3RoZW1lLXRvb2xzJztcblxuY29uc3QgZm9udHMgPSB7IG1vbm86IFwiJ01lbmxvJywgbW9ub3NwYWNlXCIgfTtcblxuY29uc3QgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyh7XG4gIHNtOiAnNDBlbScsXG4gIG1kOiAnNTJlbScsXG4gIGxnOiAnNjRlbScsXG4gIHhsOiAnODBlbScsXG59KTtcblxuY29uc3QgekluZGljZXMgPSB7XG4gIGhpZGU6IC0xLFxuICBhdXRvOiAnYXV0bycsXG4gIGJhc2U6IDAsXG4gIGRvY2tlZDogMTAsXG4gIGRyb3Bkb3duOiAxMDAwLFxuICBzdGlja3k6IDExMDAsXG4gIGJhbm5lcjogMTIwMCxcbiAgb3ZlcmxheTogMTMwMCxcbiAgbW9kYWw6IDE0MDAsXG4gIHBvcG92ZXI6IDE1MDAsXG4gIHNraXBMaW5rOiAxNjAwLFxuICB0b2FzdDogMTcwMCxcbiAgdG9vbHRpcDogMTgwMCxcbn07XG5cbi8vIGNoZWNrIHRoaXMgcGFnZSB0byBleHRlbmRUaGVtZSBmdW5jdGlvbjogaHR0cHM6Ly9jaGFrcmEtdWkuY29tL2RvY3MvdGhlbWluZy9jdXN0b21pemUtdGhlbWVcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICAvLyBkZWZhdWx0IGNvbG9yczogaHR0cHM6Ly9jaGFrcmEtdWkuY29tL2RvY3MvdGhlbWluZy90aGVtZSNjb2xvcnNcbiAgICBibGFjazogJyMxNjE2MUQnLFxuICB9LFxuICBmb250cyxcbiAgYnJlYWtwb2ludHMsXG4gIHpJbmRpY2VzLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHRoZW1lO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS90aGVtZS10b29sc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9