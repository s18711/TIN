
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