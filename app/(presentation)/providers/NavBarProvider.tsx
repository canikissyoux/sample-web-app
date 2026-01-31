'use client'

import { useNavBarStore } from "@/app/domain/store/navbar/navbar.store";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface NavBarContextType {
    currentPath: string,
}

const NavBarContext = createContext<NavBarContextType | null>(null);

export function NavBarProvider({ children }: { children: ReactNode }) {
    const { setCurrentPath, currentPath } = useNavBarStore()

    useEffect(() => {
        setCurrentPath(window.location.pathname)
    }, [setCurrentPath])

    return (
        <NavBarContext.Provider value={{ currentPath: currentPath ?? "/" }}>
            {children}
        </NavBarContext.Provider>
    )
}

export const useNavBar = () => {
    const context = useContext(NavBarContext);
    if (!context) {
        throw new Error('useNavBar must be used within an NavBarProvider');
    }
    return context;
}