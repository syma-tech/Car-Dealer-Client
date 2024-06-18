import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: existingUsers = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      await axiosSecure.get("/users");
    },
  });

  const currentUser = existingUsers?.find((exU) => exU?.email == user?.email);

  const isAdmin = currentUser?.role === "admin" ? true : false;

  const handleLogOut = () => {
    logOut()
      .then(() => {
        refetch();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // const isAdmin = true;
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
