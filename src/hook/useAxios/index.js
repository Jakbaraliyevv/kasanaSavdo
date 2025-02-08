import axios from "axios";

const useAxios = () => {
  console.log(import.meta.VITE_BASE_URL);
  const response = async ({ url, method = "GET", body, headers, params }) => {
    return axios({
      // url: `${import.meta.VITE_BASE_URL}${url}`,
      url: `https://api.users.kasanabozor.uz${url}`,
      method,
      data: body,
      headers: {
        Authorization: `Bearer${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
        ...headers,
      },
      params: {
        access_token: localStorage.getItem("token"),
        ...params,
      },
    }).then((res) => res.data);
  };

  return response;
};

export default useAxios;

// https://api.users.kasanabozor.uz/api/accounts/register/step1
// https://api.users.kasanabozor.uz/api/accounts/register/step1 