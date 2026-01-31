import * as yup from 'yup';

export const loginSchema = yup.object({
    email: yup
        .string()
        .email('รูปแบบอีเมลไม่ถูกต้อง')
        .required('กรุณากรอกอีเมล'),

    password: yup
        .string()
        .min(8, 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร')
        .required('กรุณากรอกรหัสผ่าน'),
});

export type LoginInput = yup.InferType<typeof loginSchema>;