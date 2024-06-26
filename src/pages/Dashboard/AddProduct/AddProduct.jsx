import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddProduct = () => {
  const axiosSecure = useAxiosSecure();

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const carName = form?.carName?.value;
    const price = form?.price?.value;
    const short_description = form?.short_description?.value;
    const big_description = form?.big_description?.value;
    const image = form.photo?.value;

    const productInfo = {
      name: carName,
      image,
      price,
      short_description,
      big_description,
    };
    console.log(productInfo);
    axiosSecure.post("/cars", productInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedCount > 0) {
        alert(`${carName} has been added`);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${carName} has been added`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="bg-black">
      <h2 className="text-3xl font-semibold text-center text-lime-400 pt-16">
        Add your product here
      </h2>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-2xl">
          <div className="card shrink-0 w-full shadow-lime-500 shadow-2xl bg-black">
            <form onSubmit={handleAddProduct} className="card-body ">
              <div className="flex gap-6 ">
                <div className="form-control w-1/2 ">
                  <label className="label">
                    <span className="label-text text-lime-400">Car Name*</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Name"
                    name="carName"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control w-1/2 ">
                  <label className="label">
                    <span className="label-text text-lime-400">Price*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price"
                    name="price"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-lime-400">
                      {" "}
                      Short Description*
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-16"
                    placeholder="Car Short Description"
                    name="short_description"
                    required
                  ></textarea>
                </div>
              </div>
              <div>
                <div className="form-control ">
                  <label className="label">
                    <span className="label-text text-lime-400">
                      Car Big Description*
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Car Description"
                    name="big_description"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-lime-400">Car Photo*</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-lime-500 hover:bg-lime-500 ">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
