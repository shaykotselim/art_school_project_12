import React from "react";
import useCart from "../../../hooks/useCart";
import { FaTrash } from 'react-icons/fa';
import Swal from "sweetalert2";
const MyCart = () => {
  const [cart, refetch] = useCart();
//   const [name, image, price] = cart;
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = item =>{
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
         fetch(`http://localhost:5000/carts/${item._id}`, {
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
  }

  return (
    <div className="w-full h-full bg-gradient-to-r from-purple-500 to-violet-400">
      <div className="text-center text-white rounded-l-none rounded p-4">
        <h1 className="text-4xl">Art School</h1>
        <h1 className="p-2 border-b-2 inline border-white">Student Dashboard!!</h1>
      </div>

      <div className="flex justify-evenly rounded-l-none text-white mt-24 mb-12">
        <h1 className="text-xl">Total Added Class: {cart.length || 0}</h1>
        <h1 className="text-xl">Total Price: ${total}</h1>
        <button className="btn btn-sm">Pay Now</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className=" bg-gray-400 text-black">
            <tr>
              <th>Sl</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((row, index) => (
              <tr
                row={row}
                key={row._id}
              >
                <td><span className="lg:badge lg:badge-ghost badge-sm">
                    {index+1}
                  </span></td>
                <td>
                  <div className="flex items-center">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={row.image}
                        //   alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className="lg:badge lg:badge-ghost badge-sm">
                {row.name}
                  </span>
                </td>
                <td className=""><span className="lg:badge lg:badge-ghost badge-sm">
                    ${row.price}
                  </span></td>
                <td>
                  <button onClick={()=>handleDelete(row)} className="btn btn-ghost text-red-500"><FaTrash/></button>
                </td>
              </tr>
            ))}
          
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
