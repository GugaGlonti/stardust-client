import { NavLink } from 'react-router-dom';

import Button from '../../../components/Button';

export default function SignedOutNavigation() {
  return (
    <>
      <NavLink to='/signin'>
        <Button variant='primary'>Sign In</Button>
      </NavLink>
      <NavLink to='/signup'>
        <Button variant='secondary'>Sign Up</Button>
      </NavLink>
    </>
  );
}
