import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/explore">Explore</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </>
      ) : (
        <></>
      )}
      <li>{user?.email && <p>{user?.email}</p>}</li>
    </>
  );
  return (
    <div className="navbar bg-black text-orange-500 active:text-orange-500">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost  text-xl">Car Dealer</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal active:text-orange-500  px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        {user?.email ? (
          <>
            <Link>
              <button
                onClick={handleLogOut}
                className="btn btn-sm hover:bg-white hover:text-orange-600 border-0 text-white bg-orange-600"
              >
                Log Out
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link
              className="btn btn-sm hover:bg-white hover:text-orange-600 border-0 text-white bg-orange-600"
              to="/login"
            >
              Login
            </Link>

            <Link
              className="btn btn-sm hover:bg-white hover:text-orange-600 border-0 text-white bg-orange-600 "
              to="/register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
