import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Explore from "../pages/Explore/Explore/Explore";
import Purchase from "../pages/Purchase/Purchase";

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
        loader: () => fetch("https://car-dealer-server-three.vercel.app/cars"),
      },
      {
        path: "/purchase/:id",
        element: <Purchase />,
        loader: (params) =>
          fetch(`https://car-dealer-server-three.vercel.app/cars/${params.id}`),
      },
    ],
  },
]);
