import React from 'react'
import WhyIcon1 from '../assets/images/whychooseus-icon1.svg'
import WhyIcon2 from '../assets/images/whychooseus-icon2.svg'
import WhyIcon3 from '../assets/images/whychooseus-icon3.svg'
import WhyIcon4 from '../assets/images/whychooseus-icon4.svg'
import WhyImg from '../assets/images/whychooseusimg.svg'

import { Link } from 'react-router-dom' 
import './whychooseus.css'

const WhyChooseUs = () => {
  return (
    // ------  Why Choose Us section  --------- //
    <section className='whychooseus'>
        <div className='container mx-auto px-4 py-5'>
            <div className='whychooseus-texts'>
                <h3 className='whychooseus-title font-bold'>Why Choose Us</h3>
                <h2 className='whychooseus-headline font-bold'>Choose Us for Exceptional<span className='block'> Storage Solutions</span></h2>

                <div className='whychooseus-items'>
                    <div className='whychooseus-item'>
                        <Link className='whychooseus-icon' to="/"><img src={WhyIcon1} /></Link>
                        <div className='whychooseus-contents'>
                            <h4 className='whychooseus-contenttitle font-semibold'>Security and Safety</h4>
                            <h5 className='whychooseus-contenttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='block'> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></h5>
                        </div>

                    </div>
                    <div className='whychooseus-item'>
                        <Link className='whychooseus-icon' to="/"><img src={WhyIcon2} /></Link>
                        <div className='whychooseus-contents'>
                            <h4 className='whychooseus-contenttitle font-semibold'>Flexible and Affordable</h4>
                            <h5 className='whychooseus-contenttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='block'> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></h5>
                        </div>

                    </div>
                    <div className='whychooseus-item'>
                        <Link className='whychooseus-icon' to="/"><img src={WhyIcon3} /></Link>
                        <div className='whychooseus-contents'>
                            <h4 className='whychooseus-contenttitle font-semibold'>Clean and Well-Maintained Facilities</h4>
                            <h5 className='whychooseus-contenttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='block'> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></h5>
                        </div>

                    </div>
                    <div className='whychooseus-item'>
                        <Link className='whychooseus-icon' to="/"><img src={WhyIcon4} /></Link>
                        <div className='whychooseus-contents'>
                            <h4 className='whychooseus-contenttitle font-semibold'>24/7 and Convenient Access</h4>
                            <h5 className='whychooseus-contenttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='block'> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></h5>
                        </div>

                    </div>
                </div>

            </div>
            <div className='whychooseus-side'>
                <h4 className='whychooseus-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<span className='block'> lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus</span> eget elit gravida.</h4>
                <div className='whychooseus-img'>
                    <Link className='whychooseus-photo' to="/"><img src={WhyImg} /></Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs