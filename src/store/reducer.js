import * as actionTypes from './actionTypes';

const initialState = {
    currency: 'rub'
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_CURRENCY: {
            return {
                ...state,
                currency: action.currency
            }
        }
        
        default: return state;
    };
};

export default reducer;