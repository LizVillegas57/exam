import React, { Component } from 'react';
import axios from 'axios';

class List extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          films: [],
        }
    
        this.getFilms = this.getFilms.bind(this);
    }
    getFilms = () => {
        return axios.get('https://swapi.co/api/{this.props.people}/films').
          then((response) => {
            console.log(response.data.results);
            this.setState({ films: response.data.results})
          })
      }
    
    componentDidMount(){
        this.getFilms();
    }
    render(){
        const people = this.props.people;
        const films = this.state;
        return (
            <div className="container">
                <div className="card-columns">
                {
                    people.map((people) =>{
                        console.log(people)
                        return(
                            <div className="card" key={people.name}>
                                <div className="card-body">
                                    <h5 className="card-title">{people.name}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Gender: {people.gender}</li>
                                        <li className="list-group-item">Films: {people.films}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        )
    }
}
export default List;