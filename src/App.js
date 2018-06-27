import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import axios from 'axios';
import { connect } from 'react-redux';

class App extends Component {
  constructor(){
    super()
    this.state={
      user: null
    }
  }
  componentDidMount(){
    axios
    .get('/api/user')
    .then(res=>{
      this.setState({
        user: res.data
      })
    })
  }
  render() {
    console.log(this.state.user)
    console.log(this.props)
    return (
      <div className="App">
      my react app
      <Home/>
      {
        this.state.user && (
          <React.Fragment>
          <span> session user: </span>
          <pre>
            {JSON.stringify(this.state.user)}
          </pre>
          </React.Fragment>
        )
      }
      </div>
    );
  }
}

function mapStateToProps(state){
  const { stateData } = state
  return {
    stateData
  }
}
export default connect(mapStateToProps)(App);
