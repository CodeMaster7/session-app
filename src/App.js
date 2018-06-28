import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import axios from 'axios';
import routes from './routes';

class App extends Component {
  constructor(){
    super()
    this.state={
    }
  }
  render() {
    return <div className="App">{routes()}</div>
  }
}
export default App;
