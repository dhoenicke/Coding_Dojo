import React, {useState} from 'react'
import axios from 'axios'

const AxiosPoke = () => {
    const [pokie, setPokie] = useState([])

    const fetchData = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=1154")
        .then((response) => {
            console.log(response.data.results)
            setPokie(response.data.results);
        })
        .catch((err) => {
            console.log(err)
        })
    }

        return (
        <div>
            <h1>AxiosPoke</h1>
            <button onClick={fetchData}>Pokemon List</button>
            {
                pokie.map((p, i) => {
                    return (
                        <div key={i}>
                            <h5>{i}</h5>
                            <h2>{p.name}</h2>
                        </div>
                    )})
            }
        </div>
        );
}

export default AxiosPoke