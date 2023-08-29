import { NavLink } from 'react-router-dom';

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    to: string;
}

export default function NavButton({ to, children, ...props }: NavButtonProps) {
    return <NavLink to={to}>{children}</NavLink>;
}
