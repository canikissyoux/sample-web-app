// presentation/providers/index.tsx
'use client'

import { ReactNode } from 'react'
import { AuthProvider } from './AuthProvider'
import QueryProvider from './QueryProvider'

export function AppProvider({ children }: { children: ReactNode }) {
    return (
        <QueryProvider>
            <AuthProvider>
                {children}
            </AuthProvider>
        </QueryProvider>
    )
}