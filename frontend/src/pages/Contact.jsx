import React from 'react';
import contact from '../assets/contact.jpg'

const Contact = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <div className="text-center text-3xl pt-10 text-gray-700">
        <p>Contact <span className="font-semibold text-blue-700">Our Alumni Association</span></p>
      </div>

      {/* Contact Information */}
      <div className="my-10 flex flex-col items-center justify-center md:flex-row gap-10 mb-28 text-sm">
        
        {/* Contact Image */}
        <img className="w-full md:max-w-[360px] rounded-lg" src={contact} alt="Contact Us" />

        {/* Office Information */}
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-lg text-gray-700">Our Office Location</p>
          <p className="text-gray-600">123 Alumni Avenue <br /> Suite 100, Cityville, USA</p>
          <p className="text-gray-600">Tel: (123) 456-7890 <br /> Email: contact@alumniassociation.org</p>
          
          {/* Event Inquiries */}
          <p className="font-semibold text-lg text-gray-700">Event Inquiries</p>
          <p className="text-gray-600">For information on alumni events, reunions, and networking sessions, feel free to reach out to us.</p>
          
          {/* Career Opportunities */}
          <p className="font-semibold text-lg text-gray-700">Careers at the Alumni Association</p>
          <p className="text-gray-600">Interested in joining our team? Learn more about open positions and how you can contribute to our mission.</p>
          <button className="border border-blue-700 px-8 py-2 text-blue-700 text-sm hover:bg-blue-700 hover:text-white transition-all duration-300">
            Explore Careers
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
