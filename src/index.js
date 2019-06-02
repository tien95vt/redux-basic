import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers } from 'redux';
import { Provider } from 'react-redux';

import couterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/results';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: couterReducer,
    res: resultReducer
}); 

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
