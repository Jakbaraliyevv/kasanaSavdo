import { createBrowserRouter } from "react-router-dom";
import Auth from "../components/auth";
import Verify from "../components/auth/verify";

const root = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
  },
  {
    path: "/verifly",
    element: <Verify />,
  },
]);

export default root;
