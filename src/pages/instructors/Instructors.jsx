import React, { useEffect, useState } from "react";
import ban from "../../assets/cool-background.svg";
import ban2 from "../../assets/pexels-vanessa-garcia-6325952.jpg";
import InstructorCard from "./InstructorCard";

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/showinstructor")
        .then(res=>res.json())
        .then(data=> setInstructors(data));
    },[])

  return (
    <div>
      {/* ----------Instructor Banner Area Start---------- */}
      <div className="grid grid-cols-3 items-center">
        <p className="absolute top-36 right-[14%] lg:top-[50%] lg:right-[30%] text-xl lg:text-3xl text-white font-bold bg-black rounded p-4 lg:p-8">
          Art School All Instructor!!!
        </p>
        <img className="h-full" src={ban2} alt="" />
        <img className="space-x-reverse col-span-2" src={ban} alt="" />
      </div>
      {/* -----------Instructor Banner Area End------------- */}
    
        <div className="mt-20 lg:grid gap-4 grid-cols-3">
        {
            instructors.map(instructor=><InstructorCard
                key={instructor.name}
                instructor={instructor}
            ></InstructorCard>)
        }
        </div>

    </div>
  );
};

export default Instructors;
