import React from 'react'

import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import LookingForSecure from '../components/LookingForSecure'
import Subscribe from '../components/Subscribe'
import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import Faqs from '../components/Faqs'

const Services = () => {
  return (
    <>
      <PageHero title='Services' />
      <Breadcrumb />
      
      <OurServices />
      <Testimonials />
      <Faqs />
      <LookingForSecure />
      <Subscribe />
    </>
  )
}

export default Services