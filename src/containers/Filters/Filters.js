import React, { Component } from 'react';
import Input from '../../component/UI/Input/Input';

class Filters extends Component {
    state = {
        filters: {
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
            stops: {
                label: 'Количество пересадок',
                elementType: 'checkbox',
                elementConfig: {
                    options: [
                        { value: '', displayValue: 'Все' },
                        { value: 0, displayValue: 'Без пересадок' },
                        { value: 1, displayValue: '1 пересадка' },
                        { value: 2, displayValue: '2 пересадки' },
                        { value: 3, displayValue: '3 пересадки' },
                    ]
                },
                value: '',
            }
        }
    }

    render() {
        const {
            filters
        } = this.state;

        const filterElements = [];

        for (let el in filters) {
            filterElements.push(
                <Input
                    key={el}
                    label={filters[el].label}
                    elementConfig={filters[el].elementConfig}
                    elementType={filters[el].elementType}
                    value={filters[el].value}
                />
            );
        }

        return (
            <div className="filters">
                {filterElements}
            </div>
        );
    }
};

export default Filters;