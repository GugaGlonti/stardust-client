import { Message } from '../types/Message';
import { socket } from '../socket';

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

  static async boundFunctionToEvent(event: string, func: any) {
    socket.on(event, func);
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

  static async playCard(gameID: string, cardID: string, username: string) {
    socket.emit('joker-play-card', gameID, cardID, username);
  }
}
