import { createBrowserRouter } from "react-router-dom";
import Auth from "../components/auth";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import ProtectedRoute from "../components/protectedRoute";
import Layout from "../components/layouts";
import Verify from "../components/auth/verify"; // To‘g‘ri ✅
const root = createBrowserRouter([
  { path: "/", element: <Auth /> },
  { path: "/verifly", element: <Verify /> },

  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "home", element: <Home /> },
          { path: "about", element: <About /> },
          { path: "contact", element: <Contact /> },
        ],
      },
    ],
  },
]);

export default root;
