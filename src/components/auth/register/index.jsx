import React, { useState } from "react";
import { Checkbox, Form, Input, notification } from "antd";
import useAxios from "../../../hook/useAxios";
import { useNavigate } from "react-router-dom";
import notificationApi from "../../generic/notification";
import { LoadingOutlined } from "@ant-design/icons";
const googleSvg = "/public/google29.png";
const facebookSvg = "/facebook.svg";

function Register() {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const axios = useAxios();

  const notify = notificationApi();

  const getValue = () => {
    if (!number || !password) {
      return notify({ type: "pustoy" });
    }
    const userData = {
      password: password,
      phone: `+998${number}`,
    };

    setLoading(true);
    axios({
      url: "/api/accounts/register/step1/",
      method: "POST",
      data: userData,
    })
      .then((data) => {
        if (data.errors) {
          const errorMessages = Object.entries(data.errors)
            .map(([key, value]) => `${value?.[0]}`)
            .join("\n");

          notify({
            type: "errorMessage",
            text: errorMessages.split(" ").splice(1, 3).join(' '),
          });
        } else {
          navigate("/verifly");
        }
      })
      .catch((error) => {
        console.log("Xato kettida:", error);
        notify({
          type: "catchError",
          catchErorror: error.response?.data?.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
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
          name="phone"
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
            onClick={() => getValue()}
            className={`w-full bg-blue-500 h-[33px] outline-none rounded-md text-[#FFF] text-[17px] ${
              loading ? "opacity-75" : "opacity-100"
            }`}
          >
            {loading ? <LoadingOutlined /> : " Register"}
          </button>
        </Form.Item>
      </Form>

      <div className="flex w-full m-auto items-center flex-col justify-center mt-3 mb-5 gap-4">
        <p className="w-full text-[#3D3D3D] text-[13px] text-center">
          Or register with
        </p>
        <div className={icon_style}>
          <img className="w-[19px]" src={googleSvg} alt="" />
          Register with Google
        </div>
        <div className={icon_style}>
          <img className="w-[19px]" src={facebookSvg} alt="" />
          Register with Facebook
        </div>
      </div>
    </section>
  );
}
export default Register;
