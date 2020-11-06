const findSeconds = (arr) =>{
    arr.sort((a, b) => { return a - b});
    console.log(arr);
    return [arr[1], arr[arr.length - 2]];
}

console.log(findSeconds(1,2,3,4,5,6,6,23,4,5));
console.log(findSeconds(2,5,4,3,234,234,323,0,1,-15));