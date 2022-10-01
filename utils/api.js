import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_KEY,
  withCredentials: false,
});

export { apiClient };
