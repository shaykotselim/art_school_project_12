import React, { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";

const PopularClasses = () => {
  const [showClasses, setShowClasses] = useState([]);
  useEffect(() => {
    fetch("showclasses.json")
      .then((res) => res.json())
      // .then(data=> console.log(data))
      .then((data) => setShowClasses(data));
  }, []);

  const displayedClassess = showClasses.slice(0, 6);

  return (
    <div>
        <div className="  text-center mx-auto lg:w-2/3">
        <div className="">
        <p className="text-xl font-semibold lg:text-3xl lg:font-medium border-b-4 border-black m-8 inline p-2">Our Popular Classes</p>
        </div>
        <p className="mt-8 ">
        Experience a world of learning and growth in our popular classes. From the calming practice of yoga to the exhilarating art of dance, we offer a diverse range of classes designed to inspire and challenge. Whether it's cooking, photography, or painting, our expert instructors will guide you on a transformative journey of exploration and self-expression. Join us today and unleash your potential!
        </p>
      </div>
      <div className="lg:grid grid-cols-3 gap-3 bottom-5">
        {displayedClassess.map((showClass) => (
          <ClassesCard 
            key={showClass.name}
          showClass={showClass} />
        ))}
      </div>
    </div>
  );
};

export default PopularClasses;
