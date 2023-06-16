import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';


const useAdmin = () => {
    const [isAdmin, setIsAdmin] = useState('')
    const {user, loading} = useContext(AuthContext);

        useEffect(()=>{
            fetch(`https://art-school-server-nine.vercel.app/users/admin/${user?.email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsAdmin(data.admin)
            })
        },[user])
           
      

    return [isAdmin];
};

export default useAdmin;