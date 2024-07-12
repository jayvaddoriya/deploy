"use strict";
exports.id = 8222;
exports.ids = [8222];
exports.modules = {

/***/ 8222:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HomePc_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6279);
/* harmony import */ var _HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_mediaQueryHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3413);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






const SunShineSection = (props)=>{
    const { data  } = props;
    const { spanText7 , spanText8 , spanText9 , spanText11 , group1 , frame231Props , frame232Props  } = data;
    const isTabletBreakpoint = (0,_utils_mediaQueryHook__WEBPACK_IMPORTED_MODULE_3__/* .useMediaQuery */ .a)(1550);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexRow),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexCol1),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().dontLentCreditCar),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: spanText7
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: spanText8
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: spanText9
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().cutYourMonthlyPay),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: spanText11
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().group1),
                        src: group1,
                        alt: "Linear orange sun.",
                        width: 168,
                        height: 163
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexCol2),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().flexRow1),
                    children: [
                        !isTabletBreakpoint && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().sombruilla),
                            src: "static/img/home/sombruilla2.svg",
                            alt: "sombruilla 1",
                            width: 526,
                            height: 534,
                            objectFit: "cover"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().frame25),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().frame231),
                                    children: [
                                        frame231Props.frame171Props,
                                        frame231Props.frame172Props,
                                        frame231Props.frame173Props
                                    ].map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                            item: item
                                        }, i))
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().frame231),
                                    children: [
                                        frame232Props.frame171Props,
                                        frame232Props.frame172Props,
                                        frame232Props.frame173Props
                                    ].map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Item, {
                                            item: item
                                        }, i))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
const Item = ({ item , key  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("frame-17", item.className, (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().frame171)),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("icono-pc", (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().iconoPc)),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    className: "tablercoin-off",
                    src: item.tablerCoinOff,
                    alt: "tabler:coin-off",
                    width: 32,
                    height: 32
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("frame-15", (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().frame15)),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("no-up-front-cost-ever", (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().noUpFrontCostEver)),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            children: item.spanText1
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("as-a-part-of-our-gua", (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_5___default().asAPartOfOurGua)),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: item.spanText2
                        })
                    })
                ]
            })
        ]
    }, key);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SunShineSection);


/***/ }),

/***/ 3413:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useMediaQuery = (width)=>{
    const [targetReached, setTargetReached] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const updateTarget = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const media = window.matchMedia(`(max-width: ${width}px)`);
        media.addListener(updateTarget);
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }
        return ()=>media.removeListener(updateTarget);
    }, []);
    return targetReached;
};


/***/ })

};
;