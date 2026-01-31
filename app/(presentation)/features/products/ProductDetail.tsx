import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ShoppingCart } from "lucide-react"
import Link from "next/link"
import { getProductDetail } from "@/app/(actions)/home.page.action"

// สมมติว่ามี Action สำหรับดึงข้อมูลสินค้าชิ้นเดียว
// import { getProductDetailAction } from "@/app/(actions)/product.action";

export default async function ProductDetail({
    params
}: {
    params: Promise<{ 'product-id': string }> // Next.js 15+ แนะนำให้รับเป็น Promise ค่ะ
}) {
    const resolvedParams = await params;
    const productId = resolvedParams['product-id'];
    const response = await getProductDetail(productId);

    if (!response || !('success' in response) || !response.success || !('product' in response)) {
        return (
            <div className="p-10 text-center">
                <h2 className="text-xl font-semibold">ไม่พบรายละเอียดสินค้า</h2>
                <Link href="/" className="text-blue-500 hover:underline mt-4 block">กลับไปหน้าหลัก</Link>
            </div>
        )
    }

    const product = response.product;

    return (
        <div className="container mx-auto max-w-4xl">

            <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" />
                หน้ารายการสินค้า
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* ส่วนรูปภาพสินค้า (Left Column) */}
                <div className="space-y-4">
                    <Card className="overflow-hidden  border-none shadow-md p-0">
                        <div className="aspect-3/4 relative bg-muted">
                            <img
                                src={product.cover_image}
                                alt={product.name}
                                className="object-cover w-full h-full aspect-3/4"
                            />
                        </div>
                    </Card>
                    {/* ถ้ามี image_list สามารถทำ Thumbnail ตรงนี้ได้ค่ะ */}
                </div>

                {/* ส่วนข้อมูลสินค้า (Right Column) */}
                <div className="flex flex-col gap-6">
                    <div>
                        <Badge variant="outline" className="mb-2">{product.category}</Badge>
                        <h1 className="text-3xl font-bold text-slate-900">{product.name}</h1>
                    </div>

                    <div className="space-y-2">
                        <p className="text-4xl font-bold text-primary">
                            ฿{product?.price}
                        </p>
                        <p className="text-sm text-muted-foreground">
                            คงเหลือในคลัง: <span className="font-medium text-slate-700">{product.stock} ชิ้น</span>
                        </p>
                    </div>

                    <Card className="bg-slate-50/50 border-slate-100">
                        <CardContent className="p-4 space-y-3">
                            <h3 className="font-semibold text-slate-800">รายละเอียดสินค้า</h3>
                            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
                                {product.specs}
                            </p>
                        </CardContent>
                    </Card>

                    <div className="flex gap-4 mt-auto">
                        <Button className="flex-1 h-12 text-lg shadow-lg">
                            <ShoppingCart className="w-5 h-5 mr-2" />
                            สั่งซื้อสินค้า
                        </Button>
                        <Button variant="outline" className="h-12 px-6">
                            ติดต่อสอบถาม
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}