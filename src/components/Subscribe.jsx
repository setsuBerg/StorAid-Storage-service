import React from 'react'


import { Link } from 'react-router-dom' 
import './subscribe.css'

const Subscribe = () => {

  return (
    <section className='subscribe'>
        <div className='container'>
            <div className='subscribe-title'>
                <h3 className='maintext font-bold'>Subscribe Our Newsletter</h3>
                <h6 className='description'>Subscribe to our newsletter to receive early discount offers, updates and info</h6>
            </div>

            <div>
                <form action="">
                    <label htmlFor=""></label>
                    <input className='email' type='email' name='email' placeholder='Enter your email' />
                </form>
                <button type='submit'>Submit</button>
            </div>
        </div>
    </section>
  )
}

export default Subscribe