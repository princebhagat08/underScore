import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const TopAlumni = () => {
    const navigate = useNavigate();
    const { alumni } = useContext(AppContext);

    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Top Alumni to Connect With</h1>
            <p className="sm:w-1/3 text-center text-sm">Browse through our extensive list of successful alumni.</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {alumni.slice(0, 5).map((alumnus, index) => (
                    <div
                        onClick={() => { navigate(`/alumni/${alumnus._id}`); scrollTo(0, 0); }}
                        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-transform duration-500 shadow-lg"
                        key={index}
                    >
                        <img
                            className="w-full h-48 sm:h-56 object-cover bg-slate-200"
                            src={alumnus.image}
                            alt={alumnus.name}
                        />
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-green-500">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <p>{alumnus.city}, {alumnus.state}</p>
                            </div>
                            <p className="text-gray-900 text-lg font-medium">{alumnus.name}</p>
                            <p>{alumnus.jobTitle} at {alumnus.company}</p>
                            <p className="text-sm text-gray-500">{alumnus.degree} in {alumnus.major}, Class of {alumnus.graduationYear}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => { navigate('/allalumni'); scrollTo(0, 0); }}
                className="bg-blue-600 text-white px-8 py-2 rounded-full mt-10 hover:bg-blue-700 transition-colors duration-300"
            >
                See More
            </button>
        </div>
    );
};

export default TopAlumni;
