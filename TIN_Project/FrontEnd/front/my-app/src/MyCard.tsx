import React  from "react";

interface Props {
    databaseRecord : {}
}

const Card: React.FC<Props> = (Props) => {
const values = Object.values(Props.databaseRecord);
    return(
        <React.Fragment>
            <div style={{backgroundImage : "linear-gradient(to right, green , yellow)"}}>
                <div className="d-flex align-items-center justify-content-center justify-content-sm-center">
                    {values}
                </div>
            </div>
        </React.Fragment>
    );
}




export default Card;