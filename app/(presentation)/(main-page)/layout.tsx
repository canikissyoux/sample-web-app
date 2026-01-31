import { CommonLayout } from "../shared/layout/CommonLayout";

export default function MainPageLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <CommonLayout>
            {children}
        </CommonLayout>
    );
}