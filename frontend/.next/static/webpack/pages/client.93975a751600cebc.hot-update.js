"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/client",{

/***/ "./src/components/popup-rating.js":
/*!****************************************!*\
  !*** ./src/components/popup-rating.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RatingModal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RatingModal.module.css */ \"./src/components/RatingModal.module.css\");\n/* harmony import */ var _RatingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RatingModal_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layout */ \"./src/layout.js\");\n/* harmony import */ var _components_contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/contract */ \"./src/components/contract.js\");\n/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating */ \"./src/components/rating.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RatingModal = (param)=>{\n    let { freelancerName, totalamount } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [freelancer, setFreelancer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { signedAccountId, wallet } = (0,_layout__WEBPACK_IMPORTED_MODULE_3__.useStore)();\n    const openModal = ()=>{\n        setIsOpen(true);\n    };\n    const closeModal = ()=>{\n        setIsOpen(false);\n    };\n    const addRating = async ()=>{\n        setShowSpinner(true);\n        await wallet.callMethod({\n            contractId: _components_contract__WEBPACK_IMPORTED_MODULE_4__.token_contract,\n            method: \"addRating\",\n            args: {\n                rating: rating\n            }\n        });\n        setShowSpinner(false);\n    };\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        alert(\"Rating submitted successfully!\");\n        setIsOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_RatingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default().rateBtn),\n                onClick: openModal,\n                children: [\n                    \"Please rate \",\n                    freelancerName\n                ]\n            }, void 0, true, {\n                fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_RatingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_RatingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modalContent),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_RatingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default().close),\n                            onClick: closeModal,\n                            children: \"\\xd7\"\n                        }, void 0, false, {\n                            fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"Rate \",\n                                freelancerName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                            lineNumber: 39,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            class: \"12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"title\",\n                                    children: \"Project title:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    id: \"rating\",\n                                    value: title,\n                                    onChange: (e)=>setTitle(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"rating\",\n                                    children: \"Rating (1-5):\"\n                                }, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"number\",\n                                    id: \"rating\",\n                                    value: rating,\n                                    onChange: (e)=>setRating(e.target.value),\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 52,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"Total amount\",\n                                    children: \"Total amount in CHF (1-5):\"\n                                }, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"comments\",\n                                    children: \"Comments:\"\n                                }, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 58\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                    id: \"comments\",\n                                    value: comments,\n                                    onChange: (e)=>setComments(e.target.value),\n                                    cols: \"40\",\n                                    rows: \"3\",\n                                    required: true\n                                }, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 27\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 33\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"submit\",\n                                    value: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/alececc/freefreelancer/frontend/src/components/popup-rating.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RatingModal, \"VIL2M9hI7jfZikL+NZ4fTxK0FFY=\", false, function() {\n    return [\n        _layout__WEBPACK_IMPORTED_MODULE_3__.useStore\n    ];\n});\n_c = RatingModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RatingModal);\nvar _c;\n$RefreshReg$(_c, \"RatingModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3BvcHVwLXJhdGluZy5qcz80OTkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JhdGluZ01vZGFsLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdAL2xheW91dCc7XG5pbXBvcnQgeyBwcm9qZWN0X2NvbnRyYWN0LHRva2VuX2NvbnRyYWN0IH0gZnJvbSAnQC9jb21wb25lbnRzL2NvbnRyYWN0JztcbmltcG9ydCB7IFJhdGluZyB9IGZyb20gJy4vcmF0aW5nJztcbmNvbnN0IFJhdGluZ01vZGFsID0gKHtmcmVlbGFuY2VyTmFtZSwgdG90YWxhbW91bnR9KSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtmcmVlbGFuY2VyLCBzZXRGcmVlbGFuY2VyXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCB7IHNpZ25lZEFjY291bnRJZCwgd2FsbGV0IH0gPSB1c2VTdG9yZSgpO1xuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfTtcbiAgY29uc3QgYWRkUmF0aW5nID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFNob3dTcGlubmVyKHRydWUpO1xuICAgIGF3YWl0IHdhbGxldC5jYWxsTWV0aG9kKHsgY29udHJhY3RJZDogdG9rZW5fY29udHJhY3QsIG1ldGhvZDogJ2FkZFJhdGluZycsIGFyZ3M6IHtyYXRpbmc6cmF0aW5nfX0pO1xuICAgIHNldFNob3dTcGlubmVyKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFsZXJ0KCdSYXRpbmcgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xuICB9O1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5yYXRlQnRufSBvbkNsaWNrPXtvcGVuTW9kYWx9PlBsZWFzZSByYXRlIHtmcmVlbGFuY2VyTmFtZX08L2J1dHRvbj5cbiAgICAgIHtpc09wZW4gJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGVudH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZX0gb25DbGljaz17Y2xvc2VNb2RhbH0+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDxoMj5SYXRlIHtmcmVlbGFuY2VyTmFtZX08L2gyPlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3M9XCIxMlwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiPlByb2plY3QgdGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGlkPVwicmF0aW5nXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicmF0aW5nXCI+UmF0aW5nICgxLTUpOjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwicmF0aW5nXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cmF0aW5nfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UmF0aW5nKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAvPjxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIlRvdGFsIGFtb3VudFwiPlRvdGFsIGFtb3VudCBpbiBDSEYgKDEtNSk6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGJyPjwvYnI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29tbWVudHNcIj5Db21tZW50czo8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICBpZD1cImNvbW1lbnRzXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29tbWVudHN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50cyhlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgY29scz1cIjQwXCJcbiAgICAgICAgICAgICAgICByb3dzPVwiM1wiXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+PGJyIC8+PGJyIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTdWJtaXRcIiAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdNb2RhbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwidXNlU3RvcmUiLCJwcm9qZWN0X2NvbnRyYWN0IiwidG9rZW5fY29udHJhY3QiLCJSYXRpbmciLCJSYXRpbmdNb2RhbCIsImZyZWVsYW5jZXJOYW1lIiwidG90YWxhbW91bnQiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJmcmVlbGFuY2VyIiwic2V0RnJlZWxhbmNlciIsInJhdGluZyIsInNldFJhdGluZyIsInRpdGxlIiwic2V0VGl0bGUiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwic2lnbmVkQWNjb3VudElkIiwid2FsbGV0Iiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsImFkZFJhdGluZyIsInNldFNob3dTcGlubmVyIiwiY2FsbE1ldGhvZCIsImNvbnRyYWN0SWQiLCJtZXRob2QiLCJhcmdzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImFsZXJ0IiwiZGl2IiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwicmF0ZUJ0biIsIm9uQ2xpY2siLCJtb2RhbCIsIm1vZGFsQ29udGVudCIsInNwYW4iLCJjbG9zZSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiY2xhc3MiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJiciIsInRleHRhcmVhIiwiY29scyIsInJvd3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/popup-rating.js\n"));

/***/ })

});