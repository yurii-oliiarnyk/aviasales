import React from 'react';
import { connect } from 'react-redux';
import './ParamsExchange.scss';
import ParamsHeader from '../ParamsHeader/ParamsHeader';

import * as actions from '../../../store/actions/exchange';

const exchange = props => {
  const { label, elementType, elementConfig, currency } = props;

  const onCurrencyChange = (event, key) => {
    event.preventDefault();
    props.onCurrencyChange(key);
  };

  const classes = ['filter-params', 'filter-params--' + elementType];

  const items = elementConfig.options.map(el => {
    return (
      <li key={el.value} className="filter-params__item">
        <a
          onClick={event => onCurrencyChange(event, el.value)}
          href="#"
          className={el.value === currency ? 'is-active' : ''}
        >
          {el.displayValue}
        </a>
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

const mapStateToProps = state => {
  return {
    currency: state.exchange.currency
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCurrencyChange: currency => dispatch(actions.changeCurrency(currency))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(exchange);
