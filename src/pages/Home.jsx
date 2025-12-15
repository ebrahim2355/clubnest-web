import React from 'react';
import HeroBanner from '../components/HeroBanner';
import FeaturedClubs from '../components/FeaturedClubs';
import FeaturedEvents from '../components/FeaturedEvents';
import GetStarted from '../components/GetStarted';
import TestimonialSection from '../components/TestimonialSection';
import NewsletterSection from '../components/NewsletterSection';

const Home = () => {
    return (
        <div>
            <HeroBanner />
            <FeaturedClubs />
            <FeaturedEvents />
            <GetStarted />
            <TestimonialSection />
            <NewsletterSection />
        </div>
    );
};

export default Home;