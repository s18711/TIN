const temp = require('./TemperatureConverter');
const dist = require('./DistanceConverter');

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
