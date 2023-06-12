import React, { useEffect, useState } from "react";
import ban from "../../assets/cool-background.svg"
import ban2 from "../../assets/classbanner.jpg"
import DisplayClass from "./DisplayClass";
const Class = () => {
    const [displayClass, setDisplayClass] = useState([]);
    useEffect(()=>{
        fetch('showclasses.json')
        .then(res=> res.json())
        .then(data=> setDisplayClass(data))
    },[])
    
  return (
    <div>
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
    {
        displayClass.map(classDis=><DisplayClass
            key={classDis.name}
            classDis={classDis}

        />)
    }
    </div>
    </div>
  );
};

export default Class;
