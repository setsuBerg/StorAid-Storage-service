import React from 'react'
import DollarIcon from '../assets/images/dollar-icon.svg'

import './pricingplan.css'

const PricingPlan = () => {
  return (

    <section className='pricingplan'>

        <div className='container'>
            <div className='pricing-header'>
                <h3 className='pricing-title font-bold'>Pricing Plan</h3>
                <h2 className='pricing-headline font-bold'>Find the Perfect Plan for<span className='block'> Your Storage Needs</span></h2>
            </div>

            <div className='pricing-cards'>
                <div className='pricing-card'>
                    <div className='pricing-upside'>
                        <h4 className='card-title font-semibold'>Small Unit</h4>
                        <div className='card-upside'>
                            <div className='card-price'>
                                <img className='dollar-icon' src={DollarIcon} alt='' />
                                <h4 className='price'>50</h4>
                                <h5 className='payments'>/month</h5>
                            </div>
                            <div className='card-item'>
                                <h6 className='card-text'>Phasellus sollicitudin sapien eu<span className='block'>massa accumsan, quis semper</span>odio suscipit.</h6>
                                <div className='line'></div>
                            </div>
                        </div>
                    </div>

                    <div className='pricing-downside'>
                        <ul className='card-downside'>
                             <li className='list'><span className='check-icon'></span><h6>Nam nec ipsum in dolor</h6></li>
                            <li className='list'><span className='check-icon'></span><h6>Fusce nec ligula ut arcu</h6></li>
                            <li className='list'><span className='check-icon'></span><h6>Aliquam pulvinar arcu in</h6></li>
                            <li className='list'><span className='check-icon'></span><h6>Duis gravida enim porta</h6></li>
                            <li className='list'><span className='check-icon'></span><h6>Etiam eget libero non ligula</h6></li>
                        </ul>
                    </div>
                    <div className='pricing-btn'>
                        <button className='btn text-[var(--color-secondary)] bg-[var(--color-accent)] font-semibold rounded-lg focus:outline-none focus:ring-2'>Rent Now</button>
                    </div>
                </div>
                <div className='pricing-card'>
                    <div className='pricing-upside'>
                        <h4 className='card-title font-semibold'>Medium Unit</h4>
                        <div className='card-upside'>
                            <div className='card-price'>
                                <img className='dollar-icon' src={DollarIcon} alt='' />
                                <h4 className='price'>100</h4>
                                <h5 className='payments'>/month</h5>
                            </div>
                            <div className='card-item'>
                                <h6 className='card-text'>Phasellus sollicitudin sapien eu<span className='block'>massa accumsan, quis semper</span>odio suscipit.</h6>
                                <div className='line'></div>
                            </div>
                        </div>
                    </div>

                    <div className='pricing-downside'>
                        <ul className='card-downside'>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Aliquam pulvinar arcu in</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Fusce nec ligula ut arcu</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Duis gravida enim porta</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Etiam eget libero non ligula</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Nam nec ipsum in dolor</h6></li>
                        </ul>
                    </div>
                    <div className='pricing-btn'>
                        <button className='btn text-[var(--color-secondary)] bg-[var(--color-accent)] font-semibold rounded-lg focus:outline-none focus:ring-2'>Rent Now</button>
                    </div>
                </div>
                <div className='pricing-card'>
                    <div className='pricing-upside'>
                        <h4 className='card-title font-semibold'>Large Unit</h4>
                        <div className='card-upside'>
                            <div className='card-price'>
                                <img className='dollar-icon' src={DollarIcon} alt='' />
                                <h4 className='price'>150</h4>
                                <h5 className='payments'>/month</h5>
                            </div>
                            <div className='card-item'>
                                <h6 className='card-text'>Phasellus sollicitudin sapien eu<span className='block'>massa accumsan, quis semper</span>odio suscipit.</h6>
                                <div className='line'></div>
                            </div>
                        </div>
                    </div>

                    <div className='pricing-downside'>
                        <ul className='card-downside'>
                             <li className='list'><span className='check-icon' to="/"></span><h6>Nam nec ipsum in dolor</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Fusce nec ligula ut arcu</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Aliquam pulvinar arcu in</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Duis gravida enim porta</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Etiam eget libero non ligula</h6></li>
                        </ul>
                    </div>
                    <div className='pricing-btn'>
                        <button className='btn text-[var(--color-secondary)] bg-[var(--color-accent)] font-semibold rounded-lg focus:outline-none focus:ring-2'>Rent Now</button>
                    </div>
                </div>
                <div className='pricing-card'>
                    <div className='pricing-upside'>
                        <h4 className='card-title font-semibold'>Executive Unit</h4>
                        <div className='card-upside'>
                            <div className='card-price'>
                                <img className='dollar-icon' src={DollarIcon} alt='' />
                                <h4 className='price'>200</h4>
                                <h5 className='payments'>/month</h5>
                            </div>
                            <div className='card-item'>
                                <h6 className='card-text'>Phasellus sollicitudin sapien eu<span className='block'>massa accumsan, quis semper</span>odio suscipit.</h6>
                                <div className='line'></div>
                            </div>
                        </div>
                    </div>

                    <div className='pricing-downside'>
                        <ul className='card-downside'>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Nam nec ipsum in dolor</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Duis gravida enim porta</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Etiam eget libero non ligula</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Fusce nec ligula ut arcu</h6></li>
                            <li className='list'><span className='check-icon' to="/"></span><h6>Aliquam pulvinar arcu in</h6></li>
                        </ul>
                    </div>
                    <div className='pricing-btn'>
                        <button className='btn text-[var(--color-secondary)] bg-[var(--color-accent)] font-semibold rounded-lg focus:outline-none focus:ring-2'>Rent Now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PricingPlan