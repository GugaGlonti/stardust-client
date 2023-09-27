import axios from 'axios';

const url = 'http://localhost:3000/api/users/';

// const users = axios.create({ baseURL: url, timeout: 1000 });

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

export default class UserService {
  static async getProfile(username: string) {
    try {
      return (await axios.get(url + username)).data;
    } catch (error) {
      throw new Error('User Not Found');
    }
  }

  static async updateProfile(data: updateProfileData) {
    try {
      console.log('put request');
    } catch (error) {
      throw new Error('Unable to update profile');
    }
  }
}
