import { axiosMockFetch } from "@/axios-config-instance";
import { API_ROUTE_URL } from "@/shared/constant/apiRoute";
import type { QueryFunctionContext } from "@tanstack/react-query";
import "./mock";
import type { ProductReview } from "@/schema-model/models";

const getInteriorProductList = async ({ signal }: QueryFunctionContext) => {
  const rsp = await axiosMockFetch.get<ProductReview[]>(
    API_ROUTE_URL.GET_ALL_REVIEW_PRODUCT,
    {
      signal,
    }
  );
  return rsp.data;
};

export const productReviewService = {
  getInteriorProductList,
};
