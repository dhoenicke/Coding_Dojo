import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteButton from '../components/DeleteButton';

const Dashboard = () => {

    const [pirates, setPirates] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
        .then((res) => setPirates(res.data))
    }, [])

    const removeFromDom = (pirateId) => {
        setPirates(pirates.filter((pirate) => pirate._id !== pirateId));
    };

    return (
        <div className="container text-center">
            <h1>Pirate Crew</h1>
            <Link to="/new/">Add New Pirate</Link>
            <table className="table table-dark mt-3">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Pirate</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pirates.sort((a, b) => {
                            if (a.name < b.name) { return -1; }
                            if (a.name > b.name) { return 1; }
                            return 0;
                        })
                        .map((pirate, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>
                                        <img src= {pirate.image} alt="pirate-pic" height="150px"></img>
                                    </td>
                                    <td>
                                        <Link to={`/${pirate._id}`} key={idx}>
                                            {pirate.name}
                                        </Link>
                                    </td>
                                    <td>
                                        <div className="d-inline-block">
                                            <Link to={`/edit/${pirate._id}`} key={idx} className="btn btn-success m-2">Edit</Link>
                                        </div>
                                        <div className="d-inline-block">
                                            <DeleteButton pirateId={pirate._id} successCallback={() =>removeFromDom(pirate._id)} />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard