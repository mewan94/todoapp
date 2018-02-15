import React from 'react';
import Main from "./app-components/Main";
import Header from "./app-components/Header";
import Footer from "./app-components/Footer";
import './style/App.css';
import './style/bootstrap.css';
import './style/custom.min.css';

const App =() => (
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
)

export default App;
