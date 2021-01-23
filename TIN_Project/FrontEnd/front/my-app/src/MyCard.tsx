import React  from "react";
import {Card} from "react-bootstrap";
interface Props {
    databaseRecord : {}
}

const MyCard: React.FC<Props> = (Props) => {
    const keys = Object.keys(Props.databaseRecord);
    const values = Object.values(Props.databaseRecord);

    const tableHead = keys.map((value, index) => {
        return(
            <th key={index}>{value}</th>
        )
    });
    const tableRows = values.map((value: any, index) =>{
        return <td key={index}>{value}</td>
    } );
    // console.log("tableHead", tableHead);


    return(
        <React.Fragment>
            <Card className="d-flex align-items-center justify-content-center" style={{backgroundImage : "linear-gradient(to right, green , yellow)"}}>

                        {values}
            </Card>
        </React.Fragment>
    );
}




export default MyCard;