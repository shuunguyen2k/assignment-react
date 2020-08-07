import http from "./axiosHttp";

const getAll = () => {
  return http.get("/brands");
};

export default getAll;
