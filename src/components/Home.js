import React, { Component } from 'react'
import home from '../assets/images/home.png'
export default class extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
            <img style={{width:"150px",height:"150px"}} src={home}/>
            </div>
        )
    }
}
