import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Planet () {

    const {id} = useParams('')
    const [planet, setPlanet] = useState('');

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`).catch(err => console.log(err))
            .then(response => {
                setPlanet(response.data
                    )})
    }, [id])

    return (
        <div>
            <h2>Name: {planet.name}</h2>
            <p>Climate: {planet.climate}</p>
            <p>Terrian: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default Planet