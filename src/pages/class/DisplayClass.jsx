import React from "react";

const DisplayClass = ({ classDis }) => {

    const {name,image, total_seats, price, instructor_name, total_students  } = classDis
    const available_seats = total_seats - total_students;
    const cardStyle = available_seats === 0 ? "bg-[#FF2400] text-black" : "";

    const handleSelectClass = (items) =>{
      console.log(items);
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
        <p className="text-md font-medium"><span className="underline">Name Of Class:</span> {name}</p>
        <p className="text-md font-medium"><span className="underline">Instructor:</span> {instructor_name}</p>
        <p className="text-md font-medium"><span className="underline">Available seats:</span> {available_seats}</p>
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
