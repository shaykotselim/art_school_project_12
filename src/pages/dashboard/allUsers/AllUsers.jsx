import { useQuery } from "@tanstack/react-query";
import { space } from "postcss/lib/list";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleMakeAdmin = () => {};
  const handleDelete = (user) => {
    console.log(user);
  };
  return (
    <div className="w-full h-full bg-gradient-to-r from-violet-400 to-pink-400">
      <Helmet>
        <title>Art-School || Dashboard || Manage Users</title>
      </Helmet>
      <div className="text-center text-white rounded-l-none rounded p-4">
        <h1 className="text-4xl">Art School</h1>
        <h1 className="p-2 border-b-2 inline border-white">
          Admin Dashboard!!
        </h1>
      </div>

      <div className="flex justify-evenly rounded-l-none text-white mt-24 mb-12">
        <h1 className="text-xl bg-black rounded p-2">
          Total Users: {users.length || 0}
        </h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-gray-400 text-black">
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((row, index) => (
              <tr row={row} key={row._id}>
                <td>
                  <span className="lg:badge lg:badge-ghost badge-sm">
                    {index + 1}
                  </span>
                </td>
                <td>
                  <div className="flex items-center">
                    <div className="">
                      <span className="lg:badge lg:badge-ghost badge-sm">
                        {row.name}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="lg:badge lg:badge-ghost badge-sm">
                    {row.email}
                  </span>
                </td>
                <td className="">
                  <button className="lg:badge lg:badge-warning btn btn-sm badge-sm">
                    {row.role === "admin" ? (
                      "Admin"
                    ) : (
                      <span onClick={() => handleMakeAdmin(row._id)}>
                        Instructor
                      </span>
                    )}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(row)}
                    className="btn btn-ghost text-red-500"
                  >
                    <FaTrash />
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

export default AllUsers;
