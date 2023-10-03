import axiosService from './axios.instance';
import { ProfileData, UpdateProfileData, SearchUsersData } from '../types/interfaces';

const url = 'http://localhost:3000/api/users/';

export default class UserService {
  static async getProfile(username: string) {
    try {
      return (await axiosService.get(url + username)).data as ProfileData;
    } catch (error) {
      console.error('req failed | getProfile | UserService');
      console.error(error);
    }
  }

  // needs authorization
  static async updateProfile(data: UpdateProfileData) {
    try {
      return (await axiosService.put(url + 'updateProfile', data)).data;
    } catch (error) {
      console.error('req failed | updateProfile | UserService');
      console.error(error);
    }
  }

  static async searchUsers(query: string) {
    try {
      return (await axiosService.get(url + 'search', { params: { query } })).data as SearchUsersData[];
    } catch (error) {
      console.error('req failed | searchUsers | UserService');
      console.error(error);
      return [];
    }
  }
}
