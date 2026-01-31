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
import { useRouter } from "next/navigation";
import { useState } from "react";


const navbarItem = [
    {
        title: "โปรไฟล์",
        href: "/profile",
    },
]

export default function NavBar() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const handlePageChange = (target: string) => {
        setOpen(false);
        router.push(target);
    };

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">

                {/* Left Side */}
                <div onClick={() => router.push('/')} className="flex items-center gap-4 cursor-pointer">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground text-sm font-bold ">
                        G
                    </div>
                    <span className="hidden font-bold sm:inline-block">Guy Dev Studio</span>
                </div>

                {/* Right Side (Desktop) */}
                <div className="hidden md:flex items-center gap-2">
                    {
                        navbarItem.map((item, index) => (
                            <Button
                                key={index}
                                variant="ghost"
                                size="sm"
                                className="gap-2"
                                onClick={() => handlePageChange(item.href)}
                            >
                                <User className="h-4 w-4" />
                                โปรไฟล์
                            </Button>
                        ))
                    }
                </div>

                {/* Right Side (Mobile) */}
                <div className="flex md:hidden items-center">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-70 sm:w-87.5 ">
                            <SheetHeader>
                                <SheetTitle className="text-left border-b pb-4">เมนูใช้งาน</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-2  px-4">
                                {/* รายการเมนูบนมือถือ */}

                                {
                                    navbarItem.map((item, index) => (
                                        <Button
                                            key={index}
                                            variant="ghost"
                                            className="justify-start gap-3 w-full h-12"
                                            onClick={() => handlePageChange(item.href)}
                                        >
                                            <User className="h-4 w-4" />
                                            {item.title}
                                        </Button>
                                    ))
                                }
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

            </div>
        </nav>
    );
}