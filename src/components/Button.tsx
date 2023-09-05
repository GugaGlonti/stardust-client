interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    children: string | React.ReactNode;
    variant: 'primary' | 'secondary' | 'test';
    type?: 'button' | 'submit';
    disabled?: boolean;
    className?: string;
}

export default function Button({ children, variant = 'primary', className = '', type = 'button', disabled = false, onClick, ...props }: ButtonProps) {
    /**@REMOVE Multi Purpose Test Button */
    if (variant === 'test') {
        return (
            <button
                type={type}
                onClick={onClick}
                disabled={disabled}
                className={`m-1 border-2 duration-200 rounded text-red-500 border-red-500 hover:bg-red-300 ${className}`}
                {...props}>
                <h1>DEV BUTTON</h1>
                {children}
            </button>
        );
    }

    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`m-1 px-3.5 py-2.5 border-2 duration-200 rounded hover:text-white ${variant === 'primary' ? 'text-primary border-primary hover:bg-primary-light hover:text-primary-dark' : 'text-secondary border-secondary-dark hover:bg-secondary-dark'} ${className}`}
            {...props}>
            {children}
        </button>
    );
}
