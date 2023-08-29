interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | React.ReactNode;
    variant: 'primary' | 'secondary';
    type?: 'button' | 'submit';
    disabled?: boolean;
    className?: string;
}

export default function Button({ children, variant = 'primary', className = '', type = 'button', disabled = false, ...props }: ButtonProps) {
    return (
        <button
            type={type}
            disabled={disabled}
            className={`m-1 px-3.5 py-2.5 border-2 duration-200 rounded hover:text-white ${variant === 'primary' ? 'text-blue-400 border-blue-400 hover:bg-blue-400' : 'text-teal-400 border-teal-400 hover:bg-teal-400'} ${className}`}
            {...props}>
            {children}
        </button>
    );
}
