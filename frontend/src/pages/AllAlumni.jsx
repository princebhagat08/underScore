import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Alumni = () => {

  const navigate = useNavigate()
  const { degree } = useParams()
  
  const [filterAlumni, setFilterAlumni] = useState([])
  const [showFilter, setShowFilter] = useState(false)

  const { alumni } = useContext(AppContext)

  const applyFilter = () => {
    if (degree) {
      setFilterAlumni(alumni.filter(alum => alum.degree === degree))
    } else {
      setFilterAlumni(alumni)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [alumni, degree])

  return (
    <div>
      <p className='text-gray-600'>Browse through the alumni based on their degrees.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => degree === 'B.Tech' ? navigate('/allalumni') : navigate('/allalumni/B.Tech')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${degree === "B.Tech" ? "bg-indigo-100 text-black" : ""}`}>B.Tech</p>
          <p onClick={() => degree === 'MBA' ? navigate('/allalumni') : navigate('/allalumni/MBA')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${degree === "MBA" ? "bg-indigo-100 text-black" : ""}`}>MBA</p>
          <p onClick={() => degree === 'M.Tech' ? navigate('/allalumni') : navigate('/allalumni/M.Tech')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${degree === "M.Tech" ? "bg-indigo-100 text-black" : ""}`}>M.Tech</p>
          <p onClick={() => degree === 'PhD' ? navigate('/allalumni') : navigate('/allalumni/PhD')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${degree === "PhD" ? "bg-indigo-100 text-black" : ""}`}>PhD</p>
          <p onClick={() => degree === 'B.Com' ? navigate('/allalumni') : navigate('/allalumni/B.Com')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${degree === "B.Com" ? "bg-indigo-100 text-black" : ""}`}>B.Com</p>
          <p onClick={() => degree === 'B.A.' ? navigate('/allalumni') : navigate('/allalumni/B.A.')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${degree === "B.A." ? "bg-indigo-100 text-black" : ""}`}>B.A.</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterAlumni.length === 0 ? (
              <p className="text-gray-600">No alumni found for the selected degree.</p>
            ) : (
              filterAlumni.map((item, index) => (
                <div onClick={() => navigate(`/alumni/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 ' key={index}>
                  <img className='w-full h-48 sm:h-56 object-cover bg-slate-200' src={item.image} alt={item.name} />
                  <div className='p-4'>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p>{item.degree} - {item.major}</p>
                    <p className='text-sm text-gray-600'>{item.jobTitle} at {item.company}</p>
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Alumni
