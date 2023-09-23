import { NavLink } from 'react-router-dom';

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  label?: string;
  to: string;
}

export default function NavButton({ to, children, className }: NavButtonProps) {
  const baseClasses = className + ' border-b-4 h-full flex items-center p-4 w-max hover:border-b-8 duration-200 ';

  return (
    <NavLink
      //prettier-ignore
      className={({ isActive }) => (isActive
      ? `${baseClasses} text-secondary-dark border-secondary-dark border-b-8`
      : `${baseClasses} border-primary text-primary-dark hover:text-primary`)}
      to={to}>
      {children}
    </NavLink>
  );
}
