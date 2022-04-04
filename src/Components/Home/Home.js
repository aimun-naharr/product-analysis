import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useReviews from '../Hooks/usereviews';
import Review from '../review/Review';
import './Home.css'
const Home = () => {
    const productReviews=useReviews()
    const reviews=productReviews.slice(0,3)
    
    
    return (
        <div>
            <div className='h-full grid items-center grid-cols-1 justify-items-center justify-center md:grid-cols-2'>
                <div className='left-section m-2 p-6'>
                    <h1 className='text-6xl font-bold blue-color'>Feel the bass</h1>
                    <h1 className='text-6xl font-bold orange-color'>in your bones</h1>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id sapiente eum blanditiis iusto commodi deleniti laboriosam minus eaque, distinctio quam sit, porro voluptatum accusamus. A exercitationem modi ullam, minima deleniti quas mollitia, iure harum, consequatur impedit natus cum? Excepturi.</p>
                </div>
                <div className='right-section'>
                    <img src="https://www.gadstyle.com/wp-content/uploads/2021/11/baseus-encok-d02-pro-wireless-bluetooth-headphones-white.jpeg" alt="" />
                </div>
            </div>
            <div className='mt-6 mb-6'>
              <h1 className='flex justify-center text-4xl font-bold'><span className='blue-color'>Customer</span> <span className='orange-color ml-2'>Reviews</span></h1>
                <div className='grid grid-cols-1 mx-auto h-full justify-items-center mt-4 md:grid-cols-3'>
                        {
                            reviews.map(review=><Review reviews={review} key={review.id}></Review>)
                        }
                </div>
                <div className='flex justify-center button mx-auto mt-12 rounded p-2'>
                <Link to='/reviews'>See all reviews</Link>
                </div>
                
                
            </div>
            
        </div>
    );
};

export default Home;