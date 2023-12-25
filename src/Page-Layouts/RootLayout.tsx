import { LoaderFunction, Outlet, useLoaderData } from 'react-router';

import AuthService from '../services/auth.service';

import RootNavigation from '../modules/Navigation/RootNavigation';
import Footer from '../modules/Footer/Footer';

import SocketService from '../services/socket.service';
import { socket } from '../socket';
import { authContext } from '../store/auth.provider';
import { useContext, useEffect } from 'react';
import { User } from '../types/User';

export default function RootLayout() {
  const user = useLoaderData() as User;
  const { setLoggedInUser } = useContext(authContext);

  useEffect(() => setLoggedInUser(user), [user, setLoggedInUser]);

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
    localStorage.removeItem('socket-id');
    socket.disconnect();
    return null;
  }

  SocketService.joinRoom(me.username);
  localStorage.setItem('socket-id', socket.id);
  SocketService.joinRoom(localStorage.getItem('joker-gameID') as string);

  SocketService.boundTriggerToEvent('reset', () => {
    localStorage.removeItem('joker-gameID');
    localStorage.removeItem('joker-status');
  });

  /*
  setTimeout(() => {
    console.table({
      Username: me.username,
      'Socket-ID': socket.id,
    });
  }, 200);
  */

  return me;
};
