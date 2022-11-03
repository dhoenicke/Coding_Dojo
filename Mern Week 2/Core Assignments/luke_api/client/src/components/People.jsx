import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import axios from 'axios';

function People() {

    const { id } = useParams('')
    const [person, setPerson] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .catch(err => Navigate(err))
            .then(response => {
            setPerson(response.data
            )
        })
        console.log(person)
    }, [id]);

    return (
        <div>
            <h2>Name: {person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color}</p>
        </div>
    )
}

export default People