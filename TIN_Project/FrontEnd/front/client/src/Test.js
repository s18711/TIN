import React, {useEffect, useState} from 'react';
import RecordModal from "./RecordModal";

const Test = () => {
    const [show, setShow] = useState(false);

    const [emp, setEmp] = useState({
        employee_name: 'Name', employee_surname: 'Surname',
        employee_birthday: '2020-10-10', employee_position: 'Manager', employee_seniority: 15
    });


    const handleSave = (table, recordObject) => {
        console.log(table, recordObject)
        setShow(false);
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    const onChangeHandler = (where, column, value) => {
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


        }
    }

        return (
            <div>
                <button type={"button"} className={"btn btn-primary"} onClick={handleShow}>ShowModal</button>
                <RecordModal show={show} title={"Add employees"} tableNo={1} onChangeHandler={onChangeHandler}
                             myObject={emp} handleClose={handleClose} handleSave={handleSave}
                             tableName={"employees"}/>
                {Object.values(emp)}
            </div>
        );
}

export default Test;