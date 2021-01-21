import React from 'react';
import MyCard from "./MyCard";
import {Employee} from "./Models/Employee";
import {Shop_item} from "./Models/Shop_item";
import {Shop_transaction} from "./Models/Shop_transaction";
const { v4: uuidv4 } = require('uuid');

interface Props {
    show: boolean
    employees: [Employee];
    items : [Shop_item];
    transactions : [Shop_transaction];
}

const CardList : React.FC<Props> = (Props) => {
    let cardsEmployees ;
    let cardsItems ;
    let cardsTransaction ;
    if(Props.show) {
        cardsEmployees = Props.employees.map(employee => {
            return <MyCard key={uuidv4()} databaseRecord={employee}/>
        });
        cardsItems = Props.items.map(item => {
            return <MyCard key={uuidv4()} databaseRecord={item}/>
        });
        cardsTransaction = Props.transactions.map(transaction => {
            return <MyCard key={uuidv4()} databaseRecord={transaction}/>
        });
    }


    return (
        <React.Fragment>
            <div>
                {cardsEmployees}
                {cardsItems}
                {cardsTransaction}
            </div>
        </React.Fragment>
    );
}

export default CardList;
