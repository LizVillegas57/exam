import React, { Component } from 'react';

import Films from './films';

class List extends Component {
    render(){
        const people = this.props.people;
        
        return (
            <div className="container">
                <div className="card-columns">
                {
                    people.map((people) =>{
                        console.log(people.films);
                        return(
                            <div className="card" key={people.name}>
                                <div className="card-body">
                                    <h5 className="card-title">{people.name}</h5>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Gender: {people.gender}</li>
                                        <li className="list-group-item">Films: <Films films={people.films} key={people.films}/></li>
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