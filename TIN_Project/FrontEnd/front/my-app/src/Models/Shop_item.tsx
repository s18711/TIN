
export class Shop_item {
    private _item_name: string;
    private _item_price : number;


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

    constructor(item_name : string,item_price : number) {
        this._item_name = item_name;
        this._item_price = item_price;
    }
}

