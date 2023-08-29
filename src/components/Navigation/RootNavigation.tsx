import { NavLink } from 'react-router-dom';

export default function RootNavigation() {
    return (
        <div className="h-16 shadow-lg px-96">
            <NavButton to="">home</NavButton>
        </div>
    );
}

interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    to: string;
}

function NavButton({ to, children, ...props }: NavButtonProps) {
    return <NavLink to={to}>{children}</NavLink>;
}
