import { create } from "zustand"

interface NavBarState {
    currentPath: string | null
    setCurrentPath: (path: string) => void
}

export const useNavBarStore = create<NavBarState>((set) => ({
    currentPath: null,
    setCurrentPath: (path) => set({ currentPath: path }),
}))