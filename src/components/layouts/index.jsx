import { Outlet } from "react-router-dom";
import NavbarComponents from "../home/navbar";

const Layout = () => {
  return (
    <div>
      <NavbarComponents />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
