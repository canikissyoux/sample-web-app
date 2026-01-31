import { z } from 'zod';

export const loginSchema = z.object({
    email: z
        .email()
        .min(1, 'กรุณากรอกอีเมล'),
    password: z
        .string()
        .min(8, 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร')
        .min(1, 'กรุณากรอกรหัสผ่าน'),
});

export type LoginInput = z.infer<typeof loginSchema>;