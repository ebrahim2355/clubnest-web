import React from 'react';
import Button from './Button';
import Container from './Container';
import bannerVideo from '../assets/banner_video.mp4';


const HeroBanner = () => {
  return (
    <Container>
        <section className="relative w-full  overflow-hidden rounded-3xl mt-12 shadow-2xl">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support this video
      </video>

      {/* Dark overlay  */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center py-46 px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Find Your People. Fuel Your Passion.
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10">
         ClubNest is the ultimate platform to discover, join, and manage local clubs that align with your interests and hobbies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="rounded-full transform hover:scale-105 transition">
            Join a Club
          </Button>
          <Button className="rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition">
            Create a Club
          </Button>
        </div>
      </div>
    </section>
    </Container>
  );
};

export default HeroBanner;