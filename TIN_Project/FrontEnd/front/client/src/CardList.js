import React, {useEffect, useState} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from 'react-bootstrap-table2-editor';



const CardList = (props) => {
    const [employees,setEmployees] = useState([]);
    const [items,setItems] = useState([]);
    const [transactions,setTransactions] = useState([]);

  const getData = async () => {
        const jsonResponse = await fetch("http://localhost:9000/getAllRecords").then(response => response.json());
        setEmployees(jsonResponse[0]);
        setItems(jsonResponse[1]);
        setTransactions(jsonResponse[2]);
    }

    useEffect(() => {
        console.log("use effect")
        getData();
    },[])




    const empsColumns = [
        {dataField: "id_employee", text: "id_employee", headerStyle: {backgroundColor: 'green'}},
        {
            dataField: "employee_name", text: "employee_name", headerStyle: {backgroundColor: 'green'}
        },
        {
            dataField: "employee_surname", text: "employee_surname", headerStyle: {backgroundColor: 'green'}
        },
        {
            dataField: "employee_birthday", text: "employee_birthday", headerStyle: {backgroundColor: 'green'}
        }
    ];

    const itemsColumns = [
        {
            dataField: "id_item", text: "id_item", headerStyle: {backgroundColor: 'green'}
        },
        {
            dataField: "item_name", text: "item_name", headerStyle: {backgroundColor: 'green'}
        },
        {
            dataField: "item_price", text: "item_price", headerStyle: {backgroundColor: 'green'}
        }
    ]
    const transactionsColumns = [
        {
            dataField: "id_transaction", text: "id_transaction", headerStyle: {backgroundColor: 'green'}
        },
        {
            dataField: "id_item", text: "it_item", headerStyle: {backgroundColor: 'green'}
        },
        {
            dataField: "id_employee", text: "id_employee", headerStyle: {backgroundColor: 'green'}
        },
        {
            dataField: "transaction_date", text: "transaction_date", headerStyle: {backgroundColor: 'green'}
        }
    ]

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            console.log(`clicked on row with index: ${rowIndex} `);
            console.log(row);
        }
    }
    const onChangeHandler = (isSelect, rows) => {
        console.log(isSelect,rows)
        console.log(employees);
    }

    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        clickToEdit: true,  // Click to edit cell also
        onSelect: onChangeHandler
    };
    const cellEdit = {
        mode: 'click',
        onClick :onChangeHandler

    };
    return (
        <div className={"container"}>
            <div className={"row"}>
                <h2>Employees</h2>
                <BootstrapTable
                    rowStyle={{background: 'white'}}
                    striped={true}
                    keyField={"id_employee"}
                    data={employees}
                    columns={empsColumns}
                    // rowEvents={rowEvents}
                    selectRow={ selectRow}
                    cellEdit={ cellEditFactory( cellEdit ) }
                />
            </div>
            <div className={"row"}>
                <h2>Items</h2>
                <BootstrapTable
                    rowStyle={{background: 'white'}}
                    striped={true}
                    keyField={"tableItems"}
                    data={items}
                    columns={itemsColumns}
                    rowEvents={rowEvents}
                />
            </div>
            <div className={"row"}>
                <h2>Transactions</h2>
                <BootstrapTable
                    rowStyle={{background: 'white'}}
                    striped={true}
                    keyField={"tableTransaction"}
                    data={transactions}
                    columns={transactionsColumns}
                    rowEvents={rowEvents}
                />
            </div>
        </div>
    );
}

export default CardList;
