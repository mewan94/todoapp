import {nameReducer,todoReducer} from "../app-reducers/index"
var redux = require('redux');
var thunk = require('redux-thunk').default;

export var configure = () =>{
    var reducer = redux.combineReducers({
        name:nameReducer,
        todos:todoReducer
    });

    var store = redux.createStore(reducer,redux.compose(
        redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
}