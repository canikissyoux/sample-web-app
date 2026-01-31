// presentation/shared/layouts/DashboardLayout.tsx
'use client'

import { NavBar } from "../components"


export function CommonLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">

            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Navbar */}
                <NavBar />

                {/* Main Content */}
                <main className="flex-1 overflow-y-auto p-4 h-full">
                    {children}
                </main>
            </div>
        </div>
    )
}