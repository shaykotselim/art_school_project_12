import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const UseInstructor = () => {
    const [isInstructor, setIsInstructor] = useState('')
    const {user, loading} = useContext(AuthContext);

        useEffect(()=>{
            fetch(`http://localhost:5000/users/instructor/${user?.email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                setIsInstructor(data.instructor)
            })
        },[user])
           
      

    return [isInstructor];
};

export default UseInstructor;