import React, { Component } from 'react';

import './App.css';
import Nav from './components/nav/nav'
import Jumbotron from './components/header/header';
import Direction from './compoents/Home/home'

class App extends Component {
  render() {
    return (
      <div>
      <Jumbotron/>
      <Nav/>
      <Direction/>
      </div>
      
    );
  }
}

export default App;

