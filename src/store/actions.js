import * as actionTypes from './actionTypes';

export const changeCurrency = (currency) => {
    return {
        type: actionTypes.CHANGE_CURRENCY,
        currency
    };
};