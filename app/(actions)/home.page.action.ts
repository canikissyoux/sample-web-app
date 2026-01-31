'use server'

import { handleActionError } from "../core/utils/error-handler";
import { getProductListUseCase } from "../use-cases/product/product-factory";

export async function getProductListAction() {
    try {
        const products = await getProductListUseCase();
        return { success: true, products };
    } catch (error: any) {
        return handleActionError(error);
    }

}
export async function getProductDetail(id: string) {
    try {
        const products = await getProductListUseCase();


        const product = products.find((product) => product.id === parseInt(id));
        if (!product) {
            throw new Error("Product not found");
        }

        return { success: true, product };
    } catch (error: any) {
        return handleActionError(error);
    }

}