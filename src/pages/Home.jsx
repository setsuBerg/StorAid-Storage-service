import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../pages/AboutUs'
import AboutUsSection from '../components/AboutUsSection'
import Brands from '../components/Brands'


const Home = () => {
  return (
    <>
      <Hero />
      <AboutUsSection />
      <Brands />
      {/* <OurServices />
      <WhyUs />
      <SuccessStory />
      <RecentProjects />
      <ImageSlider /> */}
    </>
  )
}

export default Home