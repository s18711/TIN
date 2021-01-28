import React, {useState} from 'react';
import DetailsModal from "./DetailsModal";

const Test2 = (props) => {
    const [show, setShow] = useState(false);
    const myObject = {
        employee_name: 'Name', employee_surname: 'Surname',
        employee_birthday: '2020-10-10', employee_position: 'Manager', employee_seniority: 15
    };
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }
    return (
        <div>
            <button type={"button"} className={"btn btn-primary"} onClick={handleShow}>ShowModal</button>
            <DetailsModal
                show={show}
                handleClose={handleClose}
                title={"employee details"}
                myObject={myObject}
            />
        </div>
    );
};

export default Test2;