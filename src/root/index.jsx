// import { createBrowserRouter } from "react-router-dom";
// import Auth from "../components/auth";
// import Verify from "../components/auth/verify";
// import Home from "../pages/home";
// import About from "../pages/about";
// import Contact from "../pages/contact";

// const root = createBrowserRouter([
//   {
//     path: "/",
//     element: <Auth />,
//   },
//   {
//     path: "/verifly",
//     element: <Verify />,
//   },
//   {
//     path: "/home",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
// ]);

// export default root;

import { createBrowserRouter } from "react-router-dom";
import Auth from "../components/auth";
import Verify from "../components/auth/verify";
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Layout from "../components/layouts";

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
    path: "/",
    element: <Layout />,
    children: [
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default root;
