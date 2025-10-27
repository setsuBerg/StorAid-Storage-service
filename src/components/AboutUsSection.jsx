import React from 'react'
import AboutImg from '../assets/images/aboutus-section.svg'
import AboutIcon from '../assets/images/telephone-icon.svg'

import { Link } from 'react-router-dom' 

import './AboutUsSection.css'

const AboutUsSection = () => {
  return (

    // ------ About us section  --Git--> about-us---- //
    <section className='aboutus-section'>
      <div className="container mx-auto px-4 py-5">
        
        {/* left side */}
        <div className='aboutus-items'>

          <div className='aboutus-img'>
            <Link className='aboutus-section-img' to="/"><img src={AboutImg} /></Link>
          </div>

          <div className='aboutus-box'>

            <div className='bg-box bg-[var(--color-secondary)]'>
              <div className='box-text'>
                <h3 className='textplus font-extrabold'>12+</h3>
                <p className='textwhite text-[var(--color-family)] color-[var(--color-primary)]'>Years of Experience</p>
              </div>
              <div className='box-text'>
                <h3 className='textplus  font-extrabold'>150K+</h3>
                <p className='textwhite text-[var(--color-family)] color-[var(--color-primary)]'>Satisfied Clients</p>
              </div>
              <div className='box-text'>
                <h3 className='textplus  font-extrabold'>35+</h3>
                <p className='textwhite text-[var(--color-family)] color-[var(--color-primary)]'>Warehouse</p>
              </div>
            </div>
          </div>
        </div>
         {/* right side */}
        <div className='aboutus-providing'>
          <div className='text-aboutus'>
            <h3 className='h3 font-bold'>About Us</h3>
            <h2 className='h2 font-bold block'>Providing a Safe Space for<span className='h2 font-bold block'>Your Treasured Items</span></h2>
            <p className='p-text block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui <span className='p-text block'>lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue.</span>Phasellus eget elit gravida.</p>
          </div>
          <div className='aboutus-boxes'>
            <div className='vision-box border-2 border-[var(--color-accent)] rounded-md'>
              <h3 className='box-h3 font-semibold'>Vision</h3>
              <p className='boxes-p'>Sed ut perspiciatis unde omnis iste<span className='block'>natus error sit voluptatem accusan</span>tium doloremque laudantium.</p>
            </div>
            <div className='mission-box border-2 border-[var(--color-accent)] rounded-md'>
              <h3 className='box-h3 font-semibold'>Mission</h3>
              <p className='boxes-p'>Sed ut perspiciatis unde omnis iste<span className='block'>natus error sit voluptatem accusan</span>tium doloremque laudantium.</p>
            </div>
          </div>
          <div className='btn-infor'>
            <button className="btn text-[var(--color-secondary)] bg-[var(--color-accent)] font-semibold rounded-lg focus:outline-none focus:ring-2 ">Discover More</button>

            <div className='telephone-icon-img'>
              <Link className='about-src' to="/"><img src={AboutIcon} /></Link>
            </div>
            <div className='about-infor'>
              <h3 className='more-infor text-[var(--color-secondary)] font-semibold'>More Information</h3>
              <h4 className='more-number text-[var(--color-secondary)] font-semibold'>+46 8 123 122 44</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsSection