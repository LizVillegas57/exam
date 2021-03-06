import React, { Component } from 'react';

import Recipe from './recipe';
import FormReceta from './form'; 
import axios from 'axios';

class Recipes extends Component {
    state = {
        recipes: [],
      }
  
    constructor(props){
      super(props);
  
      this.getRecipes = this.getRecipes.bind(this);
    }

    getRecipes = () => {
        return axios.get('https://comidasdevfdiciembre.herokuapp.com/api/comida/v1/comidas').then((response) => {
            this.setState({ recipes: response.data.res })
        })
    }

    componentDidMount(){
        this.getRecipes();
    }
    render(){
        return (
            <div className="container">
                <div className="p-3">
                    <FormReceta />
                </div>
                <br></br>
                <div className="card-columns">
                {this.state.recipes.length === 0 
                ? <h1>Cargando...</h1> 
                :   this.state.recipes.map(recipe =>
                    <Recipe key={recipe._id} recipe={recipe} onRecipes={this.getRecipes}/>
                )
                }
                </div>
            </div>
        )
    }
}
export default Recipes;