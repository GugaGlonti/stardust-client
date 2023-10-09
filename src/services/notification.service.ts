import axiosService from './axios.instance';

const url = 'http://localhost:3000/api/notifications/';

export default class NotificationService {
  static async sendFriendRequest(username: string) {
    try {
      return (await axiosService.post(url + 'sendFriendRequest', { params: { username } })).data;
    } catch (error) {
      console.error('req failed | addFriend | UserService');
      console.error(error);
    }
  }
}
