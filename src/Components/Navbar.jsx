import React, { use } from 'react';
import { NavLink } from 'react-router';
import userPng from '../assets/user.png'
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const {user, logOut} = use(AuthContext);

    const handleLogout= () => {
        logOut()
        .then(() => alert('logout done'))
        .catch(() => alert('error'));
    }

    return (
        <div className='flex items-center justify-between'>
            <div className="">{user?.email}</div>
            <div className="nav flex gap-5">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-3">
                <img className='h-17 w-17' src={user ? user.photoURL : userPng} alt="" />
                {
                    user ? <button onClick={handleLogout} className='btn btn-primary p-5'>Logout</button> : <NavLink to='/auth/login' className='btn btn-primary p-5'>Login</NavLink>
                }
            </div>
        </div>
    );
};

export default Navbar;