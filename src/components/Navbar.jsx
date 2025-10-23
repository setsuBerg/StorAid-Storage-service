import React from 'react'
import LogoType from '../assets/images/mainLogo.svg'
import IconTelephone from '../assets/images/icon-telephone.svg'
import IconEmail from '../assets/images/icon-email.svg'
import Facebook from '../assets/images/Facebook.svg'
import Humble from '../assets/images/Humble.svg'
import Instagram from '../assets/images/Instagram.svg'
import Youtube from '../assets/images/Youtube.svg'

import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
    return (
        // ------ Header ------- //
        <section className='header'>

                {/* first header */}
                <div className='topbar'>
                    <div className='contactitems'>
                        <Link className='icon-telephone' to="/"><img src={IconTelephone} /></Link>
                        <span className='telephonennumber'>+46 8 123 122 44</span>
                        <Link className='icon-email' to="/"><img src={IconEmail} /></Link>
                        <span>contact@domain.com</span>
                    </div>
                    <div className='toplogo'>

                            <Link className='facebook' to="/"><img src={Facebook} /></Link>
                            <Link className='humble' to="/"><img src={Humble} /></Link>
                            <Link className='instagram' to="/"><img src={Instagram} /></Link>
                            <Link className='youtube' to="/"><img src={Youtube} /></Link>
                    </div>
                </div>

                {/* secound header */}
                <div className="navbar">
                    <Link className="logo" to="/">
                        <img src={LogoType} />
                    </Link>
                    <nav>
                        <NavLink className="nav-link yellow" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                        <NavLink className="nav-link" to="/services">Services</NavLink>
                        <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
                    </nav>
                    
                    <button className="btn btn-primary">Book now</button>
                </div>
        </section>
    )
}
export default Navbar