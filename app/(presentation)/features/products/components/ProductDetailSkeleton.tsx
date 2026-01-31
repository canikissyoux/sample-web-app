import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent } from "@/components/ui/card"

export function ProductDetailSkeleton() {
    return (
        <div className="container mx-auto p-6 max-w-5xl animate-in fade-in duration-500">
            {/* Skeleton ปุ่มย้อนกลับ */}
            <Skeleton className="h-4 w-32 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left: Image Skeleton */}
                <div className="space-y-4">
                    <Card className="overflow-hidden border-none shadow-md p-0">
                        <Skeleton className="aspect-3/4 w-full" />
                    </Card>
                </div>

                {/* Right: Info Skeleton */}
                <div className="flex flex-col gap-6">
                    <div className="space-y-2">
                        <Skeleton className="h-5 w-24" /> {/* Badge */}
                        <Skeleton className="h-10 w-full" /> {/* Title */}
                    </div>

                    <div className="space-y-3">
                        <Skeleton className="h-12 w-48" /> {/* Price */}
                        <Skeleton className="h-4 w-32" /> {/* Stock */}
                    </div>

                    <Card className="bg-slate-50/50 border-slate-100">
                        <CardContent className="p-4 space-y-3">
                            <Skeleton className="h-5 w-40" />
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-2/3" />
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex gap-4 mt-auto">
                        <Skeleton className="h-12 flex-1" />
                        <Skeleton className="h-12 w-32" />
                    </div>
                </div>
            </div>
        </div>
    )
}