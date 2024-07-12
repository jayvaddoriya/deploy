exports.id = 6869;
exports.ids = [6869];
exports.modules = {

/***/ 7734:
/***/ ((module) => {

// Exports
module.exports = {
	"menu-mobile": "MenuMobile_menu-mobile__2daFI",
	"root": "MenuMobile_root__p_7HO",
	"frame5": "MenuMobile_frame5__ujfyr",
	"frame83": "MenuMobile_frame83__1oMr8",
	"place": "MenuMobile_place__0Nftv",
	"active": "MenuMobile_active__uDk6d",
	"resources": "MenuMobile_resources__91wiD",
	"reviews": "MenuMobile_reviews__i1y9n",
	"ellipse7": "MenuMobile_ellipse7__NBAhH",
	"frame4": "MenuMobile_frame4__XZYdp",
	"bookAConsultation": "MenuMobile_bookAConsultation__yta5A"
};


/***/ }),

/***/ 6869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7734);
/* harmony import */ var _MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






function MenuMobile(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [currPath, setCurrPath] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(router.asPath);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        setCurrPath(router.asPath);
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().root),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().frame5),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().frame83),
                    children: [
                        currPath === "/" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().ellipse7)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().place), {
                                [(_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().active)]: currPath === "/"
                            }),
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Home"
                            })
                        }),
                        currPath === "/" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().ellipse7)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().frame83),
                    children: [
                        currPath === "/the-drc-program" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().ellipse7)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().resources), {
                                [(_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().active)]: currPath === "/the-drc-program"
                            }),
                            href: "/the-drc-program",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Debt Relief Program"
                            })
                        }),
                        currPath === "/the-drc-program" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().ellipse7)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().frame83),
                    children: [
                        currPath === "/our-company" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().ellipse7)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().reviews), {
                                [(_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().active)]: currPath === "/our-company"
                            }),
                            href: "/our-company",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Our Company"
                            })
                        }),
                        currPath === "/our-company" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().ellipse7)
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().frame4),
                    onClick: ()=>router.push("/book-online"),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_MenuMobile_module_css__WEBPACK_IMPORTED_MODULE_5___default().bookAConsultation),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Book A Consultation"
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuMobile);


/***/ })

};
;