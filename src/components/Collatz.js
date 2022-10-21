import React, { Component } from 'react'
export default class Collatz extends Component {
    state = {
        numeros: []
    }
    cajanumero = React.createRef();
    mostrarCollatz = (e) => {
        e.preventDefault();
        var numero = parseInt(this.cajanumero.current.value);
        var aux = [];
        while (numero != 1){
            if (numero % 2 == 0){
                //PAR
                numero = numero / 2;
            }else{
                numero = numero * 3 + 1;
            }
            aux.push(numero);
        }
        this.setState({
            numeros: aux
        });
    }
  render() {
    return (
      <div>
        <h1>Conjetura Collatz</h1>
        <form onSubmit={this.mostrarCollatz}>
            <label>Introduzca número: </label>
            <input type="number" ref={this.cajanumero}/>
            <button>
                Mostrar Collatz
            </button>
        </form>
        <ul>
            {
                this.state.numeros.map((numero, index) => {
                    return (<li key={index}>{numero}</li>);
                })
            }
        </ul>
      </div>
    )
  }
}

