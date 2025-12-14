import Lottie from 'lottie-react';
import React from 'react';
import loadingAnimation from '../../assets/animation/SandyLoading.json'

const Loading = () => {
    return (
        <div className='w-56 h-screen flex justify-center items-center mx-auto'>
            <Lottie  animationData={loadingAnimation} loop={true} autoplay={true}/>
        </div>
    );
};

export default Loading;