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
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/pay",
        element: <Pay />,
      },
      {
        path: "/dashboard/myOrders",
        element: <MyOrders />,
      },
    ],
  },
]);
