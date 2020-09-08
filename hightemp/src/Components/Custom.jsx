import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import DatePicker from 'react-date-picker';
import 'semantic-ui-css/semantic.min.css'
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
                    <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
                    <h3 style={{fontSize: '25pt', fontFamily: 'Shrikhand'}}>Home</h3>
                    </Link>
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
                <br/>
                <div className="customHead">
                    <h4 style={{fontWeight: 'bolder', color: 'white', fontSize: '20pt', fontFamily: 'Montserrat'}}>Custom Order Form</h4>
                </div>
                <div className="customForm" id="customForm">
                    <div className="datePick">
                        <p style={{fontWeight: 'bolder', color: 'white', fontSize: '17pt'}}>Date desired</p>
                        <DatePicker onChange={this.onChange} value={this.state.date}/>
                    </div>
                    <div className="specs">
                        <Dropdown placeholder='Type of Dessert' fluid selection options={dessertOptions} style={{width: '10vw'}}/>
                        <br/> <br/>
                        <Dropdown placeholder='Budget' fluid selection options={budgetOptions} style={{width: '10vw'}}/>
                    </div>
                    <div className="custInfo">
                        <label for="fname" style={{fontWeight: 'bolder', color: 'white', fontSize: '17pt', fontFamily:'Montserrat'}}>First Name</label> <br/> 
                        <input type="text" name="fname" id="fname"></input> <br/> <br/>
                        <label for="lname" style={{fontWeight: 'bolder', color: 'white', fontSize: '17pt', fontFamily:'Montserrat'}}>Last Name</label> <br/> 
                        <input type="text" name="lname" id="lname"></input> <br/> <br/>
                        <label for="email" style={{fontWeight: 'bolder', color: 'white', fontSize: '17pt', fontFamily:'Montserrat'}}>Email</label> <br/>
                        <input type="text" name="email" id="email" style={{width: '25vw'}}></input> <br/> <br/> <br/>
                        <label for="desc" style={{fontWeight: 'bolder', color: 'white', fontSize: '15pt', fontFamily:'Montserrat'}}>Description of what you would like</label>
                        <input type="text" name="desc" id="desc" placeholder="Flavors, decoration, any allergy disclosures, etc." style={{width: '25vw', height: '10vh'}} required></input>
                    </div>
                    <div className="submitForm">
                        <button type="submit" form="customForm" formMethod="post" id="submit">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
