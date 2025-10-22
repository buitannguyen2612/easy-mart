import { axiosMockFetch } from "@/axios-config-instance";
import type { Product } from "@/schema-model/models";
import { API_ROUTE_URL } from "@/shared/constant/apiRoute";
import type { QueryFunctionContext } from "@tanstack/react-query";
import "./mock";

const getInteriorProductList = async ({ signal }: QueryFunctionContext) => {
  const rsp = await axiosMockFetch.get<Product[]>(
    API_ROUTE_URL.GET_ALL_INTERIORS_PRODUCT,
    {
      signal,
    }
  );
  return rsp.data;
};

export const productInteriorService = {
  getInteriorProductList,
};
