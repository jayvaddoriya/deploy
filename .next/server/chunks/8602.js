"use strict";
exports.id = 8602;
exports.ids = [8602];
exports.modules = {

/***/ 8602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);


function addPageJsonLd(slug, title, description) {
    return {
        __html: `
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "author": {
        "@type": "Person",
        "name": "Adem Selita",
        "image": {
          "@type": "ImageObject",
          "url": "https://cdn.sanity.io/images/hr3nk4qn/production/dcb3be7abfc4596d1ac9e77885394e2c78934736-200x200.webp?w=30",
          "width": "30",
          "height": "30"
        }
      },
      "articleSection": "Debt Relief",
      "dateModified": "2021-10-11T19:22:00.000Z",
      "datePublished": "2021-10-11T19:22:00.000Z",
      "headline": "${title}",
      "mainEntityOfPage": {
        "@id": "${`https://www.thedebtreliefcompany.com/${slug}`}",
        "@type": "itemPage",
        "url": "${`https://www.thedebtreliefcompany.com/${slug}`}"
      },
      "description": "${description}",
      "url": "${`https://www.thedebtreliefcompany.com/${slug}`}",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.thedebtreliefcompany.com/android-chrome-512x512.png",
        "width": "512",
        "height": "512"
      },
      "publisher": {
        "@type": "Organization",
        "name": "The Debt Relief Company",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.thedebtreliefcompany.com/android-chrome-512x512.png" 
        }
      }
    }
  `
    };
}
const generatePageSEO = (slug, title, description, type)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: `https://www.thedebtreliefcompany.com/${slug}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "robots",
                content: "index"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: `${title}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: `${description}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: "https://www.thedebtreliefcompany.com/static/img/logos/ogImage.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image:width",
                content: "457"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image:height",
                content: "256"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: `https://www.thedebtreliefcompany.com/${slug}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: "Debt Relief Company"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            type === "article" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: addPageJsonLd(slug, title, description)
            }, "page-jsonld"),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "alternate",
                href: `https://www.thedebtreliefcompany.com/${slug}`,
                hrefLang: "x-default"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "alternate",
                href: `https://www.thedebtreliefcompany.com/${slug}`,
                hrefLang: "en-us"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "fb_admins_meta_tag",
                content: "thedebtreliefcompany"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "google-site-verification",
                content: "2OKIukogdkZURrWxVcDHG-tDZVcNw6CZejQpbR2KCdM"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "fb:admins",
                content: "thedebtreliefcompany"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:title",
                content: `${title}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:description",
                content: `${description}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "twitter:image",
                content: "https://www.thedebtreliefcompany.com/static/img/logos/ogImage.png"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePageSEO);


/***/ })

};
;