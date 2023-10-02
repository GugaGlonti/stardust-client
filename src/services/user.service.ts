import axios from 'axios';

const url = 'http://localhost:3000/api/users/';

const users = axios.create({
  baseURL: url,
  timeout: 1000,
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
});

export interface ProfileData {
  id: number;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  authLevel: string;
  balance: number;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  country: string;
  profilePicture: string;
}

interface updateProfileData {
  email: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

interface searchUsersData {
  firstName: string;
  lastName: string;
  username: string;
  profilePicture: string;
}

export default class UserService {
  static async getProfile(username: string) {
    try {
      return (await axios.get(url + username)).data;
    } catch (error) {
      throw new Error('User Not Found');
    }
  }

  static async updateProfile(data: updateProfileData) {
    console.log('here');
    try {
      return (await users.put('/updateProfile', data)).data;
    } catch (error) {
      throw new Error('Unable to update profile');
    }
  }

  static async searchUsers(query: string) {
    try {
      return (await users.get('/search', { params: { query } })).data as searchUsersData[];
    } catch (error) {
      throw new Error('Unable to search users | UserService');
    }
  }
}
