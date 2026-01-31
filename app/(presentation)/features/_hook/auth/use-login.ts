// presentation/hooks/use-login.ts
import { loginAction } from "@/app/(actions)/auth.action"
import { LoginInput } from "@/app/domain/entity/auth/login-schema"
import { useAuthStore } from "@/app/domain/store/auth/auth.store"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"

export const useLogin = () => {
    const setUser = useAuthStore((state) => state.setUser)
    const router = useRouter()

    const mutation = useMutation({
        mutationFn: async (data: LoginInput) => {
            const result = await loginAction(data)

            // ถ้า Action คืนค่า error ให้ throw เพื่อให้ไปตกที่ onError
            if ('error' in result) {
                throw new Error(result.error)
            }

            return result.user // ส่งข้อมูล user ต่อไปที่ onSuccess
        },
        onSuccess: (userData) => {
            setUser(userData)

            router.push("/")
            router.refresh()
        },
        onError: (error: any) => {

            console.error(error.message)
        }
    })

    // คืนค่าฟังก์ชัน mutate และสถานะต่างๆ ออกไปให้ UI ใช้
    return {
        handleLogin: mutation.mutate,
        isLoading: mutation.isPending,
        error: mutation.error
    }
}