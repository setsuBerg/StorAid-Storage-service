import React from 'react'
import Subscribe from '../components/Subscribe'


import Breadcrumb from '../components/Breadcrumb'
import PageHero from '../components/PageHero'
import Faqs from '../components/Faqs'

const ContactUs = () => {
  return (
    <>
    <PageHero title='Contact Us' />
    <Breadcrumb />

    <Faqs />
    <Subscribe />
    </>
  )
}

export default ContactUs