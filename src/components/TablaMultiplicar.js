import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    state = {
        numeros: [],
        select:[]
    }
   // cajanumero = React.createRef();
    selectnumero = React.createRef();

    selectCreate = (e) =>{
        e.preventDefault();
        var aux2 = [];
       
        for (var i = 1; i <= 10; i++) {
            var random = parseInt(Math.random() * 100);
            aux2.push(random);
            var num = parseInt(this.selectnumero.current.value);
            console.log(num)
        }
        this.setState({
            select: aux2
        });
    }
    multiplicarNumero = (e) => {
        e.preventDefault();
        var num = parseInt(this.selectnumero.current.value);
        //creas un array auxiliar que guardamos los numeros
        var aux = [];
        //bucle para recorrer la multiplicacion
        for (var i = 1; i <= 10; i++) {
            //push en el aux
            aux.push(num * i);
            
        }
        
        this.setState({
            numeros: aux,
        });
    }
    render() {
        return (
            <div>
                <h1 onClick={this.selectCreate}>Multiplicar</h1>
                <form onSubmit={this.multiplicarNumero}>
                    <label>Introduce un numero</label>
                    <select  ref={this.selectnumero}>
                        {
                            this.state.select.map((select,index)=>{
                                return(<option key={index}>{select}</option>)
                            })
                        }
                    </select>
                    <button>Multiplicar</button>
                </form>
                <table border="1px">
                    <tbody>
                        {
                            this.state.numeros.map((numero, index) => {

                                return (<tr>
                                    <td key={index}>{this.selectnumero.current.value} * {index + 1} = {numero} </td></tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
