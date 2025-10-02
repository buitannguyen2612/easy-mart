import axios, { type AxiosInstance } from "axios";
import AxiosMockAdapter from "axios-mock-adapter";

export const axiosFetch: AxiosInstance = axios.create({
  baseURL: "local:3000",
  timeout: 0,
});

export const axiosMockFetch: AxiosInstance = axios.create({
  baseURL: "local:3000",
  timeout: 0,
});

export const axiosMockAdapter = new AxiosMockAdapter(axiosMockFetch, {
  delayResponse: 1000 * 0.8,
});

export const axiosInterceptor = () => {};
