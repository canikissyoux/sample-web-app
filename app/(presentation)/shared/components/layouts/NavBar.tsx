'use client'
import { useLogout } from "../../hooks/use-logout";
import AppButton from "../Button";

export default function NavBar() {
    const { handleLogout, } = useLogout()
    return (
        <div className="bg-white h-20 w-full">
            <div className="max-w-5xl mx-auto grid grid-cols-12 bg-red-100 h-full items-center px-6">
                <AppButton onClick={() => { handleLogout() }}>
                    ออกจากระบบ
                </AppButton>
            </div>
        </div>
    )
}