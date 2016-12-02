import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {PixiApp} from '..'
import {senario1} from '../../games'

export  class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to <i>Pixi - React</i></h2>
        </div>
        <PixiApp width={512} height={512} game={senario1}/>
      </div>
    );
  }
}