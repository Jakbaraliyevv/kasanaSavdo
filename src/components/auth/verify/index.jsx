import React, { useState } from "react";

import { Flex, Form, Input } from "antd";
import useAxios from "../../../hook/useAxios";
import notificationApi from "../../generic/notification";
import { useNavigate } from "react-router-dom";

function Verify() {
  const [number, setNumbur] = useState("");
  const [code, setCode] = useState("");

  const axios = useAxios();
  const notifym = notificationApi();
  const navigate = useNavigate();
  const getValue = () => {
    if (!number.trim() || !code.trim()) {
      return notifym({ type: "pustoy" });
    }
    const userData = {
      phone: `+998${number}`,
      code: code,
    };

    axios({
      url: "/api/accounts/register/step2/",
      method: "POST",
      data: userData,
    })
      .then((data) => {
        console.log(data, "Server javobi");

        if (data?.status === "ok") {
          navigate("/");
          notifym({
            type: "success",
            message: "Ro‘yxatdan o‘tish muvaffaqiyatli!",
          });
        } else {
          const errorMessages = data?.errors?.map((e) => e.code).join("\n");
          notifym({ type: "verifyError", verify: errorMessages });
        }
      })

      .catch((error) => {
        console.log(error);
      });
    console.log(userData, "userData");
  };

  return (
    <section className="w-[50%] m-auto flex items-center h-[100vh] justify-center flex-col">
      <div className="w-[60%] bg-white shadow-[1px_4px_29px_rgba(0,0,0,0.1)] rounded-lg p-6 py-[80px]">
        <div className="text-center pb-9">
          <h2 className="text-[19px] font-medium">Tasdiq codini kiriting !</h2>
        </div>
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
              onChange={(e) => setNumbur(e.target.value)}
              type="number"
              placeholder="Enter your number"
              addonBefore="+998"
            />
          </Form.Item>

          <Flex gap="middle" align="flex-center" justify="center" vertical>
            <h3 className="text-black">Tasdiqlash kodini kiriting :</h3>

            <Input.OTP
              length={5}
              value={code}
              onChange={(value) => setCode(value)}
            />
          </Flex>

          <Form.Item label={null}>
            <button
              onClick={() => getValue()}
              className="w-full bg-blue-500 h-[33px] mt-7 rounded-md text-[#FFF] text-[17px]"
            >
              Submit
            </button>
          </Form.Item>
        </Form>
      </div>
    </section>
  );
}
export default Verify;
