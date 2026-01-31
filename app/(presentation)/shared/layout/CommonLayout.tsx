// presentation/shared/layouts/DashboardLayout.tsx
'use client'

import { NavBar } from "../components"


export function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-full">
            <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                <NavBar />
                <main className="flex-1 overflow-y-auto p-4 w-full">
                    {children}
                </main>
            </div>
        </div>
    )
}