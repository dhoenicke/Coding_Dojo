import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import DeleteButton from './DeleteButton'

const ProductList = (props) => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/products")
            .then((res) => setProducts(res.data));
    }, []);

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    return (
        <div className="row mt-3">
            <div className="col-lg-2 text-center mx-auto mt-3">
                <h1>All Products: </h1>
                {products.map((product, idx) => {

                    return (
                        <p className="h5" key={idx}>
                            <Link to={/products/ + product._id}>{product.title}</Link>
                            <DeleteButton
                                productId={product._id}
                                successCallback={() => removeFromDom(product._id)}
                            />
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductList