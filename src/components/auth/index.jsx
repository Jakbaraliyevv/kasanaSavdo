import React, { useState } from "react";
import Login from "./login";
import Register from "./register";

function Auth() {
  const [active, setActive] = useState(true);

  return (
    <section className="w-[30%]  m-auto flex items-center h-[100vh] flex-col justify-center max-[1300px]:w-[40%] max-[1000px]:w-[50%] max-[750px]:w-[60%] max-[600px]:w-[70%] max-[480px]:w-[80%] max-[420px]:w-[90%] max-[380px]:text-[10px]">
      <div className="w-full bg-white shadow-[1px_4px_29px_rgba(0,0,0,0.1)] rounded-lg p-6">
        <div className="flex justify-center items-center gap-[40px] pb-[40px]">
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
      </div>
    </section>
  );
}

export default Auth;
