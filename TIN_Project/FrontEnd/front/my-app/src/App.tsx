import React from 'react';
import {MyButton} from "./MyButton";
import CardList from "./CardList";
import {Employee} from "./Models/Employee";
import {Shop_item} from "./Models/Shop_item";
import {Shop_transaction} from "./Models/Shop_transaction";

interface Props{

}

interface State{
    show : boolean;
    employees: [Employee];
    items: [Shop_item];
    transactions : [Shop_transaction];

}

class App extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            show : false,
            transactions : [new Shop_transaction(1,2,"1900-10-10")],
            employees : [new Employee("test","test","1999-12-09")],
            items: [new Shop_item("test",0)],
        }
    }


        showAllRecords = async (event: React.MouseEvent<HTMLButtonElement>) => {
            const jsonResponse = await fetch("http://localhost:9000/getAllRecords").then(response => response.json());
            console.log(jsonResponse);
            const emps: [Employee] = jsonResponse[0];
            const items: [Shop_item] = jsonResponse[1];
            const transactions: [Shop_transaction] = jsonResponse[2];

            this.setState({show: true,employees: emps, items : items, transactions : transactions});
        }

        render()
        {
            return (
                <div className="App">
                    <MyButton showAllRecords={this.showAllRecords}/>
                    <CardList  show={this.state.show} employees={this.state.employees} items={this.state.items} transactions={this.state.transactions}/>
                </div>
            );

        }
}

export default App;
