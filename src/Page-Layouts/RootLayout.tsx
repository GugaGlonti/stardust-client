import { LoaderFunction, Outlet } from 'react-router';

import AuthService from '../services/auth.service';

import RootNavigation from '../modules/Navigation/RootNavigation';
import Footer from '../modules/Footer/Footer';

import NotificationService from '../services/notification.service';
import UserService from '../services/user.service';
import useLogin from '../hooks/useLogin';
import SocketService from '../services/socket.service';

export default function RootLayout() {
  useLogin();

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

  await SocketService.leaveRooms();
  await SocketService.joinRoom(me.username);
  if (!me) return null;

  return me;
};
