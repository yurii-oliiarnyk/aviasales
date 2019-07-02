import React from 'react';
import './ParamsHeader.scss';

const header = props => {
  return <h5 className="params-header">{props.label}</h5>;
};

export default header;
