import { ProductSchemas } from "../entity/product/product";

export interface IProductExternalService {
    getProducts(): Promise<ProductSchemas[] | null>
}