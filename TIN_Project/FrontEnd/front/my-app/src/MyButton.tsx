// @flow
import * as React from 'react';

type Props = {
    showAllRecords(event: React.MouseEvent<HTMLButtonElement>): void;
};
type State = {

};

export const MyButton : React.FC<Props> = (props: Props) =>{
        return (
            <div >
                <button onClick={props.showAllRecords}> button text</button>
            </div>
        );

};