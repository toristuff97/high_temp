import React, { Component } from 'react';
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import facebook from '../assets/facebook.png'

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
                <div className="socials">
                    <a href="http://www.instagram.com"><img className="icon" src={instagram}/></a>
                    <a href="http://www.twitter.com"><img className="icon" src={twitter}/></a>
                    <a href="http://www.facebook.com"><img className="icon" src={facebook}/></a>
                </div>
            </div>
        )
    }
}

