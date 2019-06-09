import React from 'react';
import { connect } from 'react-redux';
import './Params.scss';

import * as actions from '../../store/actions/exchange';

const params = props => {
    const {
        label,
        elementType,
        elementConfig,
        currency
    } = props;

    const onCurrencyChange = (key) => {
        props.onCurrencyChange(key);
    }

    const classes = ['filter-params', 'filter-params--' + elementType];

    const items = elementConfig.options.map(el => {
        return <li key={el.value} className='filter-params__item'>
            <a onClick={() => onCurrencyChange(el.value)} href="#" className={el.value === currency ? 'is-active' : ''} href="#">{el.displayValue}</a>
        </li>
    });

    return (
        <div className={classes.join(' ')}>
            <div className="filter-params__header">
                <h5 className="filter-params__title">{label}</h5>
            </div>
            <div className="filter-params__body">
                <ul className="filter-params__list">
                    {items}
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currency: state.currency
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCurrencyChange: (currency) => dispatch(actions.changeCurrency(currency))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(params);