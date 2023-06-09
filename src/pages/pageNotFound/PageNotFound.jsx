import React from 'react';
import pageNot from '../../assets/page-not-found.jpg'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div className='flex justify-center relative'>
            <img className='lg:h-[600px]' src={pageNot} alt="" />
            </div>
            <div className='absolute -mt-8 ml-32 lg:-mt-16 lg:ml-[670px]'>
           <Link to='/'>
                <button className='btn btn-error text-white'>Go Back To Home</button>
            </Link>
           </div>
        </div>
    );
};

export default PageNotFound;