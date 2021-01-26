import React, {useEffect, useState} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import {Button, Col, Container, Modal, Row} from 'react-bootstrap';
import cellEditFactory from 'react-bootstrap-table2-editor';


const CardList = (props) => {
    const [employees, setEmployees] = useState([]);
    const [items, setItems] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [selectedRow1, setSelectedRow1] = useState({});
    const [selectedRow2, setSelectedRow2] = useState({});
    const [selectedRow3, setSelectedRow3] = useState({});
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [emp, setEmp] = useState({employee_name : '', employee_surname: '', employee_birthday: ''});
    const [item, setItem] = useState({item_name: "", item_price: 0});
    const [trans, setTrans] = useState({id_employee: 0, id_item: 0, transaction_date : ""});

    const getData = async () => {
        const jsonResponse = await fetch("http://localhost:9000/getAllRecords").then(response => response.json());
        setEmployees(jsonResponse[0]);
        setItems(jsonResponse[1]);
        setTransactions(jsonResponse[2]);
        console.log("data received");
    }

    useEffect(() => {
        getData();
        console.log("useEffect");
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


    const onSelectHandler1 = (row) => {
        setSelectedRow1(row);
    }
    const onSelectHandler2 = (row) => {
        setSelectedRow2(row);
    }
    const onSelectHandler3 = (row) => {
        setSelectedRow3(row);
    }




    const onAfterSaveCellHandler = (oldValue, newValue, row, column, table) => {
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

        fetch(`http://localhost:9000/updateRecord/${table}`, updateRequestOptions);

    }


    const deleteRecord = (event, table) => {
        let selected;
        switch (table) {
            case "employees":
                selected = selectedRow1;
                break;
            case "shop_item":
                selected = selectedRow2;
                break;
            case "shop_transaction":
                selected = selectedRow3;
                break;
        }
        console.log(selected);
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
                        setEmp(prevState => {
                            return {...prevState, item_price: value}
                        });
                        break;
                }
                break;
            case 3 :
                switch (column) {
                    case "id_employee":
                        setTrans(prevState => {
                            return {...prevState, id_employee: value}
                        });
                        break;
                    case "id_item":
                        setTrans(prevState => {
                            return {...prevState, id_item: value}
                        });
                        break;
                    case "transaction_date":
                        setTrans(prevState => {
                            return {...prevState, transaction_date: value}
                        });
                        break;
                }
                break;
        }

    }


    const handleSave = (table,myObject) => {
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

    // const handleSaveItem = (myObject) => {
    //     const addRequestOptions = {
    //         method: "POST",
    //         headers: {"Content-Type": "application/json"},
    //         body: JSON.stringify(
    //             myObject
    //         )
    //     };
    //     // fetch("http://localhost:9000/addData/items", addRequestOptions);
    //     console.log(addRequestOptions.body);
    //     setShow(false);
    //     getData();
    //     getData();
    // }




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
                    columns={empsColumns}
                    selectRow={selectRow1}
                    cellEdit={cellEditFactory(cellEdit1)}
                />

                <button type={"button"} className={"btn btn-danger"} onClick={event => deleteRecord(event,"employees")}>Delete</button>
                <button type={"button"} className={"btn btn-primary"} onClick={event => handleShow(1)}>Add Record</button>
                <Modal
                    show={show1}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}

                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Employee</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs={5} md={5}>
                                    <span className={"modal-label"}>employee_name </span>
                                </Col>
                                <Col xs={5} md={4}>
                                    <input onChange={event => onChangeHandler(1,"employee_name",event.target.value)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5} md={5}>
                                    <span className={"modal-label"}>employee_surname </span>
                                </Col>
                                <Col xs={5} md={4}>
                                    <input onChange={event => onChangeHandler(1,"employee_surname",event.target.value)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5} md={5}>
                                    <span className={"modal-label"}>employee_birthday </span>
                                </Col>
                                <Col xs={5} md={4}>
                                    <input onChange={event => onChangeHandler(1,"employee_birthday",event.target.value)}/>
                                </Col>
                            </Row>
                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={event => handleSave("employees",emp)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className={"row"}>

                <h2>Items</h2>
                <BootstrapTable
                    rowStyle={{background: 'white'}}
                    striped={true}
                    keyField={"id_item"}
                    data={items}
                    columns={itemsColumns}
                    selectRow={selectRow2}
                    cellEdit={cellEditFactory(cellEdit2)}
                />

                <button type={"button"} className={"btn btn-danger"} onClick={event => deleteRecord(event,"shop_item")}>Delete</button>
                <button type={"button"} className={"btn btn-primary"} onClick={event => handleShow(2)}>Add Record</button>
                <Modal
                    show={show2}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}

                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Item</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs={5} md={5}>
                                    <span className={"modal-label"}>item_name </span>
                                </Col>
                                <Col xs={5} md={4}>
                                    <input onChange={event => onChangeHandler(2,"item_name", event.target.value)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5} md={5}>
                                    <span className={"modal-label"}>item_price </span>
                                </Col>
                                <Col xs={5} md={4}>
                                    <input onChange={event => onChangeHandler(2,"item_price", event.target.value)}/>
                                </Col>
                            </Row>

                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={event => handleSave("shop_item",item)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div className={"row"}>

                <h2>Transactions</h2>
                <BootstrapTable
                    rowStyle={{background: 'white'}}
                    striped={true}
                    keyField={"id_transaction"}
                    data={transactions}
                    columns={transactionsColumns}
                    selectRow={selectRow3}
                    cellEdit={cellEditFactory(cellEdit3)}
                />

                <button type={"button"} className={"btn btn-danger"} onClick={event => deleteRecord(event,"shop_transaction")}>Delete</button>
                <button type={"button"} className={"btn btn-primary"} onClick={event => handleShow(3)}>Add Record</button>
                <Modal
                    show={show3}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}

                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Transaction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                            <Row>
                                <Col xs={5} md={5}>
                                    <span className={"modal-label"}>id_employee </span>
                                </Col>
                                <Col xs={5} md={4}>
                                    <input onChange={event => onChangeHandler(3,"id_employee", event.target.value)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5} md={5}>
                                    <span className={"modal-label"}>id_item </span>
                                </Col>
                                <Col xs={5} md={4}>
                                    <input onChange={event => onChangeHandler(3,"id_item",  event.target.value)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5} md={5}>
                                    <span className={"modal-label"}>transaction_date </span>
                                </Col>
                                <Col xs={5} md={4}>
                                    <input onChange={event => onChangeHandler(3,"transaction_date", event.target.value)}/>
                                </Col>
                            </Row>

                        </Container>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={event => handleSave("shop_transaction",trans)}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
}

export default CardList;
