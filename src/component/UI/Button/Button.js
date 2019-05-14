import React from 'react';

const button = props => {
    return (
        <button onClick={props.clicked} className="btn">{props.children}</button>
    );
};

export default button;