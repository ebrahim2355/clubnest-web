import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedClubs from '../components/FeaturedClubs';
import FeaturedEvents from '../components/FeaturedEvents';
import GetStarted from '../components/GetStarted';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <FeaturedClubs />
            <FeaturedEvents />
            <GetStarted />
        </div>
    );
};

export default Home;