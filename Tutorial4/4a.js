const recursiveFactorial = function (number){
    if(number === 0)
        return 1
    return number * recursiveFactorial(number - 1);
}

console.log(recursiveFactorial(5));

function iterativeFactorial(number){
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial = factorial * i;
    }

    return factorial;
}

console.log(iterativeFactorial(5));