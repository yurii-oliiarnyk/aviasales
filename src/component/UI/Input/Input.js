import React from 'react';

const input = props => {
    const inputClass = props.elementType;

    return (

        <div className={"input " + inputClass}>
            <h5>{props.label}</h5>

            <div>

            </div>
        </div>
    );
};

export default input;