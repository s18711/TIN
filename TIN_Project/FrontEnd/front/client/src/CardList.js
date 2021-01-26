import React, {useEffect, useState} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from 'react-bootstrap-table2-editor';


const CardList = (props) => {
    const [employees, setEmployees] = useState([]);
    const [items, setItems] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [selectedRow, setSelectedRow] = useState({});

    const getData = async () => {
        const jsonResponse = await fetch("http://localhost:9000/getAllRecords").then(response => response.json());
        setEmployees(jsonResponse[0]);
        setItems(jsonResponse[1]);
        setTransactions(jsonResponse[2]);
    }

    useEffect(() => {
        getData();
    }, [])


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
    const onSelectHandler = (row,isSelect, rowIndex,e) => {
        setSelectedRow(row)
    }


    const onAfterSaveCellHandler = (oldValue, newValue, row, column) => {
        console.log(oldValue, newValue, row, column);
        const updateRequestOptions = {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    columnName: column.dataField,
                    columnValue: newValue,
                    whereName: Object.keys(row)[0],
                    whereValue: Object.values(row)[0]
                }
            )
        };

        fetch("http://localhost:9000/updateRecord/employees",updateRequestOptions);
        console.log("body" , updateRequestOptions.body);
    }

    const deleteRecord = (event) => {
        const deleteRequestOptions = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    columnName: Object.keys(selectedRow)[0],
                    columnValue: Object.values(selectedRow)[0],
                }
            )
        };
        fetch("http://localhost:9000/deleteRecord/employees",deleteRequestOptions);

        setEmployees(prevState => {
            const newEmps = prevState.filter((value, index, array) => {
                return Object.values(value)[0] !== Object.values(selectedRow)[0];
            });
            return newEmps;
        });




    }
    const selectRow = {
        mode: 'radio',
        clickToSelect: true,
        clickToEdit: true,  // Click to edit cell also
        onSelect: onSelectHandler
    };
    const cellEdit = {
        mode: 'click',
        afterSaveCell: onAfterSaveCellHandler
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
                        selectRow={selectRow}
                        cellEdit={cellEditFactory(cellEdit)}
                    />

                    <button type={"button"} className={"btn btn-danger"} onClick={deleteRecord}>Delete</button>

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
