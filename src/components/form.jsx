import React, { Component } from 'react';
import axios from 'axios';

class FormReceta extends Component {

    state = {
        res:{
            nombredelplatillo: "",
            costo: "",
            categoria: "",
            ingredientes: [],
            image: "https://images-gmi-pmc.edge-generalmills.com/7286a0e6-bc5d-464d-9490-7470a1b54e3e.jpg"
        },
        resEnviar: {
            id: "",
            nombredelplatillo: "",
            costo: "",
            categoria: "",
            ingredientes: [],
            image: "https://images-gmi-pmc.edge-generalmills.com/7286a0e6-bc5d-464d-9490-7470a1b54e3e.jpg"
        }
    }

    //CUANDO SE HACE UN SUBMIT
    handleChange = event => {
        const resEnviar = this.state.resEnviar;
        resEnviar[event.target.name] = event.target.value;
        this.setState({ resEnviar });
    }

    handleSubmit = event => {
        event.preventDefault(); //evita que el navegador se recargue
        const receton = {
            nombredelplatillo: this.state.resEnviar.nombredelplatillo,
            costo: this.state.resEnviar.costo,
            categoria: this.state.resEnviar.categoria,
            ingredientes: this.state.resEnviar.ingredientes,
            image: this.state.resEnviar.image
        };
        axios
        .post(
            `https://comidasdevfdiciembre.herokuapp.com/api/comida/v1/comidas`,
            receton
        )
        .then(response => {
            this.setState({ resEnviar: response.data.res })
        });

        console.log("ya di click");
    };

    render(){
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        Nombre platillo:
                        <input type="text" name="nombredelplatillo" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="">
                        Costo:
                        <input type="text" name="costo" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="">
                        Categoria:
                        <input type="text" name="categoria" onChange={this.handleChange} />
                    </label>
                    <label htmlFor="">
                        Ingredientes:
                        <input type="text" name="ingredientes" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Enviar</button>
              </form>
              <h2>{this.state.nombredelplatillo}</h2>
            </React.Fragment>
        )
    }
}
export default FormReceta;