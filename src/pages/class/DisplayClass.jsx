import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const DisplayClass = ({ classDis }) => {

    const {class_name,image, total_seats, price, instructor_name, total_students  } = classDis
    const available_seats = total_seats - total_students;
    const {user, loading} = useContext(AuthContext);
    const [, refetch] = useCart()
    const navigate = useNavigate();
    const location = useLocation();
    const cardStyle = available_seats === 0 ? "bg-[#FF2400] text-black" : "";

    const handleSelectClass = (items) =>{
      console.log(items);
     
      if(user && user.email ){

        const cartItem = { name, image, price, email: user.email}
        fetch('http://localhost:5000/carts',{
          method:"POST", 
          headers: {
            'content-type': 'application/json'
          },
          body:JSON.stringify(cartItem)
        } )
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
              refetch()
              Swal.fire({
                icon: 'success',
                title: 'Done',
                text: 'Added To Cart!!'
              });
            }
        })
      }
      else{
        Swal.fire({
          title: 'Please Login To Add Your Class',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now!'
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/sign-in',{state: {from:location}})
          }
        })
      }
    }

    return (
    <div className={`card card-body shadow-lg ${cardStyle}`}>
      <div className="flex justify-center">
        <img
          className="w-[300px] h-[250px] bg-cover rounded"
          src={image}
          alt=""
        />
      </div>
      <div>
        <p className="text-lg font-bold"><span>Name Of Class:</span> {class_name}</p>
        <p className="text-md font-medium"><span >Instructor:</span> {instructor_name}</p>
        <p className="text-md font-medium"><span >Available seats:</span> {available_seats}</p>
        
      </div>
      <div className="font-medium ">
        {/* <p className="">Class Duration:{duration}</p> */}
        {/* <p>Total Students: {total_students}</p> */}
      </div>
      <div className=" ">
        <p className="absolute top-8 right-[45px] lg:right-[59px] bg-orange-500 inline p-2 rounded text-white">
          $: {price}
        </p>
       
      </div>
      <button onClick={()=>handleSelectClass(classDis)} disabled={available_seats === 0} className="btn btn-primary">Select</button>
    </div>
  );
};

export default DisplayClass;
