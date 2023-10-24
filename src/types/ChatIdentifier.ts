import { Message } from './Message';

export interface ChatIdentifier {
  id: string;
  username: string;
  friend: string;
  lastMessage: Message;
}
