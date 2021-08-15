/*
    -Navbar - transparent, but not transparent on scroll
    -Left: Floating Logo that represents Follow Thru (size: 700x700)
    -Right: -> Our slogan Ex. Increase productivity with Follow Thru
               -> Short description
                  -> Login Button, Learn More button
    -Background: Any image related to our project
*/
import React from 'react'
import Logo from '../images/followThruLogo.png'
import { Link } from 'react-router-dom'
export default function HomePage() {
    return (
        <>
            <div className="homepage-outer">
                <div className="homepage-text">
                    <h1> Increase productivity with <strong> Follow Thru </strong> </h1>
                    <h4> Follow Thru optimizes productive work management and organization for both solo and team environments. </h4>
                    <div className="home-btns">
                        <button style={{ margin: '5px' }} className="buttons"> <Link className="home-btn" to="/Register">Get Started</Link> </button>
                        <button style={{ margin: '5px' }} className="buttons"> <Link className="home-btn" to="/login">Have an account?</Link> </button>
                    </div>
                </div>
                <div className="homepage-hero">
                    <img src={Logo} alt="" />
                </div>

            </div>
            <div className="anim-elements">
                <div className="el1"> </div>
                <div className="el2"> </div>
                <div className="el3"> </div>
                <div className="el4"> </div>
                <div className="el5"> </div>
            </div>
        </>
    )
}
