import React, { useState, useEffect } from 'react'
import image from '../images/download-1.png'
import { Link } from 'react-router-dom'

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [submit, setSubmit] = useState(false)

    return (
        <div className="log-in-container">
            <h1 className="log-in-header"> Register </h1>
            <p> Let us help you get started! </p>
            <img src={image} alt="" />
            <input type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
            <input type="text" placeholder="Confirm your password" onChange={e => setConfirm(e.target.value)} />
            <button className="log-in-btn" onClick={() => setSubmit(true)}> Register </button>
            <p className="log-in-links"> Already have an account? <Link to="/login"> Log In </Link></p>
        </div>
    )
}
