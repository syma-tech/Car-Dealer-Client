import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Register = () => {
  const { signUp, userUpdateProfile } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email?.value;
    const password = form.password?.value;
    const photo = form.photo?.value;
    const name = form.name?.value;
    console.log(email, password, name, photo);

    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });

        navigate("/");

        userUpdateProfile(name, photo)
          .then(() => {})
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-black text-orange-600">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="w-1/2 card shrink-0 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo"
                  name="photo"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-600">Register</button>
              </div>
            </form>
            <p className="p-8">
              <small>
                Already have an account? <Link to="/login"> Login</Link>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
