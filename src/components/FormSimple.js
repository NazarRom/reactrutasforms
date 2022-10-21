import React, { Component } from 'react'

export default class FormSimple extends Component {
    //necesitamos una variable de referencia para cada control de formulario
    //que dessemos recuperar su valor
    cajanombre = React.createRef();
    cajaedad = React.createRef();
    //el siguente paso es crear un metodo 
    //para capturar el submit del formulario
    //debe recibir un EVENT (e)
    recibirDatosForm = (e) => {
        //la primera linea siempre será detener la propagacion del evento
        e.preventDefault();
        //en las referencias del objeto
        //para capturar el value
        //se utiliaza
        //referencia.current.value
        console.log(this.cajanombre.current.value);
        console.log(this.cajaedad.current.value);
        this.setState({
            user: {
                nombre: this.cajanombre.current.value,
                edad: this.cajaedad.current.value
            }
        })
    }
    state = {
        user: null
    }

    render() {
        return (
            <div>
                <h1>Ejemplo Simple</h1>
                {
                    this.state.user &&
                    (
                        <div>
                            <h2>
                                Usuario: {this.state.user.nombre},
                                Edad: {this.state.user.edad}
                            </h2>

                        </div>

                    )
                }
                <form onSubmit={this.recibirDatosForm}>
                    <label>Nombre: </label>
                    <input type="text" ref={this.cajanombre} onChange={this.recibirDatosForm} />
                    <br />
                    <label>Edad: </label>
                    <input type="text" ref={this.cajaedad}/>
                    <button>
                        Enviar datos
                    </button>
                </form>
            </div>
        )
    }
}
