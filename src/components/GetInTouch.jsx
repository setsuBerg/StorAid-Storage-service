import React, { useState } from 'react'
import getImg from '../assets/images/get-img.jpg'
import '../components/get-in-touch.css'

const GetInTouch = () => {

    const [formData, setFormData] = useState({name:'', email:'', phoneNumber:'', subject:'', comments:''});
    const [errors, setErrors] = useState({});

    const validateField = (name, value) => {
        let error = ''

        if (name === 'name' && !/^[A-Öa-ö\s\-]{2,20}$/.test(value)) {
            error = "Must be at least 2 character long, no numbers."
        } else if (name === 'email' && !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)) {
            error = "Must be an valid email (eg. username@example.com)."
        } else if (name === 'subject' && value.trim().length < 2) {
            error = "Must enter a subject."
        } else if (name === 'comments' && value.trim().length < 5) {
            error = "Must be atleatest 5 characters."
        }

        setErrors(prev => ({...prev, [name]: error}));
    }

    const validateForm = () => {
        const newErrors = {}

        if (!/^[A-Öa-ö\s\-]{2,20}$/.test(formData.name)) {
            newErrors.name = "Must be at least 2 character long, no numbers."
        }
        if (!/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)) {
            newErrors.email = "Must be a valid email (eg. username@example.com)"
        }
        if (!formData.subject?.trim() || formData.subject.trim().length < 2) {
            newErrors.subject = "Must enter a subject"
        }
        if (!formData.comments?.trim() || formData.comments.trim().length <5) {
            newErrors.comments = "Must be at least 5 character long comments/Questions"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0;
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({...prev, [name]: value}));

        validateField(name, value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm())
            return;

    }

  return (
    <section>
        <div className='get-in-touch'>
            <div className='get-container'>
                <div className='get-header'>
                    <h3 className='get-title font-bold'>Get in Touch</h3>
                    <h2 className='get-headline font-bold'>Get Personalized Assistance<span className='block'>– Contact Us</span></h2>
                    <h5 className='get-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<span className='block'> ullamcorper mattis, pulvinar dapibus leo</span></h5>
                    <img className='get-img' src={getImg} alt="Customer support" />
                </div>

                <form className='getform-body' onSubmit={handleSubmit} noValidate>
                    <div className='getform-group'>
                        <label htmlFor="name">Your Name<span className='asterisk'>*</span></label>
                        <input type="text" name="name" id="name" placeholder='Your name' required onChange={handleInputChange} aria-invalid={!!errors.name} />
                        {errors.name && <span className='validation-error'>{errors.name}</span>}

                        <div className='get-contact'>
                            <div className='email-side'>
                                <label htmlFor="email">Email<span className='asterisk'>*</span></label>
                                <input type="email" name="email" id="email" placeholder='Email' required onChange={handleInputChange} aria-invalid={!!errors.email} />
                                {errors.email && <span className='validation-error'>{errors.email}</span>}
                            </div>
                            <div className='phoneNumber-side'>
                                <label htmlFor="phoneNumber">Telephone</label>
                                <input type="tel" name="phoneNumber" id="phoneNumber" placeholder='Telephone' />
                            </div>
                        </div>

                        <label htmlFor="subject">Subject<span className='asterisk'>*</span></label>
                        <input type="text" name="subject" id="subject" placeholder='How can we help you' required onChange={handleInputChange} aria-invalid={!!errors.subject} />
                        {errors.subject && <span className='validation-error'>{errors.subject}</span>}

                        <label htmlFor="comments">Comments/Questions<span className='asterisk'>*</span></label>
                        <textarea name="comments" id="comments" placeholder='Comments' required onChange={handleInputChange} aria-invalid={!!errors.comments}></textarea>
                        {errors.comments && <span className='validation-error'>{errors.comments}</span>}


                        <button className='submit' type='submit'>Submit</button>

                    </div>
                </form>

            </div>
        </div>
    </section>
  )
}

export default GetInTouch