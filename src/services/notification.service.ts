import axiosService from './axios.instance';

const url = 'http://localhost:3000/api/notifications/';

export default class NotificationService {
  static async getMyNotifications() {
    try {
      const notifications = (await axiosService.get(url)).data;
      if (!notifications) return [];
      return notifications;
    } catch (error) {
      console.error('req failed | getMyNotifications | UserService');
      console.error(error);
      return [];
    }
  }

  static async getMyNotificationCount() {
    try {
      return (await axiosService.get(url + 'count')).data;
    } catch (error) {
      console.error('req failed | getMyNotificationCount | UserService');
      console.error(error);
    }
  }

  static async sendFriendRequest(username: string) {
    try {
      return (await axiosService.post(url + 'sendFriendRequest', { username })).data;
    } catch (error) {
      console.error('req failed | addFriend | UserService');
      console.error(error);
    }
  }

  static async acceptFriendRequest(notificationId: number) {
    try {
      return (await axiosService.put(url + 'acceptFriendRequest', { notificationId })).data;
    } catch (error) {
      console.error('req failed | acceptFriendRequest | UserService');
      console.error(error);
    }
  }

  //TODO: add declineFriendRequest
  static async declineFriendRequest(notificationId: number) {
    try {
      return (await axiosService.put(url + 'declineFriendRequest', { notificationId })).data;
    } catch (error) {
      console.error('req failed | declineFriendRequest | UserService');
      console.error(error);
    }
  }

  static async deleteNotification(notificationId: number) {
    try {
      return (await axiosService.delete(url + notificationId)).data;
    } catch (error) {
      console.error('req failed | deleteNotification | UserService');
      console.error(error);
    }
  }
}
