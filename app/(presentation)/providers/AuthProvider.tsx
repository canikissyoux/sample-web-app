'use client'
import { logger } from '@/app/core/utils/logger';
import { useAuthStore } from '@/app/domain/store/auth/auth.store'
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

// 1. นิยาม Type ของข้อมูลที่จะอยู่ใน Context
interface AuthContextType {
    user: any | null;
    isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const { user, setUser } = useAuthStore()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function initAuth() {
            try {
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