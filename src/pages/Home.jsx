import React from 'react'

import Hero from '../components/Hero' 
import AboutUsSection from '../components/AboutUsSection'
import Brands from '../components/Brands'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import PricingPlan from '../components/PricingPlan'
import LookingForSecure from '../components/LookingForSecure'
import LatestBlogandNews from '../components/LatestBlogandNews'
import Subscribe from '../components/Subscribe'


const Home = () => {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <Brands />
      <OurServices />
      <Testimonials />
      <WhyChooseUs />
      <PricingPlan />
      <LookingForSecure />
      <LatestBlogandNews />
      <Subscribe />
    </>
  )
}

export default Home