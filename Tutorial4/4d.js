const alphaOrder = (word) => {
    return word.split('').sort().join('');
}

console.log(alphaOrder("webmaster"));