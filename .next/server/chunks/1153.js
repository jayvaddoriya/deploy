"use strict";
exports.id = 1153;
exports.ids = [1153];
exports.modules = {

/***/ 7817:
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



function Selector({ setPayoffMonths , handleSliderChange , sliderValue  }) {
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(42);
    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleDropdown = ()=>{
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleSelectorClick = (option)=>{
        setSelectedOption(option);
        setIsDropdownOpen(false);
        handleSliderChange(sliderValue, option);
    };
    const handleChevronClick = (e)=>{
        e.stopPropagation();
        toggleDropdown();
    };
    const closeDropdown = ()=>{
        setIsDropdownOpen(false);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CloseOnClickOutside, {
        onClick: closeDropdown,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CustomDropdownWrapper, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(DisplayedValue, {
                    onClick: toggleDropdown,
                    isOpen: isDropdownOpen,
                    children: [
                        selectedOption,
                        " Months",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChevronDownIcon, {
                            onClick: handleChevronClick,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                width: 24,
                                height: 24,
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M18 9L12 15L6 9",
                                    stroke: "#1546C5",
                                    strokeWidth: 2,
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        })
                    ]
                }),
                isDropdownOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(OptionsList, {
                    children: [
                        24,
                        36,
                        42
                    ].map((option)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Option, {
                            onClick: ()=>handleSelectorClick(option),
                            children: [
                                option,
                                " Months"
                            ]
                        }, option))
                })
            ]
        })
    });
}
const CloseOnClickOutside = ({ children , onClick  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const handleClickOutside = (e)=>{
            if (ref.current && !ref.current.contains(e.target)) {
                onClick();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>{
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [
        ref,
        onClick
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        children: children
    });
};
const CustomDropdownWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: relative;
  display: inline-block;
`;
const DisplayedValue = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--midnight);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-l);
  font-weight: 600;
  font-style: normal;
  width: 180px;
  height: 60px;
  padding: 6px 12px;
  box-shadow: ${(props)=>props.isOpen ? "0px 4px 6px rgba(0, 0, 0, 0.1);" : "none"};
  background-color: white;
  border: #E4E9F8 3px solid;
  border-radius: 8px;
`;
const ChevronDownIcon = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().span)`
  cursor: pointer;
  margin-left: 20px;
`;
const OptionsList = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: absolute;
  width: 170px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  z-index: 1;
  color: var(--midnight);
  font-family: var(--font-family-manrope);
  font-size: var(--font-size-m);
  font-weight: 600;
  font-style: normal;
`;
const Option = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  cursor: pointer;
  padding: 6px 12px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Selector);


/***/ }),

/***/ 6118:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CircularSlider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-draggable"
var external_react_draggable_ = __webpack_require__(192);
var external_react_draggable_default = /*#__PURE__*/__webpack_require__.n(external_react_draggable_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/Slider/SliderDialog.jsx



function SliderDialog({ value  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SVGWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                width: "157",
                height: "92",
                viewBox: "0 0 157 92",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M1.5 8C1.5 4.41015 4.41015 1.5 8 1.5H149C152.59 1.5 155.5 4.41015 155.5 8V68C155.5 71.5898 152.59 74.5 149 74.5H26.6069C24.5952 74.5 22.6353 75.1386 21.0098 76.3239L2.29459 89.9704C1.96417 90.2114 1.5 89.9754 1.5 89.5664V76V8Z",
                    stroke: "#1546C5",
                    strokeWidth: "3"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TextWrapper, {
                children: [
                    "$",
                    value.toLocaleString("en-US")
                ]
            })
        ]
    });
}
const SVGWrapper = (external_styled_components_default()).div`
  position: relative;
  display: inline-block;

  @media (max-width: 600px){
    transform: translateY(30px);
    svg{
      width: 110px;
      height: auto;
    }
  }
`;
const TextWrapper = (external_styled_components_default()).span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  font-family: var(--font-family-manrope);
  font-size: 32px;
  font-weight: 600;
  font-style: normal;
  color: #000;
  
  @media (max-width: 600px){
    font-size: 20px;
    transform: translate(-50%, -70%);
  }
`;
/* harmony default export */ const Slider_SliderDialog = (SliderDialog);

;// CONCATENATED MODULE: ./src/components/Slider/index.jsx





function CircularSlider({ value , onChange , payoffMonths  }) {
    const sliderContainerRef = (0,external_react_.useRef)(null);
    const sliderControlRef = (0,external_react_.useRef)(null);
    const [boundOffset, setBoundOffset] = (0,external_react_.useState)(0);
    const [endX, setEndX] = (0,external_react_.useState)(0);
    const [sliderControlLeft, setSliderControlLeft] = (0,external_react_.useState)("2%");
    (0,external_react_.useEffect)(()=>{
        if (sliderContainerRef.current && sliderControlRef.current) {
            const sliderWidth = sliderContainerRef.current.clientWidth;
            const sliderControlWidth = sliderControlRef.current.clientWidth;
            const newBoundOffset = sliderControlWidth * 1.5 / sliderWidth * 100;
            setBoundOffset(newBoundOffset);
            setEndX(sliderWidth - sliderControlWidth);
            setSliderControlLeft(sliderControlWidth / 2 * -1);
        }
    }, [
        sliderContainerRef,
        sliderControlRef
    ]);
    const onDrag = (e, data)=>{
        const percentage = data.x / endX;
        const value = Math.round(percentage * 90000 + 10000);
        onChange(value, payoffMonths);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(SliderContainer, {
        ref: sliderContainerRef,
        children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_draggable_default()), {
            axis: "x",
            bounds: {
                left: 0,
                right: endX
            },
            onDrag: onDrag,
            children: /*#__PURE__*/ jsx_runtime_.jsx(SliderControl, {
                left: sliderControlLeft,
                ref: sliderControlRef,
                children: /*#__PURE__*/ jsx_runtime_.jsx(DialogContainer, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Slider_SliderDialog, {
                        value: value
                    })
                })
            })
        })
    });
}
const SliderContainer = (external_styled_components_default()).div`
  width: 100%;
  height: 5px;
  position: relative;
  background-color: #eee;
  border-radius: 10px;
  margin-top: auto;
`;
const SliderControl = (external_styled_components_default()).span`
  width: 20px;
  height: 20px;
  background-color: #2d2dff;
  border-radius: 50%;
  position: absolute;
  left: ${(props)=>props.left || "2%"};
  top: -7px;
  cursor: pointer;
`;
const DialogContainer = (external_styled_components_default()).span`
  width: 80px;
  line-height: 30px;
  text-align: center;
  font-size: 12px;
  color: #fff;
  padding: 2px;
  border-radius: 3px;
  position: absolute;
  left: 5px;
  top: -105px;
`;


/***/ })

};
;