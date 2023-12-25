import { Socket, io } from 'socket.io-client';

export const socket: Socket = io('http://localhost:3000', {
  transports: ['websocket'],
  autoConnect: true,
  reconnection: true,
  reconnectionDelay: 500,
  reconnectionAttempts: 10,
  forceNew: true,
});
