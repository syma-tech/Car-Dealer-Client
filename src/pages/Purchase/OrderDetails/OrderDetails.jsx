import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OrderDetails = ({ _id, image, name, short_description, price }) => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const form = e.target;
    const streetAddress = form.streetAddress?.value;
    const phone = form.phone?.value;

    console.log(streetAddress, phone);

    const orderInfo = {
      orderId: _id,
      carName: name,
      image,
      price,
      email: user?.email,
      userName: user?.displayName,
    };

    axiosSecure.post("/orders", orderInfo).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user?.displayName}!!! your order has been placed`,
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(res.data);
      }
    });
  };
  return (
    <div className="card">
      {/* car details */}
      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>

        <ul className="list-disc flex space-x-10 ml-4">
          <li>2021</li>
          <li>Convertible</li>
          <li>Diesel</li>
        </ul>
        <div className="divider my-3"></div>
        <h2 className=" text-4xl">$ {price}</h2>
        <p className="text-lg">{short_description}</p>
      </div>

      {/* Order Details */}

      <div className=" card-body bg-orange-600">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Applicant Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-white">
            Personal details and application.
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 ">Full name</dt>
              <dd className="mt-1 text-sm leading-6 text-black sm:col-span-2 sm:mt-0">
                {user.displayName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email address
              </dt>
              <dd className="mt-1 text-sm leading-6  sm:col-span-2 sm:mt-0 text-black">
                {user.email}
              </dd>
            </div>
            <form onSubmit={handlePlaceOrder}>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  <label
                    htmlFor="streetAddress"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Street address
                  </label>
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <input
                    type="text"
                    name="streetAddress"
                    id="streetAddress"
                    autoComplete="streetAddress"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    required
                  />
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
                <button className="btn btn-neutral  bg-black text-white hover:text-white">
                  Place Order
                </button>
              </div>
            </form>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
