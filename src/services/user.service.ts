import axiosService from './axios.instance';

import { UpdateProfileData, SearchUsersData, User } from '../types/interfaces';

const url = 'http://localhost:3000/api/users/';

export default class UserService {
  static async getProfile(identifier: string | number) {
    try {
      return (await axiosService.get(url + identifier)).data as User;
    } catch (error) {
      console.error('req failed | getProfile | UserService', error);
    }
  }

  // needs authorization
  static async updateProfile(data: UpdateProfileData) {
    try {
      return (await axiosService.put(url + 'updateProfile', data)).data;
    } catch (error) {
      console.error('req failed | updateProfile | UserService', error);
    }
  }

  static async searchUsers(query: string) {
    try {
      return (await axiosService.get(url + 'search', { params: { query } })).data as SearchUsersData[];
    } catch (error) {
      console.error('req failed | searchUsers | UserService', error);
      return [];
    }
  }

  static async getFriends(username: string) {
    try {
      return (await axiosService.get(url + 'friends', { params: { username } })).data as User[];
    } catch (error) {
      console.error('req failed | getFriends | UserService', error);
      return [];
    }
  }
}
