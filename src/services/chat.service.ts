import { Socket, io } from 'socket.io-client';
import { ChatIdentifier, Message } from '../types/interfaces';

import axiosService from './axios.instance';
const url = 'http://localhost:3000/api/chat/';

export default class ChatService {
  static socket: Socket = io('http://localhost:3000', { transports: ['websocket'] });

  static async getChatIdentifiers(friends: string[], username: string): Promise<ChatIdentifier[]> {
    try {
      const preperation = friends.map(friend => ({ friend, username }));
      return Promise.all(preperation.map(async ({ friend, username }) => (await axiosService.get(url + 'getChatIdentifier', { params: { friend, username } })).data as ChatIdentifier));
    } catch (error) {
      console.error('req failed | getChatIdentifiers | ChatService', error);
      return [];
    }
  }

  static async getchatIdentifier(friend: string, username: string): Promise<ChatIdentifier> {
    return this.getChatIdentifiers([friend], username).then(chatIdentifiers => chatIdentifiers[0]);
  }

  static async sendMessage(chatId: string, text: string, sender: string) {
    this.socket.emit('sendMessage', { chatId, text, sender });
  }

  static async getChatMessages(chatId: string, setMessages: (messages: any) => void) {
    this.socket.emit('getChatMessages', chatId, (messages: Message) => setMessages(messages));
  }

  static async connect(triggerRefresh: any) {
    this.socket.on('newMessage', () => triggerRefresh(Date.now()));
  }
}
