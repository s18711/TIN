import React  from "react";
import {ServerGetResponse} from "./ServerGetResponse";

interface Props {
    myObjectKey: string ;
    myObjectValue: any;
}

const Card: React.FC<Props> = (Props) => {
    return(
        <React.Fragment>
            <div style={{backgroundImage : "linear-gradient(to right, green , yellow)"}}>
                <div>
                    <h2>{Props.myObjectKey} =  {Props.myObjectValue}</h2>
                </div>
            </div>
        </React.Fragment>
    );
}




export default Card;