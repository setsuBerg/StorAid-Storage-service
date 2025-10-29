import React from 'react'

const StarRating = ({starRating = 0 }) => {

    const maxStars = 5
    const filledStars = starRating || 0
    const emptyStars = maxStars - filledStars

    return (

        <div className='star-rating'>
            {
                [...Array(filledStars)].map((_, index) => (
                    <i key={index} className='fa-star fa-solid'></i>
                ))
            }
    
            {
                [...Array(emptyStars)].map((_, index) => (
                    <i key={index} className='fa-star fa-solid'></i>
                ))
            }

        </div>
    )
}

export default StarRating