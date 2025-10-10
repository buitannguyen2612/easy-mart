import type { ProductReview } from "@/models/home/interface";
import { productReviewService } from "@/services/products/productReview";
import { KEYS_QUERY } from "@/shared/constant";
import { RESPONSE_MESSAGE } from "@/shared/message";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export const useProductReview = (
  options?: Partial<
    UseQueryOptions<
      ProductReview[],
      AxiosError<string>,
      ProductReview[],
      KEYS_QUERY[]
    >
  >
) => {
  const query = useQuery({
    queryKey: [KEYS_QUERY.GET_ALL_PRODUCT_REVIEW],
    queryFn: (context) => productReviewService.getAllProductReview(context),
    meta: {
      errorMessage: RESPONSE_MESSAGE.ERROR_MESSAGE,
    },
    enabled: true,
    ...options,
  });

  return {
    ...query,
    listProduct: query.data,
  };
};
