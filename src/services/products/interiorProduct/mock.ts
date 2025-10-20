import { axiosMockAdapter } from "@/axios-config-instance";
import { mockProductReviews } from "@/services/products/productReview/mock.data";
import { API_ROUTE_URL } from "@/shared/constant/apiRoute";

axiosMockAdapter
  .onGet(API_ROUTE_URL.GET_ALL_REVIEW_PRODUCT)
  .reply(200, mockProductReviews);
