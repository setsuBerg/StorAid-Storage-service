import React, { useEffect, useState } from 'react'
import CalendarIcon from '../assets/images/calendar-icon.svg'

import { Link } from 'react-router-dom' 
import './latest-blog-and-news.css'

const LatestBlogandNews = () => {

    const baseUrl = 'https://win25-jsf-assignment.azurewebsites.net';

    const [latestBlogs, setLatestBlogs] = useState([]);

    const getLatestBlogandNews = async () => {
        const res = await fetch(`${baseUrl}/api/blogs`);
        const data = await res.json();
        setLatestBlogs(data);
    }
    useEffect(() => {
        getLatestBlogandNews();
    }, [])

  return (
    <section className='latest-blog-and-news'>
        <div className='container'>
            <div className='latest-blog-header'>
                <h4 className='latest-blog-title font-bold'>Latest Blog and News</h4>
                <div className='latest-blog-items'>
                    <h3 className='headline font-bold'>Check Out Our Latest Blog<span className='block'>and News Update</span></h3>
                    <h5 className='subhead'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui<span className='block'> lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus</span> eget elit gravida.</h5>
                </div>
            </div>

            <div className='latest-items'>
                {latestBlogs.slice(0,3).map(item => (
                    <div key={item.id} className='blogs-item'>
                        <img className='blog-img' src={item.imageUrl} alt={item.title} />
                        <h6 className='created'><img src={CalendarIcon} className='calendar-icon' alt='calendar-icon' />{item.created}</h6>
                        <h3 className='title font-semibold'>{item.title}</h3>
                        <h5 className='description'>{item.description}</h5>

                        <Link className='readmore' to="/">Read more →</Link>

                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default LatestBlogandNews