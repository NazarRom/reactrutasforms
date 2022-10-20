import React, { Component } from 'react'
import musica from '../assets/images/music.png'
export default class 
 extends Component {
  render() {
    return (
      <div>
        <h1>Musica</h1>
        <img style={{width:"150px",height:"150px"}} src={musica}/>
      </div>
    )
  }
}
