import React, { useState, useEffect } from 'react';
import axios from 'axios';
import worms from '../assets/worms.jpg';
import bears from '../assets/bears.jpg';
import fruit from '../assets/fruit.jpg';

 const Candy = () => {

    const [candy, setCandy] = useState({ name: "", price: "" });
    const [candies, setCandies] = useState([]);
    const [candyId, setCandyId] = useState([]);


    const getCandyValue = (i) => {
        const {value, id} = i.target;
        setCandy({...candy, [id]: value});
    };

    const getCandyId = (i) => {
        setCandyId(i.target.value);
    }

    async function grabCandy() {
        try {
            const res = await
            axios.get('http://localhost:5432/hightemp/candy');
            console.log(res.data);
            setCandy(res.data);
        } catch(err) {
            console.error(err, err.message);
        }
    }

    async function createCandies() {
        try {
            const res = await
            axios.post("http://localhost:5432/hightemp/candy", candies);
            console.log(res.data);
            grabCandy();
        } catch(err) {
            console.error(err, err.message);
        }
    }

    async function deleteCandy() {
        try {
            const res = await axios.delete(`http://localhost:5432/hightemp/candy/${candyId}`);
            grabCandy();
            console.log(res.data);
        } catch(err) {
            console.error(err, err.message);
        }
    }

    useEffect(() => {
        grabCandy();
    }, []);

    const candiesTable = candies.map((item, id) => {
        return (
            <tr id={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
            </tr>
        )
    })

        return (
            <div>
                <div className="defaultCandy" style={{border: 'white'}}>
                    {/* <p>This is where candy will show up.</p> */}
                    <div className='column'>
                        <img src={worms} className='candyPics'/>
                        <img src={bears} className='candyPics'/>
                        <img src={fruit} className='candyPics'/>
                    </div>
                </div>
                <header>
                    <table>
                        <tbody>{candiesTable}</tbody>
                    </table>
                </header>
            </div>
        )
    }

export default Candy;

