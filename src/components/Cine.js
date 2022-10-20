import React, { Component } from 'react'
import cine from '../assets/images/cine.png'
export default class Cine extends Component {
  render() {
    return (
      <div>
        <h1>Cine</h1>
        <img style={{width:"150px",height:"150px"}} src={cine}/>
      </div>
    )
  }
}
