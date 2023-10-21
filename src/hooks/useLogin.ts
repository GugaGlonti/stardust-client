import { useLoaderData } from 'react-router';
import { User } from '../types/interfaces';
import { useContext, useEffect } from 'react';
import { authContext } from '../store/auth.provider';

export default function useLogin() {
  const user = useLoaderData() as User;
  const { setLoggedInUser } = useContext(authContext);

  useEffect(() => {
    setLoggedInUser(user);
  }, [user, setLoggedInUser]);
}
