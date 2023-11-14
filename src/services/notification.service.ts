import axiosService from './axios.instance';
import { socket } from './socket.service';

const url = 'http://localhost:3000/api/notifications/';

export default class NotificationService {
  static async getMyNotifications() {
    try {
      const notifications = (await axiosService.get(url)).data;
      if (!notifications) return [];
      return notifications;
    } catch (error) {
      console.error('req failed | getMyNotifications | UserService', error);
      return [];
    }
  }

  static async getMyNotificationCount(): Promise<number> {
    try {
      return (await axiosService.get(url + 'count')).data;
    } catch (error) {
      console.error('req failed | getMyNotificationCount | UserService', error);
      return 0;
    }
  }

  static async sendFriendRequest(me: string, friend: string) {
    try {
      socket.emit('sendFriendRequest', me, friend);
    } catch (error) {
      console.error('socket failed | sendFriendRequest | UserService', error);
    }
  }

  static async acceptFriendRequest(notificationId: number) {
    try {
      socket.emit('acceptFriendRequest', notificationId);
    } catch (error) {
      console.error('socket failed | acceptFriendRequest | UserService', error);
    }
  }

  //TODO: add declineFriendRequest
  static async declineFriendRequest(notificationId: number) {
    try {
      return (await axiosService.put(url + 'declineFriendRequest', { notificationId })).data;
    } catch (error) {
      console.error('req failed | declineFriendRequest | UserService', error);
    }
  }

  static async deleteNotification(notificationId: number) {
    try {
      return (await axiosService.delete(url + notificationId)).data;
    } catch (error) {
      console.error('req failed | deleteNotification | UserService', error);
    }
  }
}
