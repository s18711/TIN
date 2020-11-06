const isPrime = (num) =>{
    let flag = true;

    if(num % 1 !== 0)
        flag = false;

    if(num % 2 === 0 && num !== 2)
        flag = false;

    if(num % 3 === 0 && num !== 3)
        flag = false;

    if(num % 5 === 0 && num !== 5)
        flag = false;

    if(num % 6 === 0 && num !== 6)
        flag = false;

    if(num % 7 === 0 && num !== 7)
        flag = false;

    return flag
}

console.log(isPrime(12))