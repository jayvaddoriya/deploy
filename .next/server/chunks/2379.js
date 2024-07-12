"use strict";
exports.id = 2379;
exports.ids = [2379];
exports.modules = {

/***/ 2379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HomePc_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6279);
/* harmony import */ var _HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6118);
/* harmony import */ var _Selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7817);







const PaymentSection = (props)=>{
    const { data  } = props;
    const { group3 , spanText15 , spanText17 , spanText19 , spanText20 , spanText22 , spanText23 , spanText25 , spanText26 , spanText28 , spanText29  } = data;
    const [sliderValue, setSliderValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10000);
    const [monthlyPayment, setMonthlyPayment] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(177.42);
    const [newPayoff, setNewPayoff] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(7451.50);
    const [totalSavings, setTotalSavings] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(2548.50);
    const [payoffMonths, setPayoffMonths] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(42);
    const handleSliderChange = (value, months)=>{
        setSliderValue(value);
        setPayoffMonths(months);
        setMonthlyPayment(parseFloat((value * 0.7 / months + 10.75).toFixed(2)));
        setNewPayoff(parseFloat((value * 0.7 / months + 10.75) * months).toFixed(2));
        setTotalSavings(parseFloat(value - (value * 0.7 / months + 10.75) * months).toFixed(2));
    // (total debt - projected payoff) = total savings
    // monthly payment * amount of months = projected payoff
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().frame98),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().flexRow2),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().group3),
                        src: group3,
                        alt: "Coconut margarita drink.",
                        width: 183,
                        height: 245
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().theDRCProgramDebtCalculator),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Calculate your new monthly payment"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().overlapGroup2),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().frame117),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().howMuchTotalUnsec),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: spanText28
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().flexRow3),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Slider__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    payoffMonths: payoffMonths,
                                    value: sliderValue,
                                    onChange: handleSliderChange
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().payOffContainer),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().payOffOption),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: spanText17
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().payOffMonths),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().frame119),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Selector__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    handleSliderChange: handleSliderChange,
                                                    sliderValue: sliderValue,
                                                    setPayoffMonths: setPayoffMonths
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().debtCalculatorPayments),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().debtCalculator),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().monthlyPayment),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: spanText19
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().frame116),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().price1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: spanText20
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().text1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: monthlyPayment.toLocaleString("en-US")
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().debtCalculator),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().monthlyPayment),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: spanText22
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().frame1161),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().price1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: spanText23
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().text1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: newPayoff.toLocaleString("en-US")
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().debtCalculator),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().monthlyPayment),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: spanText25
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().frame1162),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().price1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: spanText26
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().text1),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: totalSavings.toLocaleString("en-US")
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("grow", (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().frame281)),
                            onClick: ()=>router.push("/book-online"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_HomePc_module_css__WEBPACK_IMPORTED_MODULE_6___default().getStarted),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: spanText29
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentSection);


/***/ })

};
;