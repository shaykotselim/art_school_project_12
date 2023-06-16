import React, { useEffect, useState } from "react";
import ban from "../../assets/cool-background.svg";
import ban2 from "../../assets/pexels-vanessa-garcia-6325952.jpg";
import InstructorCard from "./InstructorCard";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://art-school-server-nine.vercel.app/showinstructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Art-School || Instructor </title>
      </Helmet>
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
        {loading ? (
          // Render the loading spinner while data is being fetched
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-orange-500"></div>
          </div>
        ) : (
          // Render the processed data once it's loaded
          instructors.map((instructor) => (
            <InstructorCard
              key={instructor.name}
              instructor={instructor}
            ></InstructorCard>
          ))
        )}
      </div>
    </div>
  );
};

export default Instructors;
