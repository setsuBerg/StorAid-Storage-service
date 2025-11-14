import React from 'react'

import Brand1 from '../assets/images/logo1.svg'
import Brand2 from '../assets/images/logo2.svg'
import Brand3 from '../assets/images/logo3.svg'
import Brand4 from '../assets/images/logo4.svg'
import Brand5 from '../assets/images/logo5.svg'

import './brands.css'


const Brands = () => {
  return (
    //---------- Brands section ----------------- //
    <section className='brands'>
        <div className="container mx-auto px-4 py-5">
            <div className='brand-logos'>
                <img className='brand1' src={Brand1} alt='' />
                <img className='brand2' src={Brand2} alt='' />
                <img className='brand3' src={Brand3} alt='' />
                <img className='brand4' src={Brand4} alt='' />
                <img className='brand5' src={Brand5} alt='' />
            </div>
        </div>
    </section>
  )
}

export default Brands