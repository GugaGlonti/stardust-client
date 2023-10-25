import { useLoaderData } from 'react-router';
import { User } from '../types/User';
import { useContext, useEffect } from 'react';
import { authContext } from '../store/auth.provider';
import SocketService, { socket } from '../services/socket.service';

export default function useLogin() {
  const user = useLoaderData() as User;
  const { setLoggedInUser } = useContext(authContext);

  useEffect(() => {
    setLoggedInUser(user);
  }, [user, setLoggedInUser]);

  if (!user) return;

  socket.connect();
  setTimeout(() => {
    SocketService.joinRoom(user.username);
    localStorage.setItem('socket-id', socket.id);
  }, 200);
}
