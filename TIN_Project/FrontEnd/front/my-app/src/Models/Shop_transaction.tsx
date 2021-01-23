
export class Shop_transaction{
    get id_transaction(): number {
        return this._id_transaction;
    }

    set id_transaction(value: number) {
        this._id_transaction = value;
    }
    private _id_employee: number;
    private _id_item : number;
    private _transaction_date : string;
    private _id_transaction: number;

    get id_employee(): number {
        return this._id_employee;
    }

    set id_employee(value: number) {
        this._id_employee = value;
    }

    get id_item(): number {
        return this._id_item;
    }

    set id_item(value: number) {
        this._id_item = value;
    }

    get transaction_date(): string {
        return this._transaction_date;
    }

    set transaction_date(value: string) {
        this._transaction_date = value;
    }

    constructor(id_transaction: number,id_employee : number,id_item :number,transaction_date : string) {
        const dateRegex = new RegExp("^(19|20)\\d\\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$");


       if(!dateRegex.test(transaction_date))
            throw "transaction_date is not in correct form starting 'YYYY-MM-DD' where year > 1899";

        this._id_employee = id_employee;
        this._id_item = id_item;
        this._transaction_date = transaction_date;
        this._id_transaction = id_transaction;

    }
}



