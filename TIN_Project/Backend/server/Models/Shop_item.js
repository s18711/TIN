class Shop_item{
    constructor(item_name,item_price,item_category,item_color) {
        if (typeof item_name !== 'string' && !(item_name instanceof String))
            throw "item_name is not a string";
        else  if (typeof item_category !== 'string' && !(item_category instanceof String))
            throw "item_category is not a string";
        else  if (typeof item_color !== 'string' && !(item_color instanceof String))
            throw "item_color is not a string";
        else if(typeof item_price !== 'number' && !(item_price instanceof Number))
            throw "item_price is not a number";

        this.item_name = item_name;
        this.item_price = item_price;
        this.item_category = item_category;
        this.item_color = item_color;
    }
}
module.exports = Shop_item;

