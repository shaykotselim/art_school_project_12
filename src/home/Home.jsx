import React from 'react';
import Banner from './banner/Banner';
import PopularInstructor from './popularInstructor/PopularInstructor';
import PopularClasses from './popularClasses/PopularClasses';
import Gallary from './gallary/Gallary';

const Home = () => {
    return (
        <div>
            
            <Banner/>
            <PopularClasses/>
            <Gallary/>
            <PopularInstructor/>
        </div>
    );
};

export default Home;