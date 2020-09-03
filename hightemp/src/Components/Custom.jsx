import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';

export default class Custom extends Component {

    state = {
        date: new Date(),
      }

      onChange = date => this.setState({ date })

    render() {
        return (
            <div className="Custom">
                <div className="navigation" style={{display: 'flex', fontFamily: 'Shrikhand', color: 'white'}}>
                    <h3>Home</h3>
                    <Link to="/custom" style={{textDecoration: 'none', color: 'white'}}>
                    <h3>Custom</h3>
                    </Link>
                    <h1>High Temp</h1>
                    <Link to="/shop" style={{textDecoration: 'none', color: 'white'}}>
                    <h3>Shop</h3>
                    </Link>
                    <Link to="/wishlist" style={{textDecoration: 'none', color: 'white'}}>
                    <h3>Wishlist</h3>
                    </Link>
                </div>
                <div className="customForm">
                    <p>Date requested</p>
                    <DatePicker onChange={this.onChange} value={this.state.date}/>
                </div>
            </div>
        )
    }
}
