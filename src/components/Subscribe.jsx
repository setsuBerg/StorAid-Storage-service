import React, { useState } from 'react'

import { Link } from 'react-router-dom' 
import './subscribe.css'

const Subscribe = () => {
    const [formData, setFormData] = useState({ email: '' })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})

        if (value.trim() === '') {
        setErrors(prevErrors => ({...prevErrors,[name]: `This ${name} field is required.`}))
        } else {
            setErrors(prevErrors => ({...prevErrors,[name]: '' }))
        }
    }   
    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
            Object.keys(formData).forEach(field => {

                if(formData[field].trim() === ''){
                    newErrors[field] = `This ${field} field is required.`
                }
            })
            if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', { 
            method:'post',
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify(formData), 
        })
    
        if (res.ok) { 
            setSubmitted(true)
            setFormData({email: '' })
        }
    }

    // if(submitted){
    //     return(
    //         <div className='informationreaction'>
    //         <h1>Thank you your subscription!</h1>
    //         <p>We will get back to you as soon as we can</p>
    //         <button className='btn-info' onClick={handleOk}>Ok</button>
    //         </div>
    //     )
    // }

    return (
        <section className='subscribe'>
            <div className='container'>
                <div className='subscribe-title'>
                    <h3 className='maintext font-bold'>Subscribe Our Newsletter</h3>
                    <h6 className='description'>Subscribe to our newsletter to receive early discount offers, updates and info</h6>
                </div>

                <div className='form-group'>
                    <form onSubmit={handleSubmit} noValidate>
                        <div className='field'>
                            <input className='email' type='email' name='email' value={formData.email} onChange={handleChange} required placeholder='Enter your email' aria-label='email' />
                            <span className='asterisk' aria-hidden>*</span>
                            <span className='error-text'>{errors.email && errors.email}</span>
                         </div>
                        <button className='submit' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Subscribe