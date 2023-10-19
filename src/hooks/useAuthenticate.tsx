import { useContext } from 'react';
import { authContext } from '../store/auth.provider';

export default function useAuthenticate() {
  const context = useContext(authContext);
  return !!context?.loggedInUser;
}
