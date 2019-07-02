import React, { Component } from 'react';
import Exchange from '../../component/Params/ParamsExchange/ParamsExchange';
import Checkboxes from '../../component/Params/ParamsCheckbox/ParamsCheckbox';
import './Filters.scss';

class Filters extends Component {
  state = {
    currency: {
      label: 'Валюта',
      elementType: 'currency',
      elementConfig: {
        options: [
          { value: 'rub', displayValue: 'RUB' },
          { value: 'usd', displayValue: 'USD' },
          { value: 'eur', displayValue: 'EUR' }
        ]
      },
      value: 'rub'
    },
    checkboxes: {
      label: 'Количество пересадок',
      elementType: 'checkboxes',
      elementConfig: {
        options: [
          { value: '*', displayValue: 'Все' },
          { value: '0', displayValue: 'Без пересадок', only: true },
          { value: '1', displayValue: '1 пересадка', only: true },
          { value: '2', displayValue: '2 пересадка', only: true },
          { value: '3', displayValue: '3 пересадка', only: true }
        ]
      },
      value: '*'
    }
  };

  render() {
    const { currency, checkboxes } = this.state;

    return (
      <aside className="filters">
        <Exchange
          label={currency.label}
          elementConfig={currency.elementConfig}
          elementType={currency.elementType}
          value={currency.value}
        />
        <Checkboxes
          label={checkboxes.label}
          elementConfig={checkboxes.elementConfig}
          elementType={checkboxes.elementType}
          value={checkboxes.value}
        />
      </aside>
    );
  }
}

export default Filters;
