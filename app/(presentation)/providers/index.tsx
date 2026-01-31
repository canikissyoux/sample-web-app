// presentation/providers/index.tsx
'use client'

import { ReactNode } from 'react'
import { AuthProvider } from './AuthProvider'
import QueryProvider from './QueryProvider'
import { NavBarProvider } from './NavBarProvider'

export function AppProvider({ children }: { children: ReactNode }) {
    return (
        <QueryProvider>
            <AuthProvider>
                <NavBarProvider>
                    {children}
                </NavBarProvider>
            </AuthProvider>
        </QueryProvider>
    )
}