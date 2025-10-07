import { message } from "antd";
import React from "react";

const Toastmsg = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () =>
    messageApi.open({
      type: "success",
      content: "User Created !!",
    });
  const error = () =>
    messageApi.open({
      type: "warning",
      content: "Something Went Wrong !!",
    });
  return (
    <>
      {contextHolder}
      {children}
    </>
  );
};

export default Toastmsg;
