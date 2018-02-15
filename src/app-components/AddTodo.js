import React,{Component} from 'react';
import {connect} from 'react-redux';
var actions =  require('../app-actions/index');

class AddTodo extends Component{

    handleSubmit(e){
        this.props.dispatch(actions.addTodo(this.refs.newitem.value));
        this.refs.newitem.value="";
    }

    render(){
        return(
            <div>
                <div className="form-group">
                    <div className="input-group col-lg-8 col-lg-offset-2">
                        <input type="text" className="form-control" placeholder="What's Next?" ref="newitem"/>
                        <span className="input-group-btn">
                            <button className="btn btn-primary" type="button" onClick={this.handleSubmit.bind(this)}>Add</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state)=>{
        return{
            todos:state.todos
        };
    })(AddTodo);