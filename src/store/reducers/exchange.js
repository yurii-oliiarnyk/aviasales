import * as actionTypes from '../actions/actionTypes';

const initialState = {
    currency: 'rub',
    exchangeRates: {}
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
                exchangeRates: updatedExchangeRates
            }
        }

        // case actionTypes.GET_EXCHANGE_RATE: {
        //     return {
        //         ...state,

        //     }
        // }
        // case actionTypes.SET_EXCHAGE_RATE: {
        //     return {
        //         ...state
        //     }
        // }

        // case actionTypes.ERROR_EXCHAGE_RATE: {
        //     return {
        //         ...state
        //     }
        // }
        
        default: return state;
    };
};

export default reducer;