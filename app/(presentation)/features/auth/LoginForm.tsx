'use client'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginInput, loginSchema } from "@/app/domain/entity/auth/login-schema"
import { useLogin } from "../_hook/auth/use-login"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, LockKeyhole } from "lucide-react"

export default function LoginForm() {
    const { handleLogin, isLoading, error } = useLogin()

    const form = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: ""
        }
    })

    const { reset, handleSubmit, formState: { isSubmitting } } = form

    const onSubmit = async (data: LoginInput) => {
        handleLogin(data)
    }

    useEffect(() => {
        reset({
            email: "somchai.dev@example.com",
            password: "Password1234!"
        })
    }, [reset])

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <Card className="w-full max-w-md shadow-lg">
                <CardHeader className="space-y-1 flex flex-col items-center">
                    <div className="bg-primary/10 p-3 rounded-full mb-2">
                        <LockKeyhole className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">ลงชื่อเข้าใช้</CardTitle>
                </CardHeader>
                <CardContent>
                    {error && (
                        <div className="mb-4 flex items-center gap-2 p-3 text-sm font-medium text-destructive bg-destructive/10 border border-destructive/20 rounded-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive animate-pulse" />
                            {error.message || "อีเมลหรือรหัสผ่านไม่ถูกต้อง"}
                        </div>
                    )}
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                            {/* Email Field */}
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>อีเมล</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="example@mail.com"
                                                className="focus-visible:ring-primary"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            {/* Password Field */}
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>รหัสผ่าน</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="password"
                                                placeholder="••••••••"
                                                className="focus-visible:ring-primary"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full mt-6 bg-[#15173D] hover:bg-[#1A3263] transition-all"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        กำลังตรวจสอบ...
                                    </>
                                ) : (
                                    'เข้าสู่ระบบ'
                                )}
                            </Button>
                        </form>
                    </Form>
                </CardContent>

            </Card>
        </div>
    )
}