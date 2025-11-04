import React, { use } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn, setUser} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signIn(email, password)
        .then(result => {
            setUser(result.user)
            navigate(`${location.state ? location.state : '/'}`)
        })
        .catch(error => console.log(error));
    }
    return (
        <div className='flex justify-center min-h-fit items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleLogin} className="card-body">
                    <h2 className='text-center text-2xl'>Login your account</h2>
                    <hr className='opacity-10' />
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-center my-2'>Don't have an account? <Link to='/auth/register' className='text-secondary font-semibold'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;