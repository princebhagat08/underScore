import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import bietGate from "../assets/biet gate.jpg";
import saketHostel from "../assets/saket.jpg";
import vrindavanHostel from "../assets/vrindavan.jpg";

const Header = () => {
  return (
    <Carousel
      autoPlay
      interval={3000} 
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators
    >
      {/* First Slide - BIET Gate */}
      <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-xl px-10 md:px-16 lg:px-32 py-12 md:py-16 shadow-2xl">
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto">
          <p className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight">
            Welcome to BIET
          </p>
          <p className="text-white text-lg md:text-xl font-light">
            BIET's grand entrance welcomes students into a world of innovation and knowledge. Book appointments with trusted doctors for your health needs.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img
            className="w-full h-72 rounded-xl ml-11"
            src={bietGate}
            alt="BIET Gate"
          />
        </div>
      </div>

      {/* Second Slide - Vrindavan Hostel */}
      <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-xl px-10 md:px-16 lg:px-32 py-12 md:py-16 shadow-2xl">
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto">
          <p className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight">
            Vrindavan Hostel
          </p>
          <p className="text-white text-lg md:text-xl font-light">
            Designed for first-year students, Vrindavan Hostel provides cozy 3-seater rooms, with a capacity to house up to 300 students, helping them transition smoothly into college life.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img
            className="w-full h-72 rounded-xl ml-11"
            src={vrindavanHostel}
            alt="Vrindavan Hostel"
          />
        </div>
      </div>
      

      {/* Third Slide - Saket Hostel */}
      <div className="flex flex-col md:flex-row flex-wrap bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 rounded-xl px-10 md:px-16 lg:px-32 py-12 md:py-16 shadow-2xl">
        <div className="md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 m-auto">
          <p className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold leading-tight">
            Saket Hostel
          </p>
          <p className="text-white text-lg md:text-xl font-light">
            Reserved for second-year students, Saket Hostel offers comfortable 3-seater rooms and accommodates up to 300 students. Experience a supportive environment for academic growth.
          </p>
        </div>
        <div className="md:w-1/2 relative">
          <img
            className="w-full h-72 rounded-xl ml-11"
            src={saketHostel}
            alt="Saket Hostel"
          />
        </div>
      </div>
    </Carousel>
  );
}

export default Header;
