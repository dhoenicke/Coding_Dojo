import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const ViewPirate = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [pirate, setPirate] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then((res) => setPirate(res.data))
            .catch((err) => navigate("/error", err));
    }, [id,navigate]);

    return (
        <div className="container mt-5 text-center">
            <div className="container text-left">
                <Link to="/">Crew Board</Link>
            </div>
            <img src={pirate.image} alt="pirate-img"></img>
            <h3 className="display-3">{pirate.name}</h3>
            <p>Crew Position: {pirate.crew_position}</p>
            <p>Catch Phrase: {pirate.catch_phrase}</p>
            <p># of Treasure Chests: {pirate.number_of_treasure}</p>
            <p>Peg Leg: {pirate.pegLeg ? "Yes" : "No"}</p>
            <p>Eye Patch: {pirate.eyePatch ? "Yes" : "No"}</p>
            <p>Hook Hand: {pirate.hookHand ? "Yes" : "No"}</p>
            <div className="d-inline-flex mt-3">
                <Link to={`/edit/${pirate._id}`} className="btn btn-primary mr=1"> Update</Link>
                <DeleteButton pirateId={pirate._id} successCallback={() => navigate('/')} />
            </div>
        </div>
    )
}

export default ViewPirate