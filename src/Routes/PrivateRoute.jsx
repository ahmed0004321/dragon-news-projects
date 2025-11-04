import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext);

    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children;
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
    //if user thake return children 
    //else redirect to login page navigate--login
};

export default PrivateRoute;