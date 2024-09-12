"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();\n        const originalRenderPage = ctx.renderPage;\n        try {\n            ctx.renderPage = ()=>originalRenderPage({\n                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"/Users/goldchae/Desktop/code/Qup-Frontend/pages/_document.js\",\n                                lineNumber: 15,\n                                columnNumber: 45\n                            }, this))\n                });\n            const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n            return {\n                ...initialProps,\n                styles: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        initialProps.styles,\n                        sheet.getStyleElement()\n                    ]\n                }, void 0, true)\n            };\n        } finally{\n            sheet.seal();\n        }\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n                        children: `body { margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }`\n                    }, void 0, false, {\n                        fileName: \"/Users/goldchae/Desktop/code/Qup-Frontend/pages/_document.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/goldchae/Desktop/code/Qup-Frontend/pages/_document.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                            fileName: \"/Users/goldchae/Desktop/code/Qup-Frontend/pages/_document.js\",\n                            lineNumber: 40,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                            fileName: \"/Users/goldchae/Desktop/code/Qup-Frontend/pages/_document.js\",\n                            lineNumber: 41,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/goldchae/Desktop/code/Qup-Frontend/pages/_document.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/goldchae/Desktop/code/Qup-Frontend/pages/_document.js\",\n            lineNumber: 35,\n            columnNumber: 13\n        }, this);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBcUM7QUFDZ0I7QUFFUTtBQUU5QyxNQUFNTSxtQkFBbUJOLHNEQUFRQTtJQUM1QyxhQUFhTyxnQkFBZ0JDLEdBQUcsRUFBRTtRQUM5QixNQUFNQyxRQUFRLElBQUlSLCtEQUFnQkE7UUFDbEMsTUFBTVMscUJBQXFCRixJQUFJRyxVQUFVO1FBRXpDLElBQUk7WUFDQUgsSUFBSUcsVUFBVSxHQUFHLElBQ2JELG1CQUFtQjtvQkFDZkUsWUFBWSxDQUFDQyxNQUFRLENBQUNDLFFBQ2xCTCxNQUFNTSxhQUFhLGVBQUMsOERBQUNGO2dDQUFLLEdBQUdDLEtBQUs7Ozs7OztnQkFDMUM7WUFFSixNQUFNRSxlQUFlLE1BQU1oQixvRUFBd0IsQ0FBQ1E7WUFDcEQsT0FBTztnQkFDSCxHQUFHUSxZQUFZO2dCQUNmQyxzQkFDSTs7d0JBQ0tELGFBQWFDLE1BQU07d0JBQ25CUixNQUFNUyxlQUFlOzs7WUFHbEM7UUFDSixTQUFVO1lBQ05ULE1BQU1VLElBQUk7UUFDZDtJQUNKO0lBRUFDLFNBQVM7UUFDTCxxQkFDSSw4REFBQ2xCLCtDQUFJQTs7OEJBQ0QsOERBQUNDLCtDQUFJQTs4QkFDRCw0RUFBQ2tCO2tDQUFPLENBQUMsaUZBQWlGLENBQUM7Ozs7Ozs7Ozs7OzhCQUUvRiw4REFBQ0M7O3NDQUNELDhEQUFDbEIsK0NBQUlBOzs7OztzQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztJQUl2QjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcV91cC1yZWFjdC8uL3BhZ2VzL19kb2N1bWVudC5qcz81MzhiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEb2N1bWVudCBmcm9tIFwibmV4dC9kb2N1bWVudFwiO1xuaW1wb3J0IHsgU2VydmVyU3R5bGVTaGVldCB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5pbXBvcnQgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcbiAgICAgICAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xuICAgICAgICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY3R4LnJlbmRlclBhZ2UgPSAoKSA9PlxuICAgICAgICAgICAgICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGVuaGFuY2VBcHA6IChBcHApID0+IChwcm9wcykgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNoZWV0LmNvbGxlY3RTdHlsZXMoPEFwcCB7Li4ucHJvcHN9IC8+KSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgaW5pdGlhbFByb3BzID0gYXdhaXQgRG9jdW1lbnQuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBzdHlsZXM6IChcbiAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbml0aWFsUHJvcHMuc3R5bGVzfVxuICAgICAgICAgICAgICAgICAgICAgICAge3NoZWV0LmdldFN0eWxlRWxlbWVudCgpfVxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNoZWV0LnNlYWwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxIdG1sPlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8c3R5bGU+e2Bib2R5IHsgbWFyZ2luOiAwOyBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7IH1gfTwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgICAgICAgICA8L2JvZHk+XG4gICAgICAgICAgICA8L0h0bWw+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiU2VydmVyU3R5bGVTaGVldCIsIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJNeURvY3VtZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4Iiwic2hlZXQiLCJvcmlnaW5hbFJlbmRlclBhZ2UiLCJyZW5kZXJQYWdlIiwiZW5oYW5jZUFwcCIsIkFwcCIsInByb3BzIiwiY29sbGVjdFN0eWxlcyIsImluaXRpYWxQcm9wcyIsInN0eWxlcyIsImdldFN0eWxlRWxlbWVudCIsInNlYWwiLCJyZW5kZXIiLCJzdHlsZSIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();