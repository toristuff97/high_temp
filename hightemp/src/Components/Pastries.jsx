import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const Pastries = () => {

    const [pastries, setPastries] = useState({ name: "", price: "" });
    const [pastries, setPastries] = useState([]);
    const [pastriesId, setPastriesId] = useState([]);


    const getPastriesValue = (i) => {
        const {value, id} = i.target;
        setPastries({...pastries, [id]: value});
    };

    const getPastriesId = (i) => {
        setPastriesId(i.target.value);
    }

    async function grabPastries() {
        try {
            const res = await
            axios.get('http://localhost:5432/high_temp/pastries');
            console.log(res.data);
            setPastries(res.data);
        } catch(err) {
            console.error(err, err.message);
        }
    }

    async function createPastries() {
        try {
            const res = await
            axios.post("http://localhost:5432/high_temp/pastries", pastries);
            console.log(res.data);
            grabPastries();
        } catch(err) {
            console.error(err, err.message);
        }
    }

    async function deletePastries() {
        try {
            const res = await axios.delete("http://localhost:5432/high_temp/pastries/${pastriesId}");
            grabPastries();
            console.log(res.data);
        } catch(err) {
            console.error(err, err.message);
        }
    }

//jdbc:postgresql://localhost:5432/high_temp/cakes_and_pies
    // async function createPastries() {
    //     console.log("creating cakes and pies yum")
    //     try {
    //       const response = await axios.post(
    //         "jdbc:postgresql://localhost:5432/high_temp/pastries",
    //         pastries
    //       );

    useEffect(() => {
        grabPastries();
    }, []);

    const pastriesTable = pastries.map((item, id) => {
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
                        <tbody>{pastriesTable}</tbody>
                    </table>
                </header>
            </div>
        )
    }

export default Pastries;
