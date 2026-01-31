import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { User } from '../../entity/user/user-schema'

interface AuthState {
    user: User | undefined;
    setUser: (user: User) => void;
    emptyUser: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: undefined,
            setUser: (user: User) => set({ user }),
            emptyUser: () => {
                localStorage.clear();
                return set({ user: undefined })
            },
        }),
        {
            name: 'auth-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
)