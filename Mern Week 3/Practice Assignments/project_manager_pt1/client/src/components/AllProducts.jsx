import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/")
            .then((response) => {
                console.log(response.data.results)
                setAllProducts(response.data.results);
            })
            .catch((err) => { console.log('This is a catch error', err) })
    }, [])

    const deleteProduct = (e, id) => {
        console.log('Delete this product', id)
        axios.delete('http://localhost:8000/')
    }

    return (
        <>
            <div>
                <h1>All Products</h1>
                <h3><Link to='/product/addproduct'>Create</Link> </h3>
            </div>
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
                {
                    allProducts.map((product, i) => {
                        return (
                            <tr key={i}>
                                <td><Link to={`/product/${product._id}`} className='btn btn-outline-dark'>{product.title}</Link></td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                                <td><Link to={`product/edit${product._id}`} className='btn btn-warning'>Edit</Link> |
                                    <button className='btn btn-danger' onClick={(e) => { deleteProduct(e, product._id) }}>Delete</button></td>
                            </tr>
                        )
                    })
                }
            </div>
        </>
    );
}

export default AllProducts