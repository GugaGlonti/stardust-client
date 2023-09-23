import axios from 'axios';

import { ProfileData } from './user.service';

import { SignInFormData } from '../modules/SignInForm/SignInForm';
import { SignUpFormData } from '../modules/SignUpForm/SignUpForm';

const url = 'http://localhost:3000/api/auth';

export default class AuthService {
  static async signUp(formData: SignUpFormData) {
    try {
      const response = await axios.post(url + '/signup', formData);
      console.log(response.data);

      return true;
    } catch (error) {
      return false;
    }
  }

  static async singIn(formData: SignInFormData) {
    try {
      const { data } = (await axios.post(url + '/signin', formData)) as { data: { token: string } };
      localStorage.setItem('token', data.token);

      return true;
    } catch (error) {
      return false;
    }
  }

  static async me(): Promise<ProfileData | undefined> {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.warn('not logged in');
      }

      const { data } = await axios.get('http://localhost:3000/api/auth/me', {
        params: { token },
        headers: { Authorization: `Bearer ${token}` },
      });

      return data;
    } catch (error) {}
  }

  static isAuth() {
    return localStorage.getItem('token') ? true : false;
  }
}
