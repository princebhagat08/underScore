import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <nav className="w-full border-b border-gray-400 py-4 px-5 lg:px-8 bg-white">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <img 
                    onClick={() => navigate('/')} 
                    className="w-36 sm:w-44 cursor-pointer" 
                    src={assets.logo} 
                    alt="logo" 
                />

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center gap-8 font-medium">
                    <NavLink to="/" className="hover:text-primary">
                        <li className="py-1">HOME page</li>
                    </NavLink>
                    <NavLink to="/allalumni" className="hover:text-primary">
                        <li className="py-1">ALL ALUMNI</li>
                    </NavLink>
                    <NavLink to="/job" className="hover:text-primary">
                        <li className="py-1">JOB</li>
                    </NavLink>
                    <NavLink to="/contact" className="hover:text-primary">
                        <li className="py-1">CONTACT</li>
                    </NavLink>
                </ul>

                {/* Account / Mobile Menu Button */}
                <div className="flex items-center gap-4">
                    {/* Conditional Account Info */}
                    {token ? (
                        <div className="relative group cursor-pointer">
                            <div className="flex items-center gap-2">
                                <img className="w-8 h-8 rounded-full" src={assets.profile_logo} alt="Profile" />
                                <img className="w-2.5" src={assets.dropdown_icon} alt="Dropdown" />
                            </div>
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden  group-hover:block '>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                        </div>
                        </div>
                    ) : (
                        <button 
                            onClick={() => navigate('/login')} 
                            className="bg-primary text-white px-6 py-2 rounded-full hidden md:block">
                            Create Account
                        </button>
                    )}

                    {/* Mobile Menu Toggle Button */}
                    <img 
                        onClick={() => setShowMenu(true)} 
                        className="w-6 md:hidden cursor-pointer" 
                        src={assets.menu_icon} 
                        alt="menu icon" 
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 z-30 bg-white transition-transform duration-300 ease-in-out ${showMenu ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                <div className="flex justify-between items-center p-5">
                    <img className="w-36" src={assets.logo} alt="Logo" />
                    <img 
                        className="w-7 cursor-pointer" 
                        src={assets.cross_icon} 
                        alt="Close Menu" 
                        onClick={() => setShowMenu(false)} 
                    />
                </div>
                <ul className="flex flex-col items-center gap-6 mt-8 text-lg font-medium">
                    <NavLink onClick={() => setShowMenu(false)} to="/" className="w-full text-center py-3 hover:bg-gray-100">HOME</NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to="/doctors" className="w-full text-center py-3 hover:bg-gray-100">ALL DOCTORS</NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to="/about" className="w-full text-center py-3 hover:bg-gray-100">ABOUT</NavLink>
                    <NavLink onClick={() => setShowMenu(false)} to="/contact" className="w-full text-center py-3 hover:bg-gray-100">CONTACT</NavLink>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
