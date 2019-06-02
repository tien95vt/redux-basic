// PERVIEW BRANCH: FN-Redux-Not-UTILITY

import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    const newResults = state.results.filter(rs => rs.id != action.resultElId);
    return updateObject(state, {results: newResults});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default: 
            return state;  
    } 
};

export default reducer;