import { NavLink } from 'react-router-dom';

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    label?: string;
    to: string;
}

export default function NavButton({ to, children, className, ...props }: NavButtonProps) {
    const baseClasses = className + ' border-b-4 h-full flex items-center p-4 w-max ';
    const activeClasses = baseClasses + 'border-blue-400';
    const inactiveClasses = baseClasses + ' border-gray-600';

    return (
        <NavLink
            className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}
            to={to}>
            {children}
        </NavLink>
    );
}
