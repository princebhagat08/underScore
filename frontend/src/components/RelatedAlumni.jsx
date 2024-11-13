import React from 'react';
import { useNavigate } from 'react-router-dom';

const RelatedAlumni = ({ relatedAlumni }) => {
    const navigate = useNavigate();

    if (relatedAlumni.length === 0) {
        return <p className="text-center text-gray-500 mt-10">No related alumni found.</p>;
    }

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Related Alumni in the Same Job Title</h1>
            <p className='sm:w-1/3 text-center text-sm'>Browse through alumni who share the same job title as the selected alumni.</p>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relatedAlumni.slice(0, 5).map((item) => (
                    <div
                        onClick={() => {
                            navigate(`/alumni/${item._id}`);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                        key={item._id}
                    >
                        <img className='w-full h-48 sm:h-56 lg:h-64 object-cover bg-slate-300' src={item.image} alt={`${item.name}'s profile`} />
                        <div className='p-4'>
                            <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                            <p className='text-gray-600 text-sm'>{item.jobTitle} at {item.company}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => {
                    navigate('/allalumni');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>
                More Alumni
            </button>
        </div>
    );
};

export default RelatedAlumni;
