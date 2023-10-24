import { useContext } from 'react';
import { authContext } from '../store/auth.provider';
import { User } from '../types/User';

export default function useCurrentUser(): User {
  const context = useContext(authContext);
  const user = context?.loggedInUser;
  if (!user) return {} as User;
  return user;
}
