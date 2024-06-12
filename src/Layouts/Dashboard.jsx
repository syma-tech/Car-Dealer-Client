import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 bg-lime-400 h-screen">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/pay">Pay</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myOrders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reviews">Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/">Log Out</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
