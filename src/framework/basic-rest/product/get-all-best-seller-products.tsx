import { QueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchBestSellerProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.get(
    "https://desicover-node.herokuapp.com/get-product-by-category?category=" +
      _params
  );
  return data as Product[];
};
export const useBestSellerProductsQuery = (options: QueryOptionsType) => {
  return useQuery<Product[], Error>(
    [API_ENDPOINTS.BEST_SELLER_PRODUCTS, options],
    fetchBestSellerProducts
  );
};
