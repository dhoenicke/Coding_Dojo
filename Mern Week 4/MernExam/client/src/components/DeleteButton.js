import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {

    const { pirateId, successCallback } = props;

    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/pirates/${pirateId}/`)
            .then((res) => {
                successCallback();
            });
    };

    return (
        <div>
            <>
                <button onClick={deleteProduct} className="btn btn-danger ml-5"> Walk the Plank</button>
            </>
        </div>
    )
}

export default DeleteButton