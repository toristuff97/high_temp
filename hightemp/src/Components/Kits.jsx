import React, { useState, useEffect } from 'react';
import axios from 'axios';

 const Kits = () => {

    const [kit, setKit] = useState({ name: "", price: "" });
    const [kits, setKits] = useState([]);
    const [kitId, setKitId] = useState([]);

    const getKitsValue = (i) => {
        const {value, id} = i.target;
        setKit({...kit, [id]: value});
    };

    const getKitId = (i) => {
        setKitId(i.target.value);
    }

    async function grabKits() {
        try {
            const res = await
            axios.get('http://localhost:5432/hightemp/kits');
            console.log(res.data);
            setKits(res.data);
        } catch(err) {
            console.error(err, err.message);
        }
    }

    async function createKit() {
        try {
            const res = await
            axios.post("http://localhost:5432/hightemp/kits", kit);
            console.log(res.data);
            grabKits();
        } catch(err) {
            console.error(err, err.message);
        }
    }

    async function deleteKits() {
        try {
            const res = await axios.delete(`http://localhost:5432/hightemp/kits/${kitId}`);
            grabKits();
            console.log(res.data);
        } catch(err) {
            console.error(err, err.message);
        }
    }

    useEffect(() => {
        grabKits();
    }, []);

    const kitsTable = kits.map((item, id) => {
        return (
            <tr id={id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
            </tr>
        )
    });

        return (
            <div>
                <header>
                    <table>
                        <tbody>{kitsTable}</tbody>
                    </table>
                </header>
            </div>
        )
    }

export default Kits;
