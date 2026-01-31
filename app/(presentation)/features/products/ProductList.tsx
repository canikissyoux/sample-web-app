import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getProductListAction } from "@/app/(actions)/home.page.action";
import Link from "next/link";


export default async function ProductList() {

    const response = await getProductListAction();

    if ('products' in response) {

        const products = response.products;

        return (
            <div className="mx-auto max-w-6xl grid gap-2">
                <h1 className="text-2xl font-bold">รายการสินค้า</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {products.map((product) => (
                        <Card key={product.id} className="overflow-hidden flex flex-col pt-0">
                            {/* ส่วนแสดงรูปภาพ Cover */}
                            <div className="aspect-video w-full  overflow-hidden bg-muted">
                                {product.cover_image ? (
                                    <img
                                        src={product.cover_image}
                                        alt={product.name}
                                        className="h-full w-full object-cover transition-hover hover:scale-105"
                                    />
                                ) : (
                                    <div className="flex h-full items-center justify-center text-muted-foreground">
                                        No Image
                                    </div>
                                )}
                            </div>

                            <CardHeader className="p-4">
                                <div className="flex justify-between items-start">
                                    <CardTitle className="text-xl font-bold leading-none">
                                        {product.name ?? "ไม่ระบุชื่อสินค้า"}
                                    </CardTitle>
                                    {product.category && (
                                        <Badge variant="secondary">{product.category}</Badge>
                                    )}
                                </div>
                            </CardHeader>

                            <CardContent className="p-4 pt-0 grow">
                                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                                    {product.specs ?? "ไม่มีรายละเอียดข้อมูลจำเพาะ"}
                                </p>
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-semibold text-primary">
                                        {product.price ? `฿${product.price.toLocaleString()}` : "ติดต่อสอบถาม"}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        คงเหลือ: {product.stock ?? 0} ชิ้น
                                    </span>
                                </div>
                            </CardContent>

                            <CardFooter className="p-4 border-t bg-slate-50/50">
                                <Link href={`/product/${product.id}`} className="w-full">
                                    <Button className="w-full" variant="outline">
                                        ดูรายละเอียด
                                    </Button>
                                </Link>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        )

    }

    return null;
}