import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const UseInstructor = () => {
    const [isInstructor, setIsInstructor] = useState('')
    const {user, loading} = useContext(AuthContext);

        useEffect(()=>{
            fetch(`https://art-school-server-nine.vercel.app/users/instructor/${user?.email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsInstructor(data.instructor)
            })
        },[user])
           
      

    return [isInstructor];
};

export default UseInstructor;