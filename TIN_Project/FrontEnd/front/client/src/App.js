import React from 'react';
import CardList from "./CardList";
import {Container} from 'react-bootstrap';
import Test from "./Test";
import Test2 from "./Test2";


class App extends React.Component {


    render() {
        return (
            <Container className={"d-flex flex-column justify-content-center align-items-center "}>
                <h1>Shop database</h1>
                <h5>In order to edit, click on table values</h5>
                <CardList />
                {/*<Test2/>*/}
            </Container>
        );
    }


  }


export default App;
