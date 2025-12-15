import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedClubs from '../components/FeaturedClubs';
import FeaturedEvents from '../components/FeaturedEvents';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <FeaturedClubs />
            <FeaturedEvents />
        </div>
    );
};

export default Home;