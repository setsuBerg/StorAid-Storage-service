import React from 'react'
import LogoType from '../assets/images/mainLogo.svg'
import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container-navbar">
                <Link className="logo" to="/">
                    <img src={LogoType} />
                
                </Link>
                <nav>
                    <NavLink className="nav-link" to="/about">About</NavLink>
                    <NavLink className="nav-link" to="/services">Services</NavLink>
                    <NavLink className="nav-link" to="/projects">Projects</NavLink>
                    <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </nav>
                <div className="search">
                    <i className="fa-regular fa-magnifying-glass"></i>
                </div>
                <button className="btn btn-primary">Book now</button>
            </div>
        </div>

    )
}
export default Navbar