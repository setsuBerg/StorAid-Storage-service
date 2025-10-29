import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../pages/AboutUs'
import AboutUsSection from '../components/AboutUsSection'
import Brands from '../components/Brands'
import OurServices from '../components/OurServices'
import Testimonials from '../components/Testimonials'


const Home = () => {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <Brands />
      <OurServices />
      <Testimonials />

      {/* 
      <WhyUs />
      <SuccessStory />
      <RecentProjects />
      <ImageSlider /> */}
    </>
  )
}

export default Home