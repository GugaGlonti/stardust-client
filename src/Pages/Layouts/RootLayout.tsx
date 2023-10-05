import { useContext } from 'react';
import { LoaderFunction, Outlet, useLoaderData } from 'react-router';

import AuthService from '../../services/auth.service';

import { User } from '../../types/user.interface';

import RootNavigation from '../../modules/Navigation/RootNavigation';
import Footer from '../../modules/Footer/Footer';

import { authContext } from '../../store/auth.provider';

export default function RootLayout() {
  const context = useContext(authContext);
  const { setLoggedInUser: setUser } = context;

  const user = useLoaderData() as User;
  if (user) setUser && setUser(user);

  return (
    <>
      <RootNavigation />
      <Outlet />
      <Footer />
    </>
  );
}

export const loadProfileData: LoaderFunction = async () => {
  console.warn('fetching profile data...');

  const me = await AuthService.me();

  if (!me) {
    return null;
  }

  return me;
};
