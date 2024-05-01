"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_vm-component_js";
exports.ids = ["src_components_vm-component_js"];
exports.modules = {

/***/ "./src/components/vm-component.js":
/*!****************************************!*\
  !*** ./src/components/vm-component.js ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var near_social_vm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! near-social-vm */ \"near-social-vm\");\n/* harmony import */ var near_social_vm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(near_social_vm__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _wallets_web3_wallet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/wallets/web3-wallet */ \"./src/wallets/web3-wallet.ts\");\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/layout */ \"./src/layout.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wallets_web3_wallet__WEBPACK_IMPORTED_MODULE_3__, _layout__WEBPACK_IMPORTED_MODULE_4__]);\n([_wallets_web3_wallet__WEBPACK_IMPORTED_MODULE_3__, _layout__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Component({ src }) {\n    const ethersContext = (0,_wallets_web3_wallet__WEBPACK_IMPORTED_MODULE_3__.useEthersProviderContext)();\n    const { wallet } = (0,_layout__WEBPACK_IMPORTED_MODULE_4__.useStore)();\n    const { initNear } = (0,near_social_vm__WEBPACK_IMPORTED_MODULE_2__.useInitNear)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        wallet && initNear && initNear({\n            networkId: alessioba5.testnet,\n            selector: wallet.selector,\n            config: {\n                allowOtherContracts: true\n            }\n        });\n    }, [\n        wallet,\n        initNear\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(near_social_vm__WEBPACK_IMPORTED_MODULE_2__.EthersProviderContext.Provider, {\n                value: ethersContext,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(near_social_vm__WEBPACK_IMPORTED_MODULE_2__.Widget, {\n                    src: src\n                }, void 0, false, {\n                    fileName: \"/home/alececc/freefreelancer/frontend/src/components/vm-component.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/alececc/freefreelancer/frontend/src/components/vm-component.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 small\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"text-secondary\",\n                        children: \"Source:\"\n                    }, void 0, false, {\n                        fileName: \"/home/alececc/freefreelancer/frontend/src/components/vm-component.js\",\n                        lineNumber: 22,\n                        columnNumber: 34\n                    }, this),\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: `https://near.social/mob.near/widget/WidgetSource?src=${src}`,\n                        children: [\n                            \" \",\n                            src,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/alececc/freefreelancer/frontend/src/components/vm-component.js\",\n                        lineNumber: 22,\n                        columnNumber: 82\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"/home/alececc/freefreelancer/frontend/src/components/vm-component.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/alececc/freefreelancer/frontend/src/components/vm-component.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy92bS1jb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFrQztBQUMwQztBQUVYO0FBRTdCO0FBRXJCLFNBQVNNLFVBQVUsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLE1BQU1DLGdCQUFnQkosOEVBQXdCQTtJQUM5QyxNQUFNLEVBQUVLLE1BQU0sRUFBRSxHQUFHSixpREFBUUE7SUFDM0IsTUFBTSxFQUFFSyxRQUFRLEVBQUUsR0FBR1QsMkRBQVdBO0lBRWhDRCxnREFBU0EsQ0FBQztRQUNSUyxVQUFVQyxZQUFZQSxTQUFTO1lBQUVDLFdBQVdDLFdBQVdDLE9BQU87WUFBRUMsVUFBVUwsT0FBT0ssUUFBUTtZQUFFQyxRQUFRO2dCQUFFQyxxQkFBcUI7WUFBSztRQUFFO0lBQ25JLEdBQUc7UUFBQ1A7UUFBUUM7S0FBUztJQUVyQixxQkFDRSw4REFBQ087OzBCQUNDLDhEQUFDZCxpRUFBcUJBLENBQUNlLFFBQVE7Z0JBQUNDLE9BQU9YOzBCQUNyQyw0RUFBQ04sa0RBQU1BO29CQUFDSyxLQUFLQTs7Ozs7Ozs7Ozs7MEJBRWYsOERBQUNhO2dCQUFFQyxXQUFVOztvQkFBYTtrQ0FBQyw4REFBQ0M7d0JBQUtELFdBQVU7a0NBQWlCOzs7Ozs7b0JBQWM7a0NBQUMsOERBQUNFO3dCQUFFQyxNQUFNLENBQUMscURBQXFELEVBQUVqQixJQUFJLENBQUM7OzRCQUFFOzRCQUFFQTs0QkFBSTs7Ozs7OztvQkFBSzs7Ozs7Ozs7Ozs7OztBQUdwSyIsInNvdXJjZXMiOlsid2VicGFjazovL2hlbGxvLW5lYXIvLi9zcmMvY29tcG9uZW50cy92bS1jb21wb25lbnQuanM/NmEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VJbml0TmVhciwgV2lkZ2V0LCBFdGhlcnNQcm92aWRlckNvbnRleHQgfSBmcm9tICduZWFyLXNvY2lhbC12bSc7XG5cbmltcG9ydCB7IHVzZUV0aGVyc1Byb3ZpZGVyQ29udGV4dCB9IGZyb20gJ0Avd2FsbGV0cy93ZWIzLXdhbGxldCc7XG5cbmltcG9ydCB7IHVzZVN0b3JlIH0gZnJvbSAnQC9sYXlvdXQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQoeyBzcmMgfSkge1xuICBjb25zdCBldGhlcnNDb250ZXh0ID0gdXNlRXRoZXJzUHJvdmlkZXJDb250ZXh0KCk7XG4gIGNvbnN0IHsgd2FsbGV0IH0gPSB1c2VTdG9yZSgpO1xuICBjb25zdCB7IGluaXROZWFyIH0gPSB1c2VJbml0TmVhcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgd2FsbGV0ICYmIGluaXROZWFyICYmIGluaXROZWFyKHsgbmV0d29ya0lkOiBhbGVzc2lvYmE1LnRlc3RuZXQsIHNlbGVjdG9yOiB3YWxsZXQuc2VsZWN0b3IsIGNvbmZpZzogeyBhbGxvd090aGVyQ29udHJhY3RzOiB0cnVlIH0gfSk7XG4gIH0sIFt3YWxsZXQsIGluaXROZWFyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEV0aGVyc1Byb3ZpZGVyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17ZXRoZXJzQ29udGV4dH0+XG4gICAgICAgIDxXaWRnZXQgc3JjPXtzcmN9IC8+XG4gICAgICA8L0V0aGVyc1Byb3ZpZGVyQ29udGV4dC5Qcm92aWRlcj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTQgc21hbGxcIj4gPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj5Tb3VyY2U6PC9zcGFuPiA8YSBocmVmPXtgaHR0cHM6Ly9uZWFyLnNvY2lhbC9tb2IubmVhci93aWRnZXQvV2lkZ2V0U291cmNlP3NyYz0ke3NyY31gfT4ge3NyY30gPC9hPiA8L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlSW5pdE5lYXIiLCJXaWRnZXQiLCJFdGhlcnNQcm92aWRlckNvbnRleHQiLCJ1c2VFdGhlcnNQcm92aWRlckNvbnRleHQiLCJ1c2VTdG9yZSIsIkNvbXBvbmVudCIsInNyYyIsImV0aGVyc0NvbnRleHQiLCJ3YWxsZXQiLCJpbml0TmVhciIsIm5ldHdvcmtJZCIsImFsZXNzaW9iYTUiLCJ0ZXN0bmV0Iiwic2VsZWN0b3IiLCJjb25maWciLCJhbGxvd090aGVyQ29udHJhY3RzIiwiZGl2IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInAiLCJjbGFzc05hbWUiLCJzcGFuIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/vm-component.js\n");

/***/ }),

/***/ "./src/wallets/web3-wallet.ts":
/*!************************************!*\
  !*** ./src/wallets/web3-wallet.ts ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   onboard: () => (/* binding */ onboard),\n/* harmony export */   useEthersProviderContext: () => (/* binding */ useEthersProviderContext)\n/* harmony export */ });\n/* harmony import */ var _web3_onboard_injected_wallets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-onboard/injected-wallets */ \"@web3-onboard/injected-wallets\");\n/* harmony import */ var _web3_onboard_ledger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-onboard/ledger */ \"@web3-onboard/ledger\");\n/* harmony import */ var _web3_onboard_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-onboard/react */ \"@web3-onboard/react\");\n/* harmony import */ var _web3_onboard_walletconnect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-onboard/walletconnect */ \"@web3-onboard/walletconnect\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_singleton_hook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-singleton-hook */ \"react-singleton-hook\");\n/* harmony import */ var react_singleton_hook__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_singleton_hook__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_web3_onboard_injected_wallets__WEBPACK_IMPORTED_MODULE_0__, _web3_onboard_ledger__WEBPACK_IMPORTED_MODULE_1__, _web3_onboard_react__WEBPACK_IMPORTED_MODULE_2__, _web3_onboard_walletconnect__WEBPACK_IMPORTED_MODULE_3__]);\n([_web3_onboard_injected_wallets__WEBPACK_IMPORTED_MODULE_0__, _web3_onboard_ledger__WEBPACK_IMPORTED_MODULE_1__, _web3_onboard_react__WEBPACK_IMPORTED_MODULE_2__, _web3_onboard_walletconnect__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ onboard,useEthersProviderContext auto */ \n\n\n\n\n\nconst web3onboardKey = \"web3-onboard:connectedWallets\";\nconst wcV2InitOptions = {\n    version: 2,\n    projectId: \"72b7b3359ab477e339a070f615806aa6\",\n    requiredChains: [\n        1,\n        56\n    ]\n};\nconst walletConnect = (0,_web3_onboard_walletconnect__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(wcV2InitOptions);\nconst ledger = (0,_web3_onboard_ledger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(wcV2InitOptions);\nconst injected = (0,_web3_onboard_injected_wallets__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n// initialize Onboard\nconst onboard = (0,_web3_onboard_react__WEBPACK_IMPORTED_MODULE_2__.init)({\n    wallets: [\n        injected,\n        walletConnect,\n        ledger\n    ],\n    chains: [\n        {\n            id: 1,\n            token: \"ETH\",\n            label: \"Ethereum Mainnet\",\n            rpcUrl: \"https://rpc.ankr.com/eth\"\n        },\n        {\n            id: 3,\n            token: \"ETH\",\n            label: \"Ropsten - Ethereum Testnet\",\n            rpcUrl: \"https://rpc.ankr.com/eth_ropsten\"\n        },\n        {\n            id: 5,\n            token: \"ETH\",\n            label: \"Goerli - Ethereum Testnet\",\n            rpcUrl: \"https://rpc.ankr.com/eth_goerli\"\n        },\n        {\n            id: 10,\n            token: \"ETH\",\n            label: \"Optimism\",\n            rpcUrl: \"https://rpc.ankr.com/optimism\"\n        },\n        {\n            id: 420,\n            token: \"ETH\",\n            label: \"Optimism Goerli Testnet\",\n            rpcUrl: \"https://optimism-goerli.publicnode.com\"\n        },\n        {\n            id: 56,\n            token: \"BNB\",\n            label: \"Binance Smart Chain Mainnet\",\n            rpcUrl: \"https://bsc.publicnode.com\"\n        },\n        {\n            id: 97,\n            token: \"tBNB\",\n            label: \"Binance Smart Chain Testnet\",\n            rpcUrl: \"https://bsc-testnet.publicnode.com\"\n        },\n        {\n            id: 1313161554,\n            token: \"ETH\",\n            label: \"Aurora Mainnet\",\n            rpcUrl: \"https://mainnet.aurora.dev\"\n        },\n        {\n            id: 1313161555,\n            token: \"ETH\",\n            label: \"Aurora Testnet\",\n            rpcUrl: \"https://testnet.aurora.dev\"\n        },\n        {\n            id: 137,\n            token: \"MATIC\",\n            label: \"Polygon Mainnet\",\n            rpcUrl: \"https://rpc.ankr.com/polygon\"\n        },\n        {\n            id: 80001,\n            token: \"MATIC\",\n            label: \"Polygon Testnet Mumbai\",\n            rpcUrl: \"https://rpc.ankr.com/polygon_mumbai\"\n        },\n        {\n            id: 280,\n            token: \"ETH\",\n            label: \"zkSync Era Testnet\",\n            rpcUrl: \"https://testnet.era.zksync.dev\"\n        },\n        {\n            id: 324,\n            token: \"ETH\",\n            label: \"zkSync Era Mainnet\",\n            rpcUrl: \"https://zksync2-mainnet.zksync.io\"\n        },\n        {\n            id: 1101,\n            token: \"ETH\",\n            label: \"Polygon zkEVM\",\n            rpcUrl: \"https://zkevm-rpc.com\"\n        },\n        {\n            id: 1442,\n            token: \"ETH\",\n            label: \"Polygon zkEVM Testnet\",\n            rpcUrl: \"https://rpc.public.zkevm-test.net\"\n        },\n        {\n            id: 42161,\n            token: \"ETH\",\n            label: \"Arbitrum One Mainnet\",\n            rpcUrl: \"https://arb1.arbitrum.io/rpc\"\n        },\n        {\n            id: 42170,\n            token: \"ETH\",\n            label: \"Arbitrum Nova\",\n            rpcUrl: \"https://nova.arbitrum.io/rpc\"\n        },\n        {\n            id: 421613,\n            token: \"AGOR\",\n            label: \"Arbitrum Goerli\",\n            rpcUrl: \"https://goerli-rollup.arbitrum.io/rpc\"\n        },\n        {\n            id: 25,\n            token: \"CRO\",\n            label: \"Cronos Mainnet Beta\",\n            rpcUrl: \"https://evm.cronos.org\"\n        },\n        {\n            id: 338,\n            token: \"TCRO\",\n            label: \"Cronos Testnet\",\n            rpcUrl: \"https://evm-t3.cronos.org\"\n        },\n        {\n            id: 100,\n            token: \"XDAI\",\n            label: \"Gnosis\",\n            rpcUrl: \"https://rpc.ankr.com/gnosis\"\n        },\n        {\n            id: 10200,\n            token: \"XDAI\",\n            label: \"Gnosis Chiado Testnet\",\n            rpcUrl: \"https://rpc.chiadochain.net\"\n        },\n        {\n            id: 42220,\n            token: \"CELO\",\n            label: \"Celo Mainnet\",\n            rpcUrl: \"https://rpc.ankr.com/celo\"\n        },\n        {\n            id: 44787,\n            token: \"CELO\",\n            label: \"Celo Alfajores Testnet\",\n            rpcUrl: \"https://alfajores-forno.celo-testnet.org\"\n        },\n        {\n            id: 43114,\n            token: \"AVAX\",\n            label: \"Avalanche C-Chain\",\n            rpcUrl: \"https://rpc.ankr.com/avalanche\"\n        },\n        {\n            id: 43113,\n            token: \"AVAX\",\n            label: \"Avalanche Fuji Testnet\",\n            rpcUrl: \"https://rpc.ankr.com/avalanche_fuji\"\n        },\n        {\n            id: 250,\n            token: \"FTM\",\n            label: \"Fantom Opera\",\n            rpcUrl: \"https://rpc.ankr.com/fantom\"\n        },\n        {\n            id: 4002,\n            token: \"FTM\",\n            label: \"Fantom Testnet\",\n            rpcUrl: \"https://rpc.ankr.com/fantom_testnet\"\n        },\n        {\n            id: 1284,\n            token: \"GLMR\",\n            label: \"Moonbeam\",\n            rpcUrl: \"https://rpc.ankr.com/moonbeam\"\n        },\n        {\n            id: 61,\n            token: \"ETC\",\n            label: \"Ethereum Classic Mainnet\",\n            rpcUrl: \"https://etc.rivet.link\"\n        },\n        {\n            id: 84531,\n            token: \"ETH\",\n            label: \"Base Goerli Testnet\",\n            rpcUrl: \"https://goerli.base.org\"\n        },\n        {\n            id: 8453,\n            token: \"ETH\",\n            label: \"Base\",\n            rpcUrl: \"https://mainnet.base.org\"\n        },\n        {\n            id: 5001,\n            token: \"MNT\",\n            label: \"Mantle Testnet\",\n            rpcUrl: \"https://rpc.testnet.mantle.xyz\"\n        },\n        {\n            id: 5000,\n            token: \"MNT\",\n            label: \"Mantle\",\n            rpcUrl: \"https://rpc.mantle.xyz\"\n        }\n    ],\n    appMetadata: {\n        name: \"NEAR\",\n        icon: \"/next.svg\",\n        description: \"NEAR\"\n    },\n    theme: \"dark\",\n    containerElements: {\n    }\n});\nconst defaultEthersProviderContext = {\n    useConnectWallet: _web3_onboard_react__WEBPACK_IMPORTED_MODULE_2__.useConnectWallet\n};\nconst useEthersProviderContext = (0,react_singleton_hook__WEBPACK_IMPORTED_MODULE_5__.singletonHook)(defaultEthersProviderContext, ()=>{\n    const [{ wallet }] = (0,_web3_onboard_react__WEBPACK_IMPORTED_MODULE_2__.useConnectWallet)();\n    const [ethersProvider, setEthersProvider] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(defaultEthersProviderContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        (async ()=>{\n            if (typeof localStorage === \"undefined\") return;\n            const walletsSub = onboard.state.select(\"wallets\");\n            walletsSub.subscribe((wallets)=>{\n                const connectedWallets = wallets.map(({ label })=>label);\n                localStorage.setItem(web3onboardKey, JSON.stringify(connectedWallets));\n            });\n            const previouslyConnectedWallets = JSON.parse(localStorage.getItem(web3onboardKey) || \"[]\");\n            if (previouslyConnectedWallets) {\n                // You can also auto connect \"silently\" and disable all onboard modals to avoid them flashing on page load\n                await onboard.connectWallet({\n                    autoSelect: {\n                        label: previouslyConnectedWallets[0],\n                        disableModals: true\n                    }\n                });\n            }\n        })();\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (!wallet) return;\n        setEthersProvider({\n            provider: wallet.provider,\n            useConnectWallet: _web3_onboard_react__WEBPACK_IMPORTED_MODULE_2__.useConnectWallet\n        });\n    }, [\n        wallet\n    ]);\n    return ethersProvider;\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2FsbGV0cy93ZWIzLXdhbGxldC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O3NGQUU0RDtBQUNaO0FBQ2E7QUFDQztBQUNsQjtBQUNTO0FBRXJELE1BQU1RLGlCQUFpQjtBQUV2QixNQUFNQyxrQkFBdUI7SUFDM0JDLFNBQVM7SUFDVEMsV0FBVztJQUNYQyxnQkFBZ0I7UUFBQztRQUFHO0tBQUc7QUFDekI7QUFFQSxNQUFNQyxnQkFBZ0JULHVFQUFtQkEsQ0FBQ0s7QUFDMUMsTUFBTUssU0FBU2IsZ0VBQVlBLENBQUNRO0FBQzVCLE1BQU1NLFdBQVdmLDBFQUFjQTtBQUUvQixxQkFBcUI7QUFDZCxNQUFNZ0IsVUFBVWQseURBQUlBLENBQUM7SUFDMUJlLFNBQVM7UUFBQ0Y7UUFBVUY7UUFBZUM7S0FBTztJQUMxQ0ksUUFBUTtRQUNOO1lBQ0VDLElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtRQUNBO1lBQ0VILElBQUk7WUFDSkMsT0FBTztZQUNQQyxPQUFPO1lBQ1BDLFFBQVE7UUFDVjtLQUNEO0lBQ0RDLGFBQWE7UUFDWEMsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLGFBQWE7SUFDZjtJQUNBQyxPQUFPO0lBQ1BDLG1CQUFtQjtJQUduQjtBQUNGLEdBQUc7QUFPSCxNQUFNQywrQkFBc0Q7SUFBRTFCLGdCQUFnQkEsbUVBQUFBO0FBQUM7QUFFeEUsTUFBTTJCLDJCQUEyQnZCLG1FQUFhQSxDQUFDc0IsOEJBQThCO0lBQ2xGLE1BQU0sQ0FBQyxFQUFFRSxNQUFNLEVBQUUsQ0FBQyxHQUFHNUIscUVBQWdCQTtJQUNyQyxNQUFNLENBQUM2QixnQkFBZ0JDLGtCQUFrQixHQUFHM0IsK0NBQVFBLENBQUN1QjtJQUVyRHhCLGdEQUFTQSxDQUFDO1FBQ1A7WUFDQyxJQUFJLE9BQU82QixpQkFBaUIsYUFBYTtZQUV6QyxNQUFNQyxhQUFhbkIsUUFBUW9CLEtBQUssQ0FBQ0MsTUFBTSxDQUFDO1lBRXhDRixXQUFXRyxTQUFTLENBQUMsQ0FBQ3JCO2dCQUNwQixNQUFNc0IsbUJBQW1CdEIsUUFBUXVCLEdBQUcsQ0FBQyxDQUFDLEVBQUVuQixLQUFLLEVBQUUsR0FBS0E7Z0JBQ3BEYSxhQUFhTyxPQUFPLENBQUNqQyxnQkFBZ0JrQyxLQUFLQyxTQUFTLENBQUNKO1lBQ3REO1lBRUEsTUFBTUssNkJBQTZCRixLQUFLRyxLQUFLLENBQUNYLGFBQWFZLE9BQU8sQ0FBQ3RDLG1CQUFtQjtZQUV0RixJQUFJb0MsNEJBQTRCO2dCQUM5QiwwR0FBMEc7Z0JBQzFHLE1BQU01QixRQUFRK0IsYUFBYSxDQUFDO29CQUMxQkMsWUFBWTt3QkFDVjNCLE9BQU91QiwwQkFBMEIsQ0FBQyxFQUFFO3dCQUNwQ0ssZUFBZTtvQkFDakI7Z0JBQ0Y7WUFDRjtRQUNGO0lBQ0YsR0FBRyxFQUFFO0lBRUw1QyxnREFBU0EsQ0FBQztRQUNSLElBQUksQ0FBQzBCLFFBQVE7UUFFYkUsa0JBQWtCO1lBQ2hCaUIsVUFBVW5CLE9BQU9tQixRQUFRO1lBQ3pCL0MsZ0JBQWdCQSxtRUFBQUE7UUFDbEI7SUFDRixHQUFHO1FBQUM0QjtLQUFPO0lBRVgsT0FBT0M7QUFDVCxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGVsbG8tbmVhci8uL3NyYy93YWxsZXRzL3dlYjMtd2FsbGV0LnRzPzMxY2YiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHR5cGUgeyBFSVAxMTkzUHJvdmlkZXIgfSBmcm9tICdAd2ViMy1vbmJvYXJkL2NvcmUnO1xuaW1wb3J0IGluamVjdGVkTW9kdWxlIGZyb20gJ0B3ZWIzLW9uYm9hcmQvaW5qZWN0ZWQtd2FsbGV0cyc7XG5pbXBvcnQgbGVkZ2VyTW9kdWxlIGZyb20gJ0B3ZWIzLW9uYm9hcmQvbGVkZ2VyJztcbmltcG9ydCB7IGluaXQsIHVzZUNvbm5lY3RXYWxsZXQgfSBmcm9tICdAd2ViMy1vbmJvYXJkL3JlYWN0JztcbmltcG9ydCB3YWxsZXRDb25uZWN0TW9kdWxlIGZyb20gJ0B3ZWIzLW9uYm9hcmQvd2FsbGV0Y29ubmVjdCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2luZ2xldG9uSG9vayB9IGZyb20gJ3JlYWN0LXNpbmdsZXRvbi1ob29rJztcblxuY29uc3Qgd2ViM29uYm9hcmRLZXkgPSAnd2ViMy1vbmJvYXJkOmNvbm5lY3RlZFdhbGxldHMnO1xuXG5jb25zdCB3Y1YySW5pdE9wdGlvbnM6IGFueSA9IHtcbiAgdmVyc2lvbjogMixcbiAgcHJvamVjdElkOiAnNzJiN2IzMzU5YWI0NzdlMzM5YTA3MGY2MTU4MDZhYTYnLFxuICByZXF1aXJlZENoYWluczogWzEsIDU2XSxcbn07XG5cbmNvbnN0IHdhbGxldENvbm5lY3QgPSB3YWxsZXRDb25uZWN0TW9kdWxlKHdjVjJJbml0T3B0aW9ucyk7XG5jb25zdCBsZWRnZXIgPSBsZWRnZXJNb2R1bGUod2NWMkluaXRPcHRpb25zKTtcbmNvbnN0IGluamVjdGVkID0gaW5qZWN0ZWRNb2R1bGUoKTtcblxuLy8gaW5pdGlhbGl6ZSBPbmJvYXJkXG5leHBvcnQgY29uc3Qgb25ib2FyZCA9IGluaXQoe1xuICB3YWxsZXRzOiBbaW5qZWN0ZWQsIHdhbGxldENvbm5lY3QsIGxlZGdlcl0sXG4gIGNoYWluczogW1xuICAgIHtcbiAgICAgIGlkOiAxLFxuICAgICAgdG9rZW46ICdFVEgnLFxuICAgICAgbGFiZWw6ICdFdGhlcmV1bSBNYWlubmV0JyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vcnBjLmFua3IuY29tL2V0aCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIHRva2VuOiAnRVRIJyxcbiAgICAgIGxhYmVsOiAnUm9wc3RlbiAtIEV0aGVyZXVtIFRlc3RuZXQnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly9ycGMuYW5rci5jb20vZXRoX3JvcHN0ZW4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICB0b2tlbjogJ0VUSCcsXG4gICAgICBsYWJlbDogJ0dvZXJsaSAtIEV0aGVyZXVtIFRlc3RuZXQnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly9ycGMuYW5rci5jb20vZXRoX2dvZXJsaScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTAsXG4gICAgICB0b2tlbjogJ0VUSCcsXG4gICAgICBsYWJlbDogJ09wdGltaXNtJyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vcnBjLmFua3IuY29tL29wdGltaXNtJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0MjAsXG4gICAgICB0b2tlbjogJ0VUSCcsXG4gICAgICBsYWJlbDogJ09wdGltaXNtIEdvZXJsaSBUZXN0bmV0JyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vb3B0aW1pc20tZ29lcmxpLnB1YmxpY25vZGUuY29tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1NixcbiAgICAgIHRva2VuOiAnQk5CJyxcbiAgICAgIGxhYmVsOiAnQmluYW5jZSBTbWFydCBDaGFpbiBNYWlubmV0JyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vYnNjLnB1YmxpY25vZGUuY29tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA5NyxcbiAgICAgIHRva2VuOiAndEJOQicsXG4gICAgICBsYWJlbDogJ0JpbmFuY2UgU21hcnQgQ2hhaW4gVGVzdG5ldCcsXG4gICAgICBycGNVcmw6ICdodHRwczovL2JzYy10ZXN0bmV0LnB1YmxpY25vZGUuY29tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxMzEzMTYxNTU0LFxuICAgICAgdG9rZW46ICdFVEgnLFxuICAgICAgbGFiZWw6ICdBdXJvcmEgTWFpbm5ldCcsXG4gICAgICBycGNVcmw6ICdodHRwczovL21haW5uZXQuYXVyb3JhLmRldicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTMxMzE2MTU1NSxcbiAgICAgIHRva2VuOiAnRVRIJyxcbiAgICAgIGxhYmVsOiAnQXVyb3JhIFRlc3RuZXQnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly90ZXN0bmV0LmF1cm9yYS5kZXYnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEzNyxcbiAgICAgIHRva2VuOiAnTUFUSUMnLFxuICAgICAgbGFiZWw6ICdQb2x5Z29uIE1haW5uZXQnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly9ycGMuYW5rci5jb20vcG9seWdvbicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogODAwMDEsXG4gICAgICB0b2tlbjogJ01BVElDJyxcbiAgICAgIGxhYmVsOiAnUG9seWdvbiBUZXN0bmV0IE11bWJhaScsXG4gICAgICBycGNVcmw6ICdodHRwczovL3JwYy5hbmtyLmNvbS9wb2x5Z29uX211bWJhaScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMjgwLFxuICAgICAgdG9rZW46ICdFVEgnLFxuICAgICAgbGFiZWw6ICd6a1N5bmMgRXJhIFRlc3RuZXQnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly90ZXN0bmV0LmVyYS56a3N5bmMuZGV2JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzMjQsXG4gICAgICB0b2tlbjogJ0VUSCcsXG4gICAgICBsYWJlbDogJ3prU3luYyBFcmEgTWFpbm5ldCcsXG4gICAgICBycGNVcmw6ICdodHRwczovL3prc3luYzItbWFpbm5ldC56a3N5bmMuaW8nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDExMDEsXG4gICAgICB0b2tlbjogJ0VUSCcsXG4gICAgICBsYWJlbDogJ1BvbHlnb24gemtFVk0nLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly96a2V2bS1ycGMuY29tJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNDQyLFxuICAgICAgdG9rZW46ICdFVEgnLFxuICAgICAgbGFiZWw6ICdQb2x5Z29uIHprRVZNIFRlc3RuZXQnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly9ycGMucHVibGljLnprZXZtLXRlc3QubmV0JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0MjE2MSxcbiAgICAgIHRva2VuOiAnRVRIJyxcbiAgICAgIGxhYmVsOiAnQXJiaXRydW0gT25lIE1haW5uZXQnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly9hcmIxLmFyYml0cnVtLmlvL3JwYycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNDIxNzAsXG4gICAgICB0b2tlbjogJ0VUSCcsXG4gICAgICBsYWJlbDogJ0FyYml0cnVtIE5vdmEnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly9ub3ZhLmFyYml0cnVtLmlvL3JwYycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNDIxNjEzLFxuICAgICAgdG9rZW46ICdBR09SJyxcbiAgICAgIGxhYmVsOiAnQXJiaXRydW0gR29lcmxpJyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vZ29lcmxpLXJvbGx1cC5hcmJpdHJ1bS5pby9ycGMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDI1LFxuICAgICAgdG9rZW46ICdDUk8nLFxuICAgICAgbGFiZWw6ICdDcm9ub3MgTWFpbm5ldCBCZXRhJyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vZXZtLmNyb25vcy5vcmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDMzOCxcbiAgICAgIHRva2VuOiAnVENSTycsXG4gICAgICBsYWJlbDogJ0Nyb25vcyBUZXN0bmV0JyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vZXZtLXQzLmNyb25vcy5vcmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEwMCxcbiAgICAgIHRva2VuOiAnWERBSScsXG4gICAgICBsYWJlbDogJ0dub3NpcycsXG4gICAgICBycGNVcmw6ICdodHRwczovL3JwYy5hbmtyLmNvbS9nbm9zaXMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEwMjAwLFxuICAgICAgdG9rZW46ICdYREFJJyxcbiAgICAgIGxhYmVsOiAnR25vc2lzIENoaWFkbyBUZXN0bmV0JyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vcnBjLmNoaWFkb2NoYWluLm5ldCcsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNDIyMjAsXG4gICAgICB0b2tlbjogJ0NFTE8nLFxuICAgICAgbGFiZWw6ICdDZWxvIE1haW5uZXQnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly9ycGMuYW5rci5jb20vY2VsbycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNDQ3ODcsXG4gICAgICB0b2tlbjogJ0NFTE8nLFxuICAgICAgbGFiZWw6ICdDZWxvIEFsZmFqb3JlcyBUZXN0bmV0JyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vYWxmYWpvcmVzLWZvcm5vLmNlbG8tdGVzdG5ldC5vcmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQzMTE0LFxuICAgICAgdG9rZW46ICdBVkFYJyxcbiAgICAgIGxhYmVsOiAnQXZhbGFuY2hlIEMtQ2hhaW4nLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly9ycGMuYW5rci5jb20vYXZhbGFuY2hlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA0MzExMyxcbiAgICAgIHRva2VuOiAnQVZBWCcsXG4gICAgICBsYWJlbDogJ0F2YWxhbmNoZSBGdWppIFRlc3RuZXQnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly9ycGMuYW5rci5jb20vYXZhbGFuY2hlX2Z1amknLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDI1MCxcbiAgICAgIHRva2VuOiAnRlRNJyxcbiAgICAgIGxhYmVsOiAnRmFudG9tIE9wZXJhJyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vcnBjLmFua3IuY29tL2ZhbnRvbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNDAwMixcbiAgICAgIHRva2VuOiAnRlRNJyxcbiAgICAgIGxhYmVsOiAnRmFudG9tIFRlc3RuZXQnLFxuICAgICAgcnBjVXJsOiAnaHR0cHM6Ly9ycGMuYW5rci5jb20vZmFudG9tX3Rlc3RuZXQnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEyODQsXG4gICAgICB0b2tlbjogJ0dMTVInLFxuICAgICAgbGFiZWw6ICdNb29uYmVhbScsXG4gICAgICBycGNVcmw6ICdodHRwczovL3JwYy5hbmtyLmNvbS9tb29uYmVhbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNjEsXG4gICAgICB0b2tlbjogJ0VUQycsXG4gICAgICBsYWJlbDogJ0V0aGVyZXVtIENsYXNzaWMgTWFpbm5ldCcsXG4gICAgICBycGNVcmw6ICdodHRwczovL2V0Yy5yaXZldC5saW5rJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA4NDUzMSxcbiAgICAgIHRva2VuOiAnRVRIJyxcbiAgICAgIGxhYmVsOiAnQmFzZSBHb2VybGkgVGVzdG5ldCcsXG4gICAgICBycGNVcmw6ICdodHRwczovL2dvZXJsaS5iYXNlLm9yZycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogODQ1MyxcbiAgICAgIHRva2VuOiAnRVRIJyxcbiAgICAgIGxhYmVsOiAnQmFzZScsXG4gICAgICBycGNVcmw6ICdodHRwczovL21haW5uZXQuYmFzZS5vcmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUwMDEsXG4gICAgICB0b2tlbjogJ01OVCcsXG4gICAgICBsYWJlbDogJ01hbnRsZSBUZXN0bmV0JyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vcnBjLnRlc3RuZXQubWFudGxlLnh5eicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNTAwMCxcbiAgICAgIHRva2VuOiAnTU5UJyxcbiAgICAgIGxhYmVsOiAnTWFudGxlJyxcbiAgICAgIHJwY1VybDogJ2h0dHBzOi8vcnBjLm1hbnRsZS54eXonLFxuICAgIH0sXG4gIF0sXG4gIGFwcE1ldGFkYXRhOiB7XG4gICAgbmFtZTogJ05FQVInLFxuICAgIGljb246ICcvbmV4dC5zdmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnTkVBUicsXG4gIH0sXG4gIHRoZW1lOiAnZGFyaycsXG4gIGNvbnRhaW5lckVsZW1lbnRzOiB7XG4gICAgLy8gY29ubmVjdE1vZGFsOiAnI25lYXItc29jaWFsLW5hdmlnYXRpb24tYmFyJyxcbiAgICAvLyBhY2NvdW50Q2VudGVyOiBcIiNuZWFyLXNvY2lhbC13ZWIzLWFjY291bnRcIixcbiAgfSxcbn0pO1xuXG50eXBlIEV0aGVyc1Byb3ZpZGVyQ29udGV4dCA9IHtcbiAgcHJvdmlkZXI/OiBFSVAxMTkzUHJvdmlkZXI7XG4gIHVzZUNvbm5lY3RXYWxsZXQ6IHR5cGVvZiB1c2VDb25uZWN0V2FsbGV0O1xufTtcblxuY29uc3QgZGVmYXVsdEV0aGVyc1Byb3ZpZGVyQ29udGV4dDogRXRoZXJzUHJvdmlkZXJDb250ZXh0ID0geyB1c2VDb25uZWN0V2FsbGV0IH07XG5cbmV4cG9ydCBjb25zdCB1c2VFdGhlcnNQcm92aWRlckNvbnRleHQgPSBzaW5nbGV0b25Ib29rKGRlZmF1bHRFdGhlcnNQcm92aWRlckNvbnRleHQsICgpID0+IHtcbiAgY29uc3QgW3sgd2FsbGV0IH1dID0gdXNlQ29ubmVjdFdhbGxldCgpO1xuICBjb25zdCBbZXRoZXJzUHJvdmlkZXIsIHNldEV0aGVyc1Byb3ZpZGVyXSA9IHVzZVN0YXRlKGRlZmF1bHRFdGhlcnNQcm92aWRlckNvbnRleHQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgKGFzeW5jICgpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuXG4gICAgICBjb25zdCB3YWxsZXRzU3ViID0gb25ib2FyZC5zdGF0ZS5zZWxlY3QoJ3dhbGxldHMnKTtcblxuICAgICAgd2FsbGV0c1N1Yi5zdWJzY3JpYmUoKHdhbGxldHMpID0+IHtcbiAgICAgICAgY29uc3QgY29ubmVjdGVkV2FsbGV0cyA9IHdhbGxldHMubWFwKCh7IGxhYmVsIH0pID0+IGxhYmVsKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0od2ViM29uYm9hcmRLZXksIEpTT04uc3RyaW5naWZ5KGNvbm5lY3RlZFdhbGxldHMpKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwcmV2aW91c2x5Q29ubmVjdGVkV2FsbGV0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0od2ViM29uYm9hcmRLZXkpIHx8ICdbXScpO1xuXG4gICAgICBpZiAocHJldmlvdXNseUNvbm5lY3RlZFdhbGxldHMpIHtcbiAgICAgICAgLy8gWW91IGNhbiBhbHNvIGF1dG8gY29ubmVjdCBcInNpbGVudGx5XCIgYW5kIGRpc2FibGUgYWxsIG9uYm9hcmQgbW9kYWxzIHRvIGF2b2lkIHRoZW0gZmxhc2hpbmcgb24gcGFnZSBsb2FkXG4gICAgICAgIGF3YWl0IG9uYm9hcmQuY29ubmVjdFdhbGxldCh7XG4gICAgICAgICAgYXV0b1NlbGVjdDoge1xuICAgICAgICAgICAgbGFiZWw6IHByZXZpb3VzbHlDb25uZWN0ZWRXYWxsZXRzWzBdLFxuICAgICAgICAgICAgZGlzYWJsZU1vZGFsczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXdhbGxldCkgcmV0dXJuO1xuXG4gICAgc2V0RXRoZXJzUHJvdmlkZXIoe1xuICAgICAgcHJvdmlkZXI6IHdhbGxldC5wcm92aWRlcixcbiAgICAgIHVzZUNvbm5lY3RXYWxsZXQsXG4gICAgfSk7XG4gIH0sIFt3YWxsZXRdKTtcblxuICByZXR1cm4gZXRoZXJzUHJvdmlkZXI7XG59KTsiXSwibmFtZXMiOlsiaW5qZWN0ZWRNb2R1bGUiLCJsZWRnZXJNb2R1bGUiLCJpbml0IiwidXNlQ29ubmVjdFdhbGxldCIsIndhbGxldENvbm5lY3RNb2R1bGUiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInNpbmdsZXRvbkhvb2siLCJ3ZWIzb25ib2FyZEtleSIsIndjVjJJbml0T3B0aW9ucyIsInZlcnNpb24iLCJwcm9qZWN0SWQiLCJyZXF1aXJlZENoYWlucyIsIndhbGxldENvbm5lY3QiLCJsZWRnZXIiLCJpbmplY3RlZCIsIm9uYm9hcmQiLCJ3YWxsZXRzIiwiY2hhaW5zIiwiaWQiLCJ0b2tlbiIsImxhYmVsIiwicnBjVXJsIiwiYXBwTWV0YWRhdGEiLCJuYW1lIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwidGhlbWUiLCJjb250YWluZXJFbGVtZW50cyIsImRlZmF1bHRFdGhlcnNQcm92aWRlckNvbnRleHQiLCJ1c2VFdGhlcnNQcm92aWRlckNvbnRleHQiLCJ3YWxsZXQiLCJldGhlcnNQcm92aWRlciIsInNldEV0aGVyc1Byb3ZpZGVyIiwibG9jYWxTdG9yYWdlIiwid2FsbGV0c1N1YiIsInN0YXRlIiwic2VsZWN0Iiwic3Vic2NyaWJlIiwiY29ubmVjdGVkV2FsbGV0cyIsIm1hcCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicHJldmlvdXNseUNvbm5lY3RlZFdhbGxldHMiLCJwYXJzZSIsImdldEl0ZW0iLCJjb25uZWN0V2FsbGV0IiwiYXV0b1NlbGVjdCIsImRpc2FibGVNb2RhbHMiLCJwcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/wallets/web3-wallet.ts\n");

/***/ })

};
;