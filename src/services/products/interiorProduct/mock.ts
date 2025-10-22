import { axiosMockAdapter } from "@/axios-config-instance";
import { mockProducts } from "@/services/products/interiorProduct/mock.data";
import { API_ROUTE_URL } from "@/shared/constant/apiRoute";

axiosMockAdapter
  .onGet(API_ROUTE_URL.GET_ALL_INTERIORS_PRODUCT)
  .reply(200, mockProducts);
