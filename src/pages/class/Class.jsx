import React, { useEffect, useState } from "react";
import ban from "../../assets/cool-background.svg"
import ban2 from "../../assets/classbanner.jpg"
import DisplayClass from "./DisplayClass";
import { Helmet } from "react-helmet-async";

const Class = () => {
  const [displayClass, setDisplayClass] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://art-school-server-nine.vercel.app/showclass')
      .then(res => res.json())
      .then(data => {
        setDisplayClass(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Helmet>
                <title>Art-School || Class</title>
      </Helmet>
      {/*------------------------------- Classes Banner Area Start----------------*/}
      <div className="grid grid-cols-3 items-center">
        <p className="absolute top-36 right-[14%] lg:top-[50%] lg:right-[30%] text-xl lg:text-3xl text-white font-bold bg-black rounded p-4 lg:p-8">
          Art School All Classes!!!
        </p>
        <img className="h-full" src={ban2} alt="" />
        <img className="space-x-reverse col-span-2" src={ban} alt="" />
      </div>
      {/* ---------------------------Classes Banner Area End ----------------------*/}

      <div className="lg:grid mt-12 gap-3 grid-cols-3">
        {loading ? (
          // Render the spinner while data is being loaded
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-orange-500"></div>
          </div>
        ) : (
          // Render the data once it's loaded
          displayClass.map(classDis => (
            <DisplayClass
              key={classDis.name}
              classDis={classDis}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Class;
