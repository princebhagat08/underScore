import React from 'react';
import { useNavigate } from 'react-router-dom';
import donation from '../assets/donation.avif';

const Donation = () => {
    const navigate = useNavigate();
    return (
        <div className="flex bg-gradient-to-r from-blue-800 via-purple-700 to-indigo-700 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10">
            {/* Left Side */}
            <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                    <p>Support Our Growth</p>
                    <p className="mt-4">Help Build the Future of Our Institution</p>
                </div>
                <p className="text-sm sm:text-base text-gray-200 mt-4 max-w-lg">
                    Your generous contribution can provide critical support for modern labs, state-of-the-art equipment, improved infrastructure, and collaborative spaces that empower the next generation of students.
                </p>
                <button 
                    onClick={() => { navigate('/donate'); scrollTo(0, 0); }} 
                    className="bg-white text-sm sm:text-base text-gray-700 px-8 py-3 rounded-full mt-10 hover:scale-105 transition-all"
                >
                    Donate Now
                </button>
            </div>

            {/* Right Side */}
            <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
                <img className="w-full absolute bottom-0 right-0 max-w-md rounded-lg shadow-lg" src={donation} alt="Donation illustration" />
            </div>
        </div>    
    );
};

export default Donation;
