import React from 'react'
import Header from '../components/Header.jsx'
import DegreeFilter from '../components/DegreeFilter.jsx'
import TopAlumni from '../components/Alumni.jsx'
import Donation from "../components/Donation.jsx";


const Home = () => {
  return (
    <div>
      <Header/>
      <DegreeFilter/>
      <TopAlumni/>
      <Donation/>
    </div>
  )
}

export default Home
