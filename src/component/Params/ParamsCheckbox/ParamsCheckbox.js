import React from 'react';
import ParamsHeader from '../ParamsHeader/ParamsHeader';

const checkbox = props => {
  const { label, elementType, elementConfig, currency } = props;

  const classes = ['filter-params', 'filter-params--' + elementType];

  const onCurrencyChange = key => {
    props.onCurrencyChange(key);
  };

  // const onCurrencyChange = key => {
  //   props.onCurrencyChange(key);
  // };

  const items = elementConfig.options.map(el => {
    return (
      <li key={el.value} className="filter-params__item">
        <a
          onClick={() => onCurrencyChange(el.value)}
          href="#"
          className={el.value === currency ? 'is-active' : ''}
        >
          {el.displayValue}
        </a>
        {el.only ? (
          <a href="#" onClick={() => onCurrencyChange(el.value)}>
            Только
          </a>
        ) : (
          ''
        )}
      </li>
    );
  });

  return (
    <div className={classes.join(' ')}>
      <ParamsHeader label={label} />
      <ul className="filter-params__list">{items}</ul>
    </div>
  );
};

export default checkbox;
