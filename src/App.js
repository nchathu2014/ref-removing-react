import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    testClick(){
        console.log(this.refs.myInput.value);
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
            <input type="text" id="test-box" ref="myInput"/>

            <button onClick={this.testClick.bind(this)}>TEST</button>
        </p>
      </div>
    );
  }
}

export default App;
