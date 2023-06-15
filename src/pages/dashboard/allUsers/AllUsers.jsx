import { useQuery } from "@tanstack/react-query";
// import { space } from "postcss/lib/list";
import React from "react";
import { Helmet } from "react-helmet-async";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });
  const handleMakeAdmin = (row) => {
    fetch(`http://localhost:5000/users/admin/${row._id}`, {
        method:"PATCH",
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${row.name} is an Admin Now`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  };

  const handlemakeInstructor = (row)=>{
    fetch(`http://localhost:5000/users/instructor/${row._id}`, {
      method:"PATCH",
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.modifiedCount){
        refetch();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${row.name} is an Instructor Now`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }
  const handleDelete = (user) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to Delete this!!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
         })
         .then(res=> res.json())
         .then(data=>{
            if(data.deletedCount > 0){
                refetch()
                Swal.fire(
                    'Deleted!',
                    'Your data has been deleted.',
                    'success'
                    )
            }
         })
        }
      })
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
              <th>Role Action</th>
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

                <td>
                  <button className="lg:badge lg:badge-primary btn btn-sm badge-sm">
                  {row.role?
                    <span>
                    {row.role}
                  </span>:'student'
                  }
                  </button>
                </td>

                <td className="flex gap-3">
                  <button onClick={()=> handleMakeAdmin(row)} className="lg:badge lg:badge-warning btn btn-sm badge-sm">
                    <span>Admin</span>
                  </button>

                  <button onClick={()=>handlemakeInstructor(row)} className="lg:badge lg:badge-warning btn btn-sm badge-sm">
                      <span>Instructor</span>
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
