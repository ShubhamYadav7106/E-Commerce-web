import React from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '../../assets/Loading.json';

const Loaderr = ({ size = 32, message = "Loading..." }) => (
    <div className="flex justify-center items-center w-full min-h-screen">
        <span role="status" className="inline-flex flex-col ml-20 items-center">
            <Lottie
                animationData={loadingAnimation}
                loop={true}
                className={`w-${size} h-${size}`}
            />
            <span className="sr-only">{message}</span>
        </span>
    </div>
);

export default Loaderr;