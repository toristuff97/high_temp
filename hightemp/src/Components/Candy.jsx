import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const Candy = () => {

    const [candy, setCandy] = useState({ name: "", price: "" });
    const [candies, setCandies] = useState([]);
    const [candiesId, setCandiesId] = useState([]);


    const getCandyValue = (i) => {
        const {value, id} = i.target;
        setCandy({...candy, [id]: value});
    };

    const getCandyId = (i) => {
        setCandiesId(i.target.value);
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
            const res = await axios.delete("http://localhost:5432/hightemp/candy/${candiesId}");
            grabCandy();
            console.log(res.data);
        } catch(err) {
            console.error(err, err.message);
        }
    }

//jdbc:postgresql://localhost:5432/high_temp/cakes_and_pies
    // async function createCandy() {
    //     console.log("creating cakes and pies yum")
    //     try {
    //       const response = await axios.post(
    //         "jdbc:postgresql://localhost:5432/high_temp/candy",
    //         candies
    //       );

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
                <header>
                    <table>
                        <tbody>{candiesTable}</tbody>
                    </table>
                </header>
            </div>
        )
    }

export default Candy;

