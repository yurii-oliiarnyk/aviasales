import React from 'react';
import ParamsHeader from '../ParamsHeader/ParamsHeader';

import * as actions from '../../../store/actions/filter';
import { connect } from 'react-redux';

const checkbox = props => {
  const { label, elementType, elementConfig, value } = props;

  const classes = ['filter-params', 'filter-params--' + elementType];

  const onFilterChangeHandler = id => {
    props.onFilterChange(id);
  };

  const items = elementConfig.options.map(el => {
    const element_id = `${elementType}-${el.value}`;

    let checked = false;

    checked = props.steps.some(step => {
      return step === el.value;
    });

    return (
      <li key={element_id} className="filter-params__item">
        <input
          id={element_id}
          type="checkbox"
          onChange={() => onFilterChangeHandler(el.value)}
          checked={checked}
        />
        <label htmlFor={element_id} className="filter-params__label">
          {el.displayValue}
        </label>
        {/* {el.only ? (
          <a href="#" onClick={() => onCurrencyChange(el.value)}>
            Только
          </a>
        ) : (
          ''
        )} */}
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
    steps: state.filter.steps,
    allSteps: state.filter.allSteps
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFilterChange: () => dispatch(actions.changeFilter())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(checkbox);
