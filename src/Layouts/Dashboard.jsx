import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const isAdmin = true;
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
            <NavLink to="/">Log Out</NavLink>
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
