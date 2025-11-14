import React from 'react'
import WhyIcon1 from '../assets/images/whychooseus-icon1.svg'
import WhyIcon2 from '../assets/images/whychooseus-icon2.svg'
import WhyIcon3 from '../assets/images/whychooseus-icon3.svg'
import WhyIcon4 from '../assets/images/whychooseus-icon4.svg'
import WhyImg from '../assets/images/whychooseusimg.jpg'

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
                        <img className='whychooseus-icon' src={WhyIcon1} alt='' />
                        <div className='whychooseus-contents'>
                            <h4 className='whychooseus-contenttitle font-semibold'>Security and Safety</h4>
                            <h5 className='whychooseus-contenttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='block'> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></h5>
                        </div>

                    </div>
                    <div className='whychooseus-item'>
                        <img className='whychooseus-icon' src={WhyIcon2} alt='' />
                        <div className='whychooseus-contents'>
                            <h4 className='whychooseus-contenttitle font-semibold'>Flexible and Affordable</h4>
                            <h5 className='whychooseus-contenttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='block'> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></h5>
                        </div>

                    </div>
                    <div className='whychooseus-item'>
                        <img className='whychooseus-icon' src={WhyIcon3} alt='' />
                        <div className='whychooseus-contents'>
                            <h4 className='whychooseus-contenttitle font-semibold'>Clean and Well-Maintained Facilities</h4>
                            <h5 className='whychooseus-contenttext'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='block'> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></h5>
                        </div>

                    </div>
                    <div className='whychooseus-item'>
                        <img className='whychooseus-icon' src={WhyIcon4} alt='' />
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
                    <img className='whychooseus-photo' src={WhyImg} alt='Storage corridor with pink doors' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhyChooseUs