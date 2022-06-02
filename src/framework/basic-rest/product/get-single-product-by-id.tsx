import { QueryOptionsType, Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchProductById = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const { data } = await http.post(
    "https://desicover-express-mongo-prod-production.up.railway.app/search-product-by-id",
    {
      privateId: "625a61a59cadba0e48d981ee",
    }
  );
  console.log(data);
  return data;
};
export const useProductByIdQuery = (options: QueryOptionsType) => {
  return useQuery<Product, Error>(
    [API_ENDPOINTS.RELATED_PRODUCTS, options],
    fetchProductById
  );
};
