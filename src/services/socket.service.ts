import { Socket, io } from 'socket.io-client';
import { Message } from '../types/interfaces';

export default class SocketService {
  static socket: Socket = io('http://localhost:3000', { transports: ['websocket'] });

  static async boundTriggerToEvent(event: string, triggerRefresh: any) {
    this.socket.on(event, () => triggerRefresh(Date.now()));
  }

  static async sendMessage(chatId: string, text: string, sender: string) {
    this.socket.emit('sendMessage', { chatId, text, sender });
  }

  // TODO: add getChatMessages with fetch and every follwing message with socket
  static async getChatMessages(chatId: string, setMessages: (messages: any) => void) {
    this.socket.emit('getChatMessages', chatId, (messages: Message) => setMessages(messages));
  }
}
