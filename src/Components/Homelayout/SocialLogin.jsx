import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router';

const SocialLogin = () => {
    const { signInWithGoogle, signInWithGithub, setUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user);
                navigate('/');
            })
            .catch(error => {
                console.error("Google Login Error:", error.message);
            });
    }

    const handleGithubLogin = () => {
        signInWithGithub()
            .then(result => {
                setUser(result.user);
                navigate('/');
            })
            .catch(error => {
                console.error("Github Login Error:", error.message);
            });
    }

    return (
        <div className='bg-white border border-base-300 rounded-xl p-6 shadow-sm'>
            <h2 className='font-black uppercase tracking-widest text-xs text-primary/70 mb-6'>Join the Community</h2>

            <div className='flex flex-col gap-3'>
                <button 
                    onClick={handleGoogleLogin}
                    className='flex items-center justify-center gap-3 w-full py-3 px-4 border border-base-300 rounded-lg font-bold text-sm text-primary hover:bg-base-100 transition-all group'
                >
                    <FcGoogle size={20} className="group-hover:scale-110 transition-transform" />
                    Continue with Google
                </button>
                <button 
                    onClick={handleGithubLogin}
                    className='flex items-center justify-center gap-3 w-full py-3 px-4 bg-[#24292e] text-white rounded-lg font-bold text-sm hover:bg-[#1a1e22] transition-all group'
                >
                    <FaGithub size={20} className="group-hover:scale-110 transition-transform" />
                    Continue with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;