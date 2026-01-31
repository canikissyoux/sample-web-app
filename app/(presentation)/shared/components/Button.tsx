
export interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function AppButton({ children, className, ...rest }: AppButtonProps) {
    return (
        <button
            {...rest}
        >
            {children}
        </button>
    )
}