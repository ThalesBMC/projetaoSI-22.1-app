import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://flyer-projetao-si.herokuapp.com/",
  withCredentials: false,
});

export { apiClient };
