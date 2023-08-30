import { NavLink } from 'react-router-dom';

export default function LogInHere({ className, ...props }: { className?: string }) {
    return (
        <div className={`flex gap-2 justify-center ${className}`}>
            {' '}
            <p className="text-center text-sm leading-6 text-gray-500 block">Already have an account?{''}</p>
            <NavLink
                to="/signin"
                className="font-semibold text-blue-400 hover:text-blue-400 block">
                Log In Here!
            </NavLink>
        </div>
    );
}
