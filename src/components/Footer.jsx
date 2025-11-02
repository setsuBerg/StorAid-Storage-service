import React from 'react'
import FooterIcon from '../assets/images/footer-icon.svg'

import './footer.css'

export const Footer = () => {

  return (
    <footer className='footer'>
      <div className='container mx-auto px-4 py-5'>

        <footer className='copyright'>
          <p className='credit'>&copy; 2025 StorAid, All rights reserved.</p>
        </footer>

        <div className='fotter-items'>
          <div className='footer-item'>
            <img src={FooterIcon} className='footer-icon' alt="footer-icon" />
            <h6>Terms & Conditions</h6>
          </div>
          <div className='footer-item'>
            <img src={FooterIcon} className='footer-icon' alt="footer-icon" />
            <h6>Privacy Policy</h6>
          </div>
        </div>

      </div>
    </footer>
  )
}
export default Footer