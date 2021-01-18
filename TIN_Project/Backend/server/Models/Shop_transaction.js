class Shop_transaction{
    constructor(id_employee,id_item,transaction_date) {
        const dateRegex =new RegExp("^(19|20)\\d\\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$");

        if (typeof id_employee !== 'number' && !(id_employee instanceof Number))
            throw "id_employee is not a number";
        else if(typeof id_item !== 'number' && !(id_item instanceof Number))
            throw "id_item is not a number";
        else if((typeof transaction_date !== 'string' && !(transaction_date instanceof String))|| !dateRegex.test(transaction_date))
            throw "transaction_date is not in correct form starting 'YYYY-MM-DD' where year > 1899";

        this.id_employee = id_employee;
        this.id_item = id_item;
        this.transaction_date = transaction_date;

    }
}
module.exports = Shop_transaction;



