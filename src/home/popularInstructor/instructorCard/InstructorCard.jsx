import React from "react";
import Rating from "react-rating";

const InstructorCard = ({ instructor }) => {
  const { name, image, experience, availableSeats, totalClasses, rating } = instructor;

  return (
    <div className="card card-body shadow-lg">
      <div className="flex justify-center p-4">
        <img className="w-[250px] h-[200px]" src={image} alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-xl font-medium">Name: {name}</h1>
        <p className="font-medium">Experience: {experience}</p>
        <p className="font-medium">Total Classes: {totalClasses}</p>
        <p className="font-medium">Rating: {rating}</p>
        <Rating
          readonly
          emptySymbol={<i className="fa fa-star-o text-orange-500 fa-1x"></i>}
          fullSymbol={<i className="fa fa-star fa-1x text-orange-500"></i>}
          fractions={2}
          initialRating={rating}
        />
      </div>
    </div>
  );
};

export default InstructorCard;
