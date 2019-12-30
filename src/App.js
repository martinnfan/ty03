import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TY03</h1>
        <Button>Home</Button>
        <Button>Team</Button>
        <Button>Project</Button>
        <Button>Tutorial</Button>
        <Button>Contact</Button>
      </div>
    );
  }
}

export default App;