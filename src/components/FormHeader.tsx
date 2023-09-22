import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

interface FormHeaderProps {
  className?: string;
  text: string;
}

export default function FormHeader({ className = '', text, ...props }: FormHeaderProps) {
  return (
    <>
      {' '}
      <NavLink to='/'>
        <img
          className={`mx-auto h-64 w-auto ${className}}`}
          src={logo}
          alt='jolly logo'
        />
      </NavLink>
      <h2 className='text-center text-2xl font-bold leading-9 tracking-tight text-white'>{text}</h2>
    </>
  );
}
