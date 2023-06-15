import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const useAdmin = () => {
    const [isAdmin, setIsAdmin] = useState('')
    const {user, loading} = useContext(AuthContext);

        useEffect(()=>{
            fetch(`http://localhost:5000/users/admin/${user?.email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsAdmin(data.admin)
            })
        },[user])
           
      

    return [isAdmin];
};

export default useAdmin;