import React  from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
      if(loading){
        return <span className="loading loading-spinner text-warning loading-lg"></span>
      }
    if(user){
            return children;
        }
    return <Navigate to="/sign-in" state={{from: location}} replace></Navigate>
};

export default PrivetRoute;