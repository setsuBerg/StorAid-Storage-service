import React from 'react'
import Subscribe from '../components/Subscribe'


import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import Faqs from '../components/Faqs'
import GetInTouch from '../components/GetInTouch'
import FindUsOn from '../components/FindUsOn'

const ContactUs = () => {
  return (
    <>
    <PageHero title='Contact Us' />
    <Breadcrumb />
    <GetInTouch />
    <FindUsOn />

    <Faqs />
    <Subscribe />
    </>
  )
}

export default ContactUs