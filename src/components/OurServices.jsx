import React from 'react'

import Services from '../assets/images/services-img.svg'

import { Link } from 'react-router-dom' 

import './our-services.css'

const OurServices = () => {
  return (
        // ------ Our services section  ------- //
    <section className='our-services'>
        <div className="container mx-auto px-4 py-5">
                 {/* ---------- up side ------------- */}
            <div className='services-intro'>
                <h3 className='services-title font-bold'>Our Services</h3>

                <div className='services-maintext'>
                    <h2 className='services-headline font-bold block'>Specialized Storage for <span className='block'>Every Special Item</span></h2>
                    <h4 className='service-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<span className='block'>lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus</span>eget elit gravida.</h4>
                </div>
            </div>
                  {/* ------------- grid side ------------------ */}
            <div className='service-boxes left'>
                <div className='service-box1'> 
                    <h3 className='service-boxtitle font-semibold'>Diverse Unit Sizes</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur<span className='block'>adipiscing elit. Ut elit tellus, luctus nec</span>ullamcorper mattis, pulvinar dapibus leo.</h4>
                </div>
                <div className='service-box2'>
                    <h3 className='service-boxtitle font-semibold'>Moving Assistance</h3>
                    <h4>Lorem ipsum dolor sit amet, consectetur<span className='block'>adipiscing elit. Ut elit tellus, luctus nec</span>ullamcorper mattis, pulvinar dapibus leo.</h4>
                </div>
            </div>

            <div className='service-img'>
                <Link className='services' to="/"><img src={Services} /></Link>
            </div>

            <div className='service-boxes right'>
                <div className='service-box3'>
                    <h3 className='service-boxtitle font-semibold'>Vehicle Storage</h3>
                    <h4 className='block'>Lorem ipsum dolor sit amet, consectetur<span className='block'>adipiscing elit. Ut elit tellus, luctus nec</span>ullamcorper mattis, pulvinar dapibus leo.</h4>
                </div>
                <div className='service-box4'>
                    <h3 className='service-boxtitle font-semibold'>Top-Notch Security</h3>
                    <h4 className='block'>Lorem ipsum dolor sit amet, consectetur<span className='block'>adipiscing elit. Ut elit tellus, luctus nec</span>ullamcorper mattis, pulvinar dapibus leo.</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurServices