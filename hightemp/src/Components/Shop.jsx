import React, { Component } from 'react';
import { BrowserRouter as Router,
    Route, 
    Link } from 'react-router-dom';

export default class Shop extends Component {
    render() {
        return (
            <div className="Shop">
                <div className="navigation" style={{display: 'flex', fontFamily: 'Shrikhand', color: 'white'}}>
                    <h3 style={{fontSize: '25pt', fontFamily: 'Shrikhand'}}>Home</h3>
                        <Link to="/custom" style={{textDecoration: 'none', color: 'white'}}>
                        <h3 style={{fontSize: '25pt', fontFamily: 'Shrikhand'}}>Custom</h3>
                        </Link>
                        <h1 style={{fontSize: '40pt', fontFamily: 'Shrikhand'}}>High Temp</h1>
                        <Link to="/shop" style={{textDecoration: 'none', color: 'white'}}>
                        <h3 style={{fontSize: '25pt', fontFamily: 'Shrikhand'}}>Shop</h3>
                        </Link>
                        <Link to="/wishlist" style={{textDecoration: 'none', color: 'white'}}>
                        <h3 style={{fontSize: '25pt', fontFamily: 'Shrikhand'}}>Wishlist</h3>
                        </Link>
                </div>
                <div className="category">
                    <p>Pastries</p>
                    <br/>
                    <p>Candy</p>
                    <br/>
                    <p>Cakes & Pies</p>
                    <br/>
                    <p>Kits</p>
                </div>
            </div>
        )
    }
}
