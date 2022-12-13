import React, { useState } from 'react'

const Form = () => {
    const [firstname, setfirstName] = useState("")
    const [lastname, setlastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpassword, setconfirmPassword] = useState("")
    return (
        <div>
            <form>
                <div className='form-group'>
                    <label>First Name</label>
                    <input onChange={(e) => setfirstName(e.target.value)} type="text" className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Last Name</label>
                    <input onChange={(e) => setlastName(e.target.value)} type="text" className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Confirm Password</label>
                    <input onChange={(e) => setconfirmPassword(e.target.value)} type="password" className='form-control' />
                </div>
            </form>
            <hr />
            <p>Your Form Data:</p>
            <br />
            <p> First Name: {firstname}</p>
            <p> Last Name: {lastname}</p>
            <p> Email: {email}</p>
            <p> Password: {password}</p>
            <p> Confirm Password: {confirmpassword}</p>
        </div>
    )
}

export default Form