(()=>{var e={680:e=>{e.exports={milesToKm:function(e){return e/1.60934},kmToMiles:function(e){return 1.60934*e}}},510:e=>{e.exports={cToF:function(e){return 9*parseFloat(e)/5+32},fToC:function(e){return 5*(parseFloat(e)-32)/9},cToK:function(e){return parseFloat(e)+273.15},kToC:function(e){return parseFloat(e)-273.15},fToK:function(e){return 5*(parseFloat(e)-32)/9+273.15},kToF:function(e){return 9*(parseFloat(e)-273.15)/5+32}}}},t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={exports:{}};return e[r](s,s.exports,n),s.exports}(()=>{const e=n(510),t=n(680),r=document.getElementById("tempSelIn"),s=document.getElementById("tempSelOut"),a=document.getElementById("tempIn"),i=document.getElementById("tempOut"),c=document.getElementById("tempButton"),o=document.getElementById("distSetIn"),l=document.getElementById("distSetOut"),u=document.getElementById("distIn"),d=document.getElementById("DistOut");document.getElementById("distButton").addEventListener("click",(e=>{switch(o.value){case"Kilometers":switch(l.value){case"Kilometers":d.innerText=u.value;break;case"Miles":d.innerText=t.kmToMiles(u.value);break;default:console.error("first switch dist")}break;case"Miles":switch(l.value){case"Kilometers":d.innerText=t.milesToKm(u.value);break;case"Miles":d.innerText=u.value;break;default:console.error("second switch dist")}break;default:console.error("big switch dist")}})),c.addEventListener("click",(t=>{switch(r.value){case"celsius":switch(s.value){case"celsius":i.innerText=a.value;break;case"fahrenheit":i.innerText=e.cToF(a.value);break;case"kelvin":i.innerText=e.cToK(a.value);break;default:console.err("first switch")}break;case"fahrenheit":switch(s.value){case"celsius":i.innerText=e.fToC(a.value);break;case"fahrenheit":i.innerText=a.value;break;case"kelvin":i.innerText=e.fToK(a.value);break;default:console.err("second switch")}break;case"kelvin":switch(s.value){case"celsius":i.innerText=e.kToC(a.value);break;case"fahrenheit":i.innerText=e.kToF(a.value);break;case"kelvin":i.innerText=a.value;break;default:console.err("third switch")}break;default:console.error("big switch temp")}}))})()})();