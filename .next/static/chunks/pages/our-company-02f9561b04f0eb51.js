(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[452,650],{1008:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/our-company",function(){return t(6419)}])},638:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e,a){let t=o.default,r={loading:e=>{let{error:a,isLoading:t,pastDelay:n}=e;return null}};e instanceof Promise?r.loader=()=>e:"function"==typeof e?r.loader=e:"object"==typeof e&&(r=n({},r,e)),r=n({},r,a);let l=r.loader,c=()=>null!=l?l().then(s):Promise.resolve(s(()=>null));return(r.loadableGenerated&&delete(r=n({},r,r.loadableGenerated)).loadableGenerated,"boolean"!=typeof r.ssr||r.ssr)?t(n({},r,{loader:c})):(delete r.webpack,delete r.modules,i(t,r))},a.noSSR=i;var n=t(6495).Z,r=t(2648).Z,o=(r(t(7294)),r(t(4302)));function s(e){return{default:(null==e?void 0:e.default)||e}}function i(e,a){return delete a.webpack,delete a.modules,e(a)}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),e.exports=a.default)},6319:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.LoadableContext=void 0;var n=(0,t(2648).Z)(t(7294));let r=n.default.createContext(null);a.LoadableContext=r},4302:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=t(6495).Z,r=(0,t(2648).Z)(t(7294)),o=t(6319);let s=[],i=[],l=!1;function c(e){let a=e(),t={loading:!0,loaded:null,error:null};return t.promise=a.then(e=>(t.loading=!1,t.loaded=e,e)).catch(e=>{throw t.loading=!1,t.error=e,e}),t}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:a}=this;e.loading&&("number"==typeof a.delay&&(0===a.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},a.delay)),"number"==typeof a.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},a.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=n({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,a){this._loadFn=e,this._opts=a,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function m(e){return function(e,a){let t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},a),n=null;function s(){if(!n){let a=new d(e,t);n={getCurrentValue:a.getCurrentValue.bind(a),subscribe:a.subscribe.bind(a),retry:a.retry.bind(a),promise:a.promise.bind(a)}}return n.promise()}if(!l){let e=t.webpack?t.webpack():t.modules;e&&i.push(a=>{for(let t of e)if(-1!==a.indexOf(t))return s()})}function c(e,a){!function(){s();let e=r.default.useContext(o.LoadableContext);e&&Array.isArray(t.modules)&&t.modules.forEach(a=>{e(a)})}();let i=r.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return r.default.useImperativeHandle(a,()=>({retry:n.retry}),[]),r.default.useMemo(()=>{var a;return i.loading||i.error?r.default.createElement(t.loading,{isLoading:i.loading,pastDelay:i.pastDelay,timedOut:i.timedOut,error:i.error,retry:n.retry}):i.loaded?r.default.createElement((a=i.loaded)&&a.default?a.default:a,e):null},[e,i])}return c.preload=()=>s(),c.displayName="LoadableComponent",r.default.forwardRef(c)}(c,e)}function u(e,a){let t=[];for(;e.length;){let n=e.pop();t.push(n(a))}return Promise.all(t).then(()=>{if(e.length)return u(e,a)})}m.preloadAll=()=>new Promise((e,a)=>{u(s).then(e,a)}),m.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(a=>{let t=()=>(l=!0,a());u(i,e).then(t,t)})},window.__NEXT_PRELOADREADY=m.preloadReady,a.default=m},6419:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return x}});var n=t(5893);t(7294);var r=t(3304),o=t(1690),s=t(5119),i=t.n(s),l=t(3967),c=t.n(l),d=t(5675),m=t.n(d),u=t(1163),p=function(e){let{spanText1:a,spanText2:t,spanText3:s,spanText4:l,group8:d,spanText5:p,spanText6:h,image1:f,spanText7:_,spanText8:y,spanText9:x,spanText10:g,spanText11:b,image2:j,spanText12:w,spanText13:v,spanText14:C,spanText15:N,spanText16:O,img_35081:P,group1:T,spanText17:k,spanText18:D,spanText19:S,spanText20:R,spanText21:A,spanText22:F,group2:E,spanText23:M,spanText24:G,spanText25:H,macBookPro164Props:W}=e,I=(0,u.useRouter)();return(0,n.jsx)("div",{className:"container-center-horizontal",children:(0,n.jsxs)("div",{className:c()("our-company-pc screen",i().root),children:[(0,n.jsx)("div",{className:i().rectangle1}),(0,n.jsx)("div",{className:i().frame98,children:(0,n.jsx)("div",{className:i().overlapGroup2,children:(0,n.jsx)("div",{className:i().overlapGroup1,children:(0,n.jsxs)("div",{className:i().landingContentFlex,children:[(0,n.jsxs)("div",{className:i().landingHeaderFlex,children:[(0,n.jsx)("h1",{className:i().title,children:(0,n.jsx)("span",{children:p})}),(0,n.jsx)("h2",{className:i().committedToExcellence,children:(0,n.jsx)("span",{children:l})})]}),(0,n.jsxs)("div",{className:i().landingParagraphFlex,children:[(0,n.jsxs)("p",{className:i().atTheDebtReliefC,children:[(0,n.jsx)("span",{children:a}),(0,n.jsx)("span",{className:i().span12,children:t})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h3",{className:i().Personalized,children:H}),(0,n.jsx)("p",{className:i().weTakeGreatPride,children:(0,n.jsx)("span",{children:s})})]})]}),(0,n.jsx)(m(),{className:i().group8,src:d,alt:"Two Surfboards sticking out of the water on the beach.",width:722,height:589})]})})})}),(0,n.jsx)(r.Z,{className:W.className}),(0,n.jsxs)("div",{className:i().frame981,children:[(0,n.jsx)("div",{className:i().theTeam,children:(0,n.jsx)("h2",{children:h})}),(0,n.jsxs)("div",{className:i().frame96,children:[(0,n.jsxs)("div",{className:i().flexWrap,children:[(0,n.jsx)(m(),{className:i().photo,src:f,alt:"Adem Selita",width:176,height:176,objectFit:"cover"}),(0,n.jsxs)("div",{className:i().frame94Mobile,children:[(0,n.jsx)("div",{className:i().adamSelita,children:(0,n.jsx)("span",{children:_})}),(0,n.jsx)("div",{className:i().ceo,children:(0,n.jsx)("span",{children:y})})]})]}),(0,n.jsxs)("div",{className:i().frame92,children:[(0,n.jsxs)("div",{className:i().frame94,children:[(0,n.jsx)("div",{className:i().adamSelita,children:(0,n.jsx)("span",{children:_})}),(0,n.jsx)("div",{className:i().ceo,children:(0,n.jsx)("span",{children:y})})]}),(0,n.jsxs)("div",{className:i().frame111,children:[(0,n.jsx)("p",{className:i().adamSelitaAkaAda,children:(0,n.jsx)("span",{children:x})}),(0,n.jsx)("p",{className:i().adamReceivedBach,children:(0,n.jsx)("span",{children:g})})]})]})]}),(0,n.jsxs)("div",{className:i().frame95,children:[(0,n.jsxs)("div",{className:i().flexWrap,children:[(0,n.jsx)(m(),{className:i().photo,src:j,alt:"Dino Selita",width:176,height:176,objectFit:"cover"}),(0,n.jsxs)("div",{className:i().frame93Mobile,children:[(0,n.jsx)("div",{className:i().adamSelita,children:(0,n.jsx)("span",{children:w})}),(0,n.jsx)("div",{className:i().ceo,children:(0,n.jsx)("span",{children:v})})]})]}),(0,n.jsxs)("div",{className:i().frame91,children:[(0,n.jsxs)("div",{className:i().frame93,children:[(0,n.jsx)("div",{className:i().adamSelita,children:(0,n.jsx)("span",{children:w})}),(0,n.jsx)("div",{className:i().ceo,children:(0,n.jsx)("span",{children:v})})]}),(0,n.jsxs)("div",{className:i().frame110,children:[(0,n.jsx)("p",{className:i().dinoSelitaIsANat,children:(0,n.jsx)("span",{children:C})}),(0,n.jsx)("p",{className:i().dinoGraduatedFrom,children:(0,n.jsx)("span",{children:N})}),(0,n.jsx)("p",{className:i().moreRecentlyDinoH,children:(0,n.jsx)("span",{children:O})})]})]})]})]}),(0,n.jsxs)("div",{className:i().overlapGroup4,children:[(0,n.jsx)(m(),{src:P,className:i().img35083,alt:"Group picture of the team at The Debt Relief Company.",width:736,height:555}),(0,n.jsxs)("div",{className:i().frame128,children:[(0,n.jsx)(m(),{className:i().group1Duck,src:T,alt:"Inflatable duck",width:200,height:131}),(0,n.jsxs)("div",{className:i().frame127,children:[(0,n.jsx)("div",{className:i().adamSelita,children:(0,n.jsx)("h2",{children:k})}),(0,n.jsx)("p",{className:i().loremIpsumDolorSi,children:(0,n.jsx)("span",{children:D})})]})]})]}),(0,n.jsxs)("div",{className:i().frame100,children:[(0,n.jsx)("p",{className:i().whyDidTheDebtReliefCoFrom,children:(0,n.jsx)("h2",{children:S})}),(0,n.jsx)("div",{className:i().frame101,children:(0,n.jsxs)("p",{className:i().theDebtReliefComp,children:[(0,n.jsx)("span",{children:R}),"\xa0",(0,n.jsx)("a",{className:"text-blue-500",href:"https://www.thedebtreliefcompany.com/press",children:"in the press"})," to learn more about our contributions to financial literacy, consumer advocacy and adding to the well of knowledge for American consumers."]})}),(0,n.jsx)(m(),{src:E,className:i().group1,alt:"Tropical drink with umbrella and flower.",width:230,height:292})]}),(0,n.jsx)("div",{className:i().overlapGroup3,children:(0,n.jsxs)("div",{className:i().frame104,children:[(0,n.jsx)(m(),{className:i().palm,src:"/static/img/vector-2@2x.svg",alt:"Hammock in between two palm trees.",width:354,height:488}),(0,n.jsxs)("div",{className:i().frame102,children:[(0,n.jsx)("div",{className:i().theDrcMissionStatement,children:(0,n.jsx)("h2",{children:M})}),(0,n.jsxs)("p",{className:i().firstAndForemost,children:[(0,n.jsx)("span",{children:G}),"\xa0 ",(0,n.jsx)("a",{className:"text-blue-500",href:"https://www.thecreditcardmonster.com",children:"The Credit Card Monster"}),", designed to educate and inform consumers about managing debt wisely."]})]})]})}),(0,n.jsx)(m(),{className:i().frame129,onClick:()=>I.push("tel:+1-888-344-0214"),src:"/static/img/frame-129-2@2x.svg",alt:"Frame 129",width:112,height:112}),(0,n.jsx)(o.default,{})]})})},h=t(8602),f=t(9008),_=t.n(f);let y={spanText1:"At The Debt Relief Company, our mission is clear: to provide exceptional customer service nationwide, easing the burdens of our clients—financial and beyond. With nearly a decade of expertise in consumer debt relief, we've been dedicated to helping individuals achieve financial freedom since 2018. The proof is in the pudding, as a small mom-and-pop business we founded our company without the use of any debt or financing.",spanText2:"Our ultimate goal is always to get you out of debt and save you as much money as possible. We take pride in helping Americans avoid debt and we will do everything in our power to help promote debt free living, help Americans rebuild their life after debt and help eliminate debt for all our clients.",spanText3:"We use a personal touch and take pride in creating a custom plan that prioritizes your financial goals from the start. Each debt relief program is tailored specifically to your needs and we do our best to set realistic expectations with our clients. We strongly believe in our ability to save you money on our debt. We charge no upfront fees, and if we don't reduce your debt, you pay nothing for our services. This is how we ensure that our goals are aligned with our clients and that our ability to collect fees is contingent on their success in paying down credit card debt.",spanText4:"Committed to Excellence",group8:"/static/img/group-8-1@2x.svg",spanText5:"About Us",spanText6:"Meet Our Founders",image1:"/static/img/image-1-1@2x.png",spanText7:"Adem Selita",spanText8:" Co-founder",spanText9:"A second-generation Albanian Muslim American and native Staten Islander, Adem earned his Bachelor's in Economics from New York University.",spanText10:"With nearly a decade in experience his journey into debt relief began back in 2015.",image2:"/static/img/image-2-1@2x.png",spanText12:"Dino Selita",spanText13:"Co-founder",spanText14:"A lifelong New Yorker and community advocate, Dino holds a degree in Finance from Wagner College.",spanText15:"With over two decades in financial services in various roles, he has helped countless clients achieve financial freedom.",img_35081:"/static/img/img-3508-1-1@2x.png",group1:"/static/img/group-2@2x.svg",spanText17:"Our Origin Story",spanText18:"The Debt Relief Company was born out of a commitment to help consumers save money and get out of debt as quickly as possible while also providing a fair and transparent service. We started with some simple word of mouth and a desire to always put our clients first. Years of navigating the debt relief industry and financial services industry have honed our expertise in the space and have allowed us to add our own personal touch to how we think a debt relief program should look. We operate of our own accord and although we are a profit seeking business we always put the success of our clients before profits.",spanText19:"Media Recognition",spanText20:"We're honored to be recognized as leaders in debt relief, frequently featured in reputable news outlets. Explore our media mentions and our company",group2:"/static/img/group-1@2x.svg",spanText23:"Our Mission",spanText24:"Our primary mission is to empower struggling Americans to achieve debt-free lives and secure their financial futures. We also strive to enhance financial literacy nationwide through initiatives like",spanText25:"Personalized Debt Relief",macBookPro164Props:{className:"mac-book-pro-16-4-1"}};var x=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(_(),{children:[(0,n.jsx)("title",{children:"Our Company"}),(0,h.Z)("our-company","Our Company","Our goal is to help struggling Americans become debt free and gain a better \n              foothold on their personal finances. Co-founded by Adem Selita and Dino Selita.","explainer")]}),(0,n.jsx)(p,{...y})]})}},8602:function(e,a,t){"use strict";var n=t(5893);t(4298);let r=(e,a,t,r)=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"description",content:t}),(0,n.jsx)("link",{rel:"canonical",href:"https://www.thedebtreliefcompany.com/".concat(e)}),(0,n.jsx)("meta",{name:"robots",content:"index"}),(0,n.jsx)("meta",{property:"og:title",content:"".concat(a)}),(0,n.jsx)("meta",{property:"og:description",content:"".concat(t)}),(0,n.jsx)("meta",{property:"og:image",content:"https://www.thedebtreliefcompany.com/static/img/logos/ogImage.png"}),(0,n.jsx)("meta",{property:"og:image:width",content:"457"}),(0,n.jsx)("meta",{property:"og:image:height",content:"256"}),(0,n.jsx)("meta",{property:"og:url",content:"https://www.thedebtreliefcompany.com/".concat(e)}),(0,n.jsx)("meta",{property:"og:site_name",content:"Debt Relief Company"}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),"article"===r&&(0,n.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:'\n    {\n      "@context": "https://schema.org",\n      "@type": "Article",\n      "author": {\n        "@type": "Person",\n        "name": "Adem Selita",\n        "image": {\n          "@type": "ImageObject",\n          "url": "https://cdn.sanity.io/images/hr3nk4qn/production/dcb3be7abfc4596d1ac9e77885394e2c78934736-200x200.webp?w=30",\n          "width": "30",\n          "height": "30"\n        }\n      },\n      "articleSection": "Debt Relief",\n      "dateModified": "2021-10-11T19:22:00.000Z",\n      "datePublished": "2021-10-11T19:22:00.000Z",\n      "headline": "'.concat(a,'",\n      "mainEntityOfPage": {\n        "@id": "').concat("https://www.thedebtreliefcompany.com/".concat(e),'",\n        "@type": "itemPage",\n        "url": "').concat("https://www.thedebtreliefcompany.com/".concat(e),'"\n      },\n      "description": "').concat(t,'",\n      "url": "').concat("https://www.thedebtreliefcompany.com/".concat(e),'",\n      "image": {\n        "@type": "ImageObject",\n        "url": "https://www.thedebtreliefcompany.com/android-chrome-512x512.png",\n        "width": "512",\n        "height": "512"\n      },\n      "publisher": {\n        "@type": "Organization",\n        "name": "The Debt Relief Company",\n        "logo": {\n          "@type": "ImageObject",\n          "url": "https://www.thedebtreliefcompany.com/android-chrome-512x512.png" \n        }\n      }\n    }\n  ')}},"page-jsonld"),(0,n.jsx)("link",{rel:"alternate",href:"https://www.thedebtreliefcompany.com/".concat(e),hrefLang:"x-default"}),(0,n.jsx)("link",{rel:"alternate",href:"https://www.thedebtreliefcompany.com/".concat(e),hrefLang:"en-us"}),(0,n.jsx)("meta",{name:"fb_admins_meta_tag",content:"thedebtreliefcompany"}),(0,n.jsx)("meta",{name:"google-site-verification",content:"2OKIukogdkZURrWxVcDHG-tDZVcNw6CZejQpbR2KCdM"}),(0,n.jsx)("meta",{property:"fb:admins",content:"thedebtreliefcompany"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{name:"twitter:title",content:"".concat(a)}),(0,n.jsx)("meta",{name:"twitter:description",content:"".concat(t)}),(0,n.jsx)("meta",{name:"twitter:image",content:"https://www.thedebtreliefcompany.com/static/img/logos/ogImage.png"})]});a.Z=r},5119:function(e){e.exports={"our-company-pc":"OurCompanyPc_our-company-pc__CF19x",root:"OurCompanyPc_root__rOM9Z",rectangle1:"OurCompanyPc_rectangle1__bCbfq",frame98:"OurCompanyPc_frame98__45Ukn",overlapGroup2:"OurCompanyPc_overlapGroup2__iNRHX",overlapGroup1:"OurCompanyPc_overlapGroup1__kO_jk",landingContentFlex:"OurCompanyPc_landingContentFlex__uErnY",landingHeaderFlex:"OurCompanyPc_landingHeaderFlex__ByfRh",title:"OurCompanyPc_title__StB9Y",committedToExcellence:"OurCompanyPc_committedToExcellence__C3o0p",landingParagraphFlex:"OurCompanyPc_landingParagraphFlex__JdMbH",atTheDebtReliefC:"OurCompanyPc_atTheDebtReliefC__bjxS5",span12:"OurCompanyPc_span12__ys7VH",Personalized:"OurCompanyPc_Personalized___wHDW",weTakeGreatPride:"OurCompanyPc_weTakeGreatPride__MFzTh",group8:"OurCompanyPc_group8__WdUaB",frame981:"OurCompanyPc_frame981__qt8tV",theTeam:"OurCompanyPc_theTeam__zzgDF",frame96:"OurCompanyPc_frame96__lMfZw",frame91:"OurCompanyPc_frame91__Ey2dL",photo:"OurCompanyPc_photo__adb8N",frame93:"OurCompanyPc_frame93__UINQB",frame93Mobile:"OurCompanyPc_frame93Mobile__nSscP",adamSelita:"OurCompanyPc_adamSelita__Nbkkw",ceo:"OurCompanyPc_ceo__C5wZo",frame92:"OurCompanyPc_frame92__qCNON",flexWrap:"OurCompanyPc_flexWrap__DHJf6",frame94:"OurCompanyPc_frame94__wnJWH",frame94Mobile:"OurCompanyPc_frame94Mobile__dFL1B",frame111:"OurCompanyPc_frame111__Jf5RN",adamSelitaAkaAda:"OurCompanyPc_adamSelitaAkaAda__iabau",adamReceivedBach:"OurCompanyPc_adamReceivedBach__VtBy8",adamHelpedCloseFa:"OurCompanyPc_adamHelpedCloseFa__hdSW8",frame95:"OurCompanyPc_frame95__wEo_N",frame110:"OurCompanyPc_frame110__PTHeH",dinoSelitaIsANat:"OurCompanyPc_dinoSelitaIsANat__EREvU",dinoGraduatedFrom:"OurCompanyPc_dinoGraduatedFrom__D1myV",moreRecentlyDinoH:"OurCompanyPc_moreRecentlyDinoH__L90hq",overlapGroup4:"OurCompanyPc_overlapGroup4__HwjjH",img35083:"OurCompanyPc_img35083__zQMt3",group1Duck:"OurCompanyPc_group1Duck__yCsLs",frame128:"OurCompanyPc_frame128__E7Yv3",frame127:"OurCompanyPc_frame127__Woymg",loremIpsumDolorSi:"OurCompanyPc_loremIpsumDolorSi__1caAE",frame100:"OurCompanyPc_frame100__8mtZl",whyDidTheDebtReliefCoFrom:"OurCompanyPc_whyDidTheDebtReliefCoFrom__Rfvi4",frame101:"OurCompanyPc_frame101__v0i5r",theDebtReliefComp:"OurCompanyPc_theDebtReliefComp__2jRK5",althoughTheRoadTo:"OurCompanyPc_althoughTheRoadTo__TBZdN",ourCompanyStrives:"OurCompanyPc_ourCompanyStrives__0dOd9",group1:"OurCompanyPc_group1__LmZ_j",overlapGroup3:"OurCompanyPc_overlapGroup3__YBysB",frame104:"OurCompanyPc_frame104__I7aX3",palm:"OurCompanyPc_palm__ZBaFH",frame102:"OurCompanyPc_frame102__KNXXT",theDrcMissionStatement:"OurCompanyPc_theDrcMissionStatement__uKz12",firstAndForemost:"OurCompanyPc_firstAndForemost__0IB0C",frame129:"OurCompanyPc_frame129__I22cn"}},5152:function(e,a,t){e.exports=t(638)}},function(e){e.O(0,[296,675,432,304,690,774,888,179],function(){return e(e.s=1008)}),_N_E=e.O()}]);