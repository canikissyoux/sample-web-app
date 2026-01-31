import { BadRequestException } from "@/app/core/exceptions/base.exception";
import { IProductExternalService } from "@/app/domain/repository/product-external.service.interface";

export async function getProductList(
    productService: IProductExternalService
) {
    const products = await productService.getProducts();

    if (!products) throw new BadRequestException();
    return products;
}