import http from "./axiosHttp";

const getAll = () => {
  return http.get("/brands");
};

const get = (id) => {
  return http.get(`/brands/${id}`);
};

const create = (data) => {
  return http.post("/brands", data);
};

const update = (id, data) => {
  return http.put(`/brands/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/brands/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
