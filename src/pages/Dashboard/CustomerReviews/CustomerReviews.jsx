import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CustomerReviews = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleReviews = (e) => {
    e.preventDefault();
    const form = e.target;
    const rating = form.rating.value;
    const details = form.details.value;

    const reviewInfo = {
      customerName: user.displayName,
      details,
      rating,
    };
    console.log(reviewInfo);

    axiosSecure.post("/reviews", reviewInfo).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire(`${user.displayName}! Thank you for you kind review.`);
      }
    });
  };
  return (
    <div className="bg-black h-screen items-center flex flex-col space-y-20">
      <h2 className="text-4xl font-semibold text-center pt-10 text-lime-500">
        Please Give us your Feed back
      </h2>
      <div className="card shrink-0 w-full max-w-sm shadow-lime-400 shadow-2xl  bg-black">
        <form onSubmit={handleReviews} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lime-500">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Give Us Rating!"
              name="rating"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lime-500">Feedback</span>
            </label>
            <textarea
              className="textarea "
              name="details"
              placeholder="Give Us Your Feedback"
              required
            ></textarea>

            <label className="label"></label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-lime-500 hover:bg-lime-600 text-black">
              Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerReviews;
