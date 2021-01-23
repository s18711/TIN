import React from 'react';
import {Employee} from "./Models/Employee";
import {Shop_item} from "./Models/Shop_item";
import {Shop_transaction} from "./Models/Shop_transaction";
import * as ReactBootstrap from "react-bootstrap";
import {emit} from "cluster";
const { v4: uuidv4 } = require('uuid');


interface Props {
    show: boolean
    employees: [Employee];
    items : [Shop_item];
    transactions : [Shop_transaction];
}

const CardList : React.FC<Props> = (Props) => {
    let tableHeadsEmps ;
    let tableRowsEmps;
    let tableHeadsItems ;
    let tableRowsItems;
    let tableRowsTransactions ;
    let tableHeadsTransactions;

    const getHeads = (myObject: {}) => {
      return Object.keys(myObject).map((value, index) => {
            return <th key={index}>{value}</th>
        });
    }
    if(Props.show) {

        tableHeadsEmps = getHeads(Props.employees[0]);
        tableHeadsItems = getHeads(Props.items[0]);
        tableHeadsTransactions = getHeads(Props.transactions[0]);

        tableRowsEmps = Props.employees.map((employee, index) => {
           return(
               <tr key={index}>
                   <td>{employee.id_employee}</td>
                   <td>{employee.employee_name}</td>
                   <td>{employee.employee_surname}</td>
                   <td>{employee.employee_birthday}</td>
               </tr>
           )
        });
        tableRowsItems = Props.items.map((item, index) => {
            return(
                <tr key={index}>
                    <td>{item.id_item}</td>
                    <td>{item.item_name}</td>
                    <td>{item.item_price}</td>
                </tr>
            )
        });
        tableRowsTransactions = Props.transactions.map((transaction, index) => {
            return(
                <tr key={index}>
                    <td>{transaction.id_transaction}</td>
                    <td>{transaction.id_employee}</td>
                    <td>{transaction.id_item}</td>
                    <td>{transaction.transaction_date}</td>
                </tr>
            )
        });
    }


    return (
        <ReactBootstrap.Container>
                <ReactBootstrap.Table striped bordered hover>
                    <thead>
                        <tr>
                         {tableHeadsEmps}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRowsEmps}
                    </tbody>
                </ReactBootstrap.Table>
                <ReactBootstrap.Table striped bordered hover>
                    <thead>
                        <tr>
                            {tableHeadsItems}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRowsItems}
                    </tbody>
                </ReactBootstrap.Table>
            <ReactBootstrap.Table striped bordered hover>
                <thead>
                    <tr>
                        {tableHeadsTransactions}
                    </tr>
                </thead>
                <tbody>
                    {tableRowsTransactions}
                </tbody>
            </ReactBootstrap.Table>

        </ReactBootstrap.Container>
    );
}

export default CardList;
