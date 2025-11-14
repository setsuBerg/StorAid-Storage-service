import React from 'react'

import FindHuman from '../assets/images/find-human.png'
import FindTele from '../assets/images/find-tele-icon.svg'
import FindEmail from '../assets/images/find-email-icon.svg'
import FindLocation from '../assets/images/find-location-icon.svg'

import Facebook from '../assets/images/Facebook.svg'
import Humble from '../assets/images/Humble.svg'
import Instagram from '../assets/images/Instagram.svg'
import Youtube from '../assets/images/Youtube.svg'

import './find-us-on.css'

const FindUsOn = () => {

  return (
    <section>
        <div className='find-us-on'>
            <div className='find-container'>
                <div className='img-side'>
                    <img className='find-human' src={FindHuman} alt="" />
                </div>

                <div className='find-content'>

                    <div className='find-header'>
                        <h3 className='find-title font-bold'>Find Us On:</h3>
                        <h5 className='find-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<span className='block'> luctus nec ullamcorper mattis, pulvinar dapibus leo.</span></h5>

                    </div>

                    <div className='find-items'>
                        <div className='find-contact'>
                            <span className='icon-bg'><img className='find-img' src={FindTele} alt="" /></span>
                            <div className='find-item'>
                                <h4 className='title'>Call Center</h4>
                                <h6>+46 8 123 122 44</h6>
                            </div>
                        </div>

                        <div className='find-contact'>
                            <span className='icon-bg'><img className='find-img' src={FindEmail} alt="" /></span>
                            <div className='find-item'>
                                <h4 className='title'>Email Address</h4>
                                <h6>contact@domain.com</h6>
                            </div>
                        </div>

                        <div className='find-contact'>
                            <span className='icon-bg'><img className='find-img' src={FindLocation} alt="" /></span>
                            <div className='find-item'>
                                <h4 className='title'>Location</h4>
                                <h6>Klarabergsviadukten 90, Stockholm</h6>
                            </div>
                        </div>

                        <div className='socialmedia'>
                            <h5 className='title'>Our Social Media</h5>

                            <span className='find-line'></span>

                            <a target='_blank' className='icon'><img src={Facebook} /></a>
                            <a target='_blank' className='icon'><img src={Humble} /></a>
                            <a target='_blank' className='icon'><img src={Instagram} /></a>
                            <a target='_blank' className='icon'><img src={Youtube} /></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default FindUsOn