import axios from "axios";

const useAxios = () => {
  console.log(import.meta.VITE_BASE_URL);
  const response = async ({ url, method = "GET", data, headers, params }) => {
    return axios({
      url: `${import.meta.env.VITE_BASE_URL}${url}`,
      method,
      data,
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
