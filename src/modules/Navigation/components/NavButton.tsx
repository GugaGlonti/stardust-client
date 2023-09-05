import { NavLink } from 'react-router-dom';

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    label?: string;
    to: string;
}

export default function NavButton({ to, children, className, ...props }: NavButtonProps) {
    const baseClasses = className + ' border-b-4 h-full flex items-center p-4 w-max hover:border-b-8 duration-200 ';
    const activeClasses = baseClasses + 'text-primary border-primary border-b-8';
    const inactiveClasses = baseClasses + ' border-secondary text-primary-dark hover:text-primary';

    return (
        <NavLink
            className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}
            to={to}>
            {children}
        </NavLink>
    );
}
