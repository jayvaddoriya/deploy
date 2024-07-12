(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[529,650],{1837:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/debt-to-income-ratio",function(){return n(7584)}])},7584:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var a=n(5893),i=n(7294),s=n(9008),o=n.n(s),c=n(8602),l=n(3304),r=n(1690),m=n(2856),d=n.n(m),u=n(3967),_=n.n(u),h=n(5675),p=n.n(h),b=n(5419),g=n(1163);let I=[{title:"Mortgage / Rent",name:"rent"},{title:"Food",name:"food"},{title:"Home Owners Insurance",name:"insuranceHome"},{title:"Household Item",name:"household"},{title:"Life Insurance",name:"insuranceLife"},{title:"Clothing",name:"clothing"},{title:"Medical Care",name:"medical"},{title:"Laundry / Dry Cleaning",name:"cleaning"},{title:"Child Care / Support / Alimony",name:"child"},{title:"Utilities",name:"utilities"},{title:"Cable TV / Satellite",name:"tv"},{title:"Telephone",name:"telephone"},{title:"Charity / Donations",name:"charity"},{title:"Auto Loans",name:"autoLoans"},{title:"Entertainment",name:"entertainment"},{title:"Auto Other",name:"autoOther"},{title:"Gym / Health",name:"gym"},{title:"Auto Insurance",name:"autoInsurance"},{title:"Personal Care",name:"personal"},{title:"Education",name:"education"},{title:"Back Taxes",name:"taxes"},{title:"Student Loans",name:"studentLoans"},{title:"Subscriptions",name:"subscriptions"},{title:"Misc / Other",name:"other"}];var x=function(){let e=(0,g.useRouter)(),[t,n]=(0,i.useState)(""),[s,o]=(0,i.useState)(I.reduce((e,t)=>({...e,[t.name]:""}),{})),[c,m]=(0,i.useState)(0),[u,h]=(0,i.useState)(0),[x,T]=(0,i.useState)(0),N=(0,i.useRef)(),j=e=>t=>{let a=t.target.value;if(/^[\d|.|,|$]+$/.test(a)){if(!a){if("income"===e){n("$0");return}o({...s,[e]:"$0"});return}if(a="$"+(a=Number(a=a.replaceAll("$","").replaceAll(",","").replaceAll(".","")).toLocaleString("en-US").toString()),"income"===e){n(a);return}o({...s,[e]:a})}},v=()=>{let e=Number(t.replaceAll("$","").replaceAll(",","").replaceAll(".","")),n=Object.keys(s).reduce((e,t)=>e+Number(s[t].replaceAll("$","").replaceAll(",","").replaceAll(".","")),0);h(e),m(n),T(e-n);let a=N.current.getBoundingClientRect().top+window.scrollY-86;window.scrollTo({top:a,behavior:"smooth"})};return(0,a.jsx)("div",{className:"container-center-horizontal",children:(0,a.jsxs)("div",{className:_()("debtToIncome screen",d().root),children:[(0,a.jsx)(l.Z,{className:"mac-book-pro-16-4-3"}),(0,a.jsx)(b.Z,{className:"debtToIncome",texts:{title:"Debt to Income Page"}}),(0,a.jsx)("div",{className:d().section1,children:(0,a.jsxs)("div",{className:_()(d().content,d().section1Content),children:[(0,a.jsx)(p(),{className:d().cocktailImage,src:"/static/img/debtToIncome/cocktail.svg",alt:"Cocktail",width:130,height:219}),(0,a.jsx)(p(),{className:d().surfingImage,src:"/static/img/debtToIncome/surfing.svg",alt:"Surfing board",width:173,height:300}),(0,a.jsx)("div",{className:d().inputs,children:(0,a.jsxs)("div",{className:d().container,children:[(0,a.jsxs)("div",{className:d().inputsContainer,children:[(0,a.jsx)("div",{className:d().title,children:"Income(s)"}),(0,a.jsx)("div",{className:d().inputsWrapper,children:(0,a.jsxs)("div",{className:d().input,children:[(0,a.jsx)("label",{className:d().label,children:"Monthly Income"}),(0,a.jsx)("input",{type:"text",value:t,onChange:j("income"),placeholder:"$0",className:d().numberInput})]})})]}),(0,a.jsxs)("div",{className:d().inputsContainer,children:[(0,a.jsx)("div",{className:d().title,children:"Monthly expenses"}),(0,a.jsx)("div",{className:d().inputsWrapper,children:I.map((e,t)=>(0,a.jsxs)("div",{className:d().input,children:[(0,a.jsx)("label",{className:d().label,children:e.title}),(0,a.jsx)("input",{type:"text",value:s[e.name],onChange:j(e.name),placeholder:"$0",className:d().numberInput})]},t))})]}),(0,a.jsx)("button",{className:d().submit,onClick:v,children:"CALCULATE BUDGET"})]})}),(0,a.jsxs)("div",{className:d().result,ref:N,children:[(0,a.jsx)("div",{className:d().title,children:"Your Budget Calculator"}),(0,a.jsxs)("div",{className:d().cards,children:[(0,a.jsxs)("div",{className:_()(d().card,d().income),children:[(0,a.jsxs)("div",{className:d().cardTitle,children:["Your Income are:",(0,a.jsx)(p(),{src:"/static/img/debtToIncome/arrowDown.svg",alt:"Arrow down",width:24,height:24})]}),(0,a.jsxs)("div",{className:d().cardStats,children:["$",u.toLocaleString("en-US")]})]}),(0,a.jsxs)("div",{className:_()(d().card,d().spendings),children:[(0,a.jsxs)("div",{className:d().cardTitle,children:["Your spending are:",(0,a.jsx)(p(),{src:"/static/img/debtToIncome/arrowUp.svg",alt:"Arrow up",width:24,height:24})]}),(0,a.jsxs)("div",{className:d().cardStats,children:["$",c.toLocaleString("en-US")]})]}),(0,a.jsxs)("div",{className:_()(d().card,d().budget),children:[(0,a.jsx)("div",{className:d().cardTitle,children:"Your Budget:"}),(0,a.jsxs)("div",{className:d().cardStats,children:["$",x.toLocaleString("en-US"),(0,a.jsx)(p(),{src:"/static/img/debtToIncome/graph.svg",alt:"Graph icon",width:46,height:25})]})]})]})]})]})}),(0,a.jsx)(p(),{className:d().frame129,onClick:()=>e.push("tel:+1-888-344-0214"),src:"/static/img/frame-129-2@2x.svg",alt:"Frame 129",width:112,height:112}),(0,a.jsx)(r.default,{})]})})};function T(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Debt to Income Ratio"}),(0,c.Z)("debt-to-income-ratio","Debt to Income Ratio","Why is your Debt to income ratio so important? Well, your DTI is \n              possibly the most important factor when applying for a mortgage. \n              Here's why it's so important…","article")]}),(0,a.jsx)(x,{})]})}},2856:function(e){e.exports={root:"DebtToIncome_root___3xJz",section1:"DebtToIncome_section1__0iP8Z",content:"DebtToIncome_content__YVJLC",section1Content:"DebtToIncome_section1Content__VU1Cd",cocktailImage:"DebtToIncome_cocktailImage__Nwrd_",surfingImage:"DebtToIncome_surfingImage__sLomJ",title:"DebtToIncome_title__ghy9Q",inputs:"DebtToIncome_inputs___wka2",inputsContainer:"DebtToIncome_inputsContainer__KgCTC",inputsWrapper:"DebtToIncome_inputsWrapper__U7NMG",container:"DebtToIncome_container__Gp9s6",input:"DebtToIncome_input___Dbn0",label:"DebtToIncome_label__NGxmt",numberInput:"DebtToIncome_numberInput__pm0y8",submit:"DebtToIncome_submit__DiJLh",result:"DebtToIncome_result__QuC6j",cards:"DebtToIncome_cards__iumW0",card:"DebtToIncome_card__iCmqf",cardTitle:"DebtToIncome_cardTitle__DZZoI",cardStats:"DebtToIncome_cardStats__mKUgn",budget:"DebtToIncome_budget__wO56_",income:"DebtToIncome_income__zFS4t",section2:"DebtToIncome_section2__7aSS1",section2Content:"DebtToIncome_section2Content__5WQ_i",textParagraph:"DebtToIncome_textParagraph__Xv7_i",bold:"DebtToIncome_bold__wF8ga",frame129:"DebtToIncome_frame129__InESe"}}},function(e){e.O(0,[296,675,432,304,690,745,774,888,179],function(){return e(e.s=1837)}),_N_E=e.O()}]);