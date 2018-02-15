import React,{ Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
var actions=require('../app-actions/index');

class Header extends Component{

    logedin(){
        if(this.props.name.logedin){
            return(<li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>);
        }else{
            return(<li><Link to="/Login">Login</Link></li>);
        }
    }
    needregister(){
        if(!this.props.name.logedin){
            return(<li><Link to="/Register">Register</Link></li>);
        }
    }

    logout(e){
        e.preventDefault();
        this.props.dispatch(actions.logout());
    }

    render(){
        return(
                <div className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">Home</Link>
                            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse" id="navbar-main">
                            <ul className="nav navbar-nav">
                                <li><Link to="/Todos">Todos</Link></li>
                                <li><Link to="/Completed">Completed</Link></li>

                            </ul>

                            <ul className="nav navbar-nav navbar-right">
                                {this.needregister()}
                                {this.logedin()}
                            </ul>

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
)(Header);