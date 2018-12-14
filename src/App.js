import React, { Component } from 'react';
import Recipes from './components/recipes';


class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Welcome to star wars</h1>
            <p className="lead">Some of the characters</p>
          </div>
        </div>
        <Recipes/>
      </div>
    );
  }
}

export default App;
