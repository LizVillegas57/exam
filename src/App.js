import React, { Component } from 'react';
import List from './components/list';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
    }

    this.getPeople = this.getPeople.bind(this);
  }
  getPeople = () => {
    return axios.get('https://swapi.co/api/people').then((response) => {
        this.setState({ people: response.data.results })
      })
  }

  componentDidMount(){
    this.getPeople();
  }

  render() {
    const {people} = this.state;
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Welcome to star wars</h1>
            <p className="lead">Some of the characters</p>
          </div>
        </div>
        <List people={people} />
      </div>
    );
  }
}

export default App;
