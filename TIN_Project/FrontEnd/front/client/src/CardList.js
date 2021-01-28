import React, {useEffect, useState} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import cellEditFactory from 'react-bootstrap-table2-editor';
import RecordModal from "./RecordModal";
import DetailsModal from "./DetailsModal";
const MyColumns = require("./MyColumns");



const CardList = (props) => {
    //TODO: table content
    const [employees, setEmployees] = useState([]);
    const [items, setItems] = useState([]);
    const [transactions, setTransactions] = useState([]);

    //TODO: selected Rows in tables
    const [selectedRow1, setSelectedRow1] = useState({});
    const [selectedRow2, setSelectedRow2] = useState({});
    const [selectedRow3, setSelectedRow3] = useState({});

    //TODO: show property for modals for adding records
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    //TODO: show property for modals for details
    const [showDetails1, setShowDetails1] = useState(false);
    const [showDetails2, setShowDetails2] = useState(false);
    const [showDetails3, setShowDetails3] = useState(false);

    //TODO: objects used in adding records
    const [emp, setEmp] = useState({employee_name : '', employee_surname: '', employee_birthday: '', employee_position: '', employee_seniority: 0});
    const [item, setItem] = useState({item_name: "", item_price: 0, item_category: '', item_color: ''});
    const [trans, setTrans] = useState({id_employee: 0, id_item: 0, transaction_date : "", transaction_comment: '', transaction_method: ''});

    //TODO: state for buttons delete and show details
    const [table1ButtonDisabled, setTable1ButtonDisabled] = useState(true);
    const [table2ButtonDisabled, setTable2ButtonDisabled] = useState(true);
    const [table3ButtonDisabled, setTable3ButtonDisabled] = useState(true);

    //TODO: getting data from database
    const getData = async () => {
        const jsonResponse = await fetch("http://localhost:9000/getAllRecords").then(response => response.json());
        setEmployees(jsonResponse[0]);
        setItems(jsonResponse[1]);
        setTransactions(jsonResponse[2]);
        // console.log("data received");
    }

    useEffect(() => {
        getData();
        // console.log("useEffect");
    }, [])




    const onSelectHandler1 = (row) => {
        setSelectedRow1(row);
        setTable1ButtonDisabled(false);
    }
    const onSelectHandler2 = (row) => {
        setSelectedRow2(row);
        setTable2ButtonDisabled(false);
    }
    const onSelectHandler3 = (row) => {
        setSelectedRow3(row);
        setTable3ButtonDisabled(false);
    }




    const onAfterSaveCellHandler = (oldValue, newValue, row, column, table) => {
        // console.log(oldValue, newValue, row, column);
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

        fetch(`http://localhost:9000/updateRecord/${table}`, updateRequestOptions);

    }

    const showDetails = (table) => {
        let selected;
        switch (table) {
            case "employees":
                selected = selectedRow1;
                setShowDetails1(true);
                break;
            case "shop_item":
                selected = selectedRow2;
                setShowDetails2(true);
                break;
            case "shop_transaction":
                selected = selectedRow3;
                setShowDetails3(true);
                break;
        }

    }

    const deleteRecord = (event, table) => {
        let selected;
        switch (table) {
            case "employees":
                selected = selectedRow1;
                setTable1ButtonDisabled(true);
                break;
            case "shop_item":
                selected = selectedRow2;
                setTable2ButtonDisabled(true);
                break;
            case "shop_transaction":
                selected = selectedRow3;
                setTable3ButtonDisabled(true);
                break;
        }
        // console.log(selected);
        const deleteRequestOptions = {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    columnName: Object.keys(selected)[0],
                    columnValue: Object.values(selected)[0],
                }
            )
        };
        fetch(`http://localhost:9000/deleteRecord/${table}`, deleteRequestOptions);

        switch (table) {
            case "employees":
                setEmployees(prevState => {
                    const newEmps = prevState.filter((value, index, array) => {
                        return Object.values(value)[0] !== Object.values(selected)[0];
                    });
                    return newEmps;
                });
                break;
            case "shop_item":
                setItems(prevState => {
                    const newItems = prevState.filter((value, index, array) => {
                        return Object.values(value)[0] !== Object.values(selected)[0];
                    });
                    return newItems;
                });
                break;
            case "shop_transaction":
                setTransactions(prevState => {
                    const newTransactions = prevState.filter((value, index, array) => {
                        return Object.values(value)[0] !== Object.values(selected)[0];
                    });
                    return newTransactions;
                });
                break;
        }

    }
    const handleClose = () => {
        setShow1(false);
        setShow2(false);
        setShow3(false);
        setShowDetails1(false);
        setShowDetails2(false);
        setShowDetails3(false);
    }
    const handleShow = (forWho) => {
            switch (forWho) {
                case 1:
                    setShow1(true);
                    break;
                case 2:
                    setShow2(true);
                    break;
                case 3:
                    setShow3(true);
                    break;

            }
    }

    const onChangeHandler = (where,column,value) => {
        // console.log("change",where,column,value);
        switch (where) {
            case 1 :
               switch (column) {
                   case "employee_name":
                       setEmp(prevState => {
                           return {...prevState, employee_name: value}
                       });
                       break;
                   case "employee_surname":
                       setEmp(prevState => {
                           return {...prevState, employee_surname: value}
                       });
                       break;
                   case "employee_birthday":
                       setEmp(prevState => {
                           return {...prevState, employee_birthday: value}
                       });
                       break;
                   case "employee_position":
                       setEmp(prevState => {
                           return {...prevState, employee_position: value}
                       });
                       break;
                   case "employee_seniority":
                       setEmp(prevState => {
                           return {...prevState, employee_seniority: parseInt(value)}
                       });
                       break;
               }
               break;
            case 2 :
                switch (column) {
                    case "item_name":
                        setItem(prevState => {
                            return {...prevState, item_name: value}
                        });
                        break;
                    case "item_price":
                        setItem(prevState => {
                            return {...prevState, item_price: parseInt(value)}
                        });
                        break;
                    case "item_category":
                        setItem(prevState => {
                            return {...prevState, item_category: value}
                        });
                        break;
                    case "item_color":
                        setItem(prevState => {
                            return {...prevState, item_color: value}
                        });
                        break;
                }
                break;
            case 3 :
                switch (column) {
                    case "id_employee":
                        setTrans(prevState => {
                            return {...prevState, id_employee: parseInt(value)}
                        });
                        break;
                    case "id_item":
                        setTrans(prevState => {
                            return {...prevState, id_item: parseInt(value)}
                        });
                        break;
                    case "transaction_date":
                        setTrans(prevState => {
                            return {...prevState, transaction_date: value}
                        });
                        break;
                    case "transaction_comment":
                        setTrans(prevState => {
                            return {...prevState, transaction_comment: value}
                        });
                        break;
                    case "transaction_method":
                        setTrans(prevState => {
                            return {...prevState, transaction_method: value}
                        });
                        break;
                }
                break;
        }

    }


    const handleSave = (table,myObject) => {
        // console.log(myObject);
        // console.log(table);
        const addRequestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                myObject
            )
        };
        fetch(`http://localhost:9000/addData/${table}`, addRequestOptions);
        setShow1(false);
        setShow2(false);
        setShow3(false);
        getData();
        getData();
    }


    const selectRow1 = {
        mode: 'radio',
        clickToSelect: true,
        clickToEdit: true,  // Click to edit cell also
        onSelect: onSelectHandler1
    };
    const selectRow2 = {
        mode: 'radio',
        clickToSelect: true,
        clickToEdit: true,  // Click to edit cell also
        onSelect: onSelectHandler2
    };
    const selectRow3 = {
        mode: 'radio',
        clickToSelect: true,
        clickToEdit: true,  // Click to edit cell also
        onSelect: onSelectHandler3
    };
    const cellEdit1 = {
        mode: 'click',
        afterSaveCell: (oldValue, newValue, row, column) => onAfterSaveCellHandler(oldValue,newValue,row,column,"employees")
    };
    const cellEdit2 = {
        mode: 'click',
        afterSaveCell: (oldValue, newValue, row, column) => onAfterSaveCellHandler(oldValue,newValue,row,column,"shop_item")
    };
    const cellEdit3 = {
        mode: 'click',
        afterSaveCell: (oldValue, newValue, row, column) => onAfterSaveCellHandler(oldValue,newValue,row,column,"shop_transaction")
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
                    columns={MyColumns.empsColumns}
                    selectRow={selectRow1}
                    cellEdit={cellEditFactory(cellEdit1)}
                />

                <button type={"button"} disabled={table1ButtonDisabled} className={"btn btn-danger"} onClick={event => deleteRecord(event,"employees")}>Delete</button>
                <button type={"button"} className={"btn btn-primary"} onClick={event => handleShow(1)}>Add Record</button>
                <button type={"button"} disabled={table1ButtonDisabled} className={"btn btn-info"} onClick={event => showDetails("employees")}>Show details</button>

                <RecordModal show={show1} title={"Add employees"} tableNo={1} onChangeHandler={onChangeHandler}
                             myObject={emp} handleClose={handleClose} handleSave={handleSave}
                             tableName={"employees"}/>

                <DetailsModal
                    show={showDetails1}
                    handleClose={handleClose}
                    title={"employee details"}
                    myObject={selectedRow1}
                />

            </div>
            <div className={"row"}>

                <h2>Items</h2>
                <BootstrapTable
                    rowStyle={{background: 'white'}}
                    striped={true}
                    keyField={"id_item"}
                    data={items}
                    columns={MyColumns.itemsColumns}
                    selectRow={selectRow2}
                    cellEdit={cellEditFactory(cellEdit2)}
                />

                <button type={"button"} disabled={table2ButtonDisabled} className={"btn btn-danger"} onClick={event => deleteRecord(event,"shop_item")}>Delete</button>
                <button type={"button"} className={"btn btn-primary"} onClick={event => handleShow(2)}>Add Record</button>
                <button type={"button"} disabled={table2ButtonDisabled} className={"btn btn-info"} onClick={event => showDetails("shop_item")}>Show details</button>

                <RecordModal show={show2} title={"Add items"} tableNo={2} onChangeHandler={onChangeHandler}
                             myObject={item} handleClose={handleClose} handleSave={handleSave}
                             tableName={"shop_item"}/>

                <DetailsModal
                    show={showDetails2}
                    handleClose={handleClose}
                    title={"employee details"}
                    myObject={selectedRow2}
                />

            </div>
            <div className={"row"}>

                <h2>Transactions</h2>
                <BootstrapTable
                    rowStyle={{background: 'white'}}
                    striped={true}
                    keyField={"id_transaction"}
                    data={transactions}
                    columns={MyColumns.transactionsColumns}
                    selectRow={selectRow3}
                    cellEdit={cellEditFactory(cellEdit3)}
                />

                <button type={"button"} disabled={table3ButtonDisabled} className={"btn btn-danger"} onClick={event => deleteRecord(event,"shop_transaction")}>Delete</button>
                <button type={"button"} className={"btn btn-primary"} onClick={event => handleShow(3)}>Add Record</button>
                <button type={"button"} disabled={table3ButtonDisabled} className={"btn btn-info"} onClick={event => showDetails("shop_transaction")}>Show details</button>

                <RecordModal show={show3} title={"Add transactions"} tableNo={3} onChangeHandler={onChangeHandler}
                             myObject={trans} handleClose={handleClose} handleSave={handleSave}
                             tableName={"shop_transaction"}/>

                <DetailsModal
                    show={showDetails3}
                    handleClose={handleClose}
                    title={"employee details"}
                    myObject={selectedRow3}
                />

            </div>
        </div>
    );
}

export default CardList;
