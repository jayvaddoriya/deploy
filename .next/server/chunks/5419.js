exports.id = 5419;
exports.ids = [5419];
exports.modules = {

/***/ 9878:
/***/ ((module) => {

// Exports
module.exports = {
	"root": "Intro_root__y0uGl",
	"fullsize": "Intro_fullsize__nIJ7b",
	"textContent": "Intro_textContent__RCEbn",
	"content": "Intro_content__nFjK9",
	"creditWorthiness": "Intro_creditWorthiness__UU_Z4",
	"imageDesktop": "Intro_imageDesktop__vC_lD",
	"imageMobile": "Intro_imageMobile__OGoIb",
	"debtConsolidation": "Intro_debtConsolidation__0CqRX",
	"title": "Intro_title__fGyZY",
	"subtitle": "Intro_subtitle__ZzfoE",
	"description": "Intro_description__ZX_4K",
	"imageContent": "Intro_imageContent__9srZG"
};


/***/ }),

/***/ 5419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9878);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





const Intro = ({ className , texts , image  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()((_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().root), {
            [(_index_module_css__WEBPACK_IMPORTED_MODULE_4___default())[className]]: className,
            [(_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().fullsize)]: !image
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().textContent),
                    children: [
                        texts.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
                            children: texts.title
                        }),
                        texts.subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().subtitle),
                            children: texts.subtitle
                        }),
                        texts.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),
                            children: texts.description
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageContent),
                    children: [
                        image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageDesktop),
                            src: image.src,
                            width: image.imageWidth,
                            height: image.imageHeight,
                            alt: image.alt
                        }),
                        image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageMobile),
                            src: image.srcMobile || image.src,
                            width: image.imageMobileWidth || image.imageWidth,
                            height: image.imageHeight || image.imageHeight,
                            alt: image.alt
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);


/***/ })

};
;