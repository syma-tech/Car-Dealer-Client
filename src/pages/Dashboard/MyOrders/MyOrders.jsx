import { FaTrash } from "react-icons/fa";
import useOrder from "../../../hooks/useOrder";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyOrders = () => {
  const [orders, refetch] = useOrder();
  const axiosSecure = useAxiosSecure();
  const totalPrice = orders.reduce((total, order) => total + order.price, 0);

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

  return (
    <div>
      {/* heading here */}
      <div className="flex justify-evenly mb-20 mt-10">
        <h2 className="text-3xl">Orders: {orders.length}</h2>
        <h2 className="text-3xl">Total Price: $ {totalPrice}</h2>
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((order, index) => (
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

export default MyOrders;
