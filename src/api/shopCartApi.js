import http from "./axiosHttp";

const getAll = () => {
  return http.get("/shopCarts");
};
const get = (id) => {
  return http.get(`/shopCarts/${id}`);
};

const create = (data) => {
  return http.post("/shopCarts", data);
};

const update = (id, data) => {
  return http.put(`/shopCarts/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/shopCarts/${id}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
};
