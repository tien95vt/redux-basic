// PERVIEW BRANCH: FN-Redux-Not-UTILITY

import * as actionTypes from '../actions/actionsTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            updateObject(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        case actionTypes.ADD:
            return updateObject(state, { counter: state.counter + action.val });
        case actionTypes.SUB:
            return updateObject(state, { counter: state.counter - action.val });
        default: 
            return state;  
    } 
};

export default reducer;