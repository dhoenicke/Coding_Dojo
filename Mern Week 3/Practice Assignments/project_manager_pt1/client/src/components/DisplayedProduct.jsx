import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';

const DisplayedProduct = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((response) => {
            console.log(response.data.results)
            setProduct(response.data.results)
        })
    }, [id])
    
    return (
        <>
        <h1>All Products</h1>
        <div className='card'>
            <div className='container'>
            <h1>{product.title}</h1>
            <p><h3>Price: {product.price}</h3></p>
            </div>
        </div>
        </>
    )
}

export default DisplayedProduct