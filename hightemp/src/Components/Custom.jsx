import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';
// import 'semantic-ui-css/semantic.min.css'
import { Dropdown } from 'semantic-ui-react';

const dessertOptions = [
    {
        key: 'Cake/Pie',
        value: 'Cake/Pie',
        text: 'Cake/Pie'
    },
    {
        key: 'Pastry',
        value: 'Pastry',
        text: 'Pastry'
    },
    {
        key: 'Candy',
        value: 'Candy',
        text: 'Candy'
    }
]

const budgetOptions = [
    {
        key: '<$100',
        value: '<$100',
        text: '<$100'
    },
    {
        key: '$100-$200',
        value: '$100-$200',
        text: '$100-$200'
    },
    {
        key: '$200-$300',
        value: '$200-$300',
        text: '$200-$300'
    },
    {
        key: '>$300',
        value: '>$300',
        text: '>$300'
    }
]

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
                    <div className="datePick">
                        <p style={{fontWeight: 'bolder', color: 'white', fontSize: '17pt'}}>Date requested</p>
                        <DatePicker onChange={this.onChange} value={this.state.date}/>
                    </div>
                    <div className="specs">
                        <Dropdown placeholder='Type of Dessert' fluid selection options={dessertOptions} style={{width: '10vw'}}/>
                        <Dropdown placeholder='Budget' fluid selection options={budgetOptions} style={{width: '10vw'}}/>
                    </div>
                </div>
            </div>
        )
    }
}
