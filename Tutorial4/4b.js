const fibo = (n) =>{
    if(n === 1 )
        return 0;
   else if( n === 2 || n === 3)
        return 1;
    else {
        return fibo(n - 1) + fibo(n - 2);
    }
}

console.log(fibo(6));