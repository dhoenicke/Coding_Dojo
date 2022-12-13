import React from 'react';
import axios from 'axios';

const DeleteButton = (props) => {
    const { authorId, successCallback } = props;
    const deleteAuthor = (e) => {
        axios
            .delete(`http://localhost:8000/api/author/${authorId}/`)
            .then((res) => {
                successCallback();
            });
    };

    return (
        <div>
            <>
                <button onClick={deleteAuthor} className="btn btn-danger ml-5"> Delete</button>
            </>
        </div>
    );
}

export default DeleteButton