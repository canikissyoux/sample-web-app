'use client'
import { useAuthStore } from '@/app/domain/store/auth/auth.store'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

// 1. นิยาม Type ของข้อมูลที่จะอยู่ใน Context
interface AuthContextType {
    user: any | null;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const { setUser, user } = useAuthStore()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function initAuth() {
            try {
                // ตัวอย่างการเช็ค Session จริงๆ
                // const res = await fetch('/api/auth/me')
                // if (res.ok) {
                //    const data = await res.json()
                //    setUser(data.user)
                // }
            } catch (error) {
                console.error("Auth init error:", error)
            } finally {
                setIsLoading(false)
            }
        }
        initAuth()
    }, [setUser])

    return (
        <AuthContext.Provider value={{ user, isLoading }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};