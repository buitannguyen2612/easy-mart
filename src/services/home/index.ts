import { axiosMockFetch } from "@/axios-config-instance";
import type { Product } from "@/models/home/interface";
import type { QueryFunctionContext } from "@tanstack/react-query";

const getAllProduct = async ({ signal }: QueryFunctionContext) => {
  const rsp = await axiosMockFetch.get<Product[]>("getallproduct", {
    signal,
  });
  return rsp.data;
};

export const productService = {
  getAllProduct,
};
