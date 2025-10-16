import type { Product } from "@/schema-model/models";
import { productService } from "@/services/home";
import { KEYS_QUERY } from "@/shared/constant";
import { RESPONSE_MESSAGE } from "@/shared/message";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export const useProducs = (
  options?: Partial<
    UseQueryOptions<Product[], AxiosError<string>, Product[], KEYS_QUERY[]>
  >
) => {
  const query = useQuery({
    queryKey: [KEYS_QUERY.GET_ALL_PRODUCT],
    queryFn: (context) => productService.getAllProduct(context),
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
