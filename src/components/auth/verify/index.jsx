import React from "react";

import { Flex, Form, Input } from "antd";

function Verify() {
  const onChange = (text) => {
    console.log("onChange:", text);
  };
  const onInput = (value) => {
    console.log("onInput:", value);
  };
  const sharedProps = {
    onChange,
    onInput,
  };

  // verfly tepadagi cod

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

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
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
            type="number"
            placeholder="Enter your number"
            addonBefore="+998"
          />
        </Form.Item>

        <Flex gap="middle" align="flex-start" vertical>
          <h3 className="text-black">Tasdiqlash kodini kiriting :</h3>
          <Input.OTP
            length={5}
            formatter={(str) => str.toUpperCase()}
            onChange={onChange}
          />
        </Flex>

        <Form.Item label={null}>
          <button className="w-full bg-blue-500 h-[33px] rounded-md text-[#FFF] text-[17px]">
            Submit
          </button>
        </Form.Item>
      </Form>
    </section>
  );
}
export default Verify;
