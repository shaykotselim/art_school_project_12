import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import Swal from 'sweetalert2';

const AddClass = () => {
  
    const {  user } = useContext(AuthContext);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
 
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const { image, class_name, duration, total_seats, instructor_email, instructor_name, rating, price,total_students } = data;
    const addClass = {
        image, class_name, duration,total_seats, instructor_name, instructor_email, rating, price, total_students
    }
    fetch('http://localhost:5000/showclass', {
        method:"POST",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(addClass)
    })
    .then(res=>res.json())
    .then(data=>{
        Swal.fire({
            icon: 'success',
            title: 'Done',
            text: 'Your Data Added!!',
            
          })
        reset()
   
    })
    // console.log(addClass);
  };

  
    return (
        <div className='w-full'>
      <Helmet>
        <title>Art-School || Dashboard || AddClass</title>
      </Helmet>

            <div className="">
              <h1 className="text-center font-bold text-primary text-4xl">
                Added Your Class Here!!!
              </h1>
              <form className=" p-8 grid grid-cols-2 gap-4 w-full" onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type Your Name Here"
                  {...register("instructor_name")}
                  value={user?.displayName}
                  readOnly
                />

                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type Your Email Here"
                  {...register("instructor_email", { required: true })}
                  value={user?.email}
                  readOnly
                />
                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type Your Class Name Here"
                  {...register("class_name", { required: true })}
                />
                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Class Duration Here"
                  {...register("duration", { required: true })}
                />
                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type your Class Price"
                  {...register("price", { required: true })}
                />
                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type Your Rating"
                  {...register("rating", { required: true })}
                />
                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type Total Seats"
                  {...register("total_seats", { required: true })}
                />
                
                <input
                  className="border-2 w-full rounded-lg h-12 px-4 my-2"
                  placeholder="Type your Photo URL"
                  {...register("image", { required: true })}
                />

                <input className="btn btn-primary w-full my-2" type="submit" />
              </form>
            </div>
          </div>
       
   
    );
};

export default AddClass;