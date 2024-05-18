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

/***/ "./src/components/ratingdisplay.js":
/*!*****************************************!*\
  !*** ./src/components/ratingdisplay.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _RatingModal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RatingModal.module.css */ \"./src/components/RatingModal.module.css\");\n/* harmony import */ var _RatingModal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_RatingModal_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/layout */ \"./src/layout.js\");\n/* harmony import */ var _components_contract__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/contract */ \"./src/components/contract.js\");\n/* harmony import */ var _rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rating */ \"./src/components/rating.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst RatingDisplay = (param)=>{\n    let { freelancerName, totalamount } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [freelancer, setFreelancer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { signedAccountId, wallet } = (0,_layout__WEBPACK_IMPORTED_MODULE_3__.useStore)();\n    const [start, setStart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [finish, setFinish] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const openModal = ()=>{\n        setIsOpen(true);\n    };\n    const closeModal = ()=>{\n        setIsOpen(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!wallet) return;\n        wallet.viewMethod({\n            contractId: _components_contract__WEBPACK_IMPORTED_MODULE_4__.token_contract,\n            method: \"viewRatings\"\n        }).then((ratings)=>setRating(ratings));\n    }, [\n        wallet\n    ]);\n    const renderlist = ()=>{\n        const listItems = [];\n        for(let i = 0; i < rating.length; i++){\n            listItems.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"card\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"card-body\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: [\n                                i + 1,\n                                \". Rating\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alececc/freefreelancer/frontend/src/components/ratingdisplay.js\",\n                            lineNumber: 36,\n                            columnNumber: 9\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Title: \",\n                                rating[i].title,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alececc/freefreelancer/frontend/src/components/ratingdisplay.js\",\n                            lineNumber: 37,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Amount: \",\n                                rating[i].amount,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alececc/freefreelancer/frontend/src/components/ratingdisplay.js\",\n                            lineNumber: 38,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Start: \",\n                                rating[i].start,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alececc/freefreelancer/frontend/src/components/ratingdisplay.js\",\n                            lineNumber: 39,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Finish: \",\n                                rating[i].finish,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alececc/freefreelancer/frontend/src/components/ratingdisplay.js\",\n                            lineNumber: 40,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Rating: \",\n                                rating[i].rating,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alececc/freefreelancer/frontend/src/components/ratingdisplay.js\",\n                            lineNumber: 41,\n                            columnNumber: 7\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Description: \",\n                                rating[i].description,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/alececc/freefreelancer/frontend/src/components/ratingdisplay.js\",\n                            lineNumber: 42,\n                            columnNumber: 7\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/ratingdisplay.js\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/alececc/freefreelancer/frontend/src/components/ratingdisplay.js\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined));\n        }\n        return listItems;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: renderlist()\n    }, void 0, false, {\n        fileName: \"/home/alececc/freefreelancer/frontend/src/components/ratingdisplay.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RatingDisplay, \"thc8gVxix7VN0Ab1//QeDxoXhhg=\", false, function() {\n    return [\n        _layout__WEBPACK_IMPORTED_MODULE_3__.useStore\n    ];\n});\n_c = RatingDisplay;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RatingDisplay);\nvar _c;\n$RefreshReg$(_c, \"RatingDisplay\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9yYXRpbmdkaXNwbGF5LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNMO0FBQ1Y7QUFDb0M7QUFDdEM7QUFDbEMsTUFBTVEsZ0JBQWdCO1FBQUMsRUFBQ0MsY0FBYyxFQUFFQyxXQUFXLEVBQUM7O0lBQ2xELE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNZLFlBQVlDLGNBQWMsR0FBR2IsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDYyxRQUFRQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2dCLE9BQU9DLFNBQVMsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sRUFBRW9CLGVBQWUsRUFBRUMsTUFBTSxFQUFFLEdBQUdsQixpREFBUUE7SUFDNUMsTUFBTSxDQUFDbUIsT0FBT0MsU0FBUyxHQUFHdkIsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDd0IsUUFBUUMsVUFBVSxHQUFHekIsK0NBQVFBLENBQUM7SUFDckMsTUFBTTBCLFlBQVk7UUFDaEJmLFVBQVU7SUFDWjtJQUVBLE1BQU1nQixhQUFhO1FBQ2pCaEIsVUFBVTtJQUNaO0lBQ0FWLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDb0IsUUFBUTtRQUNiQSxPQUFPTyxVQUFVLENBQUM7WUFBRUMsWUFBWXhCLGdFQUFjQTtZQUFFeUIsUUFBUTtRQUFjLEdBQUdDLElBQUksQ0FDM0VDLENBQUFBLFVBQVdqQixVQUFVaUI7SUFFekIsR0FBRztRQUFDWDtLQUFPO0lBRVgsTUFBTVksYUFBYTtRQUNqQixNQUFNQyxZQUFZLEVBQUU7UUFDcEIsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlyQixPQUFPc0IsTUFBTSxFQUFFRCxJQUFLO1lBRXRDRCxVQUFVRyxJQUFJLGVBQ1osOERBQUNDO2dCQUFJQyxPQUFNOzBCQUNiLDRFQUFDRDtvQkFBSUMsT0FBTTs7c0NBQ1QsOERBQUNDOztnQ0FBSUwsSUFBRTtnQ0FBRzs7Ozs7OztzQ0FDWiw4REFBQ007O2dDQUFFO2dDQUFRM0IsTUFBTSxDQUFDcUIsRUFBRSxDQUFDbkIsS0FBSztnQ0FBQzs7Ozs7OztzQ0FDM0IsOERBQUN5Qjs7Z0NBQUU7Z0NBQVMzQixNQUFNLENBQUNxQixFQUFFLENBQUNPLE1BQU07Z0NBQUM7Ozs7Ozs7c0NBQzdCLDhEQUFDRDs7Z0NBQUU7Z0NBQVEzQixNQUFNLENBQUNxQixFQUFFLENBQUNiLEtBQUs7Z0NBQUM7Ozs7Ozs7c0NBQzNCLDhEQUFDbUI7O2dDQUFFO2dDQUFTM0IsTUFBTSxDQUFDcUIsRUFBRSxDQUFDWCxNQUFNO2dDQUFDOzs7Ozs7O3NDQUM3Qiw4REFBQ2lCOztnQ0FBRTtnQ0FBUzNCLE1BQU0sQ0FBQ3FCLEVBQUUsQ0FBQ3JCLE1BQU07Z0NBQUM7Ozs7Ozs7c0NBQzdCLDhEQUFDMkI7O2dDQUFFO2dDQUFjM0IsTUFBTSxDQUFDcUIsRUFBRSxDQUFDUSxXQUFXO2dDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7UUFVekM7UUFDQSxPQUFPVDtJQUNUO0lBRUEscUJBQ0UsOERBQUNJO2tCQUNFTDs7Ozs7O0FBR1A7R0F2RE0xQjs7UUFNZ0NKLDZDQUFRQTs7O0tBTnhDSTtBQXlETiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yYXRpbmdkaXNwbGF5LmpzPzYyOWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmF0aW5nTW9kYWwubW9kdWxlLmNzcyc7XG5pbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ0AvbGF5b3V0JztcbmltcG9ydCB7IHByb2plY3RfY29udHJhY3QsdG9rZW5fY29udHJhY3QgfSBmcm9tICdAL2NvbXBvbmVudHMvY29udHJhY3QnO1xuaW1wb3J0IHsgUmF0aW5nIH0gZnJvbSAnLi9yYXRpbmcnO1xuY29uc3QgUmF0aW5nRGlzcGxheSA9ICh7ZnJlZWxhbmNlck5hbWUsIHRvdGFsYW1vdW50fSkgPT4ge1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZnJlZWxhbmNlciwgc2V0RnJlZWxhbmNlcl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyYXRpbmcsIHNldFJhdGluZ10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgeyBzaWduZWRBY2NvdW50SWQsIHdhbGxldCB9ID0gdXNlU3RvcmUoKTtcbiAgY29uc3QgW3N0YXJ0LCBzZXRTdGFydF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2ZpbmlzaCwgc2V0RmluaXNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBvcGVuTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0SXNPcGVuKGZhbHNlKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdhbGxldCkgcmV0dXJuO1xuICAgIHdhbGxldC52aWV3TWV0aG9kKHsgY29udHJhY3RJZDogdG9rZW5fY29udHJhY3QsIG1ldGhvZDogJ3ZpZXdSYXRpbmdzJyB9KS50aGVuKFxuICAgICAgcmF0aW5ncyA9PiBzZXRSYXRpbmcocmF0aW5ncylcbiAgICApO1xuICB9LCBbd2FsbGV0XSk7XG5cbiAgY29uc3QgcmVuZGVybGlzdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaXN0SXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhdGluZy5sZW5ndGg7IGkrKykge1xuICAgICAgXG4gICAgICBsaXN0SXRlbXMucHVzaChcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGgzPntpKzEgfS4gUmF0aW5nPC9oMz5cbiAgICAgIDxwPlRpdGxlOiB7cmF0aW5nW2ldLnRpdGxlfSA8L3A+XG4gICAgICA8cD5BbW91bnQ6IHtyYXRpbmdbaV0uYW1vdW50fSA8L3A+XG4gICAgICA8cD5TdGFydDoge3JhdGluZ1tpXS5zdGFydH0gPC9wPlxuICAgICAgPHA+RmluaXNoOiB7cmF0aW5nW2ldLmZpbmlzaH0gPC9wPlxuICAgICAgPHA+UmF0aW5nOiB7cmF0aW5nW2ldLnJhdGluZ30gPC9wPlxuICAgICAgPHA+RGVzY3JpcHRpb246IHtyYXRpbmdbaV0uZGVzY3JpcHRpb259IDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICApIDtcbiAgICB9XG4gICAgcmV0dXJuIGxpc3RJdGVtcztcbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtyZW5kZXJsaXN0KCl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSYXRpbmdEaXNwbGF5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJ1c2VTdG9yZSIsInByb2plY3RfY29udHJhY3QiLCJ0b2tlbl9jb250cmFjdCIsIlJhdGluZyIsIlJhdGluZ0Rpc3BsYXkiLCJmcmVlbGFuY2VyTmFtZSIsInRvdGFsYW1vdW50IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwiZnJlZWxhbmNlciIsInNldEZyZWVsYW5jZXIiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJ0aXRsZSIsInNldFRpdGxlIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsInNpZ25lZEFjY291bnRJZCIsIndhbGxldCIsInN0YXJ0Iiwic2V0U3RhcnQiLCJmaW5pc2giLCJzZXRGaW5pc2giLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwidmlld01ldGhvZCIsImNvbnRyYWN0SWQiLCJtZXRob2QiLCJ0aGVuIiwicmF0aW5ncyIsInJlbmRlcmxpc3QiLCJsaXN0SXRlbXMiLCJpIiwibGVuZ3RoIiwicHVzaCIsImRpdiIsImNsYXNzIiwiaDMiLCJwIiwiYW1vdW50IiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/ratingdisplay.js\n"));

/***/ })

});