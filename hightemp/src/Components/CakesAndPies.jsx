import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/css';

 const CakesAndPies = () => {

    const [cakesAndPies, setCakesAndPies] = useState({ name: "", price: "" });
    const [cakesAndPies, setCakesAndPies] = useState([]);
    const [cakesAndPiesId, setCakesAndPiesId] = useState([]);

    async function grabCakesAndPies() {
        try {
            const res = await
            axios.get('jdbc:postgresql://localhost:5432/high_temp/cakes_and_pies');
            console.log(res.data);
        } catch(err) {
            console.error(err, err.message);
        }
    }

    useEffect(() => {
        grabCakesAndPies();
    }, [])



        return (
            <div>
                <header>
                    <table>
                        
                    </table>
                </header>
            </div>
        )
    }

