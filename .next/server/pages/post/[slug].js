"use strict";
(() => {
var exports = {};
exports.id = 6515;
exports.ids = [6515];
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

/***/ 3351:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7257);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7748);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _portabletext_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5711);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3304);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1690);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_share__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8797);
/* harmony import */ var next_share__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_share__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_3__, groq__WEBPACK_IMPORTED_MODULE_4__, _portabletext_react__WEBPACK_IMPORTED_MODULE_6__]);
([_client__WEBPACK_IMPORTED_MODULE_3__, groq__WEBPACK_IMPORTED_MODULE_4__, _portabletext_react__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












function urlFor(source) {
    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).image(source);
}
const ptComponents = {
    types: {
        image: ({ value  })=>{
            if (!value?.asset?._ref) {
                return null;
            }
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProseImage, {
                alt: value.alt || " ",
                loading: "lazy",
                src: urlFor(value).width(1200).height(627).fit("max").auto("format")
            });
        }
    }
};
const Post = ({ post  })=>{
    const { title ="Missing title" , name ="Missing name" , categories , slug ={
        current: ""
    } , metaDescription , authorImage , mainImage , body =[]  } = post;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Article, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ShareWrapper, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShareTitle, {
                        children: "Share"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_11__.FacebookShareButton, {
                        url: `https://www.thedebtreliefcompany.com/post/${slug.current}`,
                        quote: metaDescription,
                        hashtag: "#debtreliefco",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_11__.FacebookIcon, {
                            size: 42
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_11__.LinkedinShareButton, {
                        url: `https://www.thedebtreliefcompany.com/post/${slug.current}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_11__.LinkedinIcon, {
                            size: 42
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_11__.TwitterShareButton, {
                        url: `https://www.thedebtreliefcompany.com/post/${slug.current}`,
                        title: metaDescription,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_share__WEBPACK_IMPORTED_MODULE_11__.TwitterIcon, {
                            size: 42
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PageHeader, {
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(AuthorInfo, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        children: [
                            "By ",
                            name
                        ]
                    }),
                    authorImage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthorImage, {
                            src: urlFor(authorImage).width(30).url()
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Prose, {
                className: "prose",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_portabletext_react__WEBPACK_IMPORTED_MODULE_6__.PortableText, {
                    value: body,
                    components: ptComponents
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);
const Article = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().article)`
  padding: 3rem 1.5rem;
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 6rem;
  }
`;
const ShareWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: none;

  @media (min-width: 1024px) {
    position: fixed;
    right: 15%;
    top: 33.333333%;
    width: 3rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;
const ShareTitle = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1)`
  font-size: 1.125rem;
  color: var(--main-text);
`;
const AuthorInfo = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;
const PageHeader = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1)`
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.025em;
  margin-bottom: 0.5rem;
`;
const ProseImage = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
  max-width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const AuthorImage = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().img)`
  border-radius: 50%;
`;
const Prose = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  font-size: 1.125rem;
  line-height: 1.75;
  max-width: 65ch;
  margin: 0 auto;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9770:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7257);
/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7748);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3351);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1690);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3304);
/* harmony import */ var _styledMixins__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1806);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_client__WEBPACK_IMPORTED_MODULE_3__, groq__WEBPACK_IMPORTED_MODULE_4__, _components_Post__WEBPACK_IMPORTED_MODULE_8__]);
([_client__WEBPACK_IMPORTED_MODULE_3__, groq__WEBPACK_IMPORTED_MODULE_4__, _components_Post__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






// import { PortableText } from '@portabletext/react';






const macBookPro1642Data = {
    className: "mac-book-pro-16-4-1"
};
function urlFor(source) {
    if (source) {
        return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).image(source).width(30).url();
    } else {
        return "https://cdn.sanity.io/images/hr3nk4qn/production/dcb3be7abfc4596d1ac9e77885394e2c78934736-200x200.webp?w=30";
    }
}
function urlForOpenGraph(source) {
    if (source) {
        return _sanity_image_url__WEBPACK_IMPORTED_MODULE_5___default()(_client__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).image(source).width(1200).height(627).fit("max").auto("format").url();
    } else {
        return "https://cdn.sanity.io/images/hr3nk4qn/production/6082b057106b836cefbee3813171e964dbf280db-740x494.png?w=720";
    }
}
const Slug = ({ post ={}  })=>{
    const { title , slug ={
        current: ""
    } , publishedAt , name , metaTitle , metaDescription , mainImage , authorImage , categories =[
        "Debt Relief"
    ] , estimatedTime  } = post;
    const socialImageURL = urlForOpenGraph(mainImage);
    const authorImageURL = urlFor(authorImage);
    function addPageJsonLd(authorImageSource) {
        return {
            __html: `{
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "author": {
          "@type": "Person",
          "name": "${name}",
          "image": {
            "@type": "ImageObject",
            "url": "${authorImageURL}",
            "width": "30",
            "height": "30"
          }
        },
        "articleSection": "${categories[0]}",
        "dateModified": "${publishedAt}",
        "datePublished": "${publishedAt}",
        "headline": "${title}",
        "mainEntityOfPage": {
          "@id": "${`https://www.thedebtreliefcompany.com/post/${slug.current}`}",
          "@type": "itemPage",
          "url": "${`https://www.thedebtreliefcompany.com/post/${slug.current}`}"
        },
        "description": "${metaDescription}",
        "url": "${`https://www.thedebtreliefcompany.com/post/${slug.current}`}",
        "image": {
          "@type": "ImageObject",
          "url": "${socialImageURL}",
          "width": "1200",
          "height": "627"
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container-center-horizontal",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "title",
                        content: metaTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: metaDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:title",
                        property: "og:title",
                        content: metaTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:description",
                        property: "og:description",
                        content: metaDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:image",
                        property: "og:image",
                        content: socialImageURL
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "og:url",
                        property: "og:url",
                        content: `https://www.thedebtreliefcompany.com/post/${slug.current}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "og:locale",
                        content: "en_US"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: `https://www.thedebtreliefcompany.com/post/${slug.current}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:site",
                        content: "@debtreliefco"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:title",
                        content: metaTitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:description",
                        content: metaDescription
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:image",
                        content: socialImageURL
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:creator",
                        content: "@debtreliefco"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:label1",
                        content: "Written by"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:data1",
                        content: "The Debt Relief Co"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:label2",
                        content: "Est. reading time"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "twitter:data2",
                        content: estimatedTime
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "article:author",
                        content: name
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "article:publisher",
                        content: "https://www.facebook.com/Thedebtreliefcompany"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "article:modified_time",
                        content: publishedAt
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "article:published_time",
                        content: publishedAt
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        property: "article:site_name",
                        content: "DebtReliefCompany"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("script", {
                        type: "application/ld+json",
                        dangerouslySetInnerHTML: addPageJsonLd(authorImage)
                    }, "page-jsonld")
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Main, {
                className: "screen",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Header__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        className: macBookPro1642Data.className
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentWrapper, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Post__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                post: post
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                href: "/blog",
                                passHref: true,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(BackToBlogLink, {
                                    children: "Back to Blog"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {
                className: "footer-2"
            })
        ]
    });
};
const query = groq__WEBPACK_IMPORTED_MODULE_4__["default"]`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  mainImage,
  body,
  metaTitle,
  metaDescription,
  slug,
  publishedAt,
  estimatedTime
}`;
async function getStaticPaths() {
    const paths = await _client__WEBPACK_IMPORTED_MODULE_3__/* ["default"].fetch */ .Z.fetch(groq__WEBPACK_IMPORTED_MODULE_4__["default"]`*[_type == "post" && defined(slug.current)][].slug.current`);
    return {
        paths: paths.map((slug)=>({
                params: {
                    slug
                }
            })),
        fallback: true
    };
}
async function getStaticProps(context) {
    // It's important to default the slug so that it doesn't return "undefined"
    const { slug =""  } = context.params;
    const post = await _client__WEBPACK_IMPORTED_MODULE_3__/* ["default"].fetch */ .Z.fetch(query, {
        slug
    });
    return {
        props: {
            post
        },
        revalidate: 10
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);
const Main = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().main)`
  color: var(--main-text);
  background-color: white;
`;
const ContentWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding-top: 100px;
`;
const BackToBlogLink = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().button)`
  ${_styledMixins__WEBPACK_IMPORTED_MODULE_11__/* .ManropeSemiBoldWhite16px */ .Xy}
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  text-transform: uppercase;
  text-decoration: none;
  width: 25%;
  max-width: 25rem;
  margin-bottom: 3rem;
  padding: 1rem 0.75rem;
  display: inline-flex;
  justify-content: center;
  border-radius: 8px;
  background-color: var(--international-orange);
  color: var(--white);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 768px) {
    width: calc(100% - 2rem);
    max-width: 100%;
  }

`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1791:
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 2364:
/***/ ((module) => {

module.exports = require("lottie-web");

/***/ }),

/***/ 8797:
/***/ ((module) => {

module.exports = require("next-share");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 5711:
/***/ ((module) => {

module.exports = import("@portabletext/react");;

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1598,735,8459,5443,5675,5152,1664,3304,1690,1806], () => (__webpack_exec__(9770)));
module.exports = __webpack_exports__;

})();