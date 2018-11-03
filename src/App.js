import React, { Component } from 'react';

import './App.css';
import Nav from './components/nav/nav'
import Jumbotron from './components/header/header';
import Home from './compoents/Home/home'

class App extends Component {
  render() {
    return (
      <div>
      <Jumbotron/>
      <Nav/>
      <Home/>
      </div>
      
    );
  }
}

export default App;

