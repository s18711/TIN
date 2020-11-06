const longestWord = (sentence) => {
    let arr =  sentence.match(/\w[a-z]{0,}/gi);

    let longestWord =arr[0];
    let lengthOfTheLongestWord = arr[0].length;
    for (let i = 1; i < arr.length; i++){
        if(arr[i].length > lengthOfTheLongestWord){
            longestWord = arr[i];
            lengthOfTheLongestWord = arr[i].length;
        }
    }
    return longestWord;
}

console.log(longestWord("this is not a very long sentence, but sure it does have some long words like xd"))

