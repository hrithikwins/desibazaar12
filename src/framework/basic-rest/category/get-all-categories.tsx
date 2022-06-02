import { CategoriesQueryOptionsType, Category } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchCategories = async ({ queryKey }: any) => {
    const [_key, _params] = queryKey;
    const {
        data: { data },
    } = await http.get("https://desicover-express-mongo-prod-production.up.railway.app/get-all-categories");
    // } = await http.get("http://localhost:8000/get-all-categories");
    return { categories: { data: data as Category[] } };
};;
export const useCategoriesQuery = (options: CategoriesQueryOptionsType) => {
	return useQuery<{ categories: { data: Category[] } }, Error>(
		[API_ENDPOINTS.CATEGORIES, options],
		fetchCategories
	);
};
