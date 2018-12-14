import React, { Component } from 'react';

class Recipe extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <img src={this.props.recipe.image} alt=""/>
                        <h5 className="card-title">{this.props.recipe.nombredelplatillo}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Costo: {this.props.recipe.costo}</li>
                            <li className="list-group-item">Categoría: {this.props.recipe.categoria}</li>
                            <li className="list-group-item">Ingredientes: <br/>
                                {this.props.recipe.ingredientes.map(ingrediente => 
                                <span key={ingrediente}>{ingrediente} </span>
                            )}</li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Recipe;