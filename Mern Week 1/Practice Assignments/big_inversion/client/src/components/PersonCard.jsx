import React from 'react';

const PersonCard = props => {
    return (
        <div>
            <h2>{props.lastname} {props.firstname} </h2>
            <p>Age: {props.age}</p>
            <p>Hair: {props.haircolor}</p>
        </div>
    );

}
export default PersonCard;