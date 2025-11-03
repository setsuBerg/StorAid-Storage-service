import React from 'react'
import AboutUsSection from '../components/AboutUsSection'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import Subscribe from '../components/Subscribe'

import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'

const AboutUs = () => {
  return (
    <>
      <PageHero title='About Us' />
      <Breadcrumb />
    
      <AboutUsSection />
      <Brands />
      <Testimonials />
      <WhyChooseUs />
      <Subscribe />
    </>
    
  )
}

export default AboutUs