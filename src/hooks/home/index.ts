import type { Product } from "@/models/home/interface";
import { productService } from "@/services/home";
import { KEYS_QUERY } from "@/shared/constant";
import { MESSAGE } from "@/shared/message";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";
import type { AxiosError } from "axios";

export const useProduct = (
  options?: Partial<
    UseQueryOptions<Product[], AxiosError<string>, Product[], KEYS_QUERY[]>
  >
) => {
  const query = useQuery({
    queryKey: [KEYS_QUERY.GET_ALL_PRODUCT],
    queryFn: (context) => productService.getAllProduct(context),
    meta: {
      errorMessage: MESSAGE.errorMessage,
    },
    enabled: false,
    ...options,
  });

  return {
    ...query,
    listProduct: query.data,
  };
};
