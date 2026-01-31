import { ProductDetailSkeleton } from "@/app/(presentation)/features/products/components/ProductDetailSkeleton";
import ProductDetail from "@/app/(presentation)/features/products/ProductDetail";
import { Suspense } from "react";

export default async function Page({ params }: { params: Promise<{ 'product-id': string }> }) {
    return (
        <Suspense fallback={<ProductDetailSkeleton />}>
            <ProductDetail params={params} />
        </Suspense>
    )
}