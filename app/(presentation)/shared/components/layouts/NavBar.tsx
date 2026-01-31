'use client'
import { useLogout } from "../../hooks/use-logout";
import { Button } from "@/components/ui/button";
import {
    LogOut,
    User,
    Menu,
} from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";


const navbarItem = [
    {
        title: "โปรไฟล์",
        href: "/profile",
    },
]

export default function NavBar() {
    const { handleLogout } = useLogout();

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

                {/* Left Side */}
                <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold">
                        G
                    </div>
                    <span className="hidden font-bold sm:inline-block">Guy Dev Studio</span>
                </div>

                {/* Right Side (Desktop) */}
                <div className="hidden md:flex items-center gap-2">
                    {
                        navbarItem.map((item) => (
                            <Button variant="ghost" size="sm" className="gap-2">
                                <User className="h-4 w-4" />
                                โปรไฟล์
                            </Button>
                        ))
                    }

                    <Button variant="destructive" size="sm" onClick={() => handleLogout()} className="gap-2">
                        <LogOut className="h-4 w-4" />
                        ออกจากระบบ
                    </Button>
                </div>

                {/* Right Side (Mobile) */}
                <div className="flex md:hidden items-center gap-2">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-70 sm:w-87.5 ">
                            <SheetHeader>
                                <SheetTitle className="text-left border-b pb-4">เมนูใช้งาน</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-2 mt-6 px-4">
                                {/* รายการเมนูบนมือถือ */}

                                {
                                    navbarItem.map((item) => (
                                        <Button variant="ghost" className="justify-start gap-3 w-full h-12">
                                            <User className="h-4 w-4" />
                                            {item.title}
                                        </Button>
                                    ))
                                }


                                <div className="my-4 border-t" />

                                <Button
                                    variant="destructive"
                                    className="justify-start gap-3 w-full h-12"
                                    onClick={() => handleLogout()}
                                >
                                    <LogOut className="h-5 w-5" />
                                    ออกจากระบบ
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </nav>
    );
}