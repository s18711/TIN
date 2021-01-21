// @flow
import * as React from 'react';

type Props = {
    showAllRecords(event: React.MouseEvent<HTMLButtonElement>): void;
};
type State = {

};

export const MyButton : React.FC<Props> = (props: Props) =>{
        return (
            <div className={"d-flex align-items-center justify-content-center justify-content-sm-center"} >
                <button onClick={props.showAllRecords}> button text</button>
            </div>
        );
}