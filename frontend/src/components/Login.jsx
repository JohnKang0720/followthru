import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/download-1.png'
import {Link} from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="log-in-container">
            <h1 className="log-in-header"> Log In </h1>
            <p> Welcome Back! </p>
            <img src={image} alt=""/> 
            <input type="text" placeholder="Enter your username" onChange = {e => setUsername(e.target.value)}/>
            <input type="text" placeholder="Enter your password" onChange = {e => setPassword(e.target.value)}/>
            <a href="" className="log-in-links"> Forgot your password? </a>
            <button className="log-in-btn"> Log In </button>
            <p className="log-in-links"> Don't have an account? <Link to="/register"> Register </Link></p>
        </div>
    )
}
