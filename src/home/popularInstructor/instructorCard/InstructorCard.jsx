import React from "react";
import Rating from "react-rating";

const InstructorCard = ({ instructor }) => {
  const { name, image, experience, rating } = instructor;

  return (
    <div className="card card-body shadow-lg">
      <div className="flex justify-center p-4">
        <img className="w-[300px] h-[250px]" src={image} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-medium">Name: {name}</h1>
        <p className="font-medium">Experience: {experience}</p>
        <div className="">
          <Rating
            emptySymbol="fa fa-star-o fa-1x text-orange-500"
            fullSymbol="fa fa-star fa-1x text-orange-500"
            readonly
            initialRating={rating}
          />
          <p className="font-medium text-orange-500">{rating}</p>
        </div>
      </div>
      <button className="btn btn-primary btn-outline border-b-4">
        View-Details
      </button>
    </div>
  );
};

export default InstructorCard;
