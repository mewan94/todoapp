import React,{Component} from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

class TodoApp extends Component{


    render(){
        return(
            <div className="row">
                <div className="container">
                <AddTodo/>
                <TodoList type={0}/>
                </div>
            </div>
        );
    }
}

export default TodoApp;
