import React from "react";

const ClassesCard = ({ showClass }) => {
  const { name, image, duration, total_students, rating, price, instructor_name } = showClass;
  return (
    <div className="card card-body shadow-lg">
      <div className="flex justify-center">
        <img className="w-[300px] h-[250px] bg-cover rounded" src={image} alt="" />
      </div>
      <div>
        <p className="text-lg font-medium">Nmae Of Class: {name}</p>
      </div>
      <div className="font-medium text-orange-400">
      <p className="">Class Duration:{duration}</p>
        <p>Total Students: {total_students}</p>
      </div>
      <div className=" ">
        <p className="absolute top-8 right-[45px] lg:right-[59px] bg-orange-500 inline p-2 rounded text-white">$: {price}</p>
      </div>
      <p>{instructor_name}</p>
    </div>
  );
};

export default ClassesCard;
<h1>Name;</h1>;
