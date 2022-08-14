import { QueryOptionsType, Product } from "@framework/types";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import http from "@framework/utils/http";
import shuffle from "lodash/shuffle";
import { useInfiniteQuery } from "react-query";
type PaginatedProduct = {
    data: Product[];
    paginatorInfo: any;
};
const fetchProducts = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    const { data } = await http.get(
        // "https://desicover-node.herokuapp.com/get-product-by-category?category=" + _params.slug
        "https://desicover-node.herokuapp.com/get-product-by-category?category=" + "Mobile",
    );
    return {
        data: shuffle(data),
        paginatorInfo: {
            nextPageUrl: "",
        },
    };
};

const useProductsQuery = (options: QueryOptionsType) => {
    return useInfiniteQuery<PaginatedProduct, Error>(
        [API_ENDPOINTS.PRODUCTS, options],
        fetchProducts,
        {
            getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
        }
    );
};

export { useProductsQuery, fetchProducts };
