import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash } from "react-icons/fa";
import useAllOrders from "../../../hooks/useAllOrders";
import { useState } from "react";

const ManageAllOrders = () => {
  const [totalOrders, refetch] = useAllOrders();
  const axiosSecure = useAxiosSecure();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/orders/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  const [pending, setPending] = useState(true);

  const handleShipping = () => {
    setPending(false);
  };
  return (
    <div>
      {/* heading here */}
      <div className="flex justify-evenly mb-20 mt-10">
        <h2 className="text-3xl">Total Orders: {totalOrders.length}</h2>
      </div>
      {/* table here */}
      <div className="overflow-x-auto ml-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Default Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {totalOrders.map((order, index) => (
              <tr key={order._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{order.carName}</td>
                <td>{order.email}</td>
                <td>$ {order.price}</td>
                <td>
                  {pending ? (
                    <button
                      onClick={() => setPending(false)}
                      className="btn btn-warning btn-xs"
                    >
                      Pending
                    </button>
                  ) : (
                    <button className="btn btn-success btn-xs text-white">
                      Shipped
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrash className="text-lg text-red-600" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
