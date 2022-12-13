import React, { useState } from 'react'

const FetchAPI = () => {
    const [pokie, setPokie] = useState([])

    const fetchData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1154")
            .then(response => {
            return response.json();
            })
            .then(response => {
                setPokie(response.results)
            console.log("this is the 2nd then", response.results);
            })
            .catch(err => {
            console.log(err);
            });
    }
    return (
        <div>
            <h1>FetchAPI</h1>
            <button onClick={fetchData}>Pokemon List</button>

            {
                pokie.map((p, i) => {
                    return (
                        <div key={i}>
                        <h2>{p.name}</h2>
                        </div>
                    )})
            }
        </div>
    )
}

export default FetchAPI