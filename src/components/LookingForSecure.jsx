import React from 'react'

import { Link } from 'react-router-dom' 
import './looking-for-secure.css'

const LookingForSecure = () => {
  return (
    <section className='looking-for-secure'>
        <div className='container'>
            <div className='looking-items'>
                <h2 className='looking-headline'>Looking for Secure and Flexible Storage? Find<span className='block'>Your Perfect Fit With Us.</span></h2>
                <h5 className='looking-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit<span className='block'> nisi non sodales augue. Phasellus eget elit gravida.</span></h5>
                <button className="btn text-sm text-[var(--color-secondary)] bg-[var(--color-accent)] font-bold rounded-lg hover:bg-white hover:text-[var(--color-secondary)] focus:outline-none focus:ring-2 ">Book Now</button>
            </div>
        </div>
    </section>
  )
}

export default LookingForSecure
