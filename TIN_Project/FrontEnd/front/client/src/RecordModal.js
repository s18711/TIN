import React from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";

const RecordModal = (props) => {
    const rows = Object.entries(props.myObject).map(value => {
       return( <Row>
            <Col xs={5} md={5}>
                <span className={"modal-label"}>{value[0]} </span>
            </Col>
            <Col xs={5} md={4}>
                <input type={"text"} onChange={event => props.onChangeHandler(props.tableNo,value[0],event.target.value)}/>
            </Col>
        </Row>
       );
    });
    return (
        <div>
            <Modal
                show={props.show}
                onHide={props.handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        {rows}
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={event => props.handleSave(props.tableName, props.myObject)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};
export default RecordModal;