import React from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ContactUs from '../ContactUs'
import './Navbar.style.css'

const NavigationBar = () => {
    return (
        <>
            <Nav className="justify-content-center img-travel">
               <div className="navbar">
                    <ul className="navbar-ul">
                        <div>
                            <Link to="/">
                               <li className="navbar-li"><button className="draw-border">Home</button></li>
                            </Link>
                        </div>
                        <div>
                            <li className="navbar-li">
                            <Link to="/ContactUs">
                                <button className="draw-border">Contact Us</button>
                            </Link>
                            </li>
                        </div>
                        <Link to="/SignOut">
                        <li className="navbar-li"><button className="draw-border">Sign Out</button></li>
                        </Link>
                    </ul>
               </div>
            </Nav>
        </>
    )
}

export default NavigationBar
