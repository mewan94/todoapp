import React,{Component} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import { Redirect } from 'react-router-dom';
var actions= require('../app-actions/index');

class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            vname:false,
            vmail:false,
            vpass:false,
            passc:false
        }
    }

    cname(e){

    }
    cmail(e){

    }
    vpass(e){

    }
    passc(){
    }
    register(e){
        e.preventDefault();
        this.props.dispatch(actions.register(this.refs.name.value,this.refs.email.value,this.refs.password.value,this.refs.c_password.value));
    }


    render(){
        var checkLogin=() =>{
            if(this.props.name.logedin){
                //this.props.dispatch(actions.getTodos());
                return <Redirect to='/'/>
            }
        };
        return(
            <div className="row">
                {checkLogin()}
                <div className="container">
                    <div className="col-lg-10 login-form">
                        <div className="well">
                            <form className="form-horizontal">
                                <fieldset>
                                    <legend>Register</legend>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Name</label>
                                        <div className="col-lg-10 form-group">
                                            <input type="text" className="form-control" placeholder="Email" ref="name" onKeyUp={this.cname.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                                        <div className="col-lg-10 form-group">
                                            <input type="text" className="form-control" placeholder="Email" ref="email" onKeyUp={this.cmail.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Password</label>
                                        <div className="col-lg-10 form-group">
                                            <input type="password" className="form-control" placeholder="Email" ref="password" onKeyUp={this.vpass.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Retype Password</label>
                                        <div className="col-lg-10 form-group">
                                            <input type="password" className="form-control" placeholder="Email" ref="c_password" onKeyUp={this.passc}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-lg-10 col-lg-offset-2 btn-space">
                                            <button type="submit" className="btn btn-primary" onClick={this.register.bind(this)}>Register</button>
                                            <button type="reset" className="btn btn-default">Cancel</button>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    (state)=>{
        return{
            name:state.name
        }
    }
)(Register);