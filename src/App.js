import React, { Component,  Fragment} from 'react';
import Recipes from './components/recipes';

import Header from './components/pages/header';
import Footer from './components/pages/footer';

class App extends Component {

  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Welcome to star wars</h1>
            <p className="lead">Some of the characters</p>
          </div>
        </div>
=======
      <Fragment>
        <Header/>
>>>>>>> 2b9102c4553e948547ccbda2da53a055e0a6cd47
        <Recipes/>
        <Footer/>
      </Fragment>
    );
  }
}

export default App;
