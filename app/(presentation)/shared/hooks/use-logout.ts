import { logoutAction } from "@/app/(actions)/auth.action"
import { useAuthStore } from "@/app/domain/store/auth/auth.store"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/navigation"


export const useLogout = () => {
    const { emptyUser } = useAuthStore()

    const router = useRouter()

    const mutation = useMutation({
        mutationFn: async () => {
            const result = await logoutAction()

            // ถ้า Action คืนค่า error ให้ throw เพื่อให้ไปตกที่ onError
            if ('error' in result) {
                throw new Error(result.error)
            }

            return null
        },
        onSuccess: () => {
            emptyUser()
            router.push("/")
            router.refresh()
        },
        onError: (error: any) => {
            console.error(error.message)
        }
    })

    return {
        handleLogout: mutation.mutate,
        isLoading: mutation.isPending,
        error: mutation.error
    }

}