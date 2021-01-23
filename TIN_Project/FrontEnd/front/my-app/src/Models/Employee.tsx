
export class Employee {
    private _employee_name: string;
    private _employee_surname: string;
    private _employee_birthday : string;
    private _id_employee: number;

    get id_employee(): number {
        return this._id_employee;
    }

    set id_employee(value: number) {
        this._id_employee = value;
    }

    get employee_name(): string {
        return this._employee_name;
    }

    set employee_name(value: string) {
        this._employee_name = value;
    }

    get employee_surname(): string {
        return this._employee_surname;
    }

    set employee_surname(value: string) {
        this._employee_surname = value;
    }

    get employee_birthday(): string {
        return this._employee_birthday;
    }

    set employee_birthday(value: string) {
        this._employee_birthday = value;
    }

    constructor(id_employee: number, employee_name : string,employee_surname: string,employee_birthday:string) {
        const dateRegex =new RegExp("^(19|20)\\d\\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$");

            if(!dateRegex.test(employee_birthday))
                 throw "employee_birthday is not in correct form starting 'YYYY-MM-DD' where year > 1899";

        this._employee_name = employee_name;
        this._employee_surname = employee_surname;
        this._employee_birthday = employee_birthday;
        this._id_employee = id_employee;

    }

}



