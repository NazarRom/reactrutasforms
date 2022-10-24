import React, { Component } from 'react'

export default class SeleccionMultipleForms extends Component {
    //variable para hacer referencias al <select> 
    selectMultipe = React.createRef();
    //metodo para generar los otions dinamicamente
    generarOptions = () => {
        var options = [];
        for (var i = 1; i <= 10; i++) {
            options.push(
                <option key={i} value={"Elemento " + i}>
                    {"Elemento " + i}
                </option>     
            );
        }
        return options;
    }
    //metodo para mostar los elemntos seleccionados 
    //al enviar form
    mostrarSeleccionados = (e) => {
        e.preventDefault();
        //TENEMOS ACCESO dentro de un <select> a sus options
        //y nos devuelve un array
        var options = this.selectMultipe.current.options;
        var datos = "";
        //recorremos todos los elementos del <select>
        for (var option of options) {
            if (option.selected == true) {
                datos += option.value + ",";
            }

        }
        this.setState({
            seleccionados: datos
        })
    }
    //una variable state para dibujar los elementos seleccionados
    state = {
        seleccionados: ""
    }
    render() {
        return (
            <div>
                <h1>Selección Multiple Forms</h1>
                <form onSubmit={this.mostrarSeleccionados}>
                    <label>Seleccione multiple:</label>
                    <select ref={this.selectMultipe} size="10" multiple>
                        {this.generarOptions()}
                    </select>
                    <button>
                        mostar seleccionados
                    </button>
                </form>
                <h1 style={{ color: "blue" }}>{this.state.seleccionados}</h1>
            </div>

        )
    }
}
