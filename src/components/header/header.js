import React from "react";
import "./header.css";
import logo from '../guirys_logo.png';

const Jumbotron = () => (
    <div className="jumbotron">
        <img src={logo} alt="logo"/>
        <a className="guirys-link" href="https://stark-stream-44023.herokuapp.com/">Guiry's Color Source</a>
    </div>
);

export default Jumbotron;

