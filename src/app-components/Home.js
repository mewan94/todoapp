import React,{ Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
var actions=require('../app-actions/index');

class Home extends Component{
    init(){
        if(!this.props.name.logedin){
            this.props.dispatch(actions.checklogedin());
        }
        else{
            this.props.dispatch(actions.getTodos());
        }
    }

    componentWillMount (){
        this.init();
        if(this.props.name.logedin){
            this.props.dispatch(actions.getTodos());
        }
    }

    getNoTodos(todos){
        var x=0;
        todos.slice(0).reverse().map(function (todo,i) {
            if(todo.status===0){
                x++;
            }
        });
        return x;
    };
    getNoCompleted(todos){
        var x=0;
        todos.slice(0).reverse().map(function (todo,i) {
            if(todo.status===1){
                x++;
            }
        });
        return x;
    }

    render(){
        return(
            <div className="row">
                <div className="container">
                    <div className="jumbotron">
                        <h1>Todo App</h1>
                        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <p className="text-center">
                            <Link to="/Todos" className="btn btn-primary btn-lg col-md-offset-1">See Todos <span className="badge">{this.getNoTodos(this.props.todos.todos)}</span></Link>
                            <Link to="/Completed" className="btn btn-primary btn-lg col-md-offset-1">See Completed <span className="badge">{this.getNoCompleted(this.props.todos.todos)}</span></Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state)=>{
        return{
            name:state.name,
            todos:state.todos
        };
    }
)(Home);
