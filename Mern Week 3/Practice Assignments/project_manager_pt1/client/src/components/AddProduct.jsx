import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const navigate = useNavigate()

    const [productInfo, setProductInfo] = useState({
        title:'',
        price:'',
        description:''
    })

    const onChangeHandler = (e) => {
        setProductInfo({
            ...productInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/product/new`, productInfo)
        .then((response) => {
            console.log(response)
            setProductInfo(productInfo)
            navigate('/')
        })
        .catch(err => console.log('This is a catch error', err))
    }

    return (
        <div>
            <h1>Create a Product</h1>
            <div className='container'>
                <form onSubmit={submitHandler}>
                    <div className='mb-3 d-flex'>
                        <label htmlFor='name' className='form-label'>Title:</label>
                        <input type='text' className='form-control' name='name' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor='price' className='form-label'>Price:</label>
                        <input type='text' className='form-control' name='name' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <label htmlFor='description' className='form-label'>Description:</label>
                        <input type='text' className='form-control' name='name' onChange={onChangeHandler} />
                    </div>
                    <div className='mb-3 d-flex'>
                        <button type='submit' className='btn btn-success'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct