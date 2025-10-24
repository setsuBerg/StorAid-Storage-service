import React from 'react'
import Human from '../assets/images/human.svg'

import { Link } from 'react-router-dom' 

import './Hero.css'

export default function Hero () {
  return (
    // -------- HERO section ----------- //
    <section className='hero'>
      <div className="container mx-auto px-4 py-5 ">

        {/* ----------- Hero main text ------------ */}

        <div className='main-text'>
          <h3 className='h3 text-amber-300'>Welcome to StorAid</h3>
          <h1 className='title'>Space Simplified, <span className='second-line'>Storage Perfected</span></h1>
          <p className='hero-sentence'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
          <button className="btn text-sm text-[var(--color-secondary)] bg-[var(--color-accent)] font-semibold rounded-lg hover:bg-white hover:text-[var(--color-secondary)] focus:outline-none focus:ring-2 ">Discover More</button>
        </div>

        <div className='hero-img'>
          <Link className='hero-src' to="/"><img src={Human} /></Link>
        </div>
      </div>
    </section>
  )
}