import React from 'react';
import {Switch,Route} from 'react-router-dom';
import TodoApp from './TodoApp';
import Home from './Home';
import Login from './Login';
import Completed from "./Completed";
import Register from "./Register";

const Main = () =>(
    <main>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Todos" component={TodoApp}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Register" component={Register}/>
            <Route path="/Completed" component={Completed}/>
        </Switch>
    </main>
)

export default Main;