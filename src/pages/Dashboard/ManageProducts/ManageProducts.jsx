import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useProducts from "../../../hooks/useProducts";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ManageProducts = () => {
  const [cars, refetch] = useProducts();
  const axiosPublic = useAxiosPublic();

  const handleRemoveProduct = (id) => {
    Swal.fire({
      title: "Hey! Are you sure to Delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/cars/${id}`).then((res) => {
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
  console.log(cars);
  return (
    <div>
      {/* heading here */}
      <div className="flex justify-evenly mb-20 mt-10">
        <h2 className="text-3xl">Total Products in Stock: $ {cars.length}</h2>
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
            {cars.map((car, index) => (
              <tr key={car._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={car.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{car.name}</td>
                <td>{car.short_description}</td>
                <td>$ {car.price}</td>
                <th>
                  <button
                    onClick={() => handleRemoveProduct(car._id)}
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

export default ManageProducts;
