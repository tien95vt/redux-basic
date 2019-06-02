import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({
                    id: new Date(),
                    value: action.result
                })
            }
        case actionTypes.DELETE_RESULT:
            //  Way 1: 
            // const id = 2;
            // const newResults = [...state.results];
            // newResults.splice(id, 1);
            // return {
            //     ...state,
            //     results: newResults
            // }
            
            // Way 2
            const newResults = state.results.filter(rs => rs.id != action.resultElId);
            return {
                ...state,
                results: newResults
            }  
        default: 
            return state;  
    } 
};

export default reducer;