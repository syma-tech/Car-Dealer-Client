import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const { logOut } = useAuth();
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // refetch();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex">
      {/* Dashboard sidebar */}
      <div className="w-64 bg-lime-400 h-screen">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/manageAllOrders">
                  Manage All Orders
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addAProduct">Add A Product</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/makeAdmin">Make Admin</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageProducts">
                  Manage Products
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/pay">Pay</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myOrders">My Orders</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">Reviews</NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink to="/">
              <button onClick={handleLogOut} className="">
                Log Out
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
