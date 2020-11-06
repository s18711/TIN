function amountTocoins(amount, coins)
{
    coins.sort((a, b) => {return a - b});
    coins.reverse();
    let arr = [];
    while(amount !== 0)
    {
        if(amount - coins[0] >= 0){
            arr.push(coins[0]);
            amount -= coins[0];
        }
        else
            if(coins.length > 0)
              coins.shift();
    }
    return arr;

}
console.log(amountTocoins(46, [11, 25,10, 5,2,1]));