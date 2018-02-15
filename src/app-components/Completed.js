import React,{Component} from 'react';
import TodoList from './TodoList';

class Completed extends Component{
    render(){
        return(
            <div className="row">
                <div className="container">
                    <TodoList type={1}/>
                </div>
            </div>
        );
    }
}

export default Completed;