"use strict";
(() => {
var exports = {};
exports.id = 2164;
exports.ids = [2164];
exports.modules = {

/***/ 7257:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(680);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity_client__WEBPACK_IMPORTED_MODULE_0__]);
_sanity_client__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_sanity_client__WEBPACK_IMPORTED_MODULE_0__["default"])({
    projectId: "hr3nk4qn",
    dataset: "production",
    useCdn: true // `false` if you want to ensure fresh data
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9635:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7257);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7748);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_0__, groq__WEBPACK_IMPORTED_MODULE_1__]);
([_client__WEBPACK_IMPORTED_MODULE_0__, groq__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const pages = [
    {
        url: "/",
        lastmod: "2023-07-14"
    },
    {
        url: "/bankruptcy",
        lastmod: "2023-07-14"
    },
    {
        url: "/blog",
        lastmod: "2023-07-14"
    },
    {
        url: "/book-online",
        lastmod: "2023-07-14"
    },
    {
        url: "/contact-us",
        lastmod: "2023-07-14"
    },
    {
        url: "/credit-worthiness",
        lastmod: "2023-07-14"
    },
    {
        url: "/debt-calculator",
        lastmod: "2023-07-14"
    },
    {
        url: "/debt-collections",
        lastmod: "2023-07-14"
    },
    {
        url: "/debt-consolidation",
        lastmod: "2023-07-14"
    },
    {
        url: "/debt-management",
        lastmod: "2023-07-14"
    },
    {
        url: "/debt-relief-options",
        lastmod: "2023-07-14"
    },
    {
        url: "/debt-resources",
        lastmod: "2023-07-14"
    },
    {
        url: "/debt-to-income-ratio",
        lastmod: "2023-07-14"
    },
    {
        url: "/faqs",
        lastmod: "2023-07-14"
    },
    {
        url: "/our-company",
        lastmod: "2023-07-14"
    },
    {
        url: "/press",
        lastmod: "2023-07-14"
    },
    {
        url: "/the-drc-program",
        lastmod: "2023-07-14"
    }
];
const blogPosts = [
    {
        url: "/post/debt-consolidations-and-such",
        lastmod: "2023-06-01"
    },
    {
        url: "/post/debt-relief-and-credit-worthiness",
        lastmod: "2022-12-17"
    },
    {
        url: "/post/four-reasons-why-your-credit-card-balance-transfer-might-flop",
        lastmod: "2023-05-30"
    },
    {
        url: "/post/how-the-coronavirus-pandemic-will-impact-your-credit-worthiness",
        lastmod: "2023-05-30"
    },
    {
        url: "/post/how-to-take-control-back-from-your-credit-card-debt-in-2020",
        lastmod: "2023-06-01"
    },
    {
        url: "/post/stressed-out-by-debt-you-re-not-alone",
        lastmod: "2023-06-01"
    },
    {
        url: "/post/what-is-debt-relief-and-is-it-worth-the-consequences",
        lastmod: "2023-06-01"
    }
];
const allPages = [
    ...pages,
    ...blogPosts
];
function generateSitemap(pages) {
    return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(({ url , lastmod  })=>{
        return `
            <url>
              <loc>https://www.thedebtreliefcompany.com${url}</loc>
              <lastmod>${lastmod}</lastmod>
            </url>
          `;
    }).join("")}
    </urlset>
  `;
}
function Sitemap() {
// getServerSideProps will do the heavy lifting
}
async function fetchDynamicPosts() {
    const posts = await _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].fetch */ .Z.fetch(groq__WEBPACK_IMPORTED_MODULE_1__["default"]`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);
    return posts.map((post)=>({
            url: `/post/${post.slug.current}`,
            lastmod: post.publishedAt
        }));
}
async function getServerSideProps({ res  }) {
    const dynamicPosts = await fetchDynamicPosts();
    const uniqueDynamicPosts = dynamicPosts.filter((dynamicPost)=>!blogPosts.some((blogPost)=>blogPost.url === dynamicPost.url));
    const allPagesWithDynamicPosts = [
        ...allPages,
        ...uniqueDynamicPosts
    ];
    const sitemap = generateSitemap(allPagesWithDynamicPosts);
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
    return {
        props: {}
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sitemap);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 680:
/***/ ((module) => {

module.exports = import("@sanity/client");;

/***/ }),

/***/ 7748:
/***/ ((module) => {

module.exports = import("groq");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9635));
module.exports = __webpack_exports__;

})();