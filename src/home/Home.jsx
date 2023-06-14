import React from 'react';
import Banner from './banner/Banner';
import PopularInstructor from './popularInstructor/PopularInstructor';
import PopularClasses from './popularClasses/PopularClasses';
import Gallary from './gallary/Gallary';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Art-School || Home</title>
            </Helmet>
            <Banner/>
            <PopularClasses/>
            <Gallary/>
            <PopularInstructor/>
        </div>
    );
};

export default Home;