import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="navigation" style={{display: 'flex', fontFamily: 'Shrikhand', color: 'white'}}>
                    <h3>Home</h3>
                    <h3>Custom</h3>
                    <h1>High Temp</h1>
                    <h3>Shop</h3>
                    <h3>Wishlist</h3>
                </div>
                <div className="intro">
                    <p style={{fontWeight: "bold", fontSize: 40, color: 'white'}}>We're best friends with your sweet tooth.</p>
                    <br></br>
                    <button id="newButton" >What's New</button>
                </div>
            </div>
        )
    }
}

