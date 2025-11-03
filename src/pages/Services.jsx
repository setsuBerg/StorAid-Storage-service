import React from 'react'

import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import LookingForSecure from '../components/LookingForSecure'
import Subscribe from '../components/Subscribe'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'

const Services = () => {
  return (
    <>
      <PageHero title='Services' />
      <Breadcrumb />
      
      <OurServices />
      <Testimonials />
      <LookingForSecure />
      <Subscribe />
    </>
  )
}

export default Services