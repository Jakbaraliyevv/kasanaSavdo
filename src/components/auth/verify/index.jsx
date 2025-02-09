import React, { useState } from "react";

import { Flex, Form, Input, notification } from "antd";
import useAxios from "../../../hook/useAxios";

function Verify() {
  const [number, setNumbur] = useState("");
  const [code, setCode] = useState("");

  const axios = useAxios();

  const getValue = () => {
    if (!number.trim() || !code.trim()) {
      return notification.error({
        message: "Xatolik",
        description: "Iltimos, barcha maydonlarni to‘ldiring!",
        duration: 3,
      });   
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
        console.log(data);

        const errorMessages = data?.errors?.map((data) => data.code).join("\n");

        notification.error({
          message: "Xatolik!",
          description: errorMessages || "Noma’lum xatolik!",
          duration: 3,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(userData, "userData");
  };

  return (
    <section className="w-[50%] m-auto flex items-center h-[100vh] justify-center flex-col">
      <Form
        name="basic"
        style={{
          maxWidth: 600,
          width: "40%",
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
    </section>
  );
}
export default Verify;
