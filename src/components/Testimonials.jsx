import React, { useState, useEffect } from 'react'
import TestimonialsBg from '../assets/images/testimonials-bg.svg'
import TestimonialIcon from '../assets/images/testimonial-icon.svg'

import { Link } from 'react-router-dom' 
import './testimonials.css'
import StarRating from '../components/StarRating'

const Testimonials = () => { 

  const baseUrl = 'https://win25-jsf-assignment.azurewebsites.net';

  const [testimonials, setTestimonials] = useState([]);

  const getTestimonials = async () => {
    const res = await fetch(`${baseUrl}/api/blogs`);
    const data = await res.json();
    setTestimonials(data);
  } 
  useEffect(() => {
    getTestimonials();
  }, [])

  return (
    // ------  Testimonials section  --------- //
    <section className='testimonials'>
      <div className="container mx-auto px-4 py-5">

          {/* ------------  testimonials bg  ------------------ */}
        <div className='testimonials-img'>
            <Link className='testimonials-bg' to="/"><img src={TestimonialsBg} /></Link>
        </div>

          {/* ------------   testimonials texts  ------------------ */}
        <div className='testimonials-header'>
            <div className='testimonials-texts'>
                <h3 className='testimonials-title font-bold'>Testimonials</h3>
                <h2 className='testimonials-headline font-bold'>See What Our Client Have to Say</h2>
                <h4 className='testimonials-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit<span className='testimonials-text2 block'> nisi non sodales augue. Phasellus eget elit gravida.</span></h4>
            </div>
        </div>

        {/* ------------   testimonials items  ------------------ */}
        <div className='testimonials-items'>
          {testimonials.slice(0,3).map(item => (

            <div key={item.id} className='testimonial-item'>

              {/* -----     till /components/StarRating.jsx     ------- */}

              <StarRating starRating={item.rating} />
              <p className='comment'>{item.comment}</p>

              <div className='person'>
                <img className='profile' src={item.avatarUrl} alt={item.name} />
                <div className='person-info'>
                <h6 className='name'>{item.name}</h6>
                <p className='role'>{item.companyName}</p>
                </div>
                <Link className='testimonial-icon' to="/"><img src={TestimonialIcon} /></Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials