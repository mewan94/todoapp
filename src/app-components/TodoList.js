import React,{Component} from 'react';
import SingleTodo from "./SingleTodo";
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
var actions=require('../app-actions/index');


class TodoList extends Component{

    init(){
        if(!this.props.name.logedin){
            this.props.dispatch(actions.checklogedin());
        }
        else{
            this.props.dispatch(actions.getTodos());
        }
    }

    renderTodos(type,todos){

        /*if(this.props.name.logedin){
            return(
                <div>
                    {
                        todos.slice(0).reverse().map(function (todo,i) {
                            if(todo.status===type){
                                return <SingleTodo key={todo.id} id={todo.id} name={todo.name} date={todo.created_at} type={type}/>
                            }
                        })
                    }
                </div>
            )
        }*/

        return (
            todos.slice(0).reverse().map(function (todo,i) {
                if(type===todo.status){
                    return <SingleTodo key={todo.id} id={todo.id} name={todo.name} datec={todo.created_at} dateu={todo.updated_at} type={type}/>
                }
        })
        );
    };

    componentWillMount(){
        this.init();
    }

    render(){
        var checkLogin=() =>{
            if(!this.props.name.logedin){
                //this.props.dispatch(actions.getTodos());
                return <Redirect to='/Login'/>
            }
        };

        return(
            <div>
                {checkLogin()}
                {this.renderTodos(this.props.type,this.props.todos.todos)}
            </div>
        );
    }
}

export default connect(
    (state) =>{
        return{
            name:state.name,
            todos:state.todos
        };
    }
    )(TodoList);