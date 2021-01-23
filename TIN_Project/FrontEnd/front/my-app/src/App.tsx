import React from 'react';
import {MyButton} from "./MyButton";
import CardList from "./CardList";
import {Employee} from "./Models/Employee";
import {Shop_item} from "./Models/Shop_item";
import {Shop_transaction} from "./Models/Shop_transaction";
import { Button , Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';



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
            transactions : [new Shop_transaction(0,1,2,"1900-10-10")],
            employees : [new Employee(0,"test","test","1999-12-09")],
            items: [new Shop_item(0,"test",0)],
        }
    }


        showAllRecords = async (event: React.MouseEvent<HTMLButtonElement>) => {
            const jsonResponse = await fetch("http://localhost:9000/getAllRecords").then(response => response.json());
            // console.log(jsonResponse);
            const emps: [Employee] = jsonResponse[0];
            const items: [Shop_item] = jsonResponse[1];
            const transactions: [Shop_transaction] = jsonResponse[2];

            this.setState({show: true,employees: emps, items : items, transactions : transactions});
        }

        render()
        {
            return (
                <div className="App">

                    <Container className={"d-flex flex-column justify-content-center"}>
                        <MyButton showAllRecords={this.showAllRecords}/>
                        <CardList  show={this.state.show} employees={this.state.employees} items={this.state.items} transactions={this.state.transactions}/>
                    </Container>

                </div>
            );

        }
}

export default App;
