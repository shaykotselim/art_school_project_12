import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import { FaPencilAlt,  } from 'react-icons/fa';
import { MdFeedback } from 'react-icons/md';

const MyClass = () => {
    const {user} = useContext(AuthContext);
    const [myClass, setMyClass] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/showclass/${user.email}`)
        .then(res=> res.json())
        .then(data => setMyClass(data));
    },[])
    return (
        <div className="w-full h-full bg-gradient-to-r from-violet-400 to-pink-400">
      <Helmet>
        <title>Art-School || Dashboard || My class</title>
      </Helmet>
      <div className="text-center text-white rounded-l-none rounded p-4">
        <h1 className="text-4xl">Art School</h1>
        <h1 className="p-2 border-b-2 inline border-white">
          Instructor Dashboard!!
        </h1>
      </div>

      
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-gray-400 text-black">
            <tr>
              <th>Sl</th>
              <th>Course Name</th>
              <th>Price</th>
              <th>Duration</th>
              <th>Status</th>
              <th><MdFeedback/></th>
            </tr>
          </thead>
          <tbody>
            {myClass.map((item, index) => (
              <tr item={item} key={item._id}>
                <td>
                  <span className="lg:badge lg:badge-ghost badge-sm">
                    {index + 1}
                  </span>
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="">
                      <span className="lg:badge lg:badge-ghost badge-sm">
                        {item.class_name}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="lg:badge lg:badge-ghost badge-sm">
                    ${item.price}
                  </span>
                </td>

                <td>
                  <span className="lg:badge lg:badge-ghost badge-sm">
                  {item.duration} weaks
                  </span>
                </td>

                <td>
                <span className="lg:badge lg:badge-ghost badge-sm">
                  {item.status}
                </span>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(row)}
                    className="btn btn-ghost text-black"
                  >
                    <FaPencilAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyClass;