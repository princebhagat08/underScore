import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import { assets } from '../assets/assets.js';
import RelatedAlumni from '../components/RelatedAlumni.jsx';

const AlumniProfile = () => {
  const { alumniId } = useParams(); // Fetching alumniId from URL
  const { alumni } = useContext(AppContext); // Get alumni data from context
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [relatedAlumni, setRelatedAlumni] = useState([]);

  useEffect(() => {
    // Find the selected alumni by alumniId
    const alumniData = alumni.find((alum) => alum._id === alumniId);
    setSelectedAlumni(alumniData);

    // Find related alumni based on the job title
    if (alumniData) {
      const related = alumni.filter(
        (alum) => alum.jobTitle.toLowerCase() === alumniData.jobTitle.toLowerCase() && alum._id !== alumniId
      );
      setRelatedAlumni(related);
    }
  }, [alumniId, alumni]);

  if (!selectedAlumni) {
    return <p className="text-gray-600 text-center mt-8">No alumni found for this ID.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8 bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg shadow-md">
      {/* --------------------- Alumni Details ------------------------- */}
      <div className='flex flex-col sm:flex-row gap-6'>
        <div className="flex justify-center sm:justify-start">
          <img className='w-64 h-64 sm:h-80 object-cover rounded-xl shadow-lg' src={selectedAlumni.image} alt={selectedAlumni.name} />
        </div>

        {/* -------------------- Alumni Info: name, degree, job, etc. --------------------- */}
        <div className='flex-1 bg-white rounded-lg shadow-lg p-6 sm:p-8'>
          <p className='flex items-center gap-3 text-3xl font-bold text-gray-900'>
            {selectedAlumni.name}
            <img className='w-6' src={assets.verified_icon} alt="Verified icon" />
          </p>
          <div className='flex items-center gap-2 text-md mt-2 text-gray-600'>
            <p>{selectedAlumni.degree} - {selectedAlumni.major}</p>
            <span className='bg-primary text-white py-0.5 px-3 rounded-full text-xs'>{selectedAlumni.graduationYear}</span>
          </div>
          {/* ---------------------- Alumni About ---------------------------- */}
          <div className="mt-6">
            <p className='flex items-center gap-2 text-lg font-medium text-gray-800'>
              About <img src={assets.info_icon} alt="Info icon" className="w-5" />
            </p>
            <p className='text-md text-gray-600 mt-2'>{selectedAlumni.bio}</p>
          </div>
          <div className="mt-6">
            <p className='text-lg text-gray-700 font-semibold'>
              Job Title: <span className='text-gray-800'>{selectedAlumni.jobTitle}</span>
            </p>
            <p className='text-lg text-gray-700 font-semibold mt-2'>
              Company: <span className='text-gray-800'>{selectedAlumni.company}</span>
            </p>
          </div>
        </div>
        
      </div>

      {/* --------------------- Experience Section with Timeline ------------------------- */}
      <div className='mt-10'>
        <h2 className='text-2xl font-semibold text-gray-800'>Experience</h2>
        <div className='mt-4 border-l-2 border-primary pl-4 space-y-4'>
          {selectedAlumni.experience.map((exp, index) => (
            <div key={index} className='flex gap-4 items-center'>
              <div className="h-3 w-3 rounded-full bg-primary"></div>
              <div>
                <p className='text-lg font-semibold text-gray-900'>{exp.company}</p>
                <p className='text-gray-700'>{exp.position}</p>
                <p className='text-gray-500 text-sm'>
                  {exp.startDate} - {exp.endDate} <span className="ml-2">({exp.duration})</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ------------------- Related Alumni by Job Title ------------------- */}
      <RelatedAlumni relatedAlumni={relatedAlumni} />
    </div>
  );
};

export default AlumniProfile;
