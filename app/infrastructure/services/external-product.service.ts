import { ProductSchemas } from "@/app/domain/entity/product/product";
import { IProductExternalService } from "@/app/domain/repository/product-external.service.interface";

export class ExternalProductService implements IProductExternalService {
    private readonly apiUrl = process.env.EXTERNAL_API_URL;
    async getProducts(): Promise<ProductSchemas[] | null> {
        const response = await fetch(`${this.apiUrl}/products.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            return null;
        }

        const products = await response.json();
        return products;
    }

}