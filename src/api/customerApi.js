import http from "./axiosHttp";

const getAll = () => {
  return http.get("/customers");
};

const get = (id) => {
  return http.get(`/customers/${id}`);
};

const create = (data) => {
  return http.post("/customers", data);
};

const update = (id, data) => {
  return http.put(`/customers/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/customers/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
