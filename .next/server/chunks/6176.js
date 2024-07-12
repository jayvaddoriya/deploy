"use strict";
exports.id = 6176;
exports.ids = [6176];
exports.modules = {

/***/ 6675:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledMixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1806);



const Button = ({ text , onClick  })=>{
    return /*#__PURE__*/ _jsx(Frame4, {
        className: "frame-4 grow",
        onClick: onClick,
        children: /*#__PURE__*/ _jsx(BookAConsultation, {
            className: "book-a-consultation",
            children: /*#__PURE__*/ _jsx("span", {
                className: "spant8ko9 manrope-semi-bold-white-16px",
                children: text
            })
        })
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Button)));
const Frame4 = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().button)`
  border: none;
  cursor: pointer;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 228px;
  background-color: var(--international-orange);
  border-radius: 8px;
`;
const BookAConsultation = (styled_components__WEBPACK_IMPORTED_MODULE_1___default().div)`
  ${_styledMixins__WEBPACK_IMPORTED_MODULE_2__/* .ManropeSemiBoldWhite16px */ .Xy}
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;

  min-height: 22px;
  letter-spacing: 0;
`;


/***/ }),

/***/ 956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function Container({ className , ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className),
        ...props
    });
}


/***/ })

};
;