import React, { Component } from 'react';
import axios from 'axios';

class Recipe extends Component {

    handleDelete = (id) =>{
        console.log("delete")
        axios.delete(`https://comidasdevfdiciembre.herokuapp.com/api/comida/v1/comidas/${id}`)
        .then(res =>{
            this.props.onRecipes()
        });
    }

    render(){
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <img src="https://comidasdevfdiciembre.herokuapp.com/api/comida/v1/getImagenComida/CbkVDBarVVomFI4CJKKCpCgO.jpg" alt=""/>
                        <h5 className="card-title">{this.props.recipe.nombredelplatillo}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Costo: {this.props.recipe.costo}</li>
                            <li className="list-group-item">Categoría: {this.props.recipe.categoria}</li>
                            <li className="list-group-item">Ingredientes: <br/>
                                {this.props.recipe.ingredientes.map(ingrediente => 
                                <span key={ingrediente}>{ingrediente} </span>
                            )}</li>
                        </ul>
<<<<<<< HEAD
                    
                        <button type="button" className="btn btn-light">
                         Update
                        </button>
                        <button type="button" className="btn btn-dark">Delete</button>
                    
=======
                        <button type="button" className="btn btn-dark" onClick={() => this.handleDelete(this.props.recipe._id)}>Delete</button>
>>>>>>> 2b9102c4553e948547ccbda2da53a055e0a6cd47
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Recipe;