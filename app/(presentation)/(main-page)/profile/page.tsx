'use client'

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Copy, Check, ChevronLeft } from "lucide-react"
import { useAuthStore } from "@/app/domain/store/auth/auth.store"
import { useLogout } from "../../shared/hooks/use-logout"
import Link from "next/link"

export default function ProfilePage() {

    const { user } = useAuthStore();
    const { handleLogout } = useLogout();

    const [showPassword, setShowPassword] = useState(false)
    const [copied, setCopied] = useState(false)

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="container mx-auto py-10 max-w-2xl">

            <Link href="/" className="flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" />
                หน้าแรก
            </Link>

            <Card className="shadow-lg border-slate-200">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-7">
                    <Avatar className="h-20 w-20 border-2 border-primary/10">
                        <AvatarImage src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.name ?? ""}`} />
                        <AvatarFallback>{user?.name ?? ""}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                        <CardTitle className="text-2xl font-bold">{user?.name ?? ""}</CardTitle>
                        <CardDescription className="text-slate-500">UID: {user?.uid ?? " "}</CardDescription>
                    </div>
                </CardHeader>

                <CardContent className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" value={user?.email ?? ""} readOnly className="bg-slate-50" />
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                            <Input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                value={user?.password ?? ""}
                                readOnly
                                className="bg-slate-50 pr-10"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700"
                            >
                                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>

                    {/* Access Token Field */}
                    <div className="space-y-2">
                        <Label htmlFor="token">Access Token</Label>
                        <div className="flex gap-2">
                            <Input
                                id="token"
                                value={user?.access_token ?? ""}
                                readOnly
                                className="bg-slate-50 font-mono text-xs"
                            />
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={() => copyToClipboard(user?.access_token ?? "")}
                                className="shrink-0"
                            >
                                {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
                            </Button>
                        </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button onClick={() => handleLogout()} variant="destructive">Logout</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}