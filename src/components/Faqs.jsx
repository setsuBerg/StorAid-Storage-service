import { useEffect, useState } from 'react';

import iconUp from '../assets/images/icon-up.svg'
import iconDown from '../assets/images/icon-down.svg'

import '../components/faqs.css'


const Faqs = () => {

    const baseUrl = 'https://win25-jsf-assignment.azurewebsites.net';

    const [faqs, setFaqs] = useState([]);
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => setOpenId(prev => (prev === id ? null : id));

    const getFaqs = async () => {
        const res = await fetch(`${baseUrl}/api/faqs`);
        const data = await res.json();

        setFaqs(data);
    }

    useEffect(() => {
        getFaqs();
    }, []);

    return (
        <section className='faqs'>
            <div className='faqs-container'>

                <div className='faqs-header'>
                    <h3 className='faqs-title font-bold'>FAQs</h3>
                    <h2 className='headline font-semibold'>Frequently Ask Questions</h2>
                    <h6 className='header-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec<span className='block'> ullamcorper mattis, pulvinar dapibus leo.</span></h6>
                </div>

                <div className='accordion-wrapper'>
                    {faqs.slice(0,5).map(item => (           
                        
                        <div key={item.id} className={`faqs-accordion ${openId === item.id ? 'open' : ''}`}>
                            <h3 className='question' onClick={() => toggle(item.id)}>{item.title}<img className='icon-up' src={openId === item.id ? iconUp : iconDown} alt="" /></h3>
                            {openId === item.id && <button className='description'>{item.description}</button>}
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default Faqs