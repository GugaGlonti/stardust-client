import axiosService from './axios.instance';

const url = 'http://localhost:3000/api/notifications/';

export default class NotificationService {
  static async getMyNotifications() {}

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
}
