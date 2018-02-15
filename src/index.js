import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

//var actions = require('./app-actions/index');
var store = require('./app-store/configureStore').configure();
//store.dispatch(actions.login('new@gmail.com','123456'));
//store.dispatch(actions.getTodos());

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    )
    , document.getElementById('root'));
registerServiceWorker();