(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[946,650],{6010:function(e,t,n){"use strict";function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=function e(t){var n,a,o="";if("string"==typeof t||"number"==typeof t)o+=t;else if("object"==typeof t){if(Array.isArray(t))for(n=0;n<t.length;n++)t[n]&&(a=e(t[n]))&&(o&&(o+=" "),o+=a);else for(n in t)t[n]&&(o&&(o+=" "),o+=n)}return o}(e))&&(a&&(a+=" "),a+=t);return a}n.r(t),n.d(t,{clsx:function(){return a}}),t.default=a},4884:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/debt-management",function(){return n(2909)}])},638:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){let n=r.default,o={loading:e=>{let{error:t,isLoading:n,pastDelay:a}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=a({},o,e)),o=a({},o,t);let l=o.loader,c=()=>null!=l?l().then(i):Promise.resolve(i(()=>null));return(o.loadableGenerated&&delete(o=a({},o,o.loadableGenerated)).loadableGenerated,"boolean"!=typeof o.ssr||o.ssr)?n(a({},o,{loader:c})):(delete o.webpack,delete o.modules,s(n,o))},t.noSSR=s;var a=n(6495).Z,o=n(2648).Z,r=(o(n(7294)),o(n(4302)));function i(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6319:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=(0,n(2648).Z)(n(7294));let o=a.default.createContext(null);t.LoadableContext=o},4302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(6495).Z,o=(0,n(2648).Z)(n(7294)),r=n(6319);let i=[],s=[],l=!1;function c(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function m(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function i(){if(!a){let t=new d(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!l){let e=n.webpack?n.webpack():n.modules;e&&s.push(t=>{for(let n of e)if(-1!==t.indexOf(n))return i()})}function c(e,t){!function(){i();let e=o.default.useContext(r.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let s=o.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),o.default.useMemo(()=>{var t;return s.loading||s.error?o.default.createElement(n.loading,{isLoading:s.loading,pastDelay:s.pastDelay,timedOut:s.timedOut,error:s.error,retry:a.retry}):s.loaded?o.default.createElement((t=s.loaded)&&t.default?t.default:t,e):null},[e,s])}return c.preload=()=>i(),c.displayName="LoadableComponent",o.default.forwardRef(c)}(c,e)}function h(e,t){let n=[];for(;e.length;){let a=e.pop();n.push(a(t))}return Promise.all(n).then(()=>{if(e.length)return h(e,t)})}m.preloadAll=()=>new Promise((e,t)=>{h(i).then(e,t)}),m.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(t=>{let n=()=>(l=!0,t());h(s,e).then(n,n)})},window.__NEXT_PRELOADREADY=m.preloadReady,t.default=m},956:function(e,t,n){"use strict";n.d(t,{W:function(){return r}});var a=n(5893),o=n(6010);function r(e){let{className:t,...n}=e;return(0,a.jsx)("div",{className:(0,o.default)("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",t),...n})}},2909:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var a=n(7297),o=n(5893);n(7294);var r=n(9008),i=n.n(r);n(5675);var s=n(956),l=n(3304),c=n(1690),d=n(1664),m=n.n(d),h=n(5444),u=n(1163),p=n(8602);function f(){let e=(0,a.Z)(["\n  position: fixed;\n  width: 100px;\n  height: 100px;\n  bottom: 14%;\n  right: 5px;\n  z-index: 13;\n  @media screen and (min-width: 768px) {\n    display: none;\n  }\n"]);return f=function(){return e},e}function g(){let e=(0,u.useRouter)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:"Debt Management"}),(0,p.Z)("debt-management","Debt Management","What is a debt management plan? Debt management plans are designed to put \n              consumers on a strict budget with the aim of solving their financial woes.","article")]}),(0,o.jsxs)("main",{children:[(0,o.jsx)(l.Z,{}),(0,o.jsxs)("div",{className:"mt-[86px] -mb-8 overflow-hidden flex flex-col px-6 md:px-24",children:[(0,o.jsx)(y,{onClick:()=>e.push("tel:+1-888-344-0214"),src:"/static/img/frame-129-2@2x.svg",alt:"Frame 129"}),(0,o.jsxs)(s.W,{className:"text-left text-gray-700 flex-col flex bg-white h-auto mt-12 ",children:[(0,o.jsx)("h1",{className:"text-4xl sm:text-3xl w-full text-gray-600 font-semibold",children:"Debt Management Program"}),(0,o.jsx)("h2",{className:"mt-4 text-xl font-semibold text-gray-500 mb-6",children:"What is a Debt Management Plan?"}),(0,o.jsx)("p",{children:"A Debt Management Plan (DMP) helps consumers eliminate credit card debt in an expedited fashion by working with lenders to bring a borrower's accounts current, lower their APRs and eliminate finance fees."}),(0,o.jsx)("p",{children:"This in turn means that more of the monthly payment goes towards reducing a borrower's credit card balances and principal on the debt amount, however, your payment will also increase along with this."}),(0,o.jsx)("p",{children:"Regardless if the credit counselor you chose is a non-profit organization or not, you will have to pay more than you were before you started the program."}),(0,o.jsx)("p",{children:"There is no such thing as free debt management."}),(0,o.jsx)("p",{children:"The costs of the program will typically offset any savings you see from interest savings. So in this sense, the benefit of enrolling in a DMP is essentially a zero sum game."}),(0,o.jsx)("p",{children:"However, these programs do provide some benefits in some instances."}),(0,o.jsx)("p",{children:"Another added benefit of a DMP is that once the terms of debt management program become established, the borrower will receive less calls from debt collectors. In turn, this will lower credit card balances which will help them reduce worries and allow them to stress less about their current debt situation. Therefore, individuals enrolling in a DMP typically feel an increased sense of comfort regarding their debt repayment plan."}),(0,o.jsx)("p",{children:"This however, comes at a cost, and means you as a consumer will have to pay more money to maintain your money management plan."})]})]}),(0,o.jsx)("div",{className:"py-12 px-6 md:px-24 bg-white h-auto max-w-full",children:(0,o.jsxs)(s.W,{className:"flex flex-col gap-6",children:[(0,o.jsx)("h2",{className:"text-3xl mt-4 w-full text-main_text font-semibold text-center",children:"How Debt Management Programs Work"}),(0,o.jsx)("p",{children:"All legitimate companies will always start with a 100% confidential and free financial assessment. A counselor will ask a lot of questions in order to thoroughly assess a borrower's household income and expenses. Moreover, after the credit counselor's assessment, educational debt resources are provided to help the borrower find places to reduce expenditures and save additional money on an ongoing monthly basis."}),(0,o.jsx)("p",{children:"After this they will explore other feasible options and develop a personalized budget in order to achieve their money goals and better their financial standing. ​              "}),(0,o.jsx)("p",{children:"The DMP helps the program participant in eliminating credit card debt more quickly by bringing accounts into a satisfactory status, lowering applicable interest rates and waiving any late fees."}),(0,o.jsx)("p",{children:"Deposits are made directly to the credit counselor and program disbursements are allocated to the creditors on behalf of the borrower. Program participants usually make one consolidated monthly payment and the agency pays the creditors through that consolidation payment. With this, the borrower is able to pay down the debt more aggressively and ideally setup a plan for financial success."}),(0,o.jsx)("p",{children:"A Debt Management Plan typically allows the participant to pay off all unsecured debt within a five year timeframe. Because many creditors agree to lower interest rates, more of the payments are going towards reducing the principal of the debt and less is applied towards accruing interest. Collection calls and other correspondence will usually stop after a few months in the program."}),(0,o.jsx)("p",{children:"Some debt management plans also give the added option to include other monthly obligations (such as mortgages, auto payment, utilities, insurance, etc.)."}),(0,o.jsx)("p",{children:"In total, this becomes a great tool for responsible budgeting and allows the borrower to remain current while better managing all household expenses in aggregate. This prioritization of managing income and expenses is essential for the completion of any related debt relief program, not just a debt management plan."})]})}),(0,o.jsx)("div",{className:"py-12 px-6 md:px-24 bg-soft_gray h-auto max-w-full",children:(0,o.jsxs)(s.W,{className:"flex flex-col gap-6",children:[(0,o.jsx)("h2",{className:"text-3xl mt-4 w-full text-main_text font-semibold text-center",children:"Implications of a DMP"}),(0,o.jsx)("p",{children:"When participating in a Debt Management Program, all open lines of credit will typically be closed out whilst you are an active participant."}),(0,o.jsx)("p",{children:"Moreover, all accounts included in a DMP will have a notation on your credit report and show that the accounts were placed in a debt management plan. Although the process varies per credit counseling organization, most companies will also freeze your accounts until the program is completed. ​              "}),(0,o.jsx)("p",{children:"Successfully completing a debt management plan is not always an easy feat. The best bet is to include all approved credit cards. However, if the participant needs to retain use of one card for emergencies, a deal can be worked out in rare instances, where the credit counselor will allow it."}),(0,o.jsx)("p",{children:"There can definitely be credit implications when participating in a Debt Management Program."}),(0,o.jsx)("p",{children:"Credit Counseling companies do not actually report payment history to the three credit bureaus, that is done by creditors."}),(0,o.jsx)("p",{children:"Therefore, depending on the particular plan (and the borrower's credit card companies), the impact to a credit report can be favorable or not."}),(0,o.jsx)("p",{children:"Although it usually tends to be negative since open lines of credit are closed."}),(0,o.jsx)("p",{children:"In general, anytime open lines of credit are closed there will be a negative impact to your credit. Moreover, since total credit availability and therefore utilization rate have also decreased, this also tends to negatively impact your credit score."}),(0,o.jsx)("p",{children:"So, if a participant's credit limit decreases you would see an initial dip in your credit worthiness. This can sometimes be offset by paying monthly obligations in a timely manner (as this is the most important factor in determining a borrower's credit worthiness) but the impact will still be there."})]})}),(0,o.jsx)("div",{className:"py-12 px-6 md:px-24 bg-white h-auto max-w-full",children:(0,o.jsxs)(s.W,{className:"flex flex-col gap-6",children:[(0,o.jsx)("h2",{className:"text-3xl mt-4 w-full text-main_text font-semibold text-center",children:"Are Debt Management Plans a Recommended Debt Relief Option?"}),(0,o.jsxs)("p",{children:["As of late, debt management programs have been proven to be one of the least successful options in helping consumers ",(0,o.jsx)(m(),{href:"/",className:"font-semibold",children:"become debt free"})," and lessen their financial worries."]}),(0,o.jsx)("p",{children:"Debt management plans have a reported success rate of 20% or worse. So, 4 out of 5 participants will NOT succeed in a debt management program and resolve their financial issues. ​              "}),(0,o.jsx)("p",{children:"There are multitude of reason for the lack of success in efficacy related to DMPs, but a lot has to do with the fact that people entering these programs typically have to pay more than they were before they got into financial trouble."}),(0,o.jsx)("p",{children:"If you miss a payment or cannot afford to pay the company managing your debt and your revolving debt obligations, the credit counselors typically offer little to no assistance and leeway in terms of help. Missed payments could also result in you paying retroactive interest."}),(0,o.jsx)("p",{children:"The program could be forfeit entirely due to one missed payment, leaving you with no results and usually making your situation worse than when it started."}),(0,o.jsx)("p",{children:"Bottom line: make sure to do your homework and fully understand the option before moving forward with a DMP."})]})})]}),(0,o.jsx)(c.default,{})]})}let y=h.ZP.img(f())},8602:function(e,t,n){"use strict";var a=n(5893);n(4298);let o=(e,t,n,o)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("link",{rel:"canonical",href:"https://www.thedebtreliefcompany.com/".concat(e)}),(0,a.jsx)("meta",{name:"robots",content:"index"}),(0,a.jsx)("meta",{property:"og:title",content:"".concat(t)}),(0,a.jsx)("meta",{property:"og:description",content:"".concat(n)}),(0,a.jsx)("meta",{property:"og:image",content:"https://www.thedebtreliefcompany.com/static/img/logos/ogImage.png"}),(0,a.jsx)("meta",{property:"og:image:width",content:"457"}),(0,a.jsx)("meta",{property:"og:image:height",content:"256"}),(0,a.jsx)("meta",{property:"og:url",content:"https://www.thedebtreliefcompany.com/".concat(e)}),(0,a.jsx)("meta",{property:"og:site_name",content:"Debt Relief Company"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),"article"===o&&(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:'\n    {\n      "@context": "https://schema.org",\n      "@type": "Article",\n      "author": {\n        "@type": "Person",\n        "name": "Adem Selita",\n        "image": {\n          "@type": "ImageObject",\n          "url": "https://cdn.sanity.io/images/hr3nk4qn/production/dcb3be7abfc4596d1ac9e77885394e2c78934736-200x200.webp?w=30",\n          "width": "30",\n          "height": "30"\n        }\n      },\n      "articleSection": "Debt Relief",\n      "dateModified": "2021-10-11T19:22:00.000Z",\n      "datePublished": "2021-10-11T19:22:00.000Z",\n      "headline": "'.concat(t,'",\n      "mainEntityOfPage": {\n        "@id": "').concat("https://www.thedebtreliefcompany.com/".concat(e),'",\n        "@type": "itemPage",\n        "url": "').concat("https://www.thedebtreliefcompany.com/".concat(e),'"\n      },\n      "description": "').concat(n,'",\n      "url": "').concat("https://www.thedebtreliefcompany.com/".concat(e),'",\n      "image": {\n        "@type": "ImageObject",\n        "url": "https://www.thedebtreliefcompany.com/android-chrome-512x512.png",\n        "width": "512",\n        "height": "512"\n      },\n      "publisher": {\n        "@type": "Organization",\n        "name": "The Debt Relief Company",\n        "logo": {\n          "@type": "ImageObject",\n          "url": "https://www.thedebtreliefcompany.com/android-chrome-512x512.png" \n        }\n      }\n    }\n  ')}},"page-jsonld"),(0,a.jsx)("link",{rel:"alternate",href:"https://www.thedebtreliefcompany.com/".concat(e),hrefLang:"x-default"}),(0,a.jsx)("link",{rel:"alternate",href:"https://www.thedebtreliefcompany.com/".concat(e),hrefLang:"en-us"}),(0,a.jsx)("meta",{name:"fb_admins_meta_tag",content:"thedebtreliefcompany"}),(0,a.jsx)("meta",{name:"google-site-verification",content:"2OKIukogdkZURrWxVcDHG-tDZVcNw6CZejQpbR2KCdM"}),(0,a.jsx)("meta",{property:"fb:admins",content:"thedebtreliefcompany"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:title",content:"".concat(t)}),(0,a.jsx)("meta",{name:"twitter:description",content:"".concat(n)}),(0,a.jsx)("meta",{name:"twitter:image",content:"https://www.thedebtreliefcompany.com/static/img/logos/ogImage.png"})]});t.Z=o},5152:function(e,t,n){e.exports=n(638)}},function(e){e.O(0,[296,675,432,287,304,690,774,888,179],function(){return e(e.s=4884)}),_N_E=e.O()}]);