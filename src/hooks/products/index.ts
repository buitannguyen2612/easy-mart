import type { Product } from "@/schema-model/models";
import { productInteriorService } from "@/services/products/interiorProduct";
import { KEYS_QUERY } from "@/shared/constant";
import { RESPONSE_MESSAGE } from "@/shared/message";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export const useInteriorProducts = (
  options?: Partial<
    UseQueryOptions<Product[], AxiosError<string>, Product[], KEYS_QUERY[]>
  >
) => {
  const query = useQuery({
    queryKey: [KEYS_QUERY.GET_ALL_INTERIOR_PRODUCT],
    queryFn: (context) =>
      productInteriorService.getInteriorProductList(context),
    meta: {
      errorMessage: RESPONSE_MESSAGE.ERROR_MESSAGE,
    },
    enabled: true,
    ...options,
  });

  return {
    ...query,
    listInteriorProduct: query.data,
  };
};
