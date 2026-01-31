import * as z from "zod";

export const ProductSchemasSchema = z.object({
    "id": z.number().optional(),
    "name": z.string().optional(),
    "category": z.string().optional(),
    "price": z.number().optional(),
    "stock": z.number().optional(),
    "specs": z.string().optional(),
    "cover_image": z.string().optional(),
    "image_list": z.array(z.string()).optional(),
});
export type ProductSchemas = z.infer<typeof ProductSchemasSchema>;
