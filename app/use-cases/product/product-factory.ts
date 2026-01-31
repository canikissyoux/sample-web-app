import { container } from "@/app/infrastructure/di-container";
import { getProductList } from "./get-product-list.use-case";


export const getProductListUseCase = () =>
    getProductList(container.productExternalService);
