
export class Shop_item {
    get id_item(): number {
        return this._id_item;
    }

    set id_item(value: number) {
        this._id_item = value;
    }
    private _item_name: string;
    private _item_price : number;
    private _id_item: number;


    get item_name(): string {
        return this._item_name;
    }

    set item_name(value: string) {
        this._item_name = value;
    }

    get item_price(): number {
        return this._item_price;
    }

    set item_price(value: number) {
        this._item_price = value;
    }

    constructor(id_item: number,item_name : string,item_price : number) {
        this._item_name = item_name;
        this._item_price = item_price;
        this._id_item = id_item;
    }
}

