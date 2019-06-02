const redux = require('redux');
// const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
       return  { 
           ...state,
           counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};


// Store
const store = redux.createStore(rootReducer);
console.log('store: ', store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});


// Dispatching action
store.dispatch( {type: 'INC_COUNTER'} );
store.dispatch( {type: 'ADD_COUTER', value: 10} );
console.log(store.getState());



