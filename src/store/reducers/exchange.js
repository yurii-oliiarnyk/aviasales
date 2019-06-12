import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currency: 'rub',
    exchangeRates: {},
    error: false,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENCY: {
            return {
                ...state,
                currency: action.currency
            }
        }

        case actionTypes.FETCH_EXCHANGE_RATE_SUCCESS: {
            const updatedExchangeRates = {};

            for (let val in action.exchangeRates) {
                updatedExchangeRates[val] = action.exchangeRates[val] / action.exchangeRates.RUB;
            }

            return {
                ...state,
                loading: false,
                exchangeRates: updatedExchangeRates
            }
        }

        case actionTypes.FETCH_EXCHANGE_RATE_START: {
            return {
                ...state,
                loading: true
            }
        }

        case actionTypes.FETCH_EXCHANGE_RATE_FAILED: {
            console.log(action);
            return {
                ...state,
                loading: false,
                error: action.error
            }
        }
        
        default: return state;
    };
};

export default reducer;