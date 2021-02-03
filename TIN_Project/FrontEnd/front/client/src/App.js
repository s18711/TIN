import React from 'react';
import CardList from "./CardList";
import {Container} from 'react-bootstrap';



class App extends React.Component {


    render() {
        return (
            <Container className={"d-flex flex-column justify-content-center align-items-center "}>
                <h1>Shop database</h1>
                <h5>In order to edit, click on table values</h5>
                <h5>dates should be given in form "YYYY-MM-DD" e.g. 2020-07-30</h5>
                <CardList />
            </Container>
        );
    }


  }


export default App;
