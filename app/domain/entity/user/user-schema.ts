import * as z from "zod";

export const UserSchema = z.object({
    "uid": z.string().optional(),
    "email": z.string().optional(),
    "name": z.string().optional(),
    "password": z.string().optional(),
    "access_token": z.string().optional(),
});
export type User = z.infer<typeof UserSchema>;

