import { Product } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchProduct = async (_slug: string) => {
    const { data } = await http.post(
        "https://desicover.herokuapp.com/search-product-by-id",
        {
            // privateId: "625a61a59cadba0e48d981ee",
            privateId:
                _slug == "undefined" ? "625a61a59cadba0e48d981ee" : _slug,
        }
    );
    return data;
};
export const useProductQuery = (slug: string) => {
    return useQuery<Product, Error>([API_ENDPOINTS, slug], () =>
        fetchProduct(slug)
    );
};


// export const useProductByIdQuery = (options: QueryOptionsType) => {
//     return useQuery<Product, Error>(
//         [API_ENDPOINTS.RELATED_PRODUCTS, options],
//         fetchProductById
//     );
// };
