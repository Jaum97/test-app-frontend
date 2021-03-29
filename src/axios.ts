import axios, { AxiosInstance } from "axios";

export const BYPASS_CORS_PROXY = "https://cors-anywhere.herokuapp.com";

const API_URL = "http://192.168.0.96:8080";

export const axiosInstance: AxiosInstance = axios.create({
//   baseURL: `${BYPASS_CORS_PROXY}/${API_URL}`,
baseURL: `${API_URL}`,

timeout: 300000,
  headers: {
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    "Access-Control-Allow-Origin": "*"
  },
});
