import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Job from './pages/Job';
import Contact from './pages/Contact';
import Alumni from './pages/AllAlumni';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login'
import AlumniProfile from './pages/AlumniProfile'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Donation from './pages/DonationPage';
import MyAlumniProfile from './pages/profile/page';
function App() {
  

  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/job' element ={<Job/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/allalumni' element ={<Alumni/>}/>
        <Route path='/allalumni/:degree' element={<Alumni/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/alumni/:alumniId' element ={<AlumniProfile/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/donate' element={<Donation/>}/>
        <Route path='/profile' element={<MyAlumniProfile/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App
