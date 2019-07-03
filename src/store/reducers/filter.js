import * as actionTypes from '../actions/actionTypes';

const initialState = {
  steps: ['0', '1', '2', '3'],
  allSteps: ['0', '1', '2', '3']
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_FILTER: {
      return {
        ...state
      };
    }

    default:
      return state;
  }
};

export default reducer;
