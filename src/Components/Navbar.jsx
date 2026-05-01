import React, { use, useEffect, useState } from 'react';
import { NavLink, useSearchParams } from 'react-router';
import userPng from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';
import { CiSearch, CiGlobe } from 'react-icons/ci';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
    const {user, logOut} = use(AuthContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    const handleLogout= () => {
        logOut()
        .then(() => {})
        .catch(() => alert('error'));
    }

    const countries = [
        { name: 'World', code: 'World' },
        { name: 'USA', code: 'USA' },
        { name: 'UK', code: 'UK' },
        { name: 'Bangladesh', code: 'Bangladesh' },
        { name: 'India', code: 'India' },
        { name: 'China', code: 'China' },
        { name: 'UAE', code: 'UAE' }
    ];

    const handleCountryChange = (e) => {
        const country = e.target.value;
        if (country === 'World') {
            searchParams.delete('country');
        } else {
            searchParams.set('country', country);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className='flex items-center justify-between py-5 px-4 md:px-0 border-y border-base-300 mt-4 mb-8 bg-base-100 sticky top-0 z-50 transition-all duration-500'>
            {/* Search, Country & Theme Toggle */}
            <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-2 text-accent hover:text-primary cursor-pointer transition-colors group">
                    <CiSearch size={22} className="stroke-[1]" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Search</span>
                </div>
                
                <div className="flex items-center gap-2 border-l border-base-300 pl-6">
                    <CiGlobe size={20} className="text-secondary" />
                    <select 
                        onChange={handleCountryChange}
                        value={searchParams.get('country') || 'World'}
                        className="bg-transparent text-[10px] font-black uppercase tracking-widest focus:outline-none cursor-pointer text-primary"
                    >
                        {countries.map(c => (
                            <option key={c.code} value={c.code}>{c.name}</option>
                        ))}
                    </select>
                </div>

                <button 
                    onClick={toggleTheme}
                    className="p-2 bg-base-200 rounded-full hover:bg-secondary hover:text-white transition-all ml-2 flex items-center justify-center w-9 h-9"
                    title="Toggle Theme"
                >
                    {theme === 'light' ? <FaMoon size={16} /> : <FaSun size={16} />}
                </button>
            </div>
            
            <div className="flex gap-10">
                <NavLink to='/' className="nav-link">Home</NavLink>
                <NavLink to='/about' className="nav-link">About</NavLink>
                <NavLink to='/career' className="nav-link">Career</NavLink>
            </div>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-3 pr-6 border-r border-base-300">
                    <div className="text-right hidden sm:block">
                        <p className="text-[10px] font-black text-primary uppercase tracking-tight">
                            {user ? user.displayName || 'Account' : 'Reader Account'}
                        </p>
                        <p className="text-[9px] font-bold text-secondary uppercase tracking-widest">
                            {user ? 'Premium Member' : 'Guest'}
                        </p>
                    </div>
                    <div className="relative">
                        <img 
                            className='h-9 w-9 rounded-full border border-base-300 shadow-sm hover:border-secondary transition-all object-cover' 
                            src={user && user.photoURL ? user.photoURL : userPng} 
                            alt="User Profile" 
                        />
                        {user && <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>}
                    </div>
                </div>
                
                {user ? (
                    <button 
                        onClick={handleLogout} 
                        className='text-[10px] font-black uppercase tracking-[0.2em] text-accent hover:text-secondary transition-colors'
                    >
                        Sign Out
                    </button>
                ) : (
                    <NavLink 
                        to='/auth/login' 
                        className='btn-premium !py-2 !px-6'
                    >
                        Login
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;