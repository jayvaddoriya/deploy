"use strict";
exports.id = 2907;
exports.ids = [2907];
exports.modules = {

/***/ 2907:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styledMixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1806);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





function Frame28({ className , text ="Get Started"  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Frame281, {
        onClick: ()=>router.push("/book-online"),
        className: `frame-28-3 ${className || ""} grow`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GetStarted, {
            className: "get-started-7",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "spanhurvg manrope-extra-bold-white-24px",
                children: text
            })
        })
    });
}
const Frame281 = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`
  height: 60px;
  /* align-self: center; */
  /* margin-top: 32px; */
  /* margin-left: 472px; */
  display: flex;
  /* padding: 26.5px 32px; */
  /* align-items: flex-start; */
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 180px;
  background-color: var(--international-orange);
  border-radius: 8px;
  box-shadow: 0px 20px 30px #f9874d99;

  border: none;
  cursor: pointer;

  &.frame-28-3.frame-28-4 {
    align-self: flex-start;
    /* margin-left: 16px; */
  }
`;
const GetStarted = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  ${_styledMixins__WEBPACK_IMPORTED_MODULE_3__/* .ManropeExtraBoldWhite16px */ .yf}
  min-height: 33px;
  letter-spacing: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 33px;

  text-transform: uppercase;

  color: #FFFFFF;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Frame28);


/***/ })

};
;