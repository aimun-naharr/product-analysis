import React from 'react';
import useReviews from '../Hooks/usereviews';
import Review from '../review/Review';

const Reviews = () => {
    const productReviews= useReviews()
    return (
        <div className='grid grid-cols-1 mx-auto h-full justify-items-center mt-4 md:grid-cols-2 xl:grid-cols-4'>
           {
               productReviews.map(review=><Review reviews={review} key={review.id}></Review>)
           }
        </div>
    );
};

export default Reviews;