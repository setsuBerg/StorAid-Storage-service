import React from 'react'

import Brand1 from '../assets/images/logo1.svg'
import Brand2 from '../assets/images/logo2.svg'
import Brand3 from '../assets/images/logo3.svg'
import Brand4 from '../assets/images/logo4.svg'
import Brand5 from '../assets/images/logo5.svg'

import { Link } from 'react-router-dom' 

import './brands.css'


const Brands = () => {
  return (
    //---------- Brands section ----------------- //
    <section className='brands'>
        <div className="container mx-auto px-4 py-5">
            <div className='brand-logos'>
                <Link className='brand1' to="/"><img src={Brand1} /></Link>
                <Link className='brand2' to="/"><img src={Brand2} /></Link>
                <Link className='brand3' to="/"><img src={Brand3} /></Link>
                <Link className='brand4' to="/"><img src={Brand4} /></Link>
                <Link className='brand5' to="/"><img src={Brand5} /></Link>
            </div>
        </div>
    </section>
  )
}

export default Brands