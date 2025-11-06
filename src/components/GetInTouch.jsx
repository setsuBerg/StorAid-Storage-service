import React from 'react'
import getImg from '../assets/images/get-img.svg'
import '../components/get-in-touch.css'

const GetInTouch = () => {
  return (
    <section>
        <div className='get-in-touch'>
            <div className='get-container'>
                <div className='get-header'>
                    <h3 className='get-title font-bold'>Get in Touch</h3>
                    <h2 className='get-headline font-bold'>Get Personalized Assistance<span className='block'>– Contact Us</span></h2>
                    <h5 className='get-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<span className='block'> ullamcorper mattis, pulvinar dapibus leo</span></h5>
                    <img className='get-img' src={getImg} alt="" />
                </div>

                <div className='getform-body'>
                    <div className='getform-group'>
                        <label htmlFor="name">Your Name<span className='asterisk'>*</span></label>
                        <input type="text" name="name" id="name" placeholder='Your name' />

                        <div className='get-contact'>
                            <label htmlFor="email">Email<span className='asterisk'>*</span></label>
                            <input type="email" name="email" id="email" placeholder='Email' />
                            <label htmlFor="telephone">Telephone</label>
                            <input type="telephone" name="telephone" id="telephone" placeholder='Telephone' />
                        </div>

                        <label htmlFor="subject">Subject<span className='asterisk'>*</span></label>
                        <input type="text" name="subject" id="subject" placeholder='How can we help you' />

                        <label htmlFor="comments">Comments/Questions<span className='asterisk'>*</span></label>
                        <textarea name="comments" id="comments" placeholder='Comments'></textarea>

                        <button className='submit' type='submit'>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default GetInTouch