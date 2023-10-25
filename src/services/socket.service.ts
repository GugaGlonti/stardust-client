import { Socket, io } from 'socket.io-client';
import { Message } from '../types/Message';

export const socket: Socket = io('http://localhost:3000', {
  transports: ['websocket'],
  autoConnect: false,
});

export default class SocketService {
  static async joinRoom(room: string | number) {
    socket.emit('joinRoom', room);
  }

  static async leaveRoom(room: string) {
    socket.emit('leaveRoom', room);
  }

  static async leaveRooms() {
    socket.emit('leaveRooms');
  }

  static async boundTriggerToEvent(event: string, triggerRefresh: any) {
    socket.on(event, () => triggerRefresh(Date.now()));
  }

  /** ==================== // @messages // ==================== */

  static async sendMessage(chatId: string, text: string, sender: string) {
    socket.emit('sendMessage', { chatId, text, sender });
  }

  // TODO: add getChatMessages with fetch and every follwing message with socket
  static async getChatMessages(chatId: string, setMessages: (messages: any) => void) {
    socket.emit('getChatMessages', chatId, (messages: Message) => setMessages(messages));
  }

  /** ====================== // @joker // ===================== */
  static async createJoker(gameID: string, username: string) {
    socket.emit('joker-create', gameID, username);
  }

  static async joinJoker(gameID: string, username: string) {
    socket.emit('joker-join', gameID, username);
  }

  static async leaveJoker(gameID: string, username: string) {
    socket.emit('joker-leave', gameID, username);
  }
}
