import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import '../styles/css';

 const CakesAndPies = () => {

    const [cakeAndPie, setCakeAndPie] = useState({ name: "", price: "" });
    const [cakesAndPies, setCakesAndPies] = useState([]);
    const [cakesAndPiesId, setCakesAndPiesId] = useState([]);

    const getCakeAndPieValue = (i) => {
        const {value, id} = i.target;
        setCakeAndPie({...cakeAndPie, [id]: value});
    };

    const getCakesAndPiesId = (i) => {
        setCakesAndPiesId(i.target.value);
    }

    async function grabCakesAndPies() {
        try {
            const res = await
            axios.get('http://localhost:5432/high_temp/cakes_and_pies');
            console.log(res.data);
            setCakesAndPies(res.data);
        } catch(err) {
            console.error(err, err.message);
        }
    }

    async function createCakesAndPies() {
        try {
            const res = await
            axios.post("http://localhost:5432/high_temp/cakes_and_pies", cakesAndPies);
            console.log(res.data);
            grabCakesAndPies();
        } catch(err) {
            console.error(err, err.message);
        }
    }

    async function deleteCakesAndPies() {
        try {
            const res = await axios.delete("http://localhost:5432/high_temp/cakes_and_pies/${cakesAndPiesId}");
            grabCakesAndPies();
            console.log(res.data);
        } catch(err) {
            console.error(err, err.message);
        }
    }

//jdbc:postgresql://localhost:5432/high_temp/cakes_and_pies
    // async function createCakesAndPies() {
    //     console.log("creating cakes and pies yum")
    //     try {
    //       const response = await axios.post(
    //         "jdbc:postgresql://localhost:5432/high_temp/cakes_and_pies",
    //         cakesAndPies
    //       );

    useEffect(() => {
        grabCakesAndPies();
    }, []);

    const cakesAndPiesTable = cakesAndPies.map((item, id) => {
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
                        <tbody>{cakesAndPiesTable}</tbody>
                    </table>
                </header>
            </div>
        )
    }

export default CakesAndPies;