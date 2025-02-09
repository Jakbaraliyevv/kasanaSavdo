import React, { useState } from "react";
import { Checkbox, Form, Input } from "antd";
import useAxios from "../../../hook/useAxios";
const googleSvg = "/public/google29.png";
const facebookSvg = "/facebook.svg";

function Login() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const axios = useAxios();

  const getUserData = () => {
    const userData = {
      phone: `+998${number}`,
      password: password,
    };
    axios({
      url: "/api/accounts/sign-in/",
      method: "POST",
      data: userData,
    })
      .then((data) => console.log(data, "datalogin"))
      .catch((error) => console.log(error, "dataerror"));

    console.log(userData);
  };

  const icon_style =
    "border h-[35px] w-full  rounded-md flex items-center justify-center gap-3 mb-2 cursor-pointer";
  return (
    <section className="w-full m-auto flex items-center justify-center flex-col">
      <Form
        name="basic"
        style={{
          maxWidth: 600,
          width: "100%",
        }}
        initialValues={{
          remember: true,
        }}
        autoComplete="off"
      >
        <Form.Item
          label="Number"
          name="username"
          rules={[
            {
              required: true,
              message: "Please Enter your number",
            },
          ]}
        >
          <Input
            onChange={(e) => setNumber(e.target.value)}
            type="number"
            placeholder="Enter your number"
            addonBefore="+998"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <button
            onClick={() => getUserData()}
            className="w-full bg-blue-500 h-[33px] rounded-md text-[#FFF] text-[17px]"
          >
            Submit
          </button>
        </Form.Item>
      </Form>

      <div className="flex w-full m-auto items-center flex-col justify-center mt-3 mb-5 gap-4">
        <p className="w-full text-[#3D3D3D] text-[13px] text-center">
          Or login with
        </p>
        <div className={icon_style}>
          <img className="w-[19px]" src={googleSvg} alt="" />
          Login with Google
        </div>
        <div className={icon_style}>
          <img className="w-[19px]" src={facebookSvg} alt="" />
          Login with Facebook
        </div>
      </div>
    </section>
  );
}
export default Login;
