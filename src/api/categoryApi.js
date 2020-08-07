import http from "./axiosHttp";

const getAll = () => {
  return http.get("/categories");
};

export default { getAll };