import React from 'react';
import MyCard from "./MyCard";
import {ServerGetResponse} from "./ServerGetResponse";
const { v4: uuidv4 } = require('uuid');

interface Props {
    serverGetResponse: ServerGetResponse;
}

const CardList : React.FC<Props> = (Props) => {

   const cards = Object.entries(Props.serverGetResponse).map(myObject => {
       return <MyCard key={uuidv4()}  myObjectKey={myObject[0]} myObjectValue={myObject[1]} />
   });
    return (
        <React.Fragment>
            <div>
                {cards}
            </div>
        </React.Fragment>
    );
}

export default CardList;
