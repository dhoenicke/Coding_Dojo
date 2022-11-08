import React from 'react'
import axios from "axios";

function deleteButton(props) {

    const { productId, successCallback } = props;

    const deleteProduct = e => {
        axios
            .delete(`http://localhost:8000/products/${productId}/delete`)
            .then((res) => {
                successCallback();
            })
    }
    return (
        <>
            <button onClick={deleteProduct} className="btn btn-danger ml-5"> Delete</button>
        </>
    )
}

export default deleteButton