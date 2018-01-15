import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    projects : [],
    user: null,
  }

  componentWillMount(){
    if(localStorage.getItem('user')){
      this.setState({
        user: JSON.parse(localStorage.getItem('user')),
        projects: JSON.parse(localStorage.getItem('projects'))
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
