import React, { Component } from 'react';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import facebook from '../assets/facebook.png';
import { BrowserRouter as Router,
        Route, 
        Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="navigation" style={{display: 'flex', fontFamily: 'Shrikhand', color: 'white'}}>
                    <h3>Home</h3>
                    <Link to="/custom" style={{textDecoration: 'none', color: 'white'}}>
                    <h3>Custom</h3>
                    </Link>
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
                    <a href="http://www.instagram.com"><img className="icon" src={instagram} alt="Link to Instagram"/></a>
                    <a href="http://www.twitter.com"><img className="icon" src={twitter} alt="Link to Twitter"/></a>
                    <a href="http://www.facebook.com"><img className="icon" src={facebook} alt="Link to Facebook"/></a>
                </div>
            </div>
        )
    }
}

