import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

function Auth() {
  const [active, setActive] = useState(true);

  return (
    <section className="w-[30%]  m-auto flex items-center h-[100vh] flex-col justify-center">
      <div className="flex items-center gap-[40px] pb-[40px]">
        <h1
          onClick={() => setActive(true)}
          className={`text-[22px] font-medium cursor-pointer ${
            active && "text-blue-500"
          }`}
        >
          Login
        </h1>
        <h1
          onClick={() => setActive(false)}
          className={`text-[22px] font-medium cursor-pointer ${
            !active && "text-blue-500"
          }`}
        >
          Register
        </h1>
      </div>

      <div className="w-full">{active ? <Login /> : <Register />}</div>
    </section>
  );
}

export default Auth;
