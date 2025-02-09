import React from "react";
import { NavLink } from "react-router-dom";
const logo = "/public/Logo.svg";

function NavbarComponents() {
  const linkStyle = "text-[19px] ";
  const activeStyle = "text-green-600 font-medium";

  return (
    <section className="w-[90%] m-auto flex items-center justify-between py-4">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className="flex items-center gap-7">
        <NavLink
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "text-[#000]"}`
          }
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "text-[#000]"}`
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${linkStyle} ${isActive ? activeStyle : "text-[#000]"}`
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
      <div>
        <button className="w-[120px] outline-none bg-green-500 text-white h-[40px] rounded-md text-[19px] font-medium">
          Login
        </button>
      </div>
    </section>
  );
}

export default NavbarComponents;
