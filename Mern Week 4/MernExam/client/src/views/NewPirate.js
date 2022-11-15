import React, { useState } from 'react'
import PirateForm from '../components/PirateForm'
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const NewPirate = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const createPirate = (pirate) => {
        axios.post("http://localhost:8000/api/pirates", pirate)
            .then((res) => { navigate(`/${res.data._id}`); })
            .catch((err) => {
                console.log(err);
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
            <h1>Add Pirate</h1>
            {errors.map((error, index) => (<p className="text-danger" key={index}>{error}</p>))}
            <PirateForm onSubmitProp={createPirate} initialName="" />
        </div>
    );
}

export default NewPirate