import { axiosMockFetch } from "@/axios-config-instance";
import type { ProductReview } from "@/models/home/interface";
import { API_ROUTE_URL } from "@/shared/constant/apiRoute";
import type { QueryFunctionContext } from "@tanstack/react-query";
import "./mock";

const getAllProductReview = async ({ signal }: QueryFunctionContext) => {
  const rsp = await axiosMockFetch.get<ProductReview[]>(
    API_ROUTE_URL.GET_ALL_REVIEW_PRODUCT,
    {
      signal,
    }
  );
  return rsp.data;
};

export const productReviewService = {
  getAllProductReview,
};
