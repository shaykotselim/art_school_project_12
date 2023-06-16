import React, { useEffect, useState } from "react";
import InstructorCard from "./instructorCard/InstructorCard";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://art-school-server-nine.vercel.app/showinstructor")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  const displayedInstructors = instructors.slice(0, 6);

  return (
    <div>
      <div className="text-center mx-auto lg:w-2/3 mt-8">
        <div className="">
        <p className="text-xl font-semibold lg:text-3xl lg:font-medium border-b-4 border-black m-8 inline p-2">Our Popular Instructors</p>
        </div>
        <p className="mt-8 ">
          Our popular instructor known for his exceptional teaching
          skills and charismatic approach. Students appreciate his ability to
          make complex concepts understandable and enjoyable. With a wealth of
          knowledge and a passion for education, Bob creates a positive and
          engaging learning environment that inspires and motivates his students
          to succeed.
        </p>
      </div>
      <div className="lg:grid grid-cols-3 gap-3">
        {displayedInstructors.map((instructor) => (
          <InstructorCard key={instructor.name} instructor={instructor} />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
