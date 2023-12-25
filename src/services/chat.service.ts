import { Socket, io } from 'socket.io-client';
import { ChatIdentifier } from '../types/ChatIdentifier';

import axiosService from './axios.instance';
const url = 'http://localhost:3000/api/chat/';

export default class ChatService {
  static socket: Socket = io('http://localhost:3000', { transports: ['websocket'] });

  static async getChatIdentifiers(friends: string[], username: string): Promise<ChatIdentifier[]> {
    try {
      const preperation = friends.map(friend => ({ friend, username }));
      const chatIdentifiers = await Promise.all(preperation.map(async ({ friend, username }) => (await axiosService.get(url + 'getChatIdentifier', { params: { friend, username } })).data as ChatIdentifier));
      return chatIdentifiers;
    } catch (error) {
      console.error('req failed | getChatIdentifiers | ChatService', error);
      return [];
    }
  }

  static async getchatIdentifier(friend: string, username: string): Promise<ChatIdentifier> {
    return this.getChatIdentifiers([friend], username).then(chatIdentifiers => chatIdentifiers[0]);
  }

  static async getChatMessages(chatIdentifier: ChatIdentifier): Promise<string[]> {
    try {
      const messages = (await axiosService.get(url + 'getChatMessages', { params: { chatIdentifier } })).data;
      if (!messages) return [];
      return messages;
    } catch (error) {
      console.error('req failed | getChatMessages | ChatService', error);
      return [];
    }
  }
}
