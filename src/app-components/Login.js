import React,{Component} from 'react';
import {connect} from 'react-redux';
import validator from 'validator';
import { Redirect } from 'react-router-dom';
var actions= require('../app-actions/index');

class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            vmail:false,
            mailstyle:'col-lg-10 form-group',
            vpassword:false,
            passwordstyle:'col-lg-10 form-group',
            autherr:false,
            hasautherrs:'alert alert-dismissible alert-danger hidden',
            loginErrors:'',
            logedin:false
        };
    }

    login(e){
        e.preventDefault();
        if(this.state.vmail && this.state.vpassword){
            this.setState(function () {
                return{
                    autherr:false,
                    hasautherrs:'alert alert-dismissible alert-danger hidden'
                }
            });
            this.props.dispatch(actions.login(this.refs.username.value,this.refs.password.value));

            if(!this.props.name.logedin){
                this.setState(function () {
                    return{
                        autherr:true,
                        hasautherrs:'alert alert-dismissible alert-danger',
                        mailstyle:'col-lg-10 form-group has-error',
                        passwordstyle:'col-lg-10 form-group has-error'
                    }
                });
            }

        }else{
            this.setState(function () {
                return{
                    autherr:true,
                    hasautherrs:'alert alert-dismissible alert-danger'
                }
            });
            if(!this.state.vmail){
                this.setState(function () {
                    return{
                        mailstyle:'col-lg-10 form-group has-error'
                    }
                });
            }
            if(!this.state.vpassword){
                this.setState(function () {
                    return{
                        passwordstyle:'col-lg-10 form-group has-error'
                    }
                });
            }
        }

    };

    ispassword(e){
        const password = this.refs.password.value;
        if(validator.isByteLength(password,{min:6,max:15})){
            this.setState(function () {
                return{
                    vpassword:true,
                    passwordstyle:'col-lg-10 form-group has-success'
                }
            });
        }else{
            this.setState(function () {
                return{
                    vpassword:false,
                    passwordstyle:'col-lg-10 form-group has-warning'
                }
            });
        }
    }
    ismail(e){
        const mail = this.refs.username.value;
        if(validator.isEmail(mail)){
            this.setState(function () {
                return{
                    vmail:true,
                    mailstyle:'col-lg-10 form-group has-success'
                }
            });
        }else{
            this.setState(function () {
                return{
                    vmail:false,
                    mailstyle:'col-lg-10 form-group has-warning'
                }
            });
        }
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
                                    <legend>Login</legend>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                                        <div className={this.state.mailstyle}>
                                            <input type="text" className="form-control" placeholder="Email" ref="username" onKeyUp={this.ismail.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputEmail" className="col-lg-2 control-label">Password</label>
                                        <div className={this.state.passwordstyle}>
                                            <input type="password" className="form-control" placeholder="password" ref="password" onKeyUp={this.ispassword.bind(this)}/>
                                        </div>
                                    </div>
                                    <div className={this.state.hasautherrs}>
                                        <strong>Oh snap!</strong> Change a few things up and try again.
                                    </div>
                                </fieldset>
                                <div className="form-group">
                                    <div className="col-lg-10 col-lg-offset-2 btn-space">
                                        <button type="submit" className="btn btn-primary" onClick={this.login.bind(this)}>Login</button>
                                        <button type="reset" className="btn btn-default">Cancel</button>
                                    </div>
                                </div>
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
)(Login);