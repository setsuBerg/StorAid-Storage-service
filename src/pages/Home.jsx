import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../pages/AboutUs'
import AboutUsSection from '../components/AboutUsSection'
import Brands from '../components/Brands'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'
import WhyChooseUs from '../components/WhyChooseUs'
import PricingPlan from '../components/PricingPlan'


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
    </>
  )
}

export default Home