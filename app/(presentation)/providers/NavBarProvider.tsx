'use client'

import { createContext, ReactNode, useContext } from "react";

interface NavBarContextType {
    currentPath: string,
}

const NavBarContext = createContext<NavBarContextType | null>(null);

export function NavBarProvider({ children }: { children: ReactNode }) {


    return (
        <NavBarContext.Provider value={{ currentPath: "/" }}>
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