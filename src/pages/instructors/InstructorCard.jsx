import React from "react";

const InstructorCard = ({ instructor }) => {
  const { name,image,email,totalClasses } = instructor;
  return (
    <div className="mt-4 shadow-lg rounded-lg lg:shadow-lg lg:rounded-lg">
      <div className="p-4">
        <img
          src={image}
          className="w-[400px] h-[300px] rounded-lg shadow-2xl"
        />
        <div>
          <div className="text-center mt-2">
          <h1 className="text-2xl font-bold">Name: {name}</h1>
          <p className="py-2 text-lg">Email:{email} </p>
          <p>Taken Class by the Instructor: {totalClasses}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
