import * as actionTypes from './actionTypes';
import axios from '../../axios-fixer';

export const changeCurrency = (currency) => {
    return {
        type: actionTypes.CHANGE_CURRENCY,
        currency
    };
};

export const fetchExchageRateStart = () => {
    return {
        type: actionTypes.FETCH_EXCHANGE_RATE_START
    }
}

export const fetchExchageRateSuccess = (response) => {
    return {
        type: actionTypes.FETCH_EXCHANGE_RATE_SUCCESS,
        exchangeRates: response
    }
}

export const fetchExchageRateFailed = (error) => {
    console.log(error);

    return {
        type: actionTypes.FETCH_EXCHANGE_RATE_FAILED
    }
}

export const fetchExchageRate = () => {
    return dispatch => {
        dispatch(fetchExchageRateStart());

        const query = 'latest?access_key=b64dfd4d66e2782be2346d97a79ebca8' + '&symbols=USD,RUB,EUR';

        axios.get(query)
            .then(response => {
                dispatch(fetchExchageRateSuccess(response.data.rates));
            })
            .catch(error => {
                dispatch(fetchExchageRateFailed(error));
            })
    }
}