import React, { Component } from 'react';
import Exchange from '../../component/Params/Exchange/Exchange';
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
    }
    // stops: {
    //     label: 'Количество пересадок',
    //     elementType: 'checkbox',
    //     elementConfig: {
    //         options: [
    //             { value: '', displayValue: 'Все' },
    //             { value: 0, displayValue: 'Без пересадок' },
    //             { value: 1, displayValue: '1 пересадка' },
    //             { value: 2, displayValue: '2 пересадки' },
    //             { value: 3, displayValue: '3 пересадки' },
    //         ]
    //     },
    //     value: '',
    // }
  };

  render() {
    const { currency } = this.state;

    return (
      <aside className="filters">
        <Exchange
          label={currency.label}
          elementConfig={currency.elementConfig}
          elementType={currency.elementType}
          value={currency.value}
        />

        {/* <div className="filter-params">
                    <div className="filter-params__header">
                        <h5 className="filter-params__title">Количество пересадок</h5>
                    </div>
                    <div className="filter-item__wrap">
                        <div className="filter-item__input">
                            <input name="rub" type="checkbox" />
                            <label>ВСЕ</label>
                            <span>Только</span>
                        </div>
                        <div className="filter-item__input">
                            <input name="rub" type="checkbox" />
                            <label>USD</label>
                            <span>Только</span>
                        </div>
                        <div className="filter-item__input">
                            <input name="rub" type="checkbox" />
                            <label>EUR</label>
                            <span>Только</span>
                        </div>
                    </div>
                </div> */}
      </aside>
    );
  }
}

export default Filters;
