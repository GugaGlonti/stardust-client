import { NavLink } from 'react-router-dom';

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    to: string;
}

export default function NavButton({ to, children, ...props }: NavButtonProps) {
    const baseClasses = 'border-b-4 h-full flex items-center p-4 w-max ';
    const activeClasses = baseClasses + 'border-blue-400';
    const inactiveClasses = baseClasses + ' border-gray-400';

    return (
        <NavLink
            className={({ isActive }) => (isActive ? activeClasses : inactiveClasses)}
            to={to}>
            {children}
        </NavLink>
    );
}
