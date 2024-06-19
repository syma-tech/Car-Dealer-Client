import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Explore from "../pages/Explore/Explore/Explore";
import Purchase from "../pages/Purchase/Purchase/Purchase";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Register/Register/Register";
import PrivateRoute from "./PrivateRoute";
import { axiosSecure } from "../hooks/useAxiosSecure";
import Dashboard from "../Layouts/Dashboard";
import Pay from "../pages/Dashboard/Pay/Pay";
import MyOrders from "../pages/Dashboard/MyOrders/MyOrders";
import CustomerReviews from "../pages/Dashboard/CustomerReviews/CustomerReviews";
import MakeAdmin from "../pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "./AdminRoute";
import AddProduct from "../pages/Dashboard/AddProduct/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/explore",
        element: <Explore />,
        // loader: () => fetch("https://car-dealer-server-three.vercel.app/cars"),
        // loader: () => fetch("http://localhost:5000/cars"),
        loader: () => fetch("https://car-dealer-server-three.vercel.app/cars"),
      },
      {
        path: "/purchase/:id",
        element: (
          <PrivateRoute>
            <Purchase />
          </PrivateRoute>
        ),
        loader: ({ params }) => axiosSecure(`/cars/${params.id}`),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      // normal users routes
      {
        path: "/dashboard/pay",
        element: <Pay />,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/reviews",
        element: <CustomerReviews />,
      },

      // admin only routes
      {
        path: "/dashboard/addAProduct",
        element: (
          <AdminRoute>
            <AddProduct />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/makeAdmin",
        element: (
          <AdminRoute>
            <MakeAdmin />
          </AdminRoute>
        ),
      },
    ],
  },
]);
