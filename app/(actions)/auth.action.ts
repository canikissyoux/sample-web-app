// app/(actions)/auth.action.ts
"use server"

import { cookies } from "next/headers"
import { LoginInput } from "../domain/entity/auth/login-schema";
import { handleActionError } from "../core/utils/error-handler";
import { loginUseCase } from "../use-cases/auth/login-factory";

export async function loginAction(formData: LoginInput) {
    try {
        // 1. ตรวจสอบ Logic ผ่าน Use Case
        const user = await loginUseCase(formData);
        const token = user.access_token;

        const cookieStore = await cookies();

        cookieStore.set('access_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 60 * 60 * 24 // 1 วัน
        });
        return { success: true, user };
    } catch (error: any) {
        return handleActionError(error);
    }

}

export async function logoutAction() {
    try {
        const cookieStore = await cookies();
        cookieStore.delete('access_token');
        return { success: true };
    } catch (error: any) {
        return handleActionError(error);
    }
}