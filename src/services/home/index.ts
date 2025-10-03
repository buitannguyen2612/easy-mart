import { axiosMockFetch } from "@/axios-config-instance";
import type { Product } from "@/models/home/interface";
import { API_ROUTE_URL } from "@/shared/constant/apiRoute";
import type { QueryFunctionContext } from "@tanstack/react-query";
import "./mock";

const getAllProduct = async ({ signal }: QueryFunctionContext) => {
  const rsp = await axiosMockFetch.get<Product[]>(
    API_ROUTE_URL.GET_ALL_PRODUCT,
    {
      signal,
    }
  );
  return rsp.data;
};

export const productService = {
  getAllProduct,
};
