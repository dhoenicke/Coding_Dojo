import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const ViewAuthor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [author, setAuthor] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/authors" + id)
            .then((res) => setAuthor(res.data))
            .catch((err) => navigate("/error", err));
    }, [id,navigate]);

    return (
        <div className="container mt-5 text-center">
            <div className="container text-left">
                <Link to="/">Home</Link>
            </div>
            <h3 className="display-3">{author.name}</h3>
            <p>Book: {author.book}</p>
            <div className="d-inline-flex mt-3">
                <Link to={`/edit/${author._id}`} className="btn btn-primary mr=1"> Update</Link>
                <DeleteButton authorId={author._id} successCallback={() => navigate('/')} />
            </div>
        </div>
    )
}

export default ViewAuthor