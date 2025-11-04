import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const navigate = useNavigate();
    const [nameErr, setNameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const {createUser, user, setUser, updateUser} = use(AuthContext);
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photoUrl = e.target.photourl.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
        .then(result => {
            setUser(result.user);
            updateUser({displayName: name, photoURL: photoUrl})
            .then(() => {
                setUser({...user, displayName: name, photoURL: photoUrl})
                navigate('/')
                .catch((err) => {
                    alert('error', err);
                    setUser(user)
                })
            })
        })
        .catch(error => {
            alert('eError', error);
        })

        if(name.length < 5){
            setNameErr('Name Should Be More then 5 Letters');
            return
        }
        else{
            setNameErr("");
        }
        if(password.length < 6){
            setPasswordErr('Password Should Be Atleast 6 Charecters')
            return
        }
        else{
            setPasswordErr('');
            return
        }
    } 


    return (
        <div className='flex justify-center min-h-fit items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h2 className='text-center text-2xl'>Register your account</h2>
                    <hr className='opacity-10' />
                    <fieldset className="fieldset">
                        <label className="label">Name</label>
                        <input type="name" name='name' className="input" placeholder="name" required/>
                        <p className='text-center text-red-400'>{nameErr}</p>
                        <label className="label">Photo URL</label>
                        <input type="text" name='photourl' className="input" placeholder="Photo URL" required/>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required/>
                        <p className='text-center text-red-400'>{passwordErr}</p>
                        {
                            user ? <p className='text-center text-green-400'>User Register Successfully</p> : ""
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-center my-2'>Already have an account? <Link to='/auth/login' className='text-secondary font-semibold'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;