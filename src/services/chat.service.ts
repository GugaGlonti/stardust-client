import axiosService from './axios.instance';

import { ChatIdentifier } from '../types/interfaces';

const url = 'http://localhost:3000/api/chat/';

export default class ChatService {
  static async geChatIdentifiers(friends: string[], username: string): Promise<ChatIdentifier[]> {
    try {
      const preperation = friends.map(friend => ({ friend, username }));
      return Promise.all(preperation.map(async ({ friend, username }) => (await axiosService.get(url + 'getChatIdentifier', { params: { friend, username } })).data as ChatIdentifier));
    } catch (error) {
      console.error('req failed | getMyChats | ChatService');
      console.error(error);
      return [];
    }
  }

  static async getchatIdentifier(friend: string, username: string): Promise<ChatIdentifier> {
    return this.geChatIdentifiers([friend], username).then(chatIdentifiers => chatIdentifiers[0]);
  }
}
