import React from 'react';
import CardList from "./CardList";
import { Container} from 'react-bootstrap';


const App = () => {
    return (
        <Container className={"d-flex flex-column justify-content-center align-items-center "}>
          <h1>Shop database</h1>
          <CardList/>
        </Container>
    );

  }


export default App;
