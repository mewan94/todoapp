import redux from 'redux';

console.log('Starting redux app');

var actions = require('./app-actions/index');
var store = require('./app-store/configureStore').configure();

var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    if(state.todos.isFetching){
        document.getElementById('root').innerHTML = 'Loading...';
    }

    else{
        document.getElementById('root').innerHTML = state.todos.todos;
    }

    if(state.name.logedin){
        console.log(state.name);
    }
});
store.dispatch(actions.login('mewan@gmail.com','PASSWORD'));

var currentState = store.getState();
if(!currentState.name.logedin){
   store.dispatch(actions.getTodos());
}
store.dispatch(actions.addTodo('new Todo'));
console.log('currentState', currentState);