class Shop_item{
    constructor(item_name,item_price) {
        if (typeof item_name !== 'string' && !(item_name instanceof String))
            throw "item_name is not a string";
        else if(typeof item_price !== 'number' && !(item_price instanceof Number))
            throw "item_price is not a number";

        this.item_name = item_name;
        this.item_price = item_price;
    }
}
module.exports = Shop_item;

