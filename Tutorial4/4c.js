const idPalindrome = (word) => {
    let arr = word.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'')
    let flag = true;
    for(let i = 0; i < arr.length /2 ; i++){
        if(arr[i] !== arr[arr.length - 1 -i])
            flag = false;
    }
    return flag;
}

console.log(idPalindrome("kamil ślimak"));