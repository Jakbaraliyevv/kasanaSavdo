import { createBrowserRouter } from "react-router-dom";
import Auth from "../components/auth";
import Verify from "../components/auth/verify";
import Home from "../pages/home";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/verifly",
    element: <Verify />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

export default root;
