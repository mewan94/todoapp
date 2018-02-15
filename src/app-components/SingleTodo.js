import React,{Component} from 'react';
import {connect} from 'react-redux';
var actions =  require('../app-actions/index');

class SingleTodo extends Component{
    markCompleted(e){
        //console.log(this.props);
        if(this.props.type){
            this.props.dispatch(actions.startunmarktodo(this.props.id));
        }else{
            this.props.dispatch(actions.startmarktodo(this.props.id));
        }

    };
    deletetodo(e){
        this.props.dispatch(actions.startDeleteTodo(this.props.id));
    }

    render(){
        var getlable =() =>{
            if(this.props.type){
                return 'Mark as Uncompleted';
            }else{
                return 'Mark as Completed';
            }
        };

        var getdate =() =>{
            if(this.props.type){
                return 'Completed at '+this.props.dateu;
            }else{
                return 'Started at '+this.props.datec;
            }
        };

        return(

            <div className="col-md-12 well">
                <h3>{this.props.name}</h3>
                <p>{getdate()}</p>
                <button onClick={this.markCompleted.bind(this)} ref={this.props.id}> {getlable()}</button>
                <button onClick={this.deletetodo.bind(this)} > Delete </button>
            </div>

        );
    }
}

export default connect(
    (state)=>{
        return{
            todos:state.todos
        }
    }
)(SingleTodo);