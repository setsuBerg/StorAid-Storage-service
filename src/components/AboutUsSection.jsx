import React from 'react'
import AboutUsSection from '../assets/images/aboutus-section.svg'

import './AboutUsSection.css'

const AboutUsSection = () => {
  return (

    // ------ About us section ------- //
    <section className='aboutus-section'>
        <div className="container mx-auto px-4 py-5 ">


            <div className='aboutus-home'>
            <Link className='aboutus-section-img' to="/"><img src={AboutUsSection} /></Link>
            </div>

        </div>


    </section>

  )
}

export default AboutUsSection