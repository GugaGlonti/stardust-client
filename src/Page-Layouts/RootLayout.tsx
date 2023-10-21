import { useContext, useEffect } from 'react';
import { LoaderFunction, Outlet, useLoaderData } from 'react-router';

import AuthService from '../services/auth.service';

import { User } from '../types/interfaces';

import RootNavigation from '../modules/Navigation/RootNavigation';
import Footer from '../modules/Footer/Footer';

import { authContext } from '../store/auth.provider';
import NotificationService from '../services/notification.service';
import UserService from '../services/user.service';

export default function RootLayout() {
  const user = useLoaderData() as User;

  const context = useContext(authContext);
  const { setLoggedInUser: setUser } = context;

  useEffect(() => {
    (async () => user && setUser && setUser(user))();
  });

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

  const response = await Promise.all([AuthService.me(), NotificationService.getMyNotificationCount()]);
  if (!response[0]) return null;

  const _friends = await UserService.getFriends(response[0].username);
  const friends = _friends.map(friend => friend.username);
  const me = { ...response[0], notificationCount: response[1], friends };
  if (!me) return null;

  return me;
};
