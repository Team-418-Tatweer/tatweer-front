import { CONFIG } from "@/config/global";
import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({ baseURL: CONFIG.apiUrl });

axiosInstance.interceptors.response.use(
  response => response,
  error =>
    Promise.reject((error.response && error.response.data) || "Something went wrong!")
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args: string | [string, AxiosRequestConfig]) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args];

    const res = await axiosInstance.get(url, { ...config });
    if (res.data?.status !== 1) throw new Error(res.data?.message);
    return res.data;
  } catch (error) {
    console.error("Failed to fetch:", error);
    throw error;
  }
};

export const ENDPOINTS = {
  auth: {
    login: "/api/auth/login",
    signup: "/api/auth/signup",
  },
};
