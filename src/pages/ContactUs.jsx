import React from 'react'
import Subscribe from '../components/Subscribe'


import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import Faqs from '../components/Faqs'
import GetInTouch from '../components/GetInTouch'

const ContactUs = () => {
  return (
    <>
    <PageHero title='Contact Us' />
    <Breadcrumb />
    <GetInTouch />

    <Faqs />
    <Subscribe />
    </>
  )
}

export default ContactUs