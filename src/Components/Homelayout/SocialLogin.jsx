import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='font-bold mb-5'>Login with</h1>

            <div className='flex flex-col gap-3'>
                <button className='btn btn-outline btn-secondary'><FcGoogle size={24}></FcGoogle>Login with Google</button>
            <button className='btn btn-outline btn-primary'><FaGithub size={24}></FaGithub>Login with github</button>
            </div>
        </div>
    );
};

export default SocialLogin;