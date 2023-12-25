import { socket } from '../socket';
import { AxiosService } from './axios.service';
import { ErrorEnum } from '../common/ErrorEnum';

const url = 'http://localhost:3000/api/notifications/';

export default class NotificationService {
  static async getMyNotifications() {
    return AxiosService.get(url, {}, [], ErrorEnum.NOTIFICATION);
  }

  static async getMyNotificationCount(): Promise<number> {
    return AxiosService.get(url + 'count', {}, 0, ErrorEnum.NOTIFICACTION_COUNT);
  }

  static async sendFriendRequest(me: string, friend: string) {
    return socket.emit('sendFriendRequest', me, friend);
  }

  static async acceptFriendRequest(notificationId: number) {
    return socket.emit('acceptFriendRequest', notificationId);
  }

  //TODO: add declineFriendRequest
  static async declineFriendRequest(notificationId: number) {
    return socket.emit('declineFriendRequest', notificationId);
  }

  static async deleteNotification(notificationId: number) {
    return AxiosService.delete(url + notificationId, null, ErrorEnum.NOTIFICATION_DELETE);
  }
}
