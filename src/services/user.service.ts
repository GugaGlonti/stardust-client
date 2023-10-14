import axiosService from './axios.instance';

import { UpdateProfileData, SearchUsersData, User } from '../types/interfaces';

const url = 'http://localhost:3000/api/users/';

export default class UserService {
  static async getProfile(identifier: string | number) {
    try {
      return (await axiosService.get(url + identifier)).data as User;
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

  static async getFriends() {
    try {
      return (await axiosService.get(url + 'friends')).data as User[];
    } catch (error) {
      console.error('req failed | getFriends | UserService');
      console.error(error);
      return [];
    }
  }
}
