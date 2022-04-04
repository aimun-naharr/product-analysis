import React from 'react';
import './review.css'
const Review = (props) => {
    const {name, image, review, rating}=props.reviews
    return (
        <div className='border-2 card p-2'>
           <div className='flex items-center'>
               <div className=''>
                   <img src={image} alt="" />
               </div>
               <div className='ml-3'>{name}</div>
           </div>
           <div className='mt-3'>
               <p>{review}</p>
           </div>
           <div>Rating: {rating}</div>
        </div>
    );
};

export default Review;