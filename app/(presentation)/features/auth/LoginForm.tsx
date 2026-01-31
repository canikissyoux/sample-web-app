'use client'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { LoginInput, loginSchema } from "@/app/domain/entity/auth/login-schema"
import { useLogin } from "./hook/use-login"


export default function LoginForm() {
    const { handleLogin } = useLogin()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginInput>({
        resolver: yupResolver(loginSchema),
        mode: "onBlur"
    })

    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        handleLogin(data)
    }

    return (
        <div className="mx-auto sm:max-w-lg relative h-screen">
            <div className="p-6 rounded-lg w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="text-center mb-4 text-xl font-bold">ลงชื่อเข้าใช้</div>
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                    <div className="flex flex-col gap-1">
                        <input
                            type="text"
                            className={`p-2 border outline-0 border-gray-300 rounded text-black ${errors.email ? 'border-2 border-red-500' : ''}`}
                            placeholder="อีเมล"
                            {...register('email')}
                        />
                        {/* แสดง Error Message ของ Email */}
                        {errors.email && <span className="text-red-400 text-sm">{errors.email.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1">
                        <input
                            type="password"
                            className={`p-2 border outline-0 border-gray-300 rounded text-black ${errors.password ? 'border-2 border-red-500' : ''}`}
                            placeholder="รหัสผ่าน"
                            {...register('password')}
                        />
                        {/* แสดง Error Message ของ Password */}
                        {errors.password && <span className="text-red-400 text-sm">{errors.password.message}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#15173D] hover:bg-[#1A3263] text-white p-2 rounded transition-colors disabled:bg-gray-500"
                    >
                        {isSubmitting ? 'กำลังตรวจสอบ...' : 'เข้าสู่ระบบ'}
                    </button>
                </form>
            </div>
        </div>
    )
}