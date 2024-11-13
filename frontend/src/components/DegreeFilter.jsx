import React from 'react';
import { degreeData } from '../assets/assets.js'; // Assuming this now contains degree-based data for alumni
import { Link } from 'react-router-dom';

const DegreeFilter = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='degree'>
      <h1 className='text-3xl font-medium'>Find Alumni by Degree</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Explore our extensive network of alumni across various degrees. Connect and learn from their experiences.
      </p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
        {degreeData.map((item, index) => (
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500'
            key={index}
            to={`/allalumni/${item.degree}`} // Adjust route for alumni filtering by degree
          >
            <img
              className='w-20 h-20 sm:w-24 sm:h-24 mb-2 rounded-full object-cover'
              src={item.image}
              alt={item.degree}
            />
            <p>{item.degree}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DegreeFilter;
