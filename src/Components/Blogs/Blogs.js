import React from 'react';
import './Blogs.css'
const Blogs = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center md:grid-cols-2'>
            <div className='p-6 m-4'>
            <h1 className='header text-3xl rounded font-bold'>What is the purpose of context api?</h1>
            <p className='mt-4'>Context api is a very powerful term in react js. We can pass data from root to any children components without prop drilling. We can use the state as many components as needed. It can be accesssed from all the components of the root app. It saves time and very easy to use.</p>
            </div>
            <div className='p-6 m-4'>
            <h1 className='header text-3xl rounded font-bold'>What is semantic tag?</h1>
            <p className='mt-4'>Semantic tags are basically html tags but adds meaning to the webpage. It is something to make browser realize whether it's a article or a footer or a paragraph etc. By adding semantic tags we can provide additional information about our website. It also helps with SEO because it makes clear to the browser what its content is. It keeps the code clean and easy to understand.</p>
            </div>
            
        </div>
    );
};

export default Blogs;