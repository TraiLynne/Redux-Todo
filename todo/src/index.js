// *** === External imports === ***
// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux Dependencies
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// *** === Internal imports === ***
// Reducer
import reducer from './reducers';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Store Definition
const store = createStore(reducer);

const rootElement = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
