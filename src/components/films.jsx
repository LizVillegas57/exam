import React, { Component } from 'react';
import axios from 'axios';

class Films extends Component {
    constructor(props){
        super(props);

        this.state = {
            films : []
        }
        this.getFilms = this.getFilms.bind(this);
    }

    getFilms = () => {
        //console.log();
        this.props.films.map(film => {
            console.log(film)
            return axios.get(film).
            then((response) => {
                const films = this.state.films
                films.push(response.data)
              this.setState({films})
            })
        })
      }
    
    componentDidMount(){
        this.getFilms();
    }
    render(){
        
        return (
            <React.Fragment>
                {
                    this.state.films.map((film) =>{
                        
                        return(
                            <p key={film.episode_id}>{film.title}</p>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}
export default Films;