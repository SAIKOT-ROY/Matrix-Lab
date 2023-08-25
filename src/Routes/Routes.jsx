import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Token from "../Pages/Token/Token";
import PairAdress from "../Pages/PairAdress/PairAdress";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
            path: '/token',
            element: <Token />
        },
        {
            path: "/address",
            element: <PairAdress />
        }
      ]
    },
  ]);
