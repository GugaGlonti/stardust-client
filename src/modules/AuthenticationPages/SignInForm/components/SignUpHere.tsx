import { NavLink } from 'react-router-dom';

export default function SignUpHere() {
  return (
    <div className='flex gap-2 justify-center'>
      {' '}
      <p className='text-center text-sm leading-6 text-gray-500 block'>Not a member?{''}</p>
      <NavLink
        to='/signup'
        className='font-semibold text-blue-400 hover:text-blue-400 block'>
        Sign Up Here!
      </NavLink>
    </div>
  );
}
