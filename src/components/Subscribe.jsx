import React, { useState } from 'react'

import './subscribe.css'

const Subscribe = () => {
    const [formData, setFormData] = useState({ email: '' })
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({})

    const validateField = (name, value) => {
        let error = '';


        if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
            error = "Must be an valid email (eg. username@example.com)."
        }

        setErrors(prev => ({...prev, [name]: error}));
    }

    const validateForm = () => {
        const newErrors = {}

        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
            newErrors.email = "Must be a valid email (eg. username@example.com)"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});

        if (value.trim() === '') {
            setErrors(prev => ({...prev,[name]: `This ${name} field is required.`}));
            return;
        } 

        setErrors(prev => ({...prev, [name]: '' }));
        validateField(name, value);
    };

    const handleOk = () => {
        setSubmitted(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        if(!validateForm()) return;

        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', { 
            method:'post',
            headers:{ 'Content-Type': 'application/json' },
            body: JSON.stringify(formData), 
        });
    
        if (res.ok) { 
            setSubmitted(true)
            setFormData({email: '' });
        };
    };

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
                            <input className='email' type='email' name='email' value={formData.email} onChange={handleChange} required placeholder='Enter your email' aria-label='email' aria-invalid={!!errors.email} />
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