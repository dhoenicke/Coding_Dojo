import React, { useState, useEffect } from 'react'
import PirateForm from "../components/PirateForm";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

const UpdatePirate = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false);
    const [pirate, setPirate] = useState({});
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then((res) => {
                setPirate(res.data);
                setLoaded(true);
            })
            .catch((err) => { navigate("/error", err) });
    }, [id, navigate])

    const updatePirate = (pirate) => {
        axios.put(`http://localhost:8000/api/pirates/${id}`, pirate)
            .then((res) => { navigate("/"); })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <div className="container text-center">
            <div className="container text-left">
                <Link to="/">Crew Board</Link>
            </div>
            <h1>Edit Pirate:</h1>
            {errors.map((error, index) => (<p className="text-danger" key={index}>{error}</p>))}
            {loaded && (<PirateForm onSubmitProp={updatePirate} initialName={pirate.name} initialImage={pirate.image} initialTreasure={pirate.number_of_treasure} initialCatch={pirate.catch_phrase} initialPosition={pirate.crew_position} initialPeg={pirate.pegLeg} initialPatch={pirate.eyePatch} initialHook={pirate.hookHand} />)}
        </div>
    )
}

export default UpdatePirate;