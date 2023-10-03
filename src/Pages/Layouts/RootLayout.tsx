import { LoaderFunction, Outlet, useLoaderData } from 'react-router';
import RootNavigation from '../../modules/Navigation/RootNavigation';
import Footer from '../../modules/Footer/Footer';
import AuthService from '../../services/auth.service';
import { useContext } from 'react';
import { authContext } from '../../store/auth.provider';
import { User } from '../../types/user.interface';

export default function RootLayout() {
  const context = useContext(authContext);
  const { setUser } = context;

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
