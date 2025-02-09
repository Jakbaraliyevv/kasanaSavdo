import { notification } from "antd";

const notificationApi = () => {
  const notify = ({ type, text, catchErorror }) => {
    switch (type) {
      case "register":
        return notification.success({
          message: "Siz ro‘yxatdan muvaffaqiyatli o‘tdingiz",
        });
      case "pustoy":
        return notification.error({
          message: "Iltimos barcha bo'shliqni to'ldiring !",
        });
      case "errorMessage":
        return notification.error({
          message: text,
        });
      case "catchError":
        return notification.error({
          message: catchErorror,
        });
      default:
        break;
    }
  };
  return notify;
};

export default notificationApi;
