import React, {useState, useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from '../images/followThruLogo.png'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-flex-left">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                    <h1> Follow Thru </h1>
                </div>
            </div>
            <div className="navbar-flex-right">
                <Link className="navbar-links" to="/">Home</Link>
                <Link className="navbar-links" to="/projects">Project List</Link>
                <Link className="navbar-links" to="/register">Register</Link>
                <Link className="navbar-links" to="/login">Login</Link>
                <Link className="navbar-links" to="/goalhelp">Goal Help</Link>
            </div>
        </div>

    )
}
