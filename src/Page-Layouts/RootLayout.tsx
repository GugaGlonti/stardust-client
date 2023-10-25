import { LoaderFunction, Outlet } from 'react-router';

import AuthService from '../services/auth.service';

import RootNavigation from '../modules/Navigation/RootNavigation';
import Footer from '../modules/Footer/Footer';

import useLogin from '../hooks/useLogin';
import SocketService, { socket } from '../services/socket.service';
import JokerService from '../services/joker.service';

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
  const me = await AuthService.me();

  if (!me) {
    localStorage.removeItem('socket-id');
    socket.disconnect();
    return null;
  }

  socket.connect();
  setTimeout(() => {
    SocketService.joinRoom(me.username);
    localStorage.setItem('socket-id', socket.id);
  }, 200);

  setTimeout(() => {
    console.table({
      Username: me.username,
      'Socket-ID': socket.id,
    });
  }, 200);

  if (!(await JokerService.getGame())) {
    localStorage.removeItem('joker-status');
    localStorage.removeItem('joker-gameID');
  }

  return me;
};
