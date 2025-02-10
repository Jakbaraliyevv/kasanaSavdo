import { notification } from "antd";

const notificationApi = () => {
  const notify = ({ type, text, catchErorror, verify }) => {
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
      case "login":
        return notification.success({
          message: "Login Succsess",
        });
      case "errLogin":
        return notification.error({
          message: " Nomer yoki parol noto‘g‘ri",
        });
      case "set":
        return notification.error({
          message: "Server bilan bog‘lanishda xatolik yuz berdi",
        });
      case "timeOut":
        return notification.error({
          message: "Token muddati tugadi. Iltimos, qayta tizimga kiring.",
        });
      case "verifyError":
        return notification.error({
          message: verify,
        });
      case "success":
        return notification.success({
          message: "Ro‘yxatdan o‘tish muvaffaqiyatli !",
        });
      default:
        break;
    }
  };
  return notify;
};

export default notificationApi;
