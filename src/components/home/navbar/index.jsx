import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LogoutModal from "./modal";

const logo = "/public/Logo.svg";

function NavbarComponents() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const linkStyle = "text-[19px] font-medium";
  const activeStyle = "text-green-600 font-medium";

  const userData = localStorage.getItem("token");

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsModalOpen(false);
    navigate("/");
  };

  return (
    <>
      <section className="w-[90%] m-auto flex items-center justify-between py-4">
        <div>
          <Link to={"/home"}>
            <img src={logo} alt="Logo" />
          </Link>
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
          <button
            onClick={openModal}
            className="w-[120px] outline-none bg-green-500 text-white h-[40px] rounded-md text-[19px] font-medium"
          >
            {userData ? "User" : "Login"}
          </button>
        </div>
      </section>

      <LogoutModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onLogout={handleLogout}
      />
    </>
  );
}

export default NavbarComponents;
