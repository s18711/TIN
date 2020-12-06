/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 680:
/***/ ((module) => {

 function milesToKm(miles){
    return miles * 1.60934;
}

function kmToMiles(km){
    return km / 1.60934;
}

module.exports = { milesToKm, kmToMiles};




/***/ }),

/***/ 510:
/***/ ((module) => {


// C & F
function  cToF(c){
 return (parseFloat(c) * 9/5) + 32;
}

function  fToC(f){
    return (parseFloat(f) - 32) * 5/9;
}

// F & K
function fToK(f){
    return (parseFloat(f) - 32) * 5/9  + 273.15;
}

function kToF(k){
    return (parseFloat(k) - 273.15) * 9/5 + 32
}

// K & C
function kToC(k){
 return parseFloat(k) - 273.15
}

function cToK(c){
    return parseFloat(c) + 273.15;
}

module.exports = {cToF,fToC, cToK,kToC,fToK,kToF};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
const temp = __webpack_require__(510);
const dist = __webpack_require__(680);

const selectIn = document.getElementById("tempSelIn");
const selectOut = document.getElementById("tempSelOut");
const input = document.getElementById("tempIn");
const output = document.getElementById("tempOut");
const buttonTemp = document.getElementById("tempButton");
const selectInD = document.getElementById("distSetIn");
const selectOutD = document.getElementById("distSetOut");
const inputD = document.getElementById("distIn");
const outputD = document.getElementById("DistOut");
const buttonD = document.getElementById("distButton");

buttonD.addEventListener("click", ev => {
   switch (selectInD.value) {
       case "Kilometers":
           switch (selectOutD.value) {
               case "Kilometers":
                   outputD.innerText = inputD.value;
                   break;
               case "Miles":
                   outputD.innerText = dist.kmToMiles(inputD.value);
                   break;
               default:
                   console.error("first switch dist");
                   break;
           }
           break;
       case "Miles":
           switch (selectOutD.value) {
               case "Kilometers":
                   outputD.innerText = dist.milesToKm(inputD.value);
                   break;
               case "Miles":
                   outputD.innerText = inputD.value;
                   break;
               default:
                   console.error("second switch dist");

           }
           break;
       default:
           console.error("big switch dist");
           break;
   }
});

buttonTemp.addEventListener("click", ev => {

    switch (selectIn.value) {
       case "celsius":
           switch (selectOut.value) {
               case "celsius":
                   output.innerText = input.value;
                   break;
               case "fahrenheit":
                   output.innerText = temp.cToF(input.value);
                   break;
               case "kelvin":
                   output.innerText = temp.cToK(input.value);
                   break;
               default:
                   console.err("first switch");
                   break;
           }
           break;
       case "fahrenheit":
           switch (selectOut.value) {
               case "celsius":
                   output.innerText = temp.fToC(input.value);
                   break;
               case "fahrenheit":
                   output.innerText = input.value;
                   break;
               case "kelvin":
                   output.innerText = temp.fToK(input.value);
                   break;
               default:
                   console.err("second switch");
                   break;
           }
           break;
       case "kelvin":
           switch (selectOut.value) {
               case "celsius":
                   output.innerText = temp.kToC(input.value);
                   break;
               case "fahrenheit":
                   output.innerText = temp.kToF(input.value);
                   break;
               case "kelvin":
                   output.innerText = input.value;
                   break;
               default:
                   console.err("third switch");
                   break;
           }
           break;
       default:
           console.error("big switch temp");
           break;
   }
});

})();

/******/ })()
;